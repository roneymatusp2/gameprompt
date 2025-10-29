class GeminiIntegration {
    constructor() {
        this.apiKey = null; // Would be set from environment variable
        this.mockMode = true; // Use mock responses for demo
        this.init();
    }

    init() {
        // In a real implementation, this would load the API key
        // this.apiKey = process.env.GEMINI_API_KEY;
        console.log('Gemini Integration initialized in mock mode');
    }

    async evaluatePrompt(userPrompt, challenge) {
        try {
            if (this.mockMode) {
                return this.generateMockEvaluation(userPrompt, challenge);
            } else {
                return await this.callGeminiAPI(userPrompt, challenge);
            }
        } catch (error) {
            console.error('Error evaluating prompt:', error);
            return this.getErrorResponse();
        }
    }

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
        return `You are an expert prompt engineering evaluator. Analyze the following user prompt for the given challenge and provide a detailed evaluation.

Challenge: ${challenge.title}
Description: ${challenge.description}
Task: ${challenge.task}
Success Criteria: ${challenge.successCriteria.join(', ')}

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
        let score = 8; // Lower base score
        
        // Check for clear action verbs
        const actionVerbs = ['explain', 'describe', 'create', 'write', 'generate', 'analyze', 'summarize', 'provide', 'list'];
        const hasActionVerb = actionVerbs.some(verb => prompt.includes(verb));
        if (hasActionVerb) score += 4;
        else score -= 3; // Penalty for no action verb
        
        // Check for vague language - stricter penalties
        const vagueWords = ['something', 'stuff', 'things', 'good', 'bad', 'nice', 'some', 'any'];
        const vagueCount = vagueWords.filter(word => prompt.includes(word)).length;
        score -= vagueCount * 3;
        
        // Check length (too short or too long can hurt clarity)
        if (wordCount < 8) score -= 5; // Stricter minimum
        if (wordCount < 5) score -= 8; // Very short prompts
        if (wordCount > 100) score -= 4; // Too verbose
        
        // Bonus for proper sentence structure
        if (prompt.includes('.') || prompt.includes('?')) score += 2;
        
        return Math.max(0, Math.min(20, score));
    }

    evaluateSpecificity(prompt, challenge) {
        let score = 5; // Much lower base score
        let requiredMatches = 0;
        let totalRequired = challenge.successCriteria.length;
        
        // Check if prompt addresses the specific challenge requirements
        challenge.successCriteria.forEach(criterion => {
            const keywords = criterion.toLowerCase().split(' ').filter(w => w.length > 3);
            const hasKeyword = keywords.some(keyword => prompt.includes(keyword));
            if (hasKeyword) {
                requiredMatches++;
                score += 3;
            }
        });
        
        // Penalty if not addressing challenge requirements
        if (requiredMatches === 0) score -= 5;
        if (requiredMatches < totalRequired / 2) score -= 3;
        
        // Check for specific details based on challenge
        if (challenge.id === 1) { // Photosynthesis for 10-year-old
            if (prompt.includes('10') || prompt.includes('child') || prompt.includes('kid') || prompt.includes('year')) score += 3;
            else score -= 4; // Penalty for missing age specification
            if (prompt.includes('simple') || prompt.includes('easy') || prompt.includes('basic')) score += 2;
        } else if (challenge.id === 2) { // Recipe with dietary restrictions
            if (prompt.includes('gluten') || prompt.includes('vegan') || prompt.includes('allerg')) score += 3;
            else score -= 4; // Penalty for missing dietary info
            if (prompt.includes('measure') || prompt.includes('ingredient')) score += 2;
        } else if (challenge.id === 3) { // Science fair project
            if (prompt.includes('school') || prompt.includes('student')) score += 2;
            if (prompt.includes('step') || prompt.includes('guide')) score += 2;
        } else if (challenge.id === 4) { // Travel recommendations
            if (prompt.includes('local') || prompt.includes('expert') || prompt.includes('guide')) score += 3;
        } else if (challenge.id === 5) { // Business advice
            if (prompt.includes('freelance') || prompt.includes('budget') || prompt.includes('experience')) score += 3;
        }
        
        // Check for constraints and requirements
        if (prompt.includes('include') || prompt.includes('provide') || prompt.includes('add')) score += 1;
        
        // Bonus for numbers and specific measurements
        if (/\d+/.test(prompt)) score += 2;
        
        return Math.max(0, Math.min(20, score));
    }

    evaluateContext(prompt, challenge) {
        let score = 4; // Much lower base score
        
        // Check for audience specification - now required
        const audienceIndicators = ['student', 'child', 'beginner', 'expert', 'professional', 'teacher', 'audience', 'reader'];
        const hasAudience = audienceIndicators.some(indicator => prompt.includes(indicator));
        if (hasAudience) score += 5;
        else score -= 3; // Penalty for missing audience
        
        // Check for role/persona definition - highly valued
        if (prompt.includes('act as') || prompt.includes('imagine you are') || prompt.includes('pretend') || prompt.includes('you are')) score += 6;
        else score -= 2; // Penalty for no role definition
        
        // Check for background context
        if (prompt.includes('background') || prompt.includes('context') || prompt.includes('situation')) score += 3;
        
        // Check for tone/style specification
        if (prompt.includes('tone') || prompt.includes('style') || prompt.includes('formal') || prompt.includes('casual')) score += 2;
        
        // Check for purpose/goal
        if (prompt.includes('purpose') || prompt.includes('goal') || prompt.includes('objective') || prompt.includes('aim')) score += 2;
        
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
        
        if (scores.clarity >= 16) {
            feedback.push("Excellent clarity! Your prompt is very clear and easy to understand.");
        } else if (scores.clarity >= 12) {
            feedback.push("Good clarity, but consider using more direct language.");
        } else {
            feedback.push("Your prompt could be clearer. Try using simpler words and direct instructions.");
        }
        
        if (scores.specificity >= 16) {
            feedback.push("Great specificity! You've provided excellent detail and constraints.");
        } else if (scores.specificity >= 12) {
            feedback.push("Good detail, but you could add more specific requirements.");
        } else {
            feedback.push("Try to include more specific details about what you want.");
        }
        
        if (scores.context >= 16) {
            feedback.push("Perfect context! You've set up the situation beautifully.");
        } else if (scores.context >= 12) {
            feedback.push("Good context, but consider adding more background information.");
        } else {
            feedback.push("Add more context to help the AI understand the situation better.");
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
        
        if (suggestions.length === 0) {
            suggestions.push("Excellent work! Your prompt demonstrates strong prompt engineering skills.");
        }
        
        return suggestions;
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