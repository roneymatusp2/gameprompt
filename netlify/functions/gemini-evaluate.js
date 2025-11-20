// Netlify Function to proxy Gemini API calls
// This keeps the API key secure on the server side

// Helper function to build evaluation prompt (same logic as frontend)
function buildEvaluationPrompt(userPrompt, challenge) {
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

If the user prompt is essentially the same as the challenge task (similarity > 60%), give ALL criteria 0 points and explain they copied the text.

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

exports.handler = async (event, context) => {
    // Handle OPTIONS request for CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    // Get API key from environment variables
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_KEY_API;
    
    if (!apiKey) {
        console.error('GEMINI_API_KEY or GOOGLE_KEY_API not found in environment variables');
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                error: 'Gemini API key not configured',
                message: 'Please configure GEMINI_API_KEY or GOOGLE_KEY_API in Netlify environment variables'
            })
        };
    }

    try {
        // Parse request body
        const requestBody = JSON.parse(event.body);
        const { prompt, challenge } = requestBody;

        if (!prompt || !challenge) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: 'Missing required fields: prompt and challenge' })
            };
        }

        // Build the evaluation prompt
        const evaluationPrompt = buildEvaluationPrompt(prompt, challenge);

        // Call Gemini API with correct authentication format
        // Gemini API uses query parameter ?key= instead of Authorization header
        const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash-exp';
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: evaluationPrompt
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
            console.error('Gemini API error:', response.status, errorData);
            return {
                statusCode: response.status,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ 
                    error: 'Gemini API error',
                    details: errorData,
                    status: response.status
                })
            };
        }

        const data = await response.json();
        
        // Parse and return the response
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error('Error in gemini-evaluate function:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                error: 'Internal server error',
                message: error.message
            })
        };
    }
};
