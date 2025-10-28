const challengeData = {
  levels: [
    {
      id: 1,
      name: "Foundation Level",
      title: "Basic Prompts",
      description: "Master clarity and specificity in your prompts",
      color: "#4F46E5",
      unlocked: true,
      challenges: [
        {
          id: 1,
          title: "Clear Instructions",
          description: "Write a prompt to ask an AI to explain photosynthesis to a 10-year-old student.",
          task: "Your prompt should be clear and specify the audience.",
          difficulty: "Beginner",
          points: 100,
          successCriteria: [
            "Mentions the topic (photosynthesis)",
            "Specifies the audience (10-year-old)",
            "Uses clear language",
            "Requests an explanation"
          ],
          hints: [
            "Think about how you would ask a teacher to explain something to a child",
            "Include the specific topic and target age in your prompt",
            "Use simple, direct language like 'explain' or 'describe'"
          ],
          examplePrompt: "Explain photosynthesis in simple terms that a 10-year-old student can understand. Use everyday examples and avoid complex scientific jargon.",
          commonMistakes: [
            "Being too vague: 'Tell me about photosynthesis'",
            "Forgetting to specify the audience",
            "Using technical language in the prompt itself"
          ]
        },
        {
          id: 2,
          title: "Specific Details",
          description: "Write a prompt to generate a recipe for chocolate chip cookies with dietary restrictions.",
          task: "Include specific requirements and constraints in your prompt.",
          difficulty: "Beginner",
          points: 120,
          successCriteria: [
            "Specifies the dish (chocolate chip cookies)",
            "Includes dietary restrictions",
            "Requests specific format (recipe)",
            "Mentions key ingredients or substitutions"
          ],
          hints: [
            "List all dietary requirements clearly",
            "Specify if you want measurements and cooking times",
            "Mention any ingredients to avoid or substitute"
          ],
          examplePrompt: "Create a recipe for gluten-free chocolate chip cookies that are also vegan. Include exact measurements, baking temperature, and cooking time. Suggest alternatives for common allergens like nuts.",
          commonMistakes: [
            "Saying 'healthy cookies' without defining what healthy means",
            "Forgetting to mention dietary restrictions",
            "Not specifying the desired format"
          ]
        },
        {
          id: 3,
          title: "Action Verbs",
          description: "Write a prompt to get help with planning a school science fair project.",
          task: "Use strong action verbs to guide the AI's response.",
          difficulty: "Beginner",
          points: 110,
          successCriteria: [
            "Starts with clear action verb (analyze, create, design, etc.)",
            "Specifies the type of help needed",
            "Mentions the context (school science fair)",
            "Guides toward specific output"
          ],
          hints: [
            "Start with verbs like 'design', 'create', 'plan', or 'analyze'",
            "Be specific about what kind of help you want",
            "Include the educational level and subject area"
          ],
          examplePrompt: "Design three innovative science fair projects suitable for middle school students. Each project should be safe, affordable, and demonstrate a clear scientific principle. Include materials list and step-by-step instructions.",
          commonMistakes: [
            "Using weak openings like 'I need help with...'",
            "Being too general: 'Help with science project'",
            "Not specifying the educational level"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Context Level",
      title: "Context & Role",
      description: "Learn to provide context and define AI roles for better responses",
      color: "#059669",
      unlocked: false,
      challenges: [
        {
          id: 4,
          title: "AI Persona",
          description: "Write a prompt to get travel recommendations from an AI acting as a local expert.",
          task: "Assign a specific role or persona to the AI.",
          difficulty: "Intermediate",
          points: 150,
          successCriteria: [
            "Clearly defines the AI's role (local expert)",
            "Provides context about the location or type of travel",
            "Specifies the expertise needed",
            "Sets appropriate tone for the persona"
          ],
          hints: [
            "Start with 'Act as a...' or 'Imagine you are a...'",
            "Define the specific expertise or background",
            "Mention the location or type of experience needed"
          ],
          examplePrompt: "Act as a knowledgeable local tour guide in Tokyo who has lived there for 20 years. Recommend three unique experiences that most tourists miss, including local restaurants, hidden gems, and cultural activities. Provide insider tips and practical information.",
          commonMistakes: [
            "Not defining the expertise level",
            "Forgetting to specify the location",
            "Being too generic about the role"
          ]
        },
        {
          id: 5,
          title: "Background Context",
          description: "Write a prompt to get advice about starting a small business.",
          task: "Provide relevant background context to guide the AI's response.",
          difficulty: "Intermediate",
          points: 140,
          successCriteria: [
            "Includes relevant background information",
            "Specifies the business type or industry",
            "Mentions current situation or constraints",
            "Guides the AI to consider specific factors"
          ],
          hints: [
            "Include your background, budget, or experience level",
            "Mention specific industry or business type",
            "Add any constraints like time, money, or location"
          ],
          examplePrompt: "I'm a 25-year-old graphic designer with 3 years of experience, looking to start my own freelance design business. I have £2,000 in savings and can dedicate 20 hours per week while keeping my current part-time job. Provide a step-by-step plan for the first 6 months, including client acquisition strategies and financial planning.",
          commonMistakes: [
            "Not providing enough personal context",
            "Being too vague about the business type",
            "Missing important constraints or limitations"
          ]
        }
      ]
    }
  ],
  
  evaluationCriteria: {
    clarity: {
      weight: 25,
      description: "Is the prompt clear and unambiguous?",
      indicators: [
        "Uses simple, direct language",
        "Avoids vague or fuzzy terms",
        "Expresses one main idea clearly",
        "Minimizes potential misinterpretation"
      ]
    },
    specificity: {
      weight: 25,
      description: "Does it provide enough detail?",
      indicators: [
        "Includes specific requirements",
        "Defines constraints clearly",
        "Provides relevant details",
        "Avoids over-generalization"
      ]
    },
    context: {
      weight: 20,
      description: "Is relevant context included?",
      indicators: [
        "Provides necessary background",
        "Defines audience or use case",
        "Sets appropriate frame of reference",
        "Includes relevant constraints"
      ]
    },
    structure: {
      weight: 15,
      description: "Is it well-organised?",
      indicators: [
        "Follows logical flow",
        "Uses appropriate formatting",
        "Separates different elements clearly",
        "Easy to understand structure"
      ]
    },
    effectiveness: {
      weight: 15,
      description: "Would it produce the desired output?",
      indicators: [
        "Likely to generate relevant response",
        "Guides toward intended outcome",
        "Appropriate scope for the task",
        "Actionable and practical"
      ]
    }
  },

  badges: [
    {
      id: "clarity_champion",
      name: "Clarity Champion",
      description: "Earned by achieving high clarity scores in 3 consecutive challenges",
      icon: "🎯",
      condition: "clarity_score >= 80 for 3 challenges"
    },
    {
      id: "specificity_star",
      name: "Specificity Star",
      description: "Awarded for excellent specificity in prompt writing",
      icon: "⭐",
      condition: "specificity_score >= 85 for 5 challenges"
    },
    {
      id: "context_king",
      name: "Context King",
      description: "Master of providing relevant context in prompts",
      icon: "👑",
      condition: "context_score >= 90 for 3 challenges"
    },
    {
      id: "prompt_pioneer",
      name: "Prompt Pioneer",
      description: "Completed all Foundation Level challenges",
      icon: "🚀",
      condition: "complete_level_1"
    },
    {
      id: "streak_master",
      name: "Streak Master",
      description: "Completed 5 challenges in a row without hints",
      icon: "🔥",
      condition: "streak >= 5 without hints"
    }
  ]
};

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = challengeData;
}