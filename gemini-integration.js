class GeminiIntegration {
    constructor() {
        this.apiKey = null;
        this.mockMode = true; // Default to mock responses
        this.useNetlifyFunction = false; // Use Netlify Function in production
        this.init();
    }

    init() {
        // Check if we're on Netlify (production) - use Netlify Function
        if (typeof window !== 'undefined') {
            const hostname = window.location.hostname;
            const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '';
            const isNetlify = hostname.includes('netlify.app') || hostname.includes('netlify.com');
            
            // Always use Netlify Function if not localhost (assume production)
            if (!isLocalhost || isNetlify) {
                // Use Netlify Function (API key is secure on server side)
                this.useNetlifyFunction = true;
                this.mockMode = false;
                console.log(`✅ Gemini Integration initialized for ${isNetlify ? 'Netlify' : 'production'}. Using server-side function.`);
                return;
            }
        }

        // Fallback for local development - check for local file config
        if (typeof window !== 'undefined' && window.__GEMINI_LOCAL_CONFIG__ && window.__GEMINI_LOCAL_CONFIG__.apiKey) {
            this.apiKey = window.__GEMINI_LOCAL_CONFIG__.apiKey;
            this.useNetlifyFunction = false;
            this.mockMode = false;
            console.log('✅ Gemini Integration initialized with local config. Mock mode disabled.');
            console.warn('⚠️ WARNING: Gemini API key is exposed client-side. For production, use Netlify Functions.');
        } else {
            console.log('⚠️ Gemini Integration initialized in mock mode. No real API key found.');
            console.log('💡 To use real Gemini API: Configure GEMINI_API_KEY in Netlify or create js/gemini-config.local.js');
            this.useNetlifyFunction = false;
            this.mockMode = true;
            
            // Show warning banner in guest mode - DISABLED (too intrusive)
            // this.showGuestModeWarning();
        }
    }
    
    showGuestModeWarning() {
        // Only show once per session
        if (sessionStorage.getItem('guestModeWarningShown')) return;
        sessionStorage.setItem('guestModeWarningShown', 'true');
        
        const banner = document.createElement('div');
        banner.className = 'fixed top-0 left-0 right-0 bg-yellow-500 text-white px-4 py-2 text-center z-50 text-sm';
        banner.innerHTML = `
            ⚠️ Guest Mode: Using mock evaluation. For accurate AI-powered feedback, please sign in or configure Gemini API.
            <button onclick="this.parentElement.remove()" class="ml-4 underline">Dismiss</button>
        `;
        document.body.prepend(banner);
    }

    async evaluatePrompt(userPrompt, challenge) {
        console.log('🎯 EVALUATING PROMPT FOR CHALLENGE:', challenge.id, challenge.title);
        console.log('📝 User prompt:', userPrompt.substring(0, 100) + '...');
        
        // ALWAYS try Netlify Function first if not localhost (production)
        const isLocalhost = typeof window !== 'undefined' && 
            (window.location.hostname === 'localhost' || 
             window.location.hostname === '127.0.0.1' || 
             window.location.hostname === '');
        
        if (this.useNetlifyFunction || !isLocalhost) {
            try {
                console.log('🔄 Calling Gemini API via Netlify Function...');
                const result = await this.callNetlifyFunction(userPrompt, challenge);
                console.log('✅ Gemini API evaluation completed via Netlify');
                console.log('📊 Score:', result.overallScore);
                return result;
            } catch (error) {
                console.error('❌ Netlify Function error:', error);
                // If we're in production and Netlify Function fails, still try mock but warn
                if (!isLocalhost) {
                    console.warn('⚠️ Production mode: Falling back to mock evaluation. Check Netlify Function configuration.');
                } else {
                    console.warn('⚠️ Falling back to mock evaluation due to error');
                }
                const mockResult = await this.generateMockEvaluation(userPrompt, challenge);
                console.log('📊 Mock evaluation score:', mockResult.overallScore);
                return mockResult;
            }
        }

        // Use direct API call for local development
        if (this.mockMode || !this.apiKey) {
            console.log('⚠️ Running mock evaluation (local development mode)...');
            const mockResult = await this.generateMockEvaluation(userPrompt, challenge);
            console.log('📊 Mock evaluation score:', mockResult.overallScore);
            return mockResult;
        }

        try {
            console.log('🔄 Calling Gemini API directly...');
            const result = await this.callGeminiAPI(userPrompt, challenge);
            console.log('✅ Gemini API evaluation completed directly');
            console.log('📊 Score:', result.overallScore);
            return result;
        } catch (error) {
            console.error('❌ Gemini API error:', error);
            console.warn('⚠️ Falling back to mock evaluation');
            const mockResult = await this.generateMockEvaluation(userPrompt, challenge);
            console.log('📊 Mock evaluation score:', mockResult.overallScore);
            return mockResult;
        }
    }

    async callNetlifyFunction(userPrompt, challenge) {
        // Call Netlify Function which proxies the Gemini API call
        const functionUrl = '/.netlify/functions/gemini-evaluate';
        
        const response = await fetch(functionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: userPrompt,
                challenge: challenge
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Netlify Function error: ${errorData.error || response.statusText}`);
        }

        const data = await response.json();
        return this.parseGeminiResponse(data);
    }

    async callGeminiAPI(userPrompt, challenge) {
        // Direct API call for local development only
        // Gemini API uses query parameter ?key= instead of Authorization header
        const model = 'gemini-2.0-flash-exp';
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: this.buildEvaluationPrompt(userPrompt, challenge)
                    }]
                }],
                generationConfig: {
                    temperature: 0.3,
                    topK: 1,
                    topP: 0.8,
                    maxOutputTokens: 2048
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`Gemini API error: ${response.status} - ${errorData}`);
        }

        const data = await response.json();
        return this.parseGeminiResponse(data);
    }

    buildEvaluationPrompt(userPrompt, challenge) {
        const contextSections = [];

        if (Array.isArray(challenge.learningFocus) && challenge.learningFocus.length) {
            contextSections.push(`Learning focus: ${challenge.learningFocus.join(' | ')}`);
        }

        if (Array.isArray(challenge.skillFocus) && challenge.skillFocus.length) {
            contextSections.push(`Skill tags: ${challenge.skillFocus.join(', ')}`);
        }

        if (challenge.promptBlueprint?.steps?.length) {
            const title = challenge.promptBlueprint.title || 'Prompt blueprint';
            const summary = challenge.promptBlueprint.steps
                .map(step => `${step.name || step.label || 'Step'} - ${step.detail || step.instruction || ''}`)
                .join(' | ');
            contextSections.push(`${title}: ${summary}`);
        }

        if (Array.isArray(challenge.curriculumLinks) && challenge.curriculumLinks.length) {
            contextSections.push(`Curriculum links: ${challenge.curriculumLinks.join(' | ')}`);
        }

        if (challenge.reflectionPrompt) {
            contextSections.push(`Reflection question students will answer: ${challenge.reflectionPrompt}`);
        }

        const additionalContext = contextSections.length ? `\nAdditional challenge context:\n${contextSections.join('\n')}\n` : '';

        return `You are an expert prompt engineering evaluator. Analyse the following user prompt for the given challenge and provide a detailed evaluation. Use British English spelling throughout.

Challenge: ${challenge.title}
Description: ${challenge.description}
Task: ${challenge.task}
Success Criteria: ${challenge.successCriteria.join(', ')}
${additionalContext}

User Prompt: """${userPrompt}"""

⚠️ CRITICAL EVALUATION RULE - READ THIS FIRST:
Before scoring anything, compare the user prompt with the challenge task above. If the user has simply copied or paraphrased the challenge task/description without adding proper AI instruction phrases (like "Act as...", "Pretend you are...", "Explain as if...", etc.), this is an AUTOMATIC FAILURE. 

The user must create a PROMPT that INSTRUCTS an AI to perform the task, NOT just repeat what was asked. For example:
- ❌ BAD (copying): "Explain the water cycle to a 10-year-old"
- ✅ GOOD (proper prompt): "Act as a friendly science teacher. Explain the water cycle to a 10-year-old using fun analogies and simple language."

If the user prompt is essentially the same as the challenge task (similarity > 80%), give ALL criteria 0 points and explain they copied the text.

Please evaluate this prompt based on the following criteria (each worth 20 points, total 100 points):

1. **Clarity (20 points)**: Is the prompt clear and unambiguous? Does it use simple, direct language? Give 0 if copied.
2. **Specificity (20 points)**: Does it provide enough detail and specific requirements? Give 0 if copied.
3. **Context (20 points)**: Is relevant context included? Does it specify audience, constraints, or background? Give 0 if copied.
4. **Structure (20 points)**: Is it well-organised and easy to understand? Give 0 if copied.
5. **Effectiveness (20 points)**: Would it produce the desired output? Does it meet the challenge requirements? Give 0 if copied or if it lacks AI instruction phrases.

Provide your response in the following JSON format:
{
  "overallScore": number,
  "criteriaScores": {
    "clarity": number,
    "specificity": number,
    "context": number,
    "structure": number,
    "effectiveness": number
  },
  "feedback": ["specific feedback point 1", "specific feedback point 2"],
  "suggestions": ["improvement suggestion 1", "improvement suggestion 2"],
  "exampleImprovement": "rewritten version of the prompt"
}

Be constructive and specific in your feedback. Focus on helping the user improve their prompt engineering skills. Use British English spelling (e.g., "organise" not "organize", "colour" not "color").`;
    }

    generateMockEvaluation(userPrompt, challenge) {
        // Simulate API delay
        return new Promise((resolve) => {
            setTimeout(() => {
                const evaluation = this.analyzePromptQuality(userPrompt, challenge);
                resolve(evaluation);
            }, 1500 + Math.random() * 1000); // 1.5-2.5 second delay
        });
    }

    analyzePromptQuality(userPrompt, challenge) {
        const prompt = userPrompt.toLowerCase();
        const words = prompt.split(' ').length;

        console.log('🔍 Analysing prompt quality...');
        console.log('📝 User prompt:', userPrompt.substring(0, 100));
        console.log('📋 Challenge task:', challenge.task ? challenge.task.substring(0, 100) : 'N/A');

        // FIRST: Check for copying - this overrides everything
        let effectivenessScore = this.evaluateEffectiveness(prompt, challenge);
        
        console.log('⚡ Effectiveness score:', effectivenessScore);
        
        // If they copied, give very low scores across the board
        if (effectivenessScore === 0) {
            console.log('❌ COPY DETECTED - Returning zero score');
            return {
                overallScore: 0,
                criteriaScores: {
                    clarity: 0,
                    specificity: 0,
                    context: 0,
                    structure: 0,
                    effectiveness: 0
                },
                feedback: this.generateFeedback({
                    clarity: 0,
                    specificity: 0,
                    context: 0,
                    structure: 0,
                    effectiveness: 0
                }, prompt, challenge),
                suggestions: ["Don't copy the challenge text. Create a prompt that instructs the AI to perform the task.", "Use phrases like 'Act as...' or 'Pretend you are...' to give the AI a role.", "Add specific details about how you want the output formatted or structured."],
                exampleImprovement: challenge.task ? `Act as a friendly teacher. ${challenge.task.replace(/^(create a prompt for|write a prompt that|write a prompt|create a prompt|prompt:)\s*/i, '')} Use simple language and include examples to make it engaging.` : ""
            };
        }

        // Analyze based on challenge-specific criteria
        let clarityScore = this.evaluateClarity(prompt, words);
        let specificityScore = this.evaluateSpecificity(prompt, challenge);
        let contextScore = this.evaluateContext(prompt, challenge);
        let structureScore = this.evaluateStructure(prompt);

        // Add minimal randomness - evaluation should be consistent
        clarityScore += this.randomVariation(2);
        specificityScore += this.randomVariation(2);
        contextScore += this.randomVariation(2);
        structureScore += this.randomVariation(2);
        effectivenessScore += this.randomVariation(2);

        // Ensure scores are within bounds
        const scores = {
            clarity: Math.max(0, Math.min(20, clarityScore)),
            specificity: Math.max(0, Math.min(20, specificityScore)),
            context: Math.max(0, Math.min(20, contextScore)),
            structure: Math.max(0, Math.min(20, structureScore)),
            effectiveness: Math.max(0, Math.min(20, effectivenessScore))
        };

        const overallScore = Math.round(Object.values(scores).reduce((sum, score) => sum + score, 0));

        return {
            overallScore,
            criteriaScores: scores,
            feedback: this.generateFeedback(scores, prompt, challenge),
            suggestions: this.generateSuggestions(scores, prompt, challenge),
            exampleImprovement: this.generateImprovement(prompt, challenge, scores)
        };
    }

    evaluateClarity(prompt, wordCount) {
        let score = 10; // Base score

        // Check for clear action verbs
        const actionVerbs = ['explain', 'describe', 'create', 'write', 'generate', 'analyze', 'summarize', 'provide', 'list', 'draft', 'outline', 'compare'];
        const hasActionVerb = actionVerbs.some(verb => prompt.includes(verb));
        if (hasActionVerb) score += 4;

        // Check for vague language
        const vagueWords = ['something', 'stuff', 'things', 'good', 'bad', 'nice', 'some', 'any', 'maybe'];
        const vagueCount = vagueWords.filter(word => prompt.includes(word)).length;
        score -= vagueCount * 2;

        // Check length - balance between too short and too verbose
        if (wordCount < 5) score -= 5; // Too short
        else if (wordCount < 10) score -= 2; // A bit short
        else if (wordCount > 15 && wordCount < 80) score += 3; // Sweet spot
        else if (wordCount > 150) score -= 2; // Getting verbose

        // Bonus for proper sentence structure and punctuation
        if (prompt.match(/[.?!]$/)) score += 2; // Ends with punctuation
        if (prompt.match(/[A-Z]/)) score += 1; // Uses capitalization (heuristic)

        return Math.max(0, Math.min(20, score));
    }

    evaluateSpecificity(prompt, challenge) {
        let score = 8; // Base score
        let requiredMatches = 0;
        let totalRequired = challenge.successCriteria.length;

        // Check if prompt addresses the specific challenge requirements
        // Using a more flexible matching approach
        challenge.successCriteria.forEach(criterion => {
            // Extract significant words (len > 3) from criterion
            const keywords = criterion.toLowerCase().replace(/[.,]/g, '').split(' ').filter(w => w.length > 3);
            // Check if a good portion of these keywords exist in the prompt
            const matches = keywords.filter(keyword => prompt.includes(keyword));
            if (matches.length >= Math.ceil(keywords.length * 0.5)) {
                requiredMatches++;
                score += 4; // Good match
            } else if (matches.length > 0) {
                score += 1; // Partial match
            }
        });

        // Bonus for quotes or specific values if likely required
        if (prompt.includes('"') || prompt.includes("'")) score += 2;
        if (/\d+/.test(prompt)) score += 2; // Contains numbers

        return Math.max(0, Math.min(20, score));
    }

    evaluateContext(prompt, challenge) {
        let score = 6; // Base score

        // Check for audience specification
        const audienceIndicators = ['student', 'child', 'beginner', 'expert', 'professional', 'teacher', 'audience', 'reader', 'class', 'team', 'colleague'];
        const hasAudience = audienceIndicators.some(indicator => prompt.includes(indicator));
        if (hasAudience) score += 5;

        // Check for role/persona definition - expanded list
        const personaIndicators = ['act as', 'imagine you are', 'pretend', 'you are', 'role of', 'expert in', 'consultant', 'coach', 'guide', 'teacher'];
        if (personaIndicators.some(p => prompt.includes(p))) score += 6;

        // Check for background context or scenario setting
        if (prompt.includes('context') || prompt.includes('background') || prompt.includes('situation') || prompt.includes('scenario') || prompt.includes('because') || prompt.includes('so that')) score += 3;

        // Check for tone/style specification
        if (prompt.includes('tone') || prompt.includes('style') || prompt.includes('voice') || prompt.includes('mood') || prompt.includes('formal') || prompt.includes('casual') || prompt.includes('friendly')) score += 2;

        return Math.max(0, Math.min(20, score));
    }

    evaluateStructure(prompt) {
        let score = 6; // Lower base score

        // Check for organization (numbered lists, bullet points, paragraphs)
        if (prompt.includes('1.') || prompt.includes('2.') || prompt.includes('step')) score += 4;
        if (prompt.includes('first') && prompt.includes('then')) score += 2;

        // Check for clear separation of ideas
        const sentences = prompt.split(/[.!?]+/).filter(s => s.trim().length > 0);
        if (sentences.length > 2) score += 3;
        else if (sentences.length > 1) score += 1;
        else score -= 2; // Penalty for single sentence

        // Check for formatting requests
        if (prompt.includes('bullet') || prompt.includes('list') || prompt.includes('paragraph')) score += 2;

        // Check for sections/parts
        if (prompt.includes('section') || prompt.includes('part') || prompt.includes('include')) score += 2;

        // Bonus for using colons or semicolons (shows structure)
        if (prompt.includes(':') || prompt.includes(';')) score += 1;

        return Math.max(0, Math.min(20, score));
    }

    evaluateEffectiveness(prompt, challenge) {
        let score = 5; // Lower base score
        const promptLower = prompt.toLowerCase().trim();
        
        console.log('🔍 Evaluating effectiveness...');
        console.log('📝 Prompt:', promptLower.substring(0, 80));
        
        // CRITICAL: Detect if user just copied the challenge task/text
        // This is the most important check - if they copy, they fail
        if (challenge.task) {
            const taskLower = challenge.task.toLowerCase().trim();
            // Remove common prefixes like "Create a prompt for:" or "Write a prompt that"
            const taskCore = taskLower.replace(/^(create a prompt for|write a prompt that|write a prompt|create a prompt|prompt:)\s*/i, '').trim();
            const promptCore = promptLower.replace(/^(create a prompt for|write a prompt that|write a prompt|create a prompt|prompt:)\s*/i, '').trim();
            
            console.log('📋 Task core:', taskCore.substring(0, 80));
            console.log('✏️ Prompt core:', promptCore.substring(0, 80));
            
            // Check for exact or near-exact match (allowing for minor variations)
            const similarity = this.calculateSimilarity(promptCore, taskCore);
            console.log('📊 Similarity score:', similarity);
            
            // MUCH MORE STRICT: If similarity is over 60%, it's likely a copy
            if (similarity > 0.60) {
                score = 0; // Complete failure - they just copied
                console.warn('❌ COPY DETECTED: similarity =', similarity);
                return score;
            }
            
            // Also check if the prompt contains most of the task words
            const taskWords = taskCore.split(/\s+/).filter(w => w.length > 3);
            const promptWords = promptCore.split(/\s+/).filter(w => w.length > 3);
            const matchingWords = taskWords.filter(word => promptCore.includes(word)).length;
            const wordMatchRatio = taskWords.length > 0 ? matchingWords / taskWords.length : 0;
            
            console.log('📊 Word match ratio:', wordMatchRatio, `(${matchingWords}/${taskWords.length})`);
            
            // If more than 70% of task words are in the prompt, it's likely a copy
            if (wordMatchRatio > 0.70 && promptWords.length <= taskWords.length * 1.5) {
                score = 0;
                console.warn('❌ COPY DETECTED: word match ratio =', wordMatchRatio);
                return score;
            }
            
            // Check if prompt is just the task text without any instruction phrases
            const hasInstructionPhrases = /\b(act as|pretend|imagine|you are a|role of|take on|become|persona)\b/i.test(promptCore);
            if (wordMatchRatio > 0.60 && !hasInstructionPhrases) {
                score = 0; // Complete failure - copied without adding proper instruction
                console.warn('❌ COPY DETECTED: no instruction phrases, word match =', wordMatchRatio);
                return score;
            }
        }
        
        // Removed overly strict description check - natural overlap is expected

        // Check if it addresses the specific challenge requirements
        const challengeKeywords = challenge.successCriteria.map(criterion =>
            criterion.toLowerCase().split(' ')
        ).flat().filter(w => w.length > 4);

        const matchingKeywords = challengeKeywords.filter(keyword =>
            promptLower.includes(keyword)
        ).length;

        // More strict matching requirement
        if (matchingKeywords === 0) score -= 5; // Big penalty for no matches
        else score += matchingKeywords * 2;

        // Check for clear outcome expectation - but penalise if it's too similar to task
        const outcomeVerbs = ['create', 'generate', 'write', 'explain', 'provide', 'describe', 'analyze'];
        const hasOutcome = outcomeVerbs.some(verb => promptLower.includes(verb));
        if (hasOutcome) score += 3;
        else score -= 3; // Penalty for no clear outcome

        // Check for examples or constraints
        if (promptLower.includes('example') || promptLower.includes('such as') || promptLower.includes('like')) score += 2;
        if (promptLower.includes('must') || promptLower.includes('should') || promptLower.includes('need')) score += 2;
        
        // Bonus: Check if prompt actually instructs the AI (not just states what to do)
        const instructionIndicators = ['act as', 'pretend', 'imagine', 'role of', 'you are', 'take on', 'become'];
        const hasInstruction = instructionIndicators.some(indicator => promptLower.includes(indicator));
        if (hasInstruction) score += 4;

        return Math.max(0, Math.min(20, score));
    }
    
    calculateSimilarity(str1, str2) {
        // Simple similarity calculation using Levenshtein distance
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        if (longer.length === 0) return 1.0;
        
        // If strings are very similar in length and content
        const distance = this.levenshteinDistance(str1, str2);
        return 1 - (distance / longer.length);
    }
    
    levenshteinDistance(str1, str2) {
        const matrix = [];
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[str2.length][str1.length];
    }

    generateFeedback(scores, prompt, challenge) {
        const feedback = [];
        const promptLower = prompt.toLowerCase().trim();
        
        // CRITICAL: Check if user copied the challenge task
        if (challenge.task && scores.effectiveness === 0) {
            const taskLower = challenge.task.toLowerCase().trim();
            const taskCore = taskLower.replace(/^(create a prompt for|write a prompt that|write a prompt|create a prompt|prompt:)\s*/i, '').trim();
            const promptCore = promptLower.replace(/^(create a prompt for|write a prompt that|write a prompt|create a prompt|prompt:)\s*/i, '').trim();
            const similarity = this.calculateSimilarity(promptCore, taskCore);
            
            if (similarity > 0.80) {
                feedback.push("❌ **Critical Issue**: You've copied the challenge text directly. A prompt should **instruct the AI** to do something, not just repeat what was asked. For example, instead of 'Explain quantum computing to a child', try 'Act as a friendly teacher. Explain quantum computing using simple analogies that a 10-year-old would understand, like comparing qubits to spinning coins.'");
                return feedback; // Return early - this is a critical failure
            }
        }

        // 1. Clarity Evidence
        if (scores.clarity >= 15) {
            const actionVerb = ['explain', 'describe', 'create', 'write', 'generate', 'analyze', 'summarize', 'provide', 'list', 'draft', 'outline', 'compare'].find(v => promptLower.includes(v));
            if (actionVerb) {
                feedback.push(`✅ **Clarity**: Excellent start using the strong action verb "${actionVerb}".`);
            } else {
                feedback.push("✅ **Clarity**: Your instruction is direct and unambiguous.");
            }
        } else if (scores.clarity < 12) {
            feedback.push("⚠️ **Clarity**: The prompt feels a bit vague. Try starting with a specific command like 'Create', 'Write', or 'Explain'.");
        }

        // 2. Specificity Evidence
        if (scores.specificity >= 15) {
            const matches = challenge.successCriteria.filter(c => {
                const keywords = c.toLowerCase().replace(/[.,]/g, '').split(' ').filter(w => w.length > 3);
                return keywords.some(k => prompt.includes(k));
            });

            if (matches.length > 0) {
                feedback.push(`✅ **Specificity**: You successfully included key details like "${matches[0].split(' ').slice(0, 3).join(' ')}...".`);
            } else {
                feedback.push("✅ **Specificity**: Good job including specific constraints.");
            }
        } else if (scores.specificity < 12) {
            feedback.push("⚠️ **Specificity**: You missed some specific requirements from the challenge description.");
        }

        // 3. Context Evidence
        if (scores.context >= 15) {
            const persona = ['act as', 'imagine', 'you are', 'role of', 'expert'].find(p => prompt.includes(p));
            const audience = ['student', 'child', 'beginner', 'expert', 'professional', 'teacher', 'audience'].find(a => prompt.includes(a));

            if (persona) {
                feedback.push(`✅ **Context**: Great use of persona setting ("${persona}").`);
            } else if (audience) {
                feedback.push(`✅ **Context**: You clearly defined the audience ("${audience}").`);
            } else {
                feedback.push("✅ **Context**: The background information provided is very helpful.");
            }
        } else if (scores.context < 12) {
            feedback.push("⚠️ **Context**: Who is this for? Who is the AI pretending to be? Adding a persona or audience would help.");
        }

        // 4. Structure Evidence
        if (scores.structure >= 15) {
            if (prompt.includes('1.') || prompt.includes('bullet')) {
                feedback.push("✅ **Structure**: Explicitly asking for a list/bullets guarantees a clean output.");
            } else {
                feedback.push("✅ **Structure**: Your prompt is well-organised and easy for the AI to parse.");
            }
        }

        return feedback;
    }

    generateSuggestions(scores, prompt, challenge) {
        const suggestions = [];

        if (scores.clarity < 12) {
            suggestions.push("Start with clear action verbs like 'explain', 'create', or 'analyze'");
            suggestions.push("Avoid vague words like 'something' or 'things'");
        }

        if (scores.specificity < 12) {
            suggestions.push("Include specific constraints, requirements, or measurements");
            suggestions.push("Mention the target audience or intended use");
        }

        if (scores.context < 12) {
            suggestions.push("Provide background information or set the scene");
            suggestions.push("Define the AI's role or expertise level");
        }

        if (scores.structure < 12) {
            suggestions.push("Organise your prompt with clear sections or steps");
            suggestions.push("Use formatting to separate different requirements");
        }

        this.addSkillFocusSuggestions(challenge, scores, suggestions);

        if (suggestions.length === 0) {
            suggestions.push("Excellent work! Your prompt demonstrates strong prompt engineering skills.");
        }

        return suggestions;
    }

    addSkillFocusSuggestions(challenge, scores, suggestions) {
        if (!challenge?.skillFocus?.length) return;

        const skillMap = {
            audience: { scoreKey: 'context', threshold: 14, message: "Spell out the age, prior knowledge, or perspective of your audience so the AI can tailor its voice." },
            tone: { scoreKey: 'context', threshold: 14, message: "Describe the tone or persona you want (e.g., celebratory, formal) to shape delivery." },
            constraints: { scoreKey: 'specificity', threshold: 15, message: "Layer clear constraints such as word counts, formats, budgets, or timing to focus the output." },
            structure: { scoreKey: 'structure', threshold: 14, message: "Break the request into labelled steps or sections so each requirement is unmistakable." },
            reflection: { scoreKey: 'effectiveness', threshold: 15, message: "Ask the AI to include a self-check, reflection question, or success criteria at the end." },
            ethics: { scoreKey: 'effectiveness', threshold: 15, message: "State any safety, fairness, or safeguarding boundaries you expect the AI to respect." },
            evidence: { scoreKey: 'specificity', threshold: 15, message: "Request citations, data points, or observations so arguments stay grounded." },
            iteration: { scoreKey: 'structure', threshold: 14, message: "Encourage the AI to suggest the next iteration or improvement checklist, not only the first draft." }
        };

        const added = new Set();

        challenge.skillFocus.forEach(skill => {
            if (added.has(skill)) return;
            const config = skillMap[skill];
            if (!config) return;
            const scoreValue = scores[config.scoreKey] ?? 0;
            if (scoreValue < config.threshold) {
                suggestions.push(config.message);
                added.add(skill);
            }
        });
    }

    generateImprovement(prompt, challenge, scores) {
        // Generate a suggested improvement based on the weaknesses
        let improvement = prompt;

        if (scores.clarity < 12) {
            improvement = improvement.replace(/^(can you|could you|would you)/i, '');
            if (!improvement.match(/^(explain|describe|create|write|generate|analyze)/i)) {
                improvement = `Explain ${improvement}`;
            }
        }

        if (scores.specificity < 12) {
            if (challenge.id === 1 && !improvement.includes('10-year-old')) {
                improvement += " for a 10-year-old student";
            }
            if (!improvement.match(/(simple|basic|detailed|specific)/i)) {
                improvement += " in simple terms";
            }
        }

        if (scores.context < 12) {
            if (!improvement.match(/(act as|imagine you are|pretend)/i)) {
                improvement = `Act as a teacher. ${improvement}`;
            }
        }

        return improvement;
    }

    randomVariation(max) {
        return (Math.random() - 0.5) * max;
    }

    getErrorResponse() {
        return {
            overallScore: 0,
            criteriaScores: {
                clarity: 0,
                specificity: 0,
                context: 0,
                structure: 0,
                effectiveness: 0
            },
            feedback: ["Unable to evaluate prompt at this time. Please try again."],
            suggestions: ["Check your internet connection and try again."],
            exampleImprovement: ""
        };
    }

    parseGeminiResponse(data) {
        try {
            // In a real implementation, this would parse the actual Gemini API response
            const content = data.candidates[0].content.parts[0].text;
            return JSON.parse(content);
        } catch (error) {
            console.error('Error parsing Gemini response:', error);
            return this.getErrorResponse();
        }
    }
}

// Initialize Gemini integration
const geminiIntegration = new GeminiIntegration();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GeminiIntegration;
}
