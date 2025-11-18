class GeminiIntegration {
    constructor() {
        this.apiKey = null;
        this.mockMode = true; // Default to mock responses
        this.init();
    }

    init() {
        // Attempt to load API key from Netlify environment variables
        if (typeof window !== 'undefined' && window.netlify && window.netlify.env) {
            const env = window.netlify.env;
            if (env.GEMINI_PROMPT) {
                this.apiKey = env.GEMINI_PROMPT;
                this.mockMode = false;
                console.log('✅ Gemini Integration initialized with Netlify environment key. Mock mode disabled.');
                console.warn('⚠️ WARNING: Gemini API key is exposed client-side. For production, consider using a server-side proxy (e.g., Netlify Functions) to protect your key and prevent abuse.');
            }
        }

        // Fallback for local development or if Netlify env not found
        if (this.apiKey === null) {
            // Check for local file config (similar to firebase-config.local.js)
            if (typeof window !== 'undefined' && window.__GEMINI_LOCAL_CONFIG__ && window.__GEMINI_LOCAL_CONFIG__.apiKey) {
                this.apiKey = window.__GEMINI_LOCAL_CONFIG__.apiKey;
                this.mockMode = false;
                console.log('✅ Gemini Integration initialized with local config. Mock mode disabled.');
                console.warn('⚠️ WARNING: Gemini API key is exposed client-side. For production, consider using a server-side proxy (e.g., Netlify Functions) to protect your key and prevent abuse.');
            } else {
                console.log('Gemini Integration initialized in mock mode. No real API key found.');
                this.mockMode = true;
            }
        }
    }

    async evaluatePrompt(userPrompt, challenge) {
        if (this.mockMode || !this.apiKey) {
            console.log('Running mock evaluation...');

    async callGeminiAPI(userPrompt, challenge) {
        // This would be the actual API call in production
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite-preview-09-2025:generateContent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
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
        
        return `You are an expert prompt engineering evaluator. Analyze the following user prompt for the given challenge and provide a detailed evaluation.

Challenge: ${challenge.title}
Description: ${challenge.description}
Task: ${challenge.task}
Success Criteria: ${challenge.successCriteria.join(', ')}
${additionalContext}

User Prompt: """${userPrompt}"""

Please evaluate this prompt based on the following criteria (each worth 20 points, total 100 points):

1. **Clarity (20 points)**: Is the prompt clear and unambiguous? Does it use simple, direct language?
2. **Specificity (20 points)**: Does it provide enough detail and specific requirements?
3. **Context (20 points)**: Is relevant context included? Does it specify audience, constraints, or background?
4. **Structure (20 points)**: Is it well-organized and easy to understand?
5. **Effectiveness (20 points)**: Would it produce the desired output? Does it meet the challenge requirements?

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

Be constructive and specific in your feedback. Focus on helping the user improve their prompt engineering skills.`;
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
        
        // Analyze based on challenge-specific criteria
        let clarityScore = this.evaluateClarity(prompt, words);
        let specificityScore = this.evaluateSpecificity(prompt, challenge);
        let contextScore = this.evaluateContext(prompt, challenge);
        let structureScore = this.evaluateStructure(prompt);
        let effectivenessScore = this.evaluateEffectiveness(prompt, challenge);

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
        
        // Check if it addresses the specific challenge requirements
        const challengeKeywords = challenge.successCriteria.map(criterion => 
            criterion.toLowerCase().split(' ')
        ).flat().filter(w => w.length > 4);
        
        const matchingKeywords = challengeKeywords.filter(keyword => 
            prompt.includes(keyword)
        ).length;
        
        // More strict matching requirement
        if (matchingKeywords === 0) score -= 5; // Big penalty for no matches
        else score += matchingKeywords * 2;
        
        // Check for clear outcome expectation
        const outcomeVerbs = ['create', 'generate', 'write', 'explain', 'provide', 'describe', 'analyze'];
        const hasOutcome = outcomeVerbs.some(verb => prompt.includes(verb));
        if (hasOutcome) score += 3;
        else score -= 3; // Penalty for no clear outcome
        
        // Check if prompt is just copying the challenge description
        const challengeWords = challenge.description.toLowerCase().split(' ').filter(w => w.length > 4);
        const copiedWords = challengeWords.filter(word => prompt.includes(word)).length;
        if (copiedWords > challengeWords.length * 0.7) {
            score -= 10; // Heavy penalty for copying
        }
        
        // Check for examples or constraints
        if (prompt.includes('example') || prompt.includes('such as') || prompt.includes('like')) score += 2;
        if (prompt.includes('must') || prompt.includes('should') || prompt.includes('need')) score += 2;
        
        return Math.max(0, Math.min(20, score));
    }

    generateFeedback(scores, prompt, challenge) {
        const feedback = [];
        
        // 1. Clarity Evidence
        if (scores.clarity >= 15) {
            const actionVerb = ['explain', 'describe', 'create', 'write', 'generate', 'analyze', 'summarize', 'provide', 'list', 'draft', 'outline', 'compare'].find(v => prompt.includes(v));
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
                feedback.push("✅ **Structure**: Your prompt is well-organized and easy for the AI to parse.");
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
            suggestions.push("Organize your prompt with clear sections or steps");
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
