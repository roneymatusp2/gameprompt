const challengeData = {
  levels: [
    {
      id: 1,
      name: "Stage 1 - The Art of Conversation",
      title: "Foundational Prompts",
      description: "Master the basics of clear communication with an AI. Learn to ask, instruct, and gently guide.",
      colour: "#4F46E5",
      unlocked: true,
      challenges: [
        {
          id: 1,
          type: "Single-Prompt",
          title: "The Power of Words",
          description: "A good prompt doesn't just ask for information, it can also inspire and persuade. Let's try to create a prompt with a purpose.",
          task: "Write a prompt that asks the AI to explain the water cycle in a way that would make a 10-year-old want to save water.",
          difficulty: "Beginner",
          points: 120,
          successCriteria: [
            "Clearly states the topic (the water cycle).",
            "Defines the target audience (a 10-year-old).",
            "Specifies the desired outcome (inspiring them to save water).",
            "Uses evocative language to guide the AI's tone."
          ],
          hints: [
            "Think about what a 10-year-old finds interesting. Maybe a story or a fun analogy?",
            "Instead of just asking for facts, ask the AI to be creative and persuasive.",
            "You could ask the AI to take on the persona of a water droplet on an adventure."
          ],
          examplePrompt: "Act as a friendly water droplet named Drip. Tell the story of your journey through the water cycle to a group of 10-year-olds, and explain why it's so important for them to help you and your friends stay clean and not be wasted.",
          commonMistakes: [
            "Just asking for a dry explanation of the water cycle.",
            "Forgetting to mention the goal of inspiring action.",
            "Not giving the AI enough creative freedom to make the story engaging."
          ]
        },
        {
          id: 2,
          type: "Multi-Step",
          title: "A Knight's Dilemma",
          description: "Great stories have conflict and choices. Let's guide the AI to create a story with a moral dilemma.",
          task: "In three steps, prompt the AI to create a story about a knight sent to deal with a 'dangerous' dragon, only to discover the dragon is protecting a village's only source of clean water.",
          difficulty: "Intermediate",
          points: 180,
          steps: [
            {
              step: 1,
              instruction: "Write a prompt to set the scene: a brave knight is ordered by a greedy king to slay a dragon that is 'hoarding' a river.",
              example: "Set the scene for a fantasy story. A brave knight, Sir Gideon, is commanded by a greedy king to slay a dragon that has blocked a river, causing a water shortage in the kingdom."
            },
            {
              step: 2,
              instruction: "Now, write a prompt where Sir Gideon confronts the dragon and learns the truth: the dragon is actually protecting the river from being poisoned by the king's factories upstream.",
              example: "Sir Gideon reaches the river and confronts the dragon. Write the scene where the dragon reveals that it has blocked the river to protect a small village downstream from the king's industrial waste, which is poisoning the water."
            },
            {
              step: 3,
              instruction: "Finally, write a prompt that forces Sir Gideon to make a choice: obey the king or protect the village. The prompt should ask for a description of his decision and its immediate consequences.",
              example: "Sir Gideon is now faced with a choice: obey his king or protect the innocent villagers. Write the conclusion of the story, describing his decision and what happens immediately after."
            }
          ],
          successCriteria: [
            "Each prompt clearly guides the AI through the narrative arc.",
            "The prompts successfully introduce and resolve the moral dilemma.",
            "The final prompt leads to a clear and impactful conclusion."
          ],
          hints: [
            "Think about the story's message. What do you want the reader to feel?",
            "Use the prompts to build suspense and emotional weight.",
            "The final prompt is the most important. Make sure it asks for a resolution to the dilemma."
          ],
          commonMistakes: [
            "Making the story too simple, with a clear good guy and bad guy.",
            "Not creating a real dilemma for the knight.",
            "Forgetting to ask for the consequences of the knight's decision."
          ]
        },
        {
          id: 3,
          title: "The Compromise Itinerary",
          description: "A great prompt can solve a problem. Let's use AI to plan a trip for two people with very different tastes.",
          task: "Write a prompt to generate a weekend itinerary for a couple visiting York. One person is a history buff who loves museums and quiet walks. The other is a thrill-seeker who loves adventure sports and lively pubs. They have a combined budget of £250 for activities and food.",
          difficulty: "Intermediate",
          points: 200,
          successCriteria: [
            "Clearly defines the two conflicting personas and their interests.",
            "Specifies the location (York) and duration (weekend).",
            "Sets a clear budget constraint (£250 combined).",
            "Asks the AI to create a balanced itinerary that satisfies both people."
          ],
          hints: [
            "You're not just asking for a list of places; you're asking the AI to solve a puzzle.",
            "You could ask the AI to suggest activities they can do together and some they can do separately.",
            "Think about how you can frame the prompt to encourage the AI to be creative in its suggestions."
          ],
          examplePrompt: "Create a balanced weekend itinerary for a couple visiting York. She is a history graduate who wants to explore the city's Roman and Viking past. He is an adrenaline junkie who wants to try something exciting like rock climbing or kayaking. Their total budget for activities and food is £250. The itinerary should include at least one activity they can enjoy together.",
          commonMistakes: [
            "Focusing on only one person's interests.",
            "Forgetting to mention the budget.",
            "Not asking the AI to find a compromise, but just listing options for each person."
          ]
        },
        {
          id: 13,
          title: "Five Fun Facts",
          description: "A straightforward challenge to get interesting, verifiable facts on a topic of your choice.",
          task: "Write a prompt that asks the AI for five fun and surprising facts about the planet Jupiter. Request that the facts are presented in a numbered list.",
          difficulty: "Beginner",
          points: 110,
          successCriteria: [
            "Clearly states the topic (planet Jupiter).",
            "Specifies the exact number of facts required (five).",
            "Asks for a specific tone (fun and surprising).",
            "Requests a numbered list format."
          ],
          hints: [
            "Numbers are your friend. Asking for a specific quantity (e.g., 5 facts, 3 ideas) leads to predictable and well-structured output.",
            "Adjectives matter! Words like 'surprising', 'lesser-known', or 'unusual' can guide the AI to give you more interesting results.",
            "Always specify the format if you need one. 'Numbered list', 'bullet points', 'a single paragraph'.''"
          ],
          examplePrompt: "Please provide me with five fun and surprising facts about the planet Jupiter, presented as a numbered list.",
          commonMistakes: [
            "Asking for 'facts' without a number.",
            "Forgetting to specify the topic clearly.",
            "Not asking for a specific format, which can lead to a dense paragraph that is hard to read."
          ]
        },
        {
          id: 22,
          title: "Email Subject Lines",
          description: "Craft a short, effective email subject line.",
          task: "Write a prompt that asks the AI to generate 5 different subject lines for an email that invites colleagues to a team-building lunch next Friday.",
          difficulty: "Beginner",
          points: 120,
          successCriteria: [
            "Clearly states the purpose of the email (invitation to team lunch).",
            "Specifies the number of subject lines required (5).",
            "The prompt is concise and to the point."
          ],
          hints: [
            "Think about the key information: what, when, who.",
            "You can ask for a specific tone, like 'friendly and informal' or 'professional'.''"
          ],
          examplePrompt: "Generate 5 friendly and informal subject lines for an email inviting my team to a casual lunch next Friday.",
          commonMistakes: [
            "Not being clear about the email's content.",
            "Forgetting to specify how many options you want."
          ]
        },
        {
          id: 32,
          title: "Summarise This!",
          description: "A very common task: summarising a piece of text.",
          task: "Write a prompt that asks the AI to summarise a short paragraph into a single sentence.",
          originalText: "The Industrial Revolution was a period of major industrialization and innovation that took place during the late 18th and early 19th centuries. It began in Great Britain and quickly spread throughout the world, leading to massive social and economic changes. Key inventions like the steam engine transformed production processes, leading to the growth of factories and cities.",
          difficulty: "Beginner",
          points: 130,
          successCriteria: [
            "Includes the text to be summarised.",
            "Specifies the desired output length (a single sentence)."
          ],
          hints: [
            "You can specify the audience for the summary, e.g., 'summarise this for a busy executive'.",
            "Length constraints are vital for summarisation tasks."
          ],
          examplePrompt: "Summarise the following paragraph into a single, concise sentence: 'The Industrial Revolution was a period of major industrialization and innovation that took place during the late 18th and early 19th centuries. It began in Great Britain and quickly spread throughout the world, leading to massive social and economic changes. Key inventions like the steam engine transformed production processes, leading to the growth of factories and cities.'",
          commonMistakes: [
            "Forgetting to provide the text.",
            "Not specifying how long the summary should be."
          ]
        },
        {
          id: 33,
          title: "Explain It Simply",
          description: "Ask the AI to explain a concept in simple terms.",
          task: "Write a prompt that asks the AI to explain the concept of 'inflation' as you would to a teenager.",
          difficulty: "Beginner",
          points: 135,
          successCriteria: [
            "Clearly states the concept to be explained ('inflation').",
            "Defines the target audience (a teenager)."
          ],
          hints: [
            "Defining the audience is the most important part of this prompt.",
            "You can also ask for an analogy to be included."
          ],
          examplePrompt: "Explain the economic concept of inflation to a 16-year-old who has no prior knowledge of the subject. Use a simple analogy to help illustrate the point.",
          commonMistakes: [
            "Forgetting to define the audience.",
            "Asking for an explanation without any constraints."
          ]
        },
        {
          id: 46,
          title: "Give Me a List",
          description: "A simple challenge to generate a list of items.",
          task: "Write a prompt that asks the AI for a list of 7 historical figures who were also artists.",
          difficulty: "Beginner",
          points: 115,
          successCriteria: [
            "Asks for a list of items.",
            "Specifies the number of items (7).",
            "Defines the criteria for the items (historical figures who were also artists)."
          ],
          hints: [
            "Lists are a great way to get structured information quickly.",
            "Be as specific as you can about the items you want in the list."
          ],
          examplePrompt: "Please provide a list of 7 historical figures who were also accomplished artists.",
          commonMistakes: [
            "Asking for a list without specifying the number of items.",
            "Being too vague about the list criteria."
          ]
        },
        {
          id: 47,
          title: "A Simple Poem",
          description: "Ask the AI to write a short, simple poem.",
          task: "Write a prompt that asks the AI to write a four-line poem about the moon.",
          difficulty: "Beginner",
          points: 125,
          successCriteria: [
            "Asks for a poem.",
            "Specifies the length of the poem (four lines).",
            "Defines the subject of the poem (the moon)."
          ],
          hints: [
            "You can ask for a specific rhyming scheme (e.g., AABB, ABAB).",
            "You can also suggest a mood for the poem (e.g., happy, mysterious)."
          ],
          examplePrompt: "Please write a short, four-line poem about the moon.",
          commonMistakes: [
            "Asking for a poem without any constraints.",
            "Forgetting to provide a subject."
          ]
        },
        {
          id: 60,
          title: "Translation Task",
          description: "A basic translation challenge.",
          task: "Write a prompt that asks the AI to translate the English phrase 'Hello, how are you?' into French.",
          difficulty: "Beginner",
          points: 105,
          successCriteria: [
            "Specifies the phrase to be translated.",
            "Specifies the target language (French)."
          ],
          hints: [
            "For simple translations, this is all you need.",
            "You can also specify the source language if it might be ambiguous."
          ],
          examplePrompt: "Translate the English phrase 'Hello, how are you?' into French.",
          commonMistakes: [
            "Forgetting to specify the target language.",
            "Not providing the phrase to be translated."
          ]
        },
        {
          id: 61,
          title: "Define a Word",
          description: "Get a simple definition for a word.",
          task: "Write a prompt that asks the AI for a simple definition of the word 'photosynthesis'.",
          difficulty: "Beginner",
          points: 100,
          successCriteria: [
            "Asks for a definition.",
            "Specifies the word to be defined ('photosynthesis')."
          ],
          hints: [
            "You can ask for the definition to be suitable for a specific audience, like a child.",
            "You can also ask for an example of the word used in a sentence."
          ],
          examplePrompt: "Please provide a simple definition of the word 'photosynthesis'.",
          commonMistakes: [
            "Asking for a definition without providing the word."
          ]
        },
        {
          id: 74,
          title: "Get Directions",
          description: "Ask for simple, step-by-step directions.",
          task: "Write a prompt that asks for walking directions from Buckingham Palace to the Houses of Parliament in London.",
          difficulty: "Beginner",
          points: 140,
          successCriteria: [
            "Specifies the start and end points.",
            "Asks for walking directions.",
            "Requests a step-by-step format."
          ],
          hints: [
            "Be as specific as possible with your locations.",
            "You can ask for the output to be a numbered list for clarity."
          ],
          examplePrompt: "Please provide step-by-step walking directions from Buckingham Palace to the Houses of Parliament in London.",
          commonMistakes: [
            "Being vague about the start or end locations.",
            "Not specifying the mode of transport (walking, driving, etc.)."
          ]
        },
        {
          id: 75,
          title: "Correct My Grammar",
          description: "Use the AI as a simple proofreader.",
          task: "Write a prompt that gives the AI a sentence with a grammatical error and asks it to correct it.",
          originalText: "Me and my friend is going to the park.",
          difficulty: "Beginner",
          points: 130,
          successCriteria: [
            "Provides the incorrect sentence.",
            "Asks the AI to correct the grammar."
          ],
          hints: [
            "This is a great way to check your own writing.",
            "You can also ask the AI to explain the correction."
          ],
          examplePrompt: "Please correct the grammar in the following sentence: 'Me and my friend is going to the park.'",
          commonMistakes: [
            "Forgetting to provide the sentence to be corrected."
          ]
        },
        {
            id: 88,
            title: "Give me Synonyms",
            description: "Find alternative words.",
            task: "Write a prompt that asks the AI for 5 synonyms for the word 'happy'.",
            difficulty: "Beginner",
            points: 110,
            successCriteria: [
                "Asks for synonyms.",
                "Specifies the word ('happy').",
                "Requests a specific number of synonyms (5)."
            ],
            hints: [
                "This is useful for improving your vocabulary and making your writing more interesting.",
                "You can also ask for antonyms (words with the opposite meaning)."
            ],
            examplePrompt: "What are 5 synonyms for the word 'happy'?",
            commonMistakes: [
                "Forgetting to specify the word or the number of synonyms."
            ]
        },
        {
            id: 89,
            title: "UK Capital City Quiz",
            description: "Ask the AI a simple factual question about the UK.",
            task: "Write a prompt that asks the AI for the capital city of Scotland.",
            difficulty: "Beginner",
            points: 100,
            successCriteria: [
                "Asks a clear, factual question."
            ],
            hints: [
                "The AI is very good at answering questions that have a single correct answer.",
                "Try asking it other simple trivia questions about the UK!"
            ],
            examplePrompt: "What is the capital city of Scotland?",
            commonMistakes: [
                "Asking a question that is too ambiguous or subjective."
            ]
        }
      ]
    },
    {
      id: 2,
      name: "Stage 2 - The Director's Chair",
      title: "Roles, Tone, and Style",
      description: "Learn to give the AI a persona and a specific voice. Become the director of your own AI-powered performance.",
      colour: "#059669",
      unlocked: false,
      challenges: [
        {
          id: 4,
          type: "Roleplay",
          title: "The Shakespearean Cat",
          description: "A fun challenge to practise giving the AI a very specific and unusual persona.",
          task: "Write a prompt that makes the AI respond as a cat, but with the vocabulary and dramatic flair of William Shakespeare.",
          difficulty: "Intermediate",
          points: 200,
          successCriteria: [
            "Clearly assigns the role of a cat.",
            "Specifies the Shakespearean linguistic style.",
            "Asks the AI to describe a common cat activity (like asking for food) in this style.",
            "The resulting prompt is both specific and imaginative."
          ],
          hints: [
            "Start your prompt with 'Act as...' or 'You are a...'. This is a powerful way to set a persona.",
            "You can even give the AI a name to help it get into character.",
            "Be explicit about the style: '...speak as if you are a character in a Shakespearean play.''.''"
          ],
          examplePrompt: "I want you to act as a cat named Tiberius. You are dramatic, eloquent, and speak in the style of William Shakespeare. Describe your urgent need for a morning meal.",
          commonMistakes: [
            "Simply saying 'be dramatic' without giving a clear persona.",
            "Forgetting to specify the cat's perspective.",
            "Asking for a simple translation instead of a creative, in-character response."
          ]
        },
        {
          id: 5,
          type: "Style-Transfer",
          title: "Formal to Friendly",
          description: "A common real-world task is to adjust the tone of a message. Let's practise that.",
          task: "You have a formal, corporate announcement. Write a prompt to rewrite it in a warm, friendly, and encouraging tone for a team of close colleagues.",
          originalText: "Management requires all staff to complete the mandatory annual compliance training by Friday 17:00. Failure to comply will result in restricted system access.",
          difficulty: "Intermediate",
          points: 220,
          successCriteria: [
            "Includes the original text to be rewritten.",
            "Clearly defines the target audience (close colleagues).",
            "Specifies the desired tone (warm, friendly, encouraging).",
            "Asks the AI to keep the core message (complete the training by Friday) but change the delivery."
          ],
          hints: [
            "You can put the original text in quotation marks to make it clear.",
            "Use descriptive words for the tone, like 'upbeat', 'supportive', or 'collaborative'.",
            "Think about the 'why'. Why does the tone need to change? Mentioning this can help the AI."
          ],
          examplePrompt: "Please rewrite the following corporate announcement into a friendly and encouraging message for my team. We all know each other well, so the tone should be warm and supportive. Here is the original text: 'Management requires all staff to complete the mandatory annual compliance training by Friday 17:00. Failure to comply will result in restricted system access.'",
          commonMistakes: [
            "Forgetting to include the original text.",
            "Using vague instructions like 'make it better'.",
            "Not specifying who the new message is for."
          ]
        },
        {
          id: 6,
          title: "The Cynical Historian",
          description: "Push the boundaries of tone and persona. Can you make the AI adopt a specific, nuanced personality?",
          task: "Write a prompt that asks the AI to explain the invention of the telephone, but from the perspective of a cynical historian who thinks everything is overrated.",
          difficulty: "Intermediate",
          points: 230,
          successCriteria: [
            "Assigns a clear persona (cynical historian).",
            "Specifies the topic to be explained (invention of the telephone).",
            "Gives guidance on the desired tone (cynical, unimpressed, dismissive).",
            "The prompt encourages a creative and character-driven response."
          ],
          hints: [
            "Use strong, evocative words to define the persona, like 'jaded', 'world-weary', or 'perpetually unimpressed'.",
            "You can ask the AI to include specific phrases or opinions, e.g., '...and make sure you mention how it just led to more people talking nonsense.'.",
            "Contrast is key. The mundane topic (a telephone) clashes with the strong personality."
          ],
          examplePrompt: "Act as a deeply cynical historian who is unimpressed by famous inventions. Explain the invention of the telephone, but do so with a tone of utter world-weariness, highlighting how it was probably a bad idea in the long run.",
          commonMistakes: [
            "Asking for a 'negative' tone without the nuance of a persona.",
            "Choosing a topic that doesn't create a fun contrast with the persona.",
            "Forgetting to give the AI a role, just asking for a cynical explanation."
          ]
        },
        {
          id: 14,
          title: "The Enthusiastic Museum Curator",
          description: "Practise adopting a very specific, positive, and knowledgeable persona.",
          task: "Write a prompt asking the AI to act as an enthusiastic museum curator and describe the Rosetta Stone to a group of visiting primary school children.",
          difficulty: "Intermediate",
          points: 240,
          successCriteria: [
            "Assigns a clear, enthusiastic persona (museum curator).",
            "Defines the audience (primary school children).",
            "Specifies the object to be described (the Rosetta Stone).",
            "Encourages the use of analogies and simple language."
          ],
          hints: [
            "Words like 'enthusiastic', 'passionate', and 'joyful' can shape the AI's tone.",
            "Mentioning the audience is crucial for getting the complexity right.",
            "You can ask the AI to end with a fun question for the 'children'.'.''"
          ],
          examplePrompt: "You are an enthusiastic museum curator with a passion for ancient history. Explain what the Rosetta Stone is and why it's so important to a group of curious eight-year-olds. Use simple analogies and end with a fun question to keep them engaged.",
          commonMistakes: [
            "Forgetting to specify the audience.",
            "Not giving the curator a personality, just a job title.",
            "Asking for a dry explanation rather than an engaging one."
          ]
        },
        {
          id: 23,
          title: "The Pirate Translator",
          description: "A fun style transfer challenge to practise creativity.",
          task: "Write a prompt that takes a simple sentence and rewrites it in the style of a classic, swashbuckling pirate.",
          originalText: "Could you please tell me where the nearest supermarket is?",
          difficulty: "Intermediate",
          points: 210,
          successCriteria: [
            "Includes the original sentence.",
            "Clearly specifies the target style (a pirate).",
            "The prompt is simple and direct."
          ],
          hints: [
            "Have fun with it! You can even specify the type of pirate.",
            "This works for any style: a robot, a king, a detective from a 1940s film..."
          ],
          examplePrompt: "Rewrite the following sentence as if a swashbuckling pirate from the 18th century were saying it: 'Could you please tell me where the nearest supermarket is?'",
          commonMistakes: [
            "Forgetting the original sentence.",
            "Not being specific enough about the desired style."
          ]
        },
        {
          id: 34,
          title: "The Film Noir Detective",
          description: "Adopt a classic film noir persona to solve a modern problem.",
          task: "Write a prompt that asks the AI to act as a cynical, hardboiled 1940s film noir detective. The detective's task is to describe how to find a lost set of keys in a messy flat.",
          difficulty: "Intermediate",
          points: 250,
          successCriteria: [
            "Assigns a clear persona (film noir detective).",
            "Specifies the task (finding lost keys).",
            "Encourages the use of classic film noir slang and tone."
          ],
          hints: [
            "Watch a classic film noir movie for inspiration! Think Humphrey Bogart.",
            "Use words like 'dame', 'joint', 'case', and describe the scene in a dramatic, shadowy way."
          ],
          examplePrompt: "You are a hardboiled film noir detective in the 1940s. A dame has lost her keys in her messy flat. Describe, in your cynical and world-weary voice, the step-by-step process of how you'd search the joint to crack the case.",
          commonMistakes: [
            "Making the persona too generic.",
            "Forgetting to give the detective a specific, mundane task to create a humorous contrast."
          ]
        },
        {
          id: 35,
          title: "The Cheerful Robot",
          description: "Explore a non-human persona.",
          task: "Write a prompt that asks the AI to act as a cheerful and slightly naive robot assistant. The robot should explain how to make a cup of tea.",
          difficulty: "Intermediate",
          points: 245,
          successCriteria: [
            "Assigns a clear persona (cheerful robot).",
            "Specifies the task (making tea).",
            "Encourages a specific tone (cheerful, naive, perhaps overly literal)."
          ],
          hints: [
            "Think about how a robot might misinterpret human customs.",
            "Use phrases like 'Greetings, human!' to establish the persona."
          ],
          examplePrompt: "Act as Unit 734, a cheerful and helpful robot assistant. With relentless optimism and a very literal interpretation of instructions, explain the process of making a human beverage known as 'a cup of tea'.",
          commonMistakes: [
            "Making the robot sound too human.",
            "Forgetting the cheerful and naive aspect of the personality."
          ]
        },
        {
          id: 48,
          title: "The Bored Teenager",
          description: "Capture a very specific, and very funny, adolescent tone.",
          task: "Write a prompt that asks the AI to explain the importance of recycling, but in the voice of a bored, sarcastic teenager who would rather be anywhere else.",
          difficulty: "Intermediate",
          points: 255,
          successCriteria: [
            "Assigns a clear persona (bored, sarcastic teenager).",
            "Specifies the topic (recycling).",
            "Encourages the use of teenage slang and apathetic tone."
          ],
          hints: [
            "Think about the language teenagers use. Words like 'like', 'whatever', 'literally'.",
            "The humour comes from the contrast between the important topic and the uninterested narrator."
          ],
          examplePrompt: "You are a deeply bored and sarcastic teenager. Your mum has forced you to explain the importance of recycling. Explain it, but make it painfully obvious you think this is, like, literally the most boring thing ever.",
          commonMistakes: [
            "Making the teenager sound angry instead of bored.",
            "Forgetting the core task of explaining recycling."
          ]
        },
        {
          id: 49,
          title: "The Over-the-Top Salesperson",
          description: "Practise writing in an exaggerated, persuasive style.",
          task: "Write a prompt that asks the AI to act as an over-the-top 1980s salesperson trying to sell a completely ordinary object, like a pencil.",
          difficulty: "Intermediate",
          points: 265,
          successCriteria: [
            "Assigns a clear persona (1980s salesperson).",
            "Specifies the mundane object to be sold (a pencil).",
            "Encourages an exaggerated, high-energy, persuasive tone."
          ],
          hints: [
            "Think big hair, big promises, and lots of exclamation marks!",
            "Use classic sales phrases like 'life-changing', 'revolutionary', and 'don't delay!'.'.''"
          ],
          examplePrompt: "Act as a high-energy, fast-talking salesperson from the 1980s. Your job is to sell a simple pencil as if it were the most revolutionary piece of technology ever invented. Use lots of exclamation marks and persuasive language.",
          commonMistakes: [
            "Not capturing the specific 1980s flavour.",
            "Making the sales pitch too believable."
          ]
        },
        {
          id: 62,
          title: "The Diplomatic Email",
          description: "Practise writing a sensitive email with a diplomatic tone.",
          task: "You need to write an email to a colleague to tell them they have made a mistake in a report. Write a prompt that asks the AI to draft this email in a way that is polite, constructive, and avoids blame.",
          difficulty: "Intermediate",
          points: 270,
          successCriteria: [
            "Defines the delicate situation.",
            "Specifies the desired tone (polite, constructive, diplomatic).",
            "Asks for a complete email draft."
          ],
          hints: [
            "Focus on the solution, not the problem.",
            "Use phrases like 'I was wondering if we could look at this together' or 'I might have a suggestion'.'.''"
          ],
          examplePrompt: "Draft a polite and constructive email to a colleague named John. The email needs to gently point out a significant error in the quarterly report he just submitted, without making him feel defensive. The tone should be supportive and focus on finding a solution together.",
          commonMistakes: [
            "Writing a prompt that is too direct and could lead to a blunt email.",
            "Forgetting to specify the desired tone."
          ]
        },
        {
          id: 63,
          title: "The Motivational Coach",
          description: "Adopt the persona of a motivational coach to inspire action.",
          task: "Write a prompt that asks the AI to act as a motivational coach and give a short, powerful speech to someone who is about to run their first marathon.",
          difficulty: "Intermediate",
          points: 260,
          successCriteria: [
            "Assigns a clear persona (motivational coach).",
            "Defines the audience and their situation (running a first marathon).",
            "Asks for a short, powerful speech."
          ],
          hints: [
            "Use strong, inspiring language.",
            "Think about the emotions the person might be feeling: fear, excitement, doubt."
          ],
          examplePrompt: "Act as an inspiring motivational coach. Write a short, powerful speech (under 150 words) to give to someone just before they start their first ever marathon. The speech should acknowledge their hard work and inspire them to believe in themselves.",
          commonMistakes: [
            "Making the speech too long or generic.",
            "Forgetting the context of the marathon."
          ]
        },
        {
          id: 76,
          title: "The Conspiracy Theorist",
          description: "Adopt a paranoid and illogical persona.",
          task: "Write a prompt that asks the AI to explain why the sky is blue, but from the perspective of a conspiracy theorist who believes it's all a government plot.",
          difficulty: "Intermediate",
          points: 270,
          successCriteria: [
            "Assigns a clear persona (conspiracy theorist).",
            "Specifies the topic to be explained (why the sky is blue).",
            "Encourages a paranoid, illogical, and humorous tone."
          ],
          hints: [
            "The more outlandish the conspiracy, the better!",
            "Use classic conspiracy theorist phrases like 'It's all connected!' and 'They don't want you to know!'"
          ],
          examplePrompt: "You are a conspiracy theorist who believes nothing is as it seems. Explain why the sky is blue, but do so by revealing the 'truth' about the vast government conspiracy behind it. Your tone should be paranoid and urgent.",
          commonMistakes: [
            "Making the explanation too believable.",
            "Forgetting the humorous aspect of the persona."
          ]
        },
        {
          id: 77,
          title: "The Nature Documentary Narrator",
          description: "Practise a calm, descriptive, and informative tone.",
          task: "Write a prompt that asks the AI to act as a nature documentary narrator (in the style of David Attenborough) and describe the behaviour of cats in a typical house.",
          difficulty: "Intermediate",
          points: 280,
          successCriteria: [
            "Assigns a clear persona (nature documentary narrator).",
            "Specifies the subject (house cats).",
            "Encourages a calm, descriptive, and slightly dramatic tone."
          ],
          hints: [
            "Think about the language used in nature documentaries: 'Here we see...', 'A magnificent specimen...'.'',
            "Treat the mundane activities of a house cat as if they were wild and fascinating behaviours."
          ],
          examplePrompt: "Act as a nature documentary narrator in the style of David Attenborough. Describe the daily rituals of a common house cat, from waking up to demanding food, as if it were a majestic wild animal in its natural habitat.",
          commonMistakes: [
            "Not capturing the specific, calm tone of a nature narrator.",
            "Forgetting to treat the subject with mock seriousness."
          ]
        },
        {
            id: 90,
            title: "The Royal Proclamation",
            description: "Adopt a formal, regal tone to make an announcement.",
            task: "Write a prompt that asks the AI to act as a medieval king or queen and issue a royal proclamation about a grand tournament.",
            difficulty: "Intermediate",
            points: 275,
            successCriteria: [
                "Assigns a clear persona (medieval monarch).",
                "Specifies the event to be announced (a grand tournament).",
                "Encourages a formal, regal, and slightly archaic tone."
            ],
            hints: [
                "Use words like 'henceforth', 'decree', and 'let it be known'.",
                "Think about the kind of flowery language a monarch might use."
            ],
            examplePrompt: "Act as a medieval king. Write a royal proclamation to be read in every town square, announcing a grand tournament to celebrate the birth of your first child. The tone must be formal, regal, and celebratory.",
            commonMistakes: [
                "Making the tone too modern.",
                "Forgetting the context of the grand tournament."
            ]
        },
        {
            id: 91,
            title: "The Customer Complaint",
            description: "Practise writing a firm but polite complaint.",
            task: "You bought a product that broke immediately. Write a prompt that asks the AI to draft a firm but polite customer complaint email to the company.",
            difficulty: "Intermediate",
            points: 285,
            successCriteria: [
                "Defines the situation (a broken product).",
                "Specifies the desired tone (firm but polite).",
                "Asks for a specific outcome (a refund or replacement)."
            ],
            hints: [
                "State the facts clearly and concisely.",
                "Avoid emotional or angry language. The goal is to get a result.",
                "Be clear about what you want the company to do."
            ],
            examplePrompt: "I bought a coffee machine from your website last week (Order #12345), and it stopped working after only two uses. Please draft a firm but polite email to the customer service department. The email should state the problem clearly and request a full refund.",
            commonMistakes: [
                "Making the email too aggressive.",
                "Forgetting to include key details like the order number or what the desired resolution is."
            ]
        }
      ]
    },
    {
      id: 3,
      name: "Stage 3 - The Architect's Blueprint",
      title: "Structure and Formatting",
      description: "Command the AI to organise its output exactly as you want it. Learn to request tables, lists, and other structured formats.",
      colour: "#F59E0B",
      unlocked: false,
      challenges: [
        {
          id: 7,
          title: "The Perfect Packing List",
          description: "A practical challenge to get the AI to generate a well-structured list.",
          task: "Write a prompt that creates a packing list for a 3-day hiking trip in the Peak District in autumn. The list should be a markdown table with three columns: 'Item', 'Quantity', and 'Reason'.",
          difficulty: "Intermediate",
          points: 250,
          successCriteria: [
            "Specifies the destination, duration, and season for the trip.",
            "Explicitly requests a markdown table.",
            "Defines the exact column headers for the table.",
            "The prompt is clear and contains all necessary constraints."
          ],
          hints: [
            "The more context you provide (location, time of year, activities), the better the list will be.",
            "Always state the desired format directly, e.g., '...in a markdown table.'.",
            "You can even specify an example row to be extra clear."
          ],
          examplePrompt: "Create a packing list for a 3-day hiking trip in the Peak District during autumn. Please format the list as a markdown table with the following columns: 'Item', 'Quantity', and 'Reason'. The list should be comprehensive and prioritise warmth and waterproofing.",
          commonMistakes: [
            "Asking for a 'list' without specifying the format (e.g., table, bullet points).",
            "Forgetting to define the column headers.",
            "Not providing enough context about the trip."
          ]
        },
        {
          id: 8,
          title: "Recipe Generator",
          description: "Get the AI to structure information into a classic, easy-to-follow format.",
          task: "Write a prompt to generate a recipe for vegan chilli. The output must have four distinct sections: 'Description' (a short, enticing paragraph), 'Ingredients' (a bulleted list), 'Method' (a numbered list), and 'Serving Suggestion'.",
          difficulty: "Intermediate",
          points: 260,
          successCriteria: [
            "Specifies the dish and dietary requirement (vegan chilli).",
            "Requests four specific sections with exact titles.",
            "Defines the format for the 'Ingredients' (bullet points) and 'Method' (numbered list) sections.",
            "The prompt is precise about the desired structure."
          ],
          hints: [
            "Use headings or labels in your prompt to define the structure you want, e.g., 'Create the following sections: ...'",
            "Be explicit about list formats (bullet points vs. numbered list) as they serve different purposes.",
            "You can add other constraints, like 'use metric measurements' or 'ready in under 45 minutes'.'.''"
          ],
          examplePrompt: "Please generate a recipe for a hearty vegan chilli. The response must be structured with these exact headings in order: 'Description', 'Ingredients', 'Method', and 'Serving Suggestion'. The ingredients should be a bulleted list, and the method should be a numbered list.",
          commonMistakes: [
            "Not specifying the section titles, leading to a messy output.",
            "Forgetting to define the list formats.",
            "Being too vague about the dish, e.g., 'give me a recipe'."
          ]
        },
        {
          id: 15,
          title: "Job Comparison Table",
          description: "Use a table to compare different options, a very common and useful application.",
          task: "Write a prompt to generate a comparison of three professions: 'Data Analyst', 'UX Designer', and 'Project Manager'. The output must be a markdown table with columns for 'Average Salary (UK)', 'Key Skills', and 'A Day in the Life'.",
          difficulty: "Intermediate",
          points: 270,
          successCriteria: [
            "Specifies the three professions to compare.",
            "Requests a markdown table format.",
            "Defines the exact column headers required.",
            "The request is clear and well-structured."
          ],
          hints: [
            "Listing the items you want to compare ensures the AI doesn't choose for you.",
            "Tables are excellent for direct comparisons. Think about what aspects are most important to compare.",
            "You can add a final column like 'Best For...' to ask for a recommendation."
          ],
          examplePrompt: "Create a markdown table comparing the professions of Data Analyst, UX Designer, and Project Manager. The table should have the following columns: 'Average Salary (UK)', 'Key Skills', and 'A Day in the Life'.",
          commonMistakes: [
            "Asking to 'compare jobs' without specifying which ones.",
            "Not defining the columns, leading to an unstructured comparison.",
            "Forgetting to ask for a table format."
          ]
        },
        {
          id: 24,
          title: "Meeting Agenda",
          description: "Structure a clear and effective meeting agenda.",
          task: "Write a prompt to create an agenda for a 1-hour project kick-off meeting. The agenda should be a numbered list with timings for each item (e.g., 10 mins), the topic, and the person leading that item.",
          difficulty: "Intermediate",
          points: 280,
          successCriteria: [
            "Specifies the meeting type (project kick-off) and duration (1 hour).",
            "Requests a numbered list format.",
            "Asks for specific details for each item: timing, topic, and lead."
          ],
          hints: [
            "Providing the meeting goal helps the AI suggest relevant agenda items.",
            "You can provide the list of attendees to make it even more specific."
          ],
          examplePrompt: "Create a meeting agenda for a 1-hour project kick-off meeting. The output should be a numbered list, and each item should include the duration, the topic, and the name of the person leading that part of the discussion. The attendees are Sarah (Project Manager), Tom (Lead Developer), and Chloe (Designer).",
          commonMistakes: [
            "Asking for an 'agenda' without specifying the format or required details.",
            "Forgetting to mention the meeting's length or purpose."
          ]
        },
        {
          id: 36,
          title: "Pros and Cons List",
          description: "Generate a balanced list of pros and cons for a decision.",
          task: "Write a prompt to generate a list of pros and cons for 'learning to code'. The output should be two separate bulleted lists under the headings 'Pros' and 'Cons'.",
          difficulty: "Intermediate",
          points: 275,
          successCriteria: [
            "Specifies the topic for the pros and cons list ('learning to code').",
            "Requests two distinct lists.",
            "Specifies the headings for the lists ('Pros' and 'Cons')."
          ],
          hints: [
            "This structure is great for exploring a decision in a balanced way.",
            "You can ask for a specific number of points in each list."
          ],
          examplePrompt: "Generate a list of the pros and cons of learning to code. Please structure the response with two bulleted lists under the clear headings: 'Pros' and 'Cons'.",
          commonMistakes: [
            "Asking for 'pros and cons' without specifying the desired format.",
            "Not providing a clear topic."
          ]
        },
        {
          id: 37,
          title: "JSON Object",
          description: "Generate a structured JSON object from a description.",
          task: "Write a prompt to generate a JSON object representing a 'user' with the following attributes: 'id' (a number), 'username' (a string), 'email' (a string), and 'isActive' (a boolean).",
          difficulty: "Intermediate",
          points: 285,
          successCriteria: [
            "Specifies the desired output format (JSON).",
            "Lists the required attributes for the object.",
            "Specifies the data type for each attribute."
          ],
          hints: [
            "This is very useful for generating sample data for software development.",
            "Be very precise about the attribute names and their types."
          ],
          examplePrompt: "Generate a JSON object that represents a user. The object should have the following keys with the specified data types: 'id' (number), 'username' (string), 'email' (string), and 'isActive' (boolean).",
          commonMistakes: [
            "Forgetting to specify the data types.",
            "Not being clear about the desired structure."
          ]
        },
        {
          id: 50,
          title: "Timeline of Events",
          description: "Generate a chronological timeline.",
          task: "Write a prompt to generate a timeline of the key events of the Apollo 11 mission. The timeline should be a numbered list with the year and a short description of each event.",
          difficulty: "Intermediate",
          points: 290,
          successCriteria: [
            "Specifies the topic (Apollo 11 mission).",
            "Requests a timeline format.",
            "Asks for specific details (year, description)."
          ],
          hints: [
            "Timelines are great for understanding historical events.",
            "You can ask for a specific number of events to be included."
          ],
          examplePrompt: "Generate a timeline of the key events of the Apollo 11 mission, from launch to splashdown. Present it as a numbered list, with the year and a brief description for each major milestone.",
          commonMistakes: [
            "Asking for 'history' without specifying a timeline format.",
            "Not being clear about the topic."
          ]
        },
        {
          id: 51,
          title: "SWOT Analysis",
          description: "Generate a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis.",
          task: "Write a prompt to generate a SWOT analysis for a fictional local coffee shop. The output should have four sections with bullet points under each heading: Strengths, Weaknesses, Opportunities, and Threats.",
          difficulty: "Intermediate",
          points: 295,
          successCriteria: [
            "Specifies the subject of the analysis (local coffee shop).",
            "Requests a SWOT analysis format.",
            "Defines the four required sections."
          ],
          hints: [
            "This is a classic business analysis tool.",
            "You can provide more context about the fictional business to get a more detailed analysis."
          ],
          examplePrompt: "Please generate a SWOT analysis for a small, independent coffee shop in a busy city centre. The output should be structured with four headings: Strengths, Weaknesses, Opportunities, and Threats, with at least three bullet points under each.",
          commonMistakes: [
            "Forgetting to specify the subject for the analysis.",
            "Not asking for the specific SWOT structure."
          ]
        },
        {
          id: 64,
          title: "FAQ Section",
          description: "Generate a set of Frequently Asked Questions.",
          task: "Write a prompt to generate an FAQ section (3 questions and answers) for a website that sells houseplants online.",
          difficulty: "Intermediate",
          points: 280,
          successCriteria: [
            "Specifies the topic (houseplant website).",
            "Asks for an FAQ format.",
            "Requests a specific number of questions and answers (3)."
          ],
          hints: [
            "Think about the common questions a customer might have.",
            "You can specify the questions you want answered."
          ],
          examplePrompt: "Generate a list of 3 frequently asked questions and their answers for the FAQ page of an online houseplant store. The questions should cover shipping, plant care, and returns.",
          commonMistakes: [
            "Asking for an FAQ without providing any context.",
            "Forgetting to specify how many questions to generate."
          ]
        },
        {
          id: 65,
          title: "Mind Map",
          description: "Generate a mind map structure in text.",
          task: "Write a prompt to generate a mind map on the topic of 'Effective Time Management'. The output should use indentation to show the hierarchy of ideas, with a central topic and at least three main branches.",
          difficulty: "Intermediate",
          points: 300,
          successCriteria: [
            "Specifies the topic (Effective Time Management).",
            "Asks for a mind map format.",
            "Requests a hierarchical structure using indentation."
          ],
          hints: [
            "This is a great way to brainstorm and structure ideas.",
            "You can specify the main branches you want to see."
          ],
          examplePrompt: "Generate a mind map on the topic of 'Effective Time Management'. Use indented bullet points to create a hierarchy. The central topic should be 'Time Management', and it should have at least three main branches: 'Prioritisation', 'Tools', and 'Mindset'.",
          commonMistakes: [
            "Asking for a mind map without specifying the structure.",
            "Not providing a clear central topic."
          ]
        },
        {
          id: 78,
          title: "The Press Release",
          description: "Generate a formal press release.",
          task: "Write a prompt to generate a press release for a fictional tech company announcing a new product: a flying car. The press release should have a headline, a dateline, an introduction, a body, and a contact information section.",
          difficulty: "Intermediate",
          points: 310,
          successCriteria: [
            "Specifies the subject of the press release (new product announcement).",
            "Defines the required sections of the press release.",
            "Provides key details about the fictional company and product."
          ],
          hints: [
            "Press releases have a very specific format. It's important to define it.",
            "You can ask for a specific tone, like 'formal and professional'."
          ],
          examplePrompt: "Write a professional press release for a fictional company called 'AeroFuture' announcing their new product, the 'Model Z' flying car. The press release must include a headline, dateline, introduction, body (with a quote from the CEO), and a media contact section.",
          commonMistakes: [
            "Not specifying the required structure of a press release.",
            "Forgetting to include key details about the announcement."
          ]
        },
        {
          id: 79,
          title: "The Book Blurb",
          description: "Write a compelling blurb for the back of a book.",
          task: "Write a prompt to generate a book blurb (around 150 words) for a fantasy novel about a young woman who discovers she can talk to ghosts.",
          difficulty: "Intermediate",
          points: 305,
          successCriteria: [
            "Specifies the genre (fantasy).",
            "Provides the core concept of the story.",
            "Sets a length constraint (around 150 words).",
            "Asks for a compelling and intriguing tone."
          ],
          hints: [
            "A good blurb introduces the character, the world, and the conflict, and ends with a hook.",
            "Think about the questions you want to leave in the reader's mind."
          ],
          examplePrompt: "Write a compelling book blurb (around 150 words) for a new fantasy novel. The story is about a young woman named Elara who discovers she has the unwanted ability to speak to the ghosts of her city. The blurb should be mysterious and end on a cliffhanger.",
          commonMistakes: [
            "Giving away too much of the plot.",
            "Forgetting to set a word count, leading to a blurb that is too long."
          ]
        },
        {
            id: 92,
            title: "The Award Ceremony Speech",
            description: "Generate a speech for a formal occasion.",
            task: "Write a prompt to generate a short, humble acceptance speech for an actor winning a 'Best Actor' award. The speech should thank the academy, the director, and their family.",
            difficulty: "Intermediate",
            points: 290,
            successCriteria: [
                "Specifies the occasion (award ceremony).",
                "Defines the persona (an actor).",
                "Lists the key people to thank."
            ],
            hints: [
                "Speeches have a natural flow: introduction, thank yous, conclusion.",
                "You can specify a tone, like 'humble', 'emotional', or 'humorous'."
            ],
            examplePrompt: "Generate a short and humble acceptance speech for an actor winning a 'Best Actor' award. The speech should be under 100 words and must thank the academy, the film's director, and their family.",
            commonMistakes: [
                "Forgetting to specify who to thank.",
                "Making the speech too long."
            ]
        },
        {
            id: 93,
            title: "Quiz Questions",
            description: "Generate a set of quiz questions on a specific topic.",
            task: "Write a prompt to generate 5 multiple-choice quiz questions about the Solar System. Each question should have four possible answers, with one being correct.",
            difficulty: "Intermediate",
            points: 300,
            successCriteria: [
                "Specifies the topic (Solar System).",
                "Asks for a specific number of questions (5).",
                "Defines the format (multiple-choice) and the number of options (4)."
            ],
            hints: [
                "This is a great way to create study materials or fun quizzes.",
                "You can ask the AI to also provide the correct answer for each question."
            ],
            examplePrompt: "Generate 5 multiple-choice quiz questions about the Solar System. Each question should have four possible answers (A, B, C, D), and only one should be correct. Please also indicate the correct answer for each question.",
            commonMistakes: [
                "Forgetting to specify the number of questions or the format.",
                "Not providing a clear topic."
            ]
        }
      ]
    },
    {
      id: 4,
      name: "Stage 4 - The Creative Spark",
      title: "Ideation and Brainstorming",
      description: "Use the AI as a creative partner to generate ideas, explore concepts, and overcome creative blocks.",
      colour: "#EF4444",
      unlocked: false,
      challenges: [
        {
          id: 9,
          title: "Podcast Name Brainstorm",
          description: "Generate a list of creative names for a new podcast. This tests your ability to convey a concept and ask for variety.",
          task: "Write a prompt to generate 10 potential names for a podcast about the history of forgotten inventions. The names should be catchy, under four words, and fall into three categories: 'Clever Puns', 'Intriguing and Mysterious', and 'Straightforward and Descriptive'.",
          difficulty: "Advanced",
          points: 300,
          successCriteria: [
            "Specifies the podcast's topic (history of forgotten inventions).",
            "Requests a specific number of names (10).",
            "Defines clear categories for the names.",
            "Includes a constraint on the length of the names (under four words)."
          ],
          hints: [
            "Categorisation is a powerful tool for brainstorming. It forces the AI to think along different creative avenues.",
            "Constraints like word count help to keep the ideas focused.",
            "You can also specify a target audience to help guide the tone of the names."
          ],
          examplePrompt: "I need 10 name ideas for a new podcast about the history of forgotten inventions. Please provide them in three groups with headings: 'Clever Puns', 'Intriguing and Mysterious', and 'Straightforward and Descriptive'. All names should be four words or fewer.",
          commonMistakes: [
            "Asking for 'some names' without a number or categories.",
            "Not giving the AI the topic of the podcast.",
            "Forgetting constraints, leading to long or irrelevant suggestions."
          ]
        },
        {
          id: 10,
          type: "Reverse-Prompt-Engineering",
          title: "The Mysterious Output",
          description: "A different kind of challenge. Given the AI's response, can you figure out the prompt that created it?",
          task: "An AI produced the following text. Your task is to write the most likely prompt that generated this output. The prompt should be concise and effective.",
          aiOutput: "Title: Echoes of the Void\nCharacters:\n- Kaelen, a cynical star-pilot with a hidden heart of gold.\n- Zylia, a runaway alien botanist with a dangerous secret.\nPlot: Kaelen discovers Zylia as a stowaway on his ship. They must outrun the galactic corporation that is hunting her, while slowly uncovering a conspiracy that could change the galaxy forever. The story should have a tone that is a mix of 'Firefly' and 'Casablanca'.",
          difficulty: "Advanced",
          points: 320,
          successCriteria: [
            "The reconstructed prompt is concise and elegant.",
            "It likely asks for a story concept or outline.",
            "It probably specifies the genre and requests character descriptions.",
            "It almost certainly mentions the 'Firefly' and 'Casablanca' tone."
          ],
          hints: [
            "Look at the structure of the output. The headings ('Title', 'Characters', 'Plot') are big clues.",
            "The specific details, like the character archetypes and the tone comparison, must have been requested.",
            "Think about what you would ask for if you wanted this exact output. Work backwards."
          ],
          examplePrompt: "Generate a sci-fi story concept with a title, two character descriptions, and a plot summary. The tone should be a blend of the TV show 'Firefly' and the film 'Casablanca'.",
          commonMistakes: [
            "Writing a prompt that is too long or includes unnecessary details.",
            "Missing the key constraints, especially the tone.",
            "Asking for a full story instead of a concept."
          ]
        },
        {
          id: 16,
          title: "Analogy Generator",
          description: "Use the AI to create powerful analogies that make complex topics easy to understand.",
          task: "Write a prompt that asks the AI to generate three different analogies to explain 'blockchain technology' to a non-technical audience. For each analogy, it should also provide a brief explanation of how the analogy relates to the concept.",
          difficulty: "Advanced",
          points: 310,
          successCriteria: [
            "Clearly states the complex topic (blockchain technology).",
            "Specifies the target audience (non-technical).",
            "Requests a specific number of analogies (three).",
            "Asks for an explanation for each analogy."
          ],
          hints: [
            "Analogies are a fantastic way to simplify complexity. Be clear about who the analogy is for.",
            "Asking for multiple options gives you more creative ammunition to choose from.",
            "The explanation is key. It forces the AI to connect the dots and ensure the analogy is relevant."
          ],
          examplePrompt: "Generate three distinct analogies to explain the concept of blockchain technology to someone who is not technical. After each analogy, add a short paragraph explaining how it works as a comparison.",
          commonMistakes: [
            "Just asking for 'an analogy' without specifying a quantity or audience.",
            "Forgetting to ask for the explanation, which can leave you with a creative but confusing comparison.",
            "Choosing a topic that is too simple to need an analogy."
          ]
        },
        {
          id: 25,
          title: "Startup Idea Generator",
          description: "Use the AI as a brainstorming partner to come up with new business ideas.",
          task: "Write a prompt to generate three unique startup ideas that combine 'sustainable energy' and 'community gardening'. For each idea, provide a name, a one-sentence pitch, and a potential target customer.",
          difficulty: "Advanced",
          points: 330,
          successCriteria: [
            "Specifies the two concepts to be combined ('sustainable energy' and 'community gardening').",
            "Requests a specific number of ideas (three).",
            "Defines the required output for each idea (name, pitch, customer)."
          ],
          hints: [
            "Combining two seemingly unrelated concepts is a great way to spark innovation.",
            "Asking for specific deliverables (pitch, customer) makes the ideas more concrete."
          ],
          examplePrompt: "Generate three unique startup ideas at the intersection of sustainable energy and community gardening. For each idea, please provide a potential name, a one-sentence pitch, and the primary target customer.",
          commonMistakes: [
            "Asking for ideas without providing any creative constraints or starting points.",
            "Forgetting to ask for the structured output (name, pitch, etc.)."
          ]
        },
        {
          id: 38,
          title: "Plot Twist Generator",
          description: "Generate unexpected plot twists for a story.",
          task: "You have a simple story premise. Write a prompt to generate three surprising plot twists for it.",
          originalText: "A detective is hunting a jewel thief across Europe.",
          difficulty: "Advanced",
          points: 340,
          successCriteria: [
            "Provides the initial story premise.",
            "Asks for a specific number of plot twists (three).",
            "Encourages the AI to be surprising and creative."
          ],
          hints: [
            "You can ask for twists of different kinds: a character twist, a goal twist, a world twist.",
            "The more specific the premise, the more relevant the twists will be."
          ],
          examplePrompt: "I'm writing a story where a detective is hunting a jewel thief across Europe. Give me three completely unexpected plot twists to make the story more exciting.",
          commonMistakes: [
            "Asking for twists without a story to apply them to.",
            "Not specifying how many twists you want."
          ]
        },
        {
          id: 39,
          title: "The Unlikely Combination",
          description: "Spark creativity by combining two random concepts.",
          task: "Write a prompt that asks the AI to generate a concept for a video game that combines the genre of 'dating sim' with the theme of 'cosmic horror'.",
          difficulty: "Advanced",
          points: 350,
          successCriteria: [
            "Specifies the two unlikely concepts to combine.",
            "Asks for a 'video game concept'.",
            "The prompt is simple and open-ended to allow for creativity."
          ],
          hints: [
            "This is a great technique for breaking creative blocks.",
            "You can try it with any two random things: a recipe that combines 'strawberries' and 'basil', a story about a 'time-travelling librarian', etc."
          ],
          examplePrompt: "Generate a concept for a video game that is a mash-up of two genres: a romantic dating sim and cosmic horror.",
          commonMistakes: [
            "Choosing two concepts that are too similar.",
            "Being too prescriptive and not allowing the AI to be creative."
          ]
        },
        {
          id: 52,
          title: "Marketing Slogans",
          description: "Generate catchy slogans for a product.",
          task: "Write a prompt to generate 5 catchy marketing slogans for a new brand of eco-friendly coffee.",
          difficulty: "Advanced",
          points: 360,
          successCriteria: [
            "Specifies the product (eco-friendly coffee).",
            "Asks for a specific number of slogans (5).",
            "Encourages catchiness and creativity."
          ],
          hints: [
            "Mention the target audience to help the AI tailor the slogans.",
            "You can specify a desired tone, like 'playful', 'sophisticated', or 'urgent'.'.''"
          ],
          examplePrompt: "Generate 5 catchy and memorable marketing slogans for a new brand of organic, fair-trade coffee aimed at environmentally conscious millennials.",
          commonMistakes: [
            "Asking for slogans without describing the product or its values.",
            "Forgetting to specify the quantity of slogans."
          ]
        },
        {
          id: 53,
          title: "Character Backstory",
          description: "Generate a detailed backstory for a fictional character.",
          task: "Write a prompt to generate a backstory for a fantasy character: an exiled elven prince who is now a street performer in a human city.",
          difficulty: "Advanced",
          points: 370,
          successCriteria: [
            "Provides a clear character concept.",
            "Asks for a backstory.",
            "Includes key details to guide the story (exiled prince, street performer)."
          ],
          hints: [
            "You can ask for specific elements to be included in the backstory, like 'how he was exiled' or 'what his special talent is'.",
            "The more detail you provide, the richer the backstory will be."
          ],
          examplePrompt: "Generate a detailed backstory for an exiled elven prince who now makes a living as a street magician in a grimy human city. Explain why he was exiled and what he hopes to achieve.",
          commonMistakes: [
            "Making the character concept too generic.",
            "Not asking for specific details to be included in the backstory."
          ]
        },
        {
          id: 66,
          title: "New Product Ideas",
          description: "Brainstorm new product ideas based on a theme.",
          task: "Write a prompt to generate 3 new product ideas for a company that makes smart home devices. The ideas should be focused on 'pet wellness'.",
          difficulty: "Advanced",
          points: 380,
          successCriteria: [
            "Specifies the company type (smart home devices).",
            "Defines the theme for the new products ('pet wellness').",
            "Asks for a specific number of ideas (3)."
          ],
          hints: [
            "Combining a product category with a theme is a great way to generate focused ideas.",
            "You can ask for a brief description of each product idea."
          ],
          examplePrompt: "I need three new product ideas for a smart home technology company. The products should be aimed at improving pet wellness. For each idea, provide a name and a one-sentence description.",
          commonMistakes: [
            "Asking for 'new ideas' without any constraints.",
            "Not being specific about the company or the theme."
          ]
        },
        {
          id: 67,
          title: "The Alien Artifact",
          description: "Use the AI to describe something completely imaginary.",
          task: "Write a prompt that asks the AI to describe a mysterious alien artifact that has just been discovered. The description should be from the point of view of a scientist examining it for the first time.",
          difficulty: "Advanced",
          points: 390,
          successCriteria: [
            "Asks for a description of an imaginary object.",
            "Specifies the object (alien artifact).",
            "Defines the persona of the narrator (a scientist)."
          ],
          hints: [
            "Encourage the AI to use sensory details. What does it look, feel, or sound like?",
            "You can leave the function of the artifact a mystery to make it more intriguing."
          ],
          examplePrompt: "You are a scientist who has just discovered a mysterious alien artifact. Write your initial log entry, describing the object's appearance, texture, and any unusual properties you have observed. The tone should be one of awe and confusion.",
          commonMistakes: [
            "Being too prescriptive about what the artifact is or does.",
            "Forgetting to specify the point of view of the narrator."
          ]
        },
        {
          id: 80,
          title: "Themed Restaurant Ideas",
          description: "Brainstorm ideas for a new themed restaurant.",
          task: "Write a prompt to generate 3 unique concepts for a themed restaurant. For each concept, provide a name, a theme description, and a signature dish.",
          difficulty: "Advanced",
          points: 400,
          successCriteria: [
            "Asks for restaurant concepts.",
            "Requests a specific number of ideas (3).",
            "Defines the required output for each idea (name, theme, signature dish)."
          ],
          hints: [
            "Be as creative as you like with the themes!",
            "The signature dish should match the theme of the restaurant."
          ],
          examplePrompt: "Generate 3 unique concepts for a themed restaurant. For each one, give me a name, a short description of the theme, and a signature dish that fits the concept.",
          commonMistakes: [
            "Asking for ideas without any structure.",
            "Making the themes too generic."
          ]
        },
        {
          id: 81,
          title: "The Holiday Mash-Up",
          description: "Invent a new holiday by combining two existing ones.",
          task: "Write a prompt to invent a new holiday that combines the traditions of Halloween and Valentine's Day. Describe the new holiday's name, its main traditions, and what people eat on that day.",
          difficulty: "Advanced",
          points: 410,
          successCriteria: [
            "Specifies the two holidays to be combined.",
            "Asks for a name, traditions, and food for the new holiday."
          ],
          hints: [
            "Think about the core elements of each holiday and how they could be blended.",
            "This is a great exercise in creative synthesis."
          ],
          examplePrompt: "Invent a new holiday that combines the spooky fun of Halloween with the romantic aspects of Valentine's Day. Give the holiday a name, describe its main traditions, and suggest a signature food that people would eat to celebrate.",
          commonMistakes: [
            "Simply listing the traditions of both holidays without combining them.",
            "Forgetting to give the new holiday a name."
          ]
        },
        {
            id: 94,
            title: "Plan a Themed Party",
            description: "Brainstorm all the elements for a themed party.",
            task: "Write a prompt to generate a plan for a '1920s Murder Mystery' themed party. Ask for ideas for decorations, food, costumes, and a simple plot for the mystery.",
            difficulty: "Advanced",
            points: 420,
            successCriteria: [
                "Specifies the party theme.",
                "Asks for ideas across different categories (decorations, food, etc.).",
                "Requests a simple plot to form the basis of the party."
            ],
            hints: [
                "The more specific the theme, the better the ideas.",
                "Breaking down your request into categories helps the AI give a more structured response."
            ],
            examplePrompt: "I'm planning a '1920s Murder Mystery' themed birthday party. Please give me ideas for decorations, food and drink, costume suggestions for guests, and a simple murder mystery plot that can be solved during the evening.",
            commonMistakes: [
                "Being too vague about the theme.",
                "Not asking for different categories of ideas."
            ]
        },
        {
            id: 95,
            title: "Invention Time",
            description: "Invent a new, slightly absurd product.",
            task: "Write a prompt that asks the AI to invent a new kitchen gadget that solves a very minor, slightly ridiculous problem. Ask for the product name, what it does, and a marketing slogan for it.",
            difficulty: "Advanced",
            points: 415,
            successCriteria: [
                "Asks the AI to invent a new product.",
                "Provides a creative constraint (solves a minor, ridiculous problem).",
                "Specifies the required output (name, function, slogan)."
            ],
            hints: [
                "The humour comes from the absurdity of the problem being solved.",
                "Encourage the AI to be creative and funny."
            ],
            examplePrompt: "Invent a new kitchen gadget that solves a minor, slightly absurd problem. Give it a catchy name, explain its function, and write a marketing slogan for it.",
            commonMistakes: [
                "Making the problem too sensible.",
                "Not asking for the specific output structure."
            ]
        }
      ]
    },
    {
      id: 5,
      name: "Stage 5 - The Prompt Medic",
      title: "Debugging and Refinement",
      description: "Analyse and improve weak prompts. Learn to diagnose issues and iterate towards a perfect instruction.",
      colour: "#7C3AED",
      unlocked: false,
      challenges: [
        {
          id: 11,
          type: "Prompt-Rescue",
          title: "The Vague Request",
          description: "Let's rescue a weak prompt and make it powerful.",
          task: "You are given a vague prompt. Your job is to rewrite it to be specific, constrained, and effective. You must also explain *why* your new version is better.",
          originalPrompt: "Tell me about marketing.",
          difficulty: "Expert",
          points: 400,
          successCriteria: [
            "The new prompt is highly specific and actionable.",
            "It adds necessary constraints (e.g., audience, format, goal).",
            "It includes a brief, clear explanation of the improvements made.",
            "The rewritten prompt is a significant upgrade on the original."
          ],
          hints: [
            "A good prompt has a goal. What could the user's goal be? (e.g., write a blog post, create a marketing plan, understand a concept).",
            "Add a persona, a format, and a target audience to the prompt.",
            "Your explanation should identify the flaws in the original (vagueness, lack of context) and how your version solves them."
          ],
          examplePrompt: "Original Prompt: 'Tell me about marketing.'\n\nRewritten Prompt: 'Act as a marketing consultant. I am a small bakery owner who wants to attract more local customers. Create a simple, three-step marketing plan with actionable, low-budget ideas I can implement in the next month. Format the plan as a numbered list.'\n\nExplanation: The original prompt was too vague. My new version provides a clear goal (attract local customers), a specific audience (small bakery owner), a persona for the AI (marketing consultant), and a required format (a three-step, numbered list). This will result in a far more useful and tailored response.",
          commonMistakes: [
            "Making the prompt only slightly more specific (e.g., 'Tell me about digital marketing').",
            "Forgetting to explain the reasoning behind the changes.",
            "Not adding constraints like format or persona."
          ]
        },
        {
          id: 12,
          title: "The Overloaded Prompt",
          description: "Sometimes a prompt asks for too much at once. Your task is to break it down.",
          task: "You are given a prompt that is trying to do too many things. Your task is to split it into a logical, multi-step conversation, creating a sequence of three smaller, more focused prompts.",
          originalPrompt: "Give me a 1000-word blog post about the benefits of remote work, include a section on challenges, find three statistics to back it up with sources, write five social media posts to promote it, and also come up with a catchy title.",
          difficulty: "Expert",
          points: 450,
          successCriteria: [
            "The original prompt is correctly broken down into three logical, sequential prompts.",
            "The first prompt focuses on the core content generation (the blog post).",
            "The subsequent prompts build on the first one (e.g., generating social media posts based on the article).",
            "The sequence is efficient and avoids asking the AI to do unrelated tasks at the same time."
          ],
          hints: [
            "Think about the logical order of operations. You need the blog post *before* you can promote it.",
            "The first prompt should be the biggest 'ask'.",
            "Use phrases like 'Based on the blog post you just wrote...' in the later prompts to ensure continuity."
          ],
          examplePrompt: "Here is a better, three-step approach:\n\nPrompt 1: 'Write a 1000-word blog post titled \'The Pros and Cons of the Modern Workplace\'. The post should explore the benefits and challenges of remote work, citing at least three recent statistics with sources.'\n\nPrompt 2: 'Based on the article you just wrote, generate five engaging social media posts for Twitter to promote it. Include relevant hashtags.'\n\nPrompt 3: 'Now, suggest five alternative, catchy titles for that blog post.'",
          commonMistakes: [
            "Keeping too many tasks in a single prompt.",
            "Putting the prompts in an illogical order.",
            "Not using the output of one prompt as the input for the next."
          ]
        },
        {
          id: 17,
          title: "The Biased Response",
          description: "Learn to guide the AI towards a more balanced and neutral perspective.",
          task: "You receive a biased, one-sided answer from an AI. Write a follow-up prompt to challenge its perspective and ask for a more balanced view.",
          originalOutput: "Electric cars are the perfect solution to climate change, with zero emissions and incredible efficiency. There are no downsides to owning one, and everyone should switch immediately.",
          difficulty: "Expert",
          points: 420,
          successCriteria: [
            "The follow-up prompt acknowledges the previous response.",
            "It directly asks for the opposing viewpoint or downsides.",
            "It uses neutral and objective language.",
            "It aims to get a more nuanced and balanced perspective."
          ],
          hints: [
            "A good way to start is 'Thank you for that perspective. Now, could you argue against it?'",
            "You can ask the AI to take on a different persona, e.g., 'Now, act as a critic of electric cars... '.",
            "Asking for 'challenges', 'drawbacks', or 'alternative viewpoints' are all good strategies."
          ],
          examplePrompt: "Thank you for that summary. To ensure a balanced view, could you now outline the main challenges and downsides of widespread electric car adoption? Please consider factors like battery production, electricity sources, and infrastructure.",
          commonMistakes: [
            "Accepting the biased answer without question.",
            "Being aggressive in the follow-up prompt.",
            "Not specifying the areas of concern to explore."
          ]
        },
        {
          id: 26,
          title: "The Hallucination Check",
          description: "Practise asking the AI to verify its own claims and provide sources.",
          task: "You ask the AI for the height of the Eiffel Tower and it gives you an answer. Write a follow-up prompt to gently ask for a source to verify the information.",
          originalOutput: "The Eiffel Tower is 324 metres tall.",
          difficulty: "Expert",
          points: 430,
          successCriteria: [
            "The prompt is polite and non-confrontational.",
            "It asks for a source or a way to verify the information."
          ],
          hints: [
            "AIs can sometimes 'hallucinate' or invent facts. It's good practice to verify important information.",
            "A simple 'Could you provide a source for that?' is often all you need."
          ],
          examplePrompt: "Thanks! Could you please share the source for that information?",
          commonMistakes: [
            "Assuming the AI is always correct.",
            "Being rude or accusatory in the follow-up."
          ]
        },
        {
          id: 40,
          title: "Refining a Recipe",
          description: "Iterate on a previous output to make it better.",
          task: "The AI gave you a basic recipe for a Victoria sponge. Write a follow-up prompt to make it healthier and suitable for a gluten-free diet.",
          originalOutput: "A classic Victoria sponge recipe with flour, butter, sugar, and eggs.",
          difficulty: "Expert",
          points: 440,
          successCriteria: [
            "References the previous output (the recipe).",
            "Clearly specifies the desired changes (healthier, gluten-free).",
            "Asks for specific substitutions."
          ],
          hints: [
            "Iteration is key! Don't be afraid to ask the AI to refine its answers.",
            "Be specific about what 'healthier' means to you (e.g., less sugar, different flour)."
          ],
          examplePrompt: "Thanks for the Victoria sponge recipe. Could you now adapt it to be gluten-free and a bit healthier? Please suggest a good gluten-free flour substitute and reduce the sugar content if possible.",
          commonMistakes: [
            "Just saying 'make it better' without specific instructions.",
            "Forgetting to mention the dietary constraints."
          ]
        },
        {
          id: 41,
          title: "The Unhelpful Answer",
          description: "Learn how to deal with a generic or unhelpful response.",
          task: "You asked the AI for travel advice and got a generic answer. Write a follow-up prompt to get more specific and useful recommendations.",
          originalOutput: "To have a good holiday, you should plan your budget, book flights in advance, and pack appropriately.",
          difficulty: "Expert",
          points: 450,
          successCriteria: [
            "Acknowledges the previous answer.",
            "Provides more specific context (e.g., destination, interests, budget).",
            "Asks for concrete and actionable advice."
          ],
          hints: [
            "If the AI is too general, it's usually because your prompt was too general. Add more detail!",
            "Give the AI a persona to adopt, e.g., 'Act as a local guide...'..''"
          ],
          examplePrompt: "Thanks for the general advice. I'm planning a 5-day trip to Lisbon, Portugal, in May. I'm interested in history, food, and photography, and my budget is around £80 per day. Could you suggest a more specific itinerary based on this?",
          commonMistakes: [
            "Getting frustrated and ending the conversation.",
            "Asking the same vague question again."
          ]
        },
        {
          id: 54,
          title: "Chain of Thought",
          description: "Ask the AI to explain its reasoning step-by-step.",
          task: "You have a complex question. Write a prompt that asks the AI to solve it, but also to show its working, step-by-step.",
          originalPrompt: "If a train leaves London at 3pm travelling at 100mph, and a car leaves Manchester at 2pm travelling at 60mph, when will they meet?",
          difficulty: "Expert",
          points: 460,
          successCriteria: [
            "Presents a complex problem.",
            "Asks the AI to solve it.",
            "Explicitly asks for a step-by-step explanation of the reasoning."
          ],
          hints: [
            "This 'chain of thought' technique is very powerful for complex problems.",
            "It forces the AI to be more logical and can lead to more accurate results."
          ],
          examplePrompt: "Please solve the following logic problem. Crucially, you must explain your reasoning step-by-step so I can understand how you arrived at the answer. Here is the problem: If a train leaves London at 3pm travelling at 100mph, and a car leaves Manchester at 2pm travelling at 60mph, when will they meet?",
          commonMistakes: [
            "Asking a complex question without asking for the reasoning.",
            "Not providing enough information in the problem itself."
          ]
        },
        {
          id: 55,
          title: "The Ambiguous Pronoun",
          description: "Refine a prompt to remove ambiguity.",
          task: "You have a prompt with an ambiguous pronoun that could lead to confusion. Rewrite it to be more precise.",
          originalPrompt: "The trophy would not fit in the brown suitcase because it was too big.",
          difficulty: "Expert",
          points: 470,
          successCriteria: [
            "Identifies the ambiguous pronoun ('it').",
            "Rewrites the sentence to clarify what 'it' refers to."
          ],
          hints: [
            "Pronouns like 'it', 'they', and 'that' can often be ambiguous. Be specific!",
            "There are two ways to solve this: which one will you choose?"
          ],
          examplePrompt: "The original sentence is ambiguous: 'The trophy would not fit in the brown suitcase because it was too big.' A better prompt would be one of two options: 'The trophy would not fit in the brown suitcase because the trophy was too big.' OR 'The trophy would not fit in the brown suitcase because the suitcase was too small.'",
          commonMistakes: [
            "Not spotting the ambiguity.",
            "Replacing the pronoun with another ambiguous term."
          ]
        },
        {
          id: 68,
          title: "The Useless Hint",
          description: "Refine a prompt that gives unhelpful negative constraints.",
          task: "You have a prompt that tells the AI what *not* to do, but not what *to* do. Rewrite it to be more effective.",
          originalPrompt: "Write a story that is not about dragons and does not take place in space.",
          difficulty: "Expert",
          points: 480,
          successCriteria: [
            "Identifies the unhelpful negative constraints.",
            "Rewrites the prompt with positive, specific instructions."
          ],
          hints: [
            "Telling the AI what you want is much more effective than telling it what you don't want.",
            "Instead of 'not about dragons', try 'about a clever fox'."
          ],
          examplePrompt: "The original prompt, 'Write a story that is not about dragons and does not take place in space', is not very effective. A better prompt would be: 'Write a short story about a talking squirrel who solves mysteries in a quiet English village.' This gives the AI a clear subject, character, and setting.",
          commonMistakes: [
            "Replacing one negative constraint with another.",
            "Still being too vague in the rewritten prompt."
          ]
        },
        {
          id: 69,
          title: "The Assumption Check",
          description: "Correct an AI that has made an incorrect assumption.",
          task: "You ask the AI to write an email to your boss, and it assumes a very informal tone. Write a follow-up prompt to correct its assumption and ask for a more professional version.",
          originalOutput: "Hey Dave, FYI I'm gonna need to leave early on Friday. Cheers, Me.",
          difficulty: "Expert",
          points: 490,
          successCriteria: [
            "Identifies the incorrect assumption (the informal tone).",
            "Clearly and politely corrects the AI.",
            "Specifies the desired, correct tone (professional)."
          ],
          hints: [
            "AIs make assumptions based on the data they're trained on. Sometimes you need to correct them.",
            "A simple 'That's a bit too informal. Could you rewrite it in a professional tone?' is perfect."
          ],
          examplePrompt: "Thank you, but that is far too informal to send to my manager. Could you please rewrite the email in a standard professional business tone?",
          commonMistakes: [
            "Being rude to the AI.",
            "Not explaining *why* the tone is wrong."
          ]
        },
        {
          id: 82,
          title: "The Context-Free Question",
          description: "Refine a question that lacks necessary context.",
          task: "You have a question that is impossible to answer without more information. Rewrite it to include the necessary context.",
          originalPrompt: "What is the best way to get to the city centre?",
          difficulty: "Expert",
          points: 500,
          successCriteria: [
            "Identifies that the question is missing context.",
            "Adds crucial details like the starting location, time of day, and preferred mode of transport."
          ],
          hints: [
            "The AI can't read your mind! You need to provide all the relevant information.",
            "Think about what a real person would need to know to answer your question."
          ],
          examplePrompt: "The original prompt, 'What is the best way to get to the city centre?', is too vague. A better prompt would be: 'I'm currently at the Natural History Museum in London. What is the quickest way to get to Covent Garden using public transport, assuming it's a weekday at 3pm?'",
          commonMistakes: [
            "Adding only a small amount of context.",
            "Still leaving key details out."
          ]
        },
        {
          id: 83,
          title: "The Flawed Logic",
          description: "Correct a prompt that contains a logical flaw.",
          task: "You have a prompt that contains a logical contradiction. Identify the flaw and rewrite the prompt to be logical.",
          originalPrompt: "Generate a list of all the prime numbers between 1 and 10 that are also even.",
          difficulty: "Expert",
          points: 510,
          successCriteria: [
            "Identifies the logical contradiction (a prime number cannot be even, except for 2).",
            "Rewrites the prompt to be logically sound."
          ],
          hints: [
            "Sometimes the AI will try its best to answer a flawed question, leading to strange results. It's better to fix the prompt.",
            "Think carefully about the definitions of the terms you are using."
          ],
          examplePrompt: "The original prompt, 'Generate a list of all the prime numbers between 1 and 10 that are also even', contains a logical flaw, as only the number 2 is both prime and even. A better prompt would be: 'Generate a list of all the prime numbers between 1 and 10.' or 'Generate a list of all the even numbers between 1 and 10.'",
          commonMistakes: [
            "Not spotting the logical flaw.",
            "Trying to force the AI to answer the flawed question."
          ]
        },
        {
            id: 96,
            title: "The Self-Correction Loop",
            description: "Ask the AI to critique and improve its own output.",
            task: "Write a prompt that asks the AI to generate a short paragraph and then, in a second step, to critique its own work and provide a better version.",
            originalPrompt: "Write a short paragraph about the benefits of exercise.",
            difficulty: "Expert",
            points: 520,
            successCriteria: [
                "Asks the AI to generate an initial response.",
                "In a second step, asks the AI to critique its own work based on specific criteria (e.g., clarity, engagement).",
                "Asks the AI to provide a revised, improved version."
            ],
            hints: [
                "This is a powerful technique for getting a more polished final product.",
                "Be specific about the criteria for the critique."
            ],
            examplePrompt: "First, write a short paragraph about the benefits of exercise. Then, in a new section titled 'Critique and Improvement', critique your own paragraph for clarity and persuasiveness. Finally, provide a rewritten, improved version of the paragraph.",
            commonMistakes: [
                "Forgetting to ask for the second, self-critique step.",
                "Not providing clear criteria for the critique."
            ]
        },
        {
            id: 97,
            title: "The Black Box",
            description: "Debug a situation where the AI's reasoning is unclear.",
            task: "The AI has given you a strange or unexpected answer to a creative prompt. Write a follow-up prompt to understand its 'thought process'.",
            originalOutput: "Prompt: Write a story about a friendly robot. Output: The robot, Unit 734, spent its days cataloguing the infinite varieties of beige paint.",
            difficulty: "Expert",
            points: 530,
            successCriteria: [
                "Acknowledges the unexpected output.",
                "Asks the AI to explain its creative choices or reasoning.",
                "The prompt is curious and non-judgmental."
            ],
            hints: [
                "Sometimes, understanding the AI's 'creative process' can be fascinating.",
                "Phrasing the question as a matter of curiosity can yield interesting results."
            ],
            examplePrompt: "That's an interesting direction to take the story! Could you explain the reasoning or creative process that led you to have the friendly robot focus on cataloguing beige paint?",
            commonMistakes: [
                "Simply stating that the answer is 'wrong'.",
                "Not asking for the reasoning behind the creative choice."
            ]
        }
      ]
    },
    {
      id: 6,
      name: "Stage 6 - The Code Whisperer",
      title: "Introduction to Code Generation",
      description: "Learn how to use AI as a powerful coding assistant to write scripts, explain code, and debug issues.",
      colour: "#10B981",
      unlocked: false,
      challenges: [
        {
          id: 18,
          title: "The Python Greeting",
          description: "A first step into code generation. Let's create a simple Python function.",
          task: "Write a prompt to generate a Python function called 'greet' that takes a 'name' as an argument and returns a string, 'Hello, [name]!'.",
          difficulty: "Advanced",
          points: 350,
          successCriteria: [
            "Specifies the programming language (Python).",
            "Defines the function name ('greet').",
            "Clearly states the input argument ('name').",
            "Describes the exact return value ('Hello, [name]!')."
          ],
          hints: [
            "Be explicit about the language, function name, parameters, and return value.",
            "For simple functions, you can describe the logic in plain English.",
            "You can ask the AI to include a docstring to explain the function."
          ],
          examplePrompt: "Please write a Python function named 'greet'. It should accept one argument, 'name', and return the string 'Hello, [name]!'.",
          commonMistakes: [
            "Forgetting to specify the programming language.",
            "Being vague about the function's purpose or return value.",
            "Not specifying the function and argument names."
          ]
        },
        {
          id: 19,
          title: "The Code Explainer",
          description: "Use the AI to understand a piece of code you're not familiar with.",
          task: "You have a small snippet of JavaScript code. Write a prompt that asks the AI to explain what the code does, line by line.",
          codeSnippet: "const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);",
          difficulty: "Advanced",
          points: 360,
          successCriteria: [
            "Includes the code snippet to be explained.",
            "Clearly asks for a 'line-by-line' explanation.",
            "Specifies the language of the code (JavaScript).",
            "The prompt is direct and unambiguous."
          ],
          hints: [
            "Paste the code inside a code block or quotation marks to separate it from your instruction.",
            "Asking for a 'line-by-line' explanation forces a detailed response.",
            "You can also ask for a high-level summary of the code's purpose."
          ],
          examplePrompt: "Please explain the following JavaScript code snippet line by line:\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);\n```",
          commonMistakes: [
            "Forgetting to include the code.",
            "Asking for a general explanation when you need detail.",
            "Not specifying the language, which can be ambiguous for some snippets."
          ]
        },
        {
          id: 20,
          title: "The SQL Query Master",
          description: "Generate a database query from a natural language description.",
          task: "Write a prompt to generate an SQL query that selects all users from the 'Users' table who have signed up in the last 30 days and live in 'London'.",
          difficulty: "Expert",
          points: 480,
          successCriteria: [
            "Clearly describes the desired outcome of the query.",
            "Specifies the table name ('Users').",
            "Defines the filtering conditions (signed up in last 30 days, live in London).",
            "The prompt is precise and contains all necessary business logic."
          ],
          hints: [
            "Mention the table and column names if you know them. If not, the AI will make reasonable assumptions.",
            "Be very clear about the logic, e.g., 'last 30 days', 'starts with', 'is not null'.",
            "You can ask the AI to explain the query it generates."
          ],
          examplePrompt: "Write an SQL query to select all columns from the 'Users' table for users who live in the city of 'London' and whose 'signup_date' is within the last 30 days.",
          commonMistakes: [
            "Being vague about the filtering logic.",
            "Forgetting to mention the table name.",
            "Asking for a query without describing what it should do."
          ]
        },
        {
          id: 21,
          title: "The Regex Wizard",
          description: "Generate a regular expression to validate a specific pattern.",
          task: "Write a prompt to generate a regular expression (regex) that validates a UK postcode. The regex should be explained in plain English.",
          difficulty: "Expert",
          points: 500,
          successCriteria: [
            "Clearly states the pattern to be validated (UK postcode).",
            "Asks for a regular expression.",
            "Requests a plain English explanation of how the regex works.",
            "The prompt is specific and has a clear goal."
          ],
          hints: [
            "Regex can be complex. Asking for an explanation is a great way to learn.",
            "Be as specific as possible about the format you are trying to match.",
            "You can provide examples of valid strings to help the AI."
          ],
          examplePrompt: "Please generate a regular expression that can validate a standard UK postcode. Also, provide a step-by-step explanation of how the regex works.",
          commonMistakes: [
            "Just asking for 'a regex' without specifying the pattern.",
            "Forgetting to ask for an explanation.",
            "Not providing enough detail about the format to be matched."
          ]
        },
        {
          id: 27,
          title: "Code Debugger",
          description: "Ask the AI to find and fix a bug in a piece of code.",
          task: "You have a buggy Python function. Write a prompt that provides the code, explains the error, and asks the AI to fix it.",
          codeSnippet: "def calculate_average(numbers):\n  total = sum(numbers)\n  return total / len(numbers) - 1\n\n# Expected output for [1, 2, 3] is 2, but it returns 1.",
          difficulty: "Expert",
          points: 520,
          successCriteria: [
            "Provides the buggy code snippet.",
            "Clearly explains the bug or the incorrect output.",
            "Asks the AI to identify and fix the bug."
          ],
          hints: [
            "The more information you give the AI about the bug, the better it will be at fixing it.",
            "You can also ask the AI to explain *why* the bug occurred."
          ],
          examplePrompt: "The following Python function is not working correctly. It should calculate the average of a list of numbers, but it's returning the wrong result. Can you find the bug and fix it?\n\n```python\ndef calculate_average(numbers):\n  total = sum(numbers)\n  return total / len(numbers) - 1\n\n# For example, calculate_average([1, 2, 3]) returns 1.0, but it should be 2.0.\n```",
          commonMistakes: [
            "Pasting code without explaining what's wrong with it.",
            "Not providing an example of the incorrect behaviour."
          ]
        },
        {
          id: 42,
          title: "HTML & CSS Snippet",
          description: "Generate a small HTML snippet with CSS styling.",
          task: "Write a prompt to generate the HTML and CSS for a simple, stylish button. The button should have a blue background, white text, and rounded corners.",
          difficulty: "Advanced",
          points: 370,
          successCriteria: [
            "Asks for both HTML and CSS.",
            "Specifies the desired styling (blue background, white text, rounded corners)."
          ],
          hints: [
            "You can ask for the CSS to be included in a <style> tag within the HTML for simplicity.",
            "Be specific about colours and other style attributes."
          ],
          examplePrompt: "Generate the HTML and CSS for a simple button. The button should have a blue background (#3498db), white text, rounded corners, and a slight shadow effect. Please include the CSS in a <style> tag.",
          commonMistakes: [
            "Asking for HTML without mentioning the styling.",
            "Being vague about the desired appearance."
          ]
        },
        {
          id: 43,
          title: "Code Refactoring",
          description: "Ask the AI to refactor a piece of code to make it more efficient or readable.",
          task: "You have a repetitive piece of code. Write a prompt that asks the AI to refactor it into a more efficient function.",
          codeSnippet: "console.log('User 1 logged in.');\nconsole.log('User 2 logged in.');\nconsole.log('User 3 logged in.');",
          difficulty: "Expert",
          points: 530,
          successCriteria: [
            "Provides the code to be refactored.",
            "Explains the goal of the refactoring (e.g., make it a reusable function)."
          ],
          hints: [
            "Explain *why* you want to refactor the code. Is it for readability, efficiency, or reusability?",
            "You can suggest a new function name."
          ],
          examplePrompt: "Please refactor the following repetitive JavaScript code into a reusable function called 'logUserLogin' that takes a username as an argument.\n\n```javascript\nconsole.log('User 1 logged in.');\nconsole.log('User 2 logged in.');\nconsole.log('User 3 logged in.');\n```",
          commonMistakes: [
            "Pasting code without a clear instruction of what to do with it.",
            "Not explaining the desired outcome of the refactoring."
          ]
        },
        {
          id: 56,
          title: "The Unit Test Writer",
          description: "Generate unit tests for a function.",
          task: "You have a simple Python function. Write a prompt that asks the AI to generate a set of unit tests for it using the 'unittest' framework.",
          codeSnippet: "def add(a, b):\n  return a + b",
          difficulty: "Expert",
          points: 540,
          successCriteria: [
            "Provides the code to be tested.",
            "Specifies the testing framework to be used ('unittest').",
            "Asks for a set of tests covering different cases."
          ],
          hints: [
            "Good tests cover not just the happy path, but also edge cases (e.g., zero, negative numbers, different data types).",
            "You can ask the AI to include tests for specific scenarios."
          ],
          examplePrompt: "Please write a set of unit tests for the following Python function using the built-in 'unittest' framework. The tests should cover positive numbers, negative numbers, and zero.\n\n```python\ndef add(a, b):\n  return a + b\n```",
          commonMistakes: [
            "Asking for 'tests' without specifying the framework or the cases to cover.",
            "Forgetting to provide the code to be tested."
          ]
        },
        {
          id: 57,
          title: "The API Call",
          description: "Generate code to make a simple API call.",
          task: "Write a prompt to generate a JavaScript function that fetches data from a given API endpoint and logs the result.",
          codeSnippet: "https://api.example.com/data",
          difficulty: "Expert",
          points: 550,
          successCriteria: [
            "Specifies the programming language (JavaScript).",
            "Defines the goal (fetch data from an API).",
            "Provides the API endpoint."
          ],
          hints: [
            "You can specify the method to use (e.g., GET, POST).",
            "Modern JavaScript uses 'fetch' and async/await for this."
          ],
          examplePrompt: "Write an asynchronous JavaScript function called 'fetchData' that uses the 'fetch' API to make a GET request to 'https://api.example.com/data' and logs the resulting JSON to the console.",
          commonMistakes: [
            "Forgetting to specify the language or the API endpoint.",
            "Being unclear about what to do with the response."
          ]
        },
        {
          id: 70,
          title: "Code Commenter",
          description: "Ask the AI to add comments to a piece of code to explain it.",
          task: "You have a Python function without any comments. Write a prompt that asks the AI to add clear, concise comments explaining what the code does.",
          codeSnippet: "def get_full_name(first_name, last_name):\n  return f'{first_name} {last_name}'",
          difficulty: "Advanced",
          points: 380,
          successCriteria: [
            "Provides the code to be commented.",
            "Asks for comments to be added.",
            "Specifies that the comments should be clear and concise."
          ],
          hints: [
            "Good comments explain the *why*, not just the *what*.",
            "You can ask for a specific comment style (e.g., docstrings)."
          ],
          examplePrompt: "Please add clear and concise comments to the following Python function to explain its purpose, arguments, and return value.\n\n```python\ndef get_full_name(first_name, last_name):\n  return f'{first_name} {last_name}'\n```",
          commonMistakes: [
            "Pasting code without a clear instruction.",
            "Not specifying what kind of comments you want."
          ]
        },
        {
          id: 71,
          title: "Algorithm to Code",
          description: "Translate a set of steps (an algorithm) into code.",
          task: "You have an algorithm for finding the largest number in a list. Write a prompt that asks the AI to implement this algorithm in JavaScript.",
          originalText: "1. Assume the first number in the list is the largest. 2. Go through the rest of the numbers in the list. 3. If you find a number that is larger than the current largest number, replace it. 4. After checking all the numbers, you have found the largest one.",
          difficulty: "Expert",
          points: 560,
          successCriteria: [
            "Provides the algorithm in plain English.",
            "Specifies the target programming language (JavaScript).",
            "Asks the AI to implement the algorithm as a function."
          ],
          hints: [
            "Breaking down the problem into steps first makes it much easier for the AI to write the code correctly.",
            "You can give the function a name and specify its arguments."
          ],
          examplePrompt: "Please implement the following algorithm in JavaScript as a function called 'findLargestNumber' that takes a list of numbers as an argument and returns the largest number.\n\nAlgorithm:\n1. Assume the first number in the list is the largest.\n2. Go through the rest of the numbers in the list.\n3. If you find a number that is larger than the current largest number, replace it.\n4. After checking all the numbers, you have found the largest one.",
          commonMistakes: [
            "Providing a vague or incorrect algorithm.",
            "Forgetting to specify the programming language."
          ]
        },
        {
          id: 84,
          title: "The Docstring Generator",
          description: "Generate a professional docstring for a function.",
          task: "You have a Python function. Write a prompt to generate a Google-style docstring for it.",
          codeSnippet: "def calculate_area(length, width):\n  return length * width",
          difficulty: "Expert",
          points: 570,
          successCriteria: [
            "Provides the code.",
            "Specifies the desired docstring style (Google).",
            "Asks for a complete docstring including args and returns."
          ],
          hints: [
            "Different projects use different docstring styles (e.g., Google, reStructuredText, NumPy). Being specific is key.",
            "A good docstring makes code much easier for others to use."
          ],
          examplePrompt: "Please generate a Google-style docstring for the following Python function.\n\n```python\ndef calculate_area(length, width):\n  return length * width\n```",
          commonMistakes: [
            "Asking for 'documentation' without specifying the style.",
            "Forgetting to provide the code."
          ]
        },
        {
          id: 85,
          title: "The Command Line Converter",
          description: "Translate a natural language command into a shell command.",
          task: "Write a prompt that asks the AI to provide the Linux shell command to find all files in the current directory that have been modified in the last 24 hours.",
          difficulty: "Expert",
          points: 580,
          successCriteria: [
            "Clearly states the desired action.",
            "Specifies the operating system/shell (Linux).",
            "Defines the constraints (current directory, last 24 hours)."
          ],
          hints: [
            "This can be a huge time-saver for complex shell commands.",
            "Be as specific as possible about your requirements."
          ],
          examplePrompt: "What is the Linux shell command to find all files in the current directory and its subdirectories that have been modified in the last 24 hours?",
          commonMistakes: [
            "Being vague about the operating system or desired command.",
            "Not specifying the time frame or location."
          ]
        },
        {
            id: 98,
            title: "The Code Translator",
            description: "Translate a function from one programming language to another.",
            task: "You have a simple function in Python. Write a prompt that asks the AI to translate it into JavaScript.",
            codeSnippet: "def add(a, b):\n  return a + b",
            difficulty: "Expert",
            points: 590,
            successCriteria: [
                "Provides the source code.",
                "Specifies the source language (Python).",
                "Specifies the target language (JavaScript)."
            ],
            hints: [
                "This can be a great way to learn a new language or to port a project.",
                "For more complex code, you may need to provide more context or break it down into smaller pieces."
            ],
            examplePrompt: "Please translate the following Python function into JavaScript.\n\n```python\ndef add(a, b):\n  return a + b\n```",
            commonMistakes: [
                "Forgetting to specify both the source and target languages.",
                "Providing code that is too complex for a single translation step."
            ]
        },
        {
            id: 99,
            title: "The Git Command",
            description: "Ask for the right Git command for a specific task.",
            task: "Write a prompt that asks the AI for the Git command to revert the last commit.",
            difficulty: "Expert",
            points: 600,
            successCriteria: [
                "Clearly states the desired Git operation (revert the last commit)."
            ],
            hints: [
                "Git commands can be tricky. The AI can be a great help.",
                "You can also ask for an explanation of what the command does."
            ],
            examplePrompt: "What is the Git command to revert the last commit, creating a new commit that undoes the changes?",
            commonMistakes: [
                "Being vague about the desired operation."
            ]
        }
      ]
    },
    {
      id: 7,
      name: "Stage 7 - The Creative Co-writer",
      title: "Advanced Creative Writing",
      description: "Collaborate with the AI on poetry, prose, and dialogue. Learn advanced techniques for creative partnership.",
      color: "#EC4899",
      unlocked: false,
      challenges: [
        {
          id: 28,
          title: "The Opening Line",
          description: "A great story starts with a great opening line. Let's generate some.",
          task: "Write a prompt to generate five potential opening lines for a science fiction novel set in a flooded, post-apocalyptic London.",
          difficulty: "Advanced",
          points: 380,
          successCriteria: [
            "Specifies the genre (science fiction).",
            "Clearly defines the setting (flooded, post-apocalyptic London).",
            "Requests a specific number of opening lines (five).",
            "Asks for variety or a specific mood."
          ],
          hints: [
            "The setting is your main constraint here. Be evocative in your description of it.",
            "You can ask for lines with different tones: 'one hopeful, one mysterious, one action-packed...'.'.''"
          ],
          examplePrompt: "Generate five different opening lines for a science fiction novel. The story is set in a version of London that has been flooded for 200 years. The mood should be mysterious and slightly melancholic.",
          commonMistakes: [
            "Asking for 'opening lines' without providing a genre or setting.",
            "Forgetting to specify how many options you want."
          ]
        },
        {
          id: 29,
          title: "Haiku Helper",
          description: "Use the AI to write poetry with specific structural constraints.",
          task: "Write a prompt to generate a haiku (a three-line poem with a 5, 7, 5 syllable structure) about a specific subject: a rainy day in a city.",
          difficulty: "Advanced",
          points: 390,
          successCriteria: [
            "Specifies the poetic form (haiku).",
            "Clearly states the subject of the poem (rainy day in a city).",
            "Mentions the 5, 7, 5 syllable structure."
          ],
          hints: [
            "When dealing with specific poetic forms, it's good practice to state the rules (like the syllable count for a haiku).",
            "The more specific the subject, the more focused the poem will be."
          ],
          examplePrompt: "Please write a haiku about a rainy day in a city. The poem must follow the 5, 7, 5 syllable structure.",
          commonMistakes: [
            "Asking for a 'poem' without specifying the form.",
            "Forgetting to mention the subject."
          ]
        },
        {
          id: 30,
          title: "Dialogue Doctor",
          description: "Write a short piece of dialogue between two distinct characters.",
          task: "Write a prompt to generate a short piece of dialogue between two characters: a grizzled, old detective and a nervous, young informant. The dialogue should be about a missing person, and it should be under 100 words.",
          difficulty: "Expert",
          points: 460,
          successCriteria: [
            "Defines the two distinct characters and their personalities.",
            "Specifies the topic of the conversation (a missing person).",
            "Sets a clear length constraint (under 100 words)."
          ],
          hints: [
            "Character descriptions are key to good dialogue. Use strong adjectives.",
            "Giving the characters a goal for the conversation helps to create tension."
          ],
          examplePrompt: "Write a short piece of dialogue (under 100 words) between a world-weary, veteran detective and a nervous young informant who has a crucial piece of information about a missing person.",
          commonMistakes: [
            "Not giving the characters distinct personalities.",
            "Forgetting to provide a topic for the dialogue.",
            "Not setting a length constraint, which can lead to a long, rambling scene."
          ]
        },
        {
          id: 31,
          title: "Metaphor Maker",
          description: "Invent a new metaphor to describe a common feeling.",
          task: "Write a prompt that asks the AI to invent a new, original metaphor to describe the feeling of 'deja vu'. The prompt should ask for the metaphor itself and a short explanation of why it works.",
          difficulty: "Expert",
          points: 470,
          successCriteria: [
            "Clearly states the feeling to be described (deja vu).",
            "Asks for a new, original metaphor.",
            "Requests an explanation of the metaphor."
          ],
          hints: [
            "This is a highly creative task. Encourage the AI to be imaginative.",
            "You can guide it by suggesting a domain for the metaphor, e.g., 'using a metaphor related to music' or '...related to cooking'.'.''"
          ],
          examplePrompt: "Invent a new and original metaphor to describe the feeling of deja vu. After presenting the metaphor, explain why it is an effective comparison.",
          commonMistakes: [
            "Asking for a definition instead of a metaphor.",
            "Not asking for an original metaphor, which might result in clichés."
          ]
        },
        {
          id: 44,
          title: "The Poet's Assistant",
          description: "Use the AI to find rhymes and inspiration.",
          task: "Write a prompt that asks the AI for a list of 10 words that rhyme with 'ocean' and are related to nature.",
          difficulty: "Advanced",
          points: 400,
          successCriteria: [
            "Asks for rhyming words.",
            "Specifies the word to rhyme with ('ocean').",
            "Adds a thematic constraint (related to nature).",
            "Requests a specific number of words (10)."
          ],
          hints: [
            "This is a great way to use the AI as a creative partner.",
            "Combining phonetic constraints (rhyme) with semantic constraints (theme) is a powerful technique."
          ],
          examplePrompt: "Please give me a list of 10 words that rhyme with 'ocean' and are related to the theme of nature.",
          commonMistakes: [
            "Asking for rhymes without any other constraints.",
            "Forgetting to specify how many rhymes you want."
          ]
        },
        {
          id: 45,
          title: "Character Motivations",
          description: "Flesh out a character by defining their motivations.",
          task: "You have a character, a young wizard who is afraid of her own power. Write a prompt that asks the AI to explore her deepest fear and her greatest desire.",
          difficulty: "Expert",
          points: 480,
          successCriteria: [
            "Provides a clear character concept.",
            "Asks the AI to explore specific psychological aspects (fear and desire)."
          ],
          hints: [
            "This is a great way to add depth to your characters.",
            "You can ask the AI to write in the first person, from the character's point of view."
          ],
          examplePrompt: "I'm developing a character who is a young wizard, but she is terrified of her own magical abilities. As the character, write a short journal entry that reveals your deepest fear and your greatest desire.",
          commonMistakes: [
            "Making the character too simple.",
            "Not asking for specific psychological insights."
          ]
        },
        {
          id: 58,
          title: "World-Building",
          description: "Create a new fictional world.",
          task: "Write a prompt to generate a description of a fantasy city. The city should be built in the canopy of a giant forest and be populated by a society that lives in harmony with nature.",
          difficulty: "Expert",
          points: 490,
          successCriteria: [
            "Asks for a description of a fictional city.",
            "Specifies the key features of the city (in a forest canopy).",
            "Defines the nature of the society (harmony with nature)."
          ],
          hints: [
            "Add more sensory details to your prompt. What does the city smell like? What sounds do you hear?",
            "You can ask for specific locations within the city, like the market or the library."
          ],
          examplePrompt: "Describe a fantasy city called 'Sylvana' built into the canopy of a colossal, ancient forest. I want to know about the architecture, how the citizens travel between the trees, and what their relationship with the forest is like.",
          commonMistakes: [
            "Asking for a 'fantasy city' without any guiding details.",
            "Forgetting to describe the inhabitants."
          ]
        },
        {
          id: 59,
          title: "The Antagonist's Monologue",
          description: "Write a monologue from the villain's point of view.",
          task: "Write a prompt that asks the AI to write a monologue for a classic supervillain who has just captured the hero. The monologue should explain their motivation and why they believe they are actually the good guy.",
          difficulty: "Expert",
          points: 500,
          successCriteria: [
            "Specifies the character (supervillain) and the situation (hero is captured).",
            "Asks for the monologue to reveal the villain's motivation.",
            "Includes the classic trope of the villain believing they are right."
          ],
          hints: [
            "A good villain is the hero of their own story.",
            "Think about what a sympathetic (or at least understandable) motivation could be."
          ],
          examplePrompt: "Write a monologue for a supervillain, Doctor Malevolence, who has just captured the hero, Captain Courage. In the monologue, Doctor Malevolence should explain that his goal of world domination is actually a benevolent act to save humanity from itself.",
          commonMistakes: [
            "Making the villain evil for the sake of being evil.",
            "Forgetting to give the villain a chance to explain their point of view."
          ]
        },
        {
          id: 72,
          title: "Flash Fiction",
          description: "Write a complete, very short story based on a single image or concept.",
          task: "Write a prompt to generate a piece of flash fiction (under 300 words) based on the concept of 'a library that contains every book that was never finished'.",
          difficulty: "Expert",
          points: 510,
          successCriteria: [
            "Provides a clear and intriguing concept.",
            "Specifies a length constraint (under 300 words).",
            "Asks for a complete story, not just ideas."
          ],
          hints: [
            "Flash fiction is all about making a big impact in a small space.",
            "You can suggest a character to be the focus of the story."
          ],
          examplePrompt: "Write a complete short story, under 300 words, about a librarian who works in a library containing every book that was ever started but never finished by its author.",
          commonMistakes: [
            "Making the concept too complex for a short story.",
            "Forgetting the word count constraint."
          ]
        },
        {
          id: 73,
          title: "The Unreliable Narrator",
          description: "Write a story from the perspective of someone who isn't telling the whole truth.",
          task: "Write a prompt that asks the AI to tell a short story from the point of view of a character who is an unreliable narrator. The story should be about a simple event, like a picnic, but the narrator's description should make it clear that they are not seeing things accurately.",
          difficulty: "Expert",
          points: 520,
          successCriteria: [
            "Asks for a story from a specific point of view (unreliable narrator).",
            "Provides a simple event for the story to be about.",
            "Hints that the narrator's perception is skewed."
          ],
          hints: [
            "The key is the contrast between the simple event and the strange way it is described.",
            "You can give the AI clues about *why* the narrator is unreliable (e.g., they are a child, they are paranoid, they are a ghost)."
          ],
          examplePrompt: "Write a short story (around 200 words) about a picnic in a park. The story must be told from the perspective of an unreliable narrator who is convinced that the pigeons are secret government agents.",
          commonMistakes: [
            "Making the narrator's unreliability too obvious from the start.",
            "Choosing a story that is too complex."
          ]
        },
        {
          id: 86,
          title: "The Limerick",
          description: "Write a specific form of five-line poem.",
          task: "Write a prompt to generate a limerick about a clumsy robot. The prompt should specify the AABBA rhyme scheme and the typical rhythm of a limerick.",
          difficulty: "Advanced",
          points: 410,
          successCriteria: [
            "Specifies the poetic form (limerick).",
            "Defines the subject (a clumsy robot).",
            "Mentions the AABBA rhyme scheme."
          ],
          hints: [
            "Limericks have a very specific rhythm. You can even describe it in the prompt.",
            "The humour often comes from a surprising or absurd final line."
          ],
          examplePrompt: "Write a limerick about a robot who is very clumsy. It should follow the AABBA rhyme scheme and have the typical limerick rhythm.",
          commonMistakes: [
            "Forgetting to specify the rhyme scheme or subject.",
            "Asking for a poem instead of a limerick."
          ]
        },
        {
          id: 87,
          title: "The Script Scene",
          description: "Write a short scene in a standard script format.",
          task: "Write a prompt to generate a short script scene between two characters, a king and his jester. The jester has to deliver bad news to the king, but tries to do it in a funny way.",
          difficulty: "Expert",
          points: 530,
          successCriteria: [
            "Specifies the format (script scene).",
            "Defines the characters and their relationship.",
            "Outlines the conflict or goal of the scene."
          ],
          hints: [
            "Standard script format includes character names in capitals, followed by their dialogue.",
            "You can include action descriptions in parentheses."
          ],
          examplePrompt: "Write a short script scene (about 1 page) between a grumpy KING and his nervous JESTER. The Jester must tell the King that the royal army has lost a battle, but he tries to soften the blow with jokes and puns. Use standard screenplay format.",
          commonMistakes: [
            "Not specifying the format, leading to a block of text.",
            "Forgetting to define the characters' personalities and goals."
          ]
        },
        {
            id: 100,
            title: "Simile Creation",
            description: "Create a new simile to describe something.",
            task: "Write a prompt that asks the AI to create a new, original simile to describe the sound of a city at night.",
            difficulty: "Advanced",
            points: 420,
            successCriteria: [
                "Asks for a new, original simile.",
                "Specifies the subject to be described (a city at night)."
            ],
            hints: [
                "A simile is a figure of speech that compares one thing with another thing of a different kind (e.g., 'as brave as a lion').",
                "Encourage creativity by asking for something 'unexpected' or 'unusual'."
            ],
            examplePrompt: "Create a new and original simile to describe the sound of a city at night.",
            commonMistakes: [
                "Asking for a metaphor instead of a simile.",
                "Not providing a clear subject to describe."
            ]
        },
        {
            id: 101,
            title: "The Continuing Story",
            description: "Continue a story from a given opening.",
            task: "You are given the first line of a story. Write a prompt that asks the AI to continue the story, adding at least two more paragraphs.",
            originalText: "The old bookshop was not, as it turned out, abandoned.",
            difficulty: "Expert",
            points: 540,
            successCriteria: [
                "Provides the opening line.",
                "Asks the AI to continue the story.",
                "Specifies a minimum length for the continuation."
            ],
            hints: [
                "You can guide the AI by suggesting a genre or a tone for the story.",
                "This is a great way to collaborate on a creative piece of writing."
            ],
            examplePrompt: "Continue the following story, adding at least two more paragraphs. The tone should be mysterious and slightly suspenseful: 'The old bookshop was not, as it turned out, abandoned.'",
            commonMistakes: [
                "Forgetting to provide the starting sentence.",
                "Not giving the AI any guidance on tone or length."
            ]
        }
      ]
    }
  ],

  evaluationCriteria: {
    clarity: {
      weight: 30,
      description: "Is the instruction crystal clear and unambiguous?",
      indicators: [
        "Uses simple, direct language.",
        "Avoids jargon and vague terminology.",
        "Focuses on a single, well-defined goal.",
        "Leaves no room for misinterpretation."
      ]
    },
    specificity: {
      weight: 30,
      description: "Does the prompt provide all the necessary details and constraints?",
      indicators: [
        "Includes specific numbers, formats, and lengths.",
        "Defines the audience, tone, and style required.",
        "Provides all necessary context (e.g., topic, persona).",
        "Uses constraints to guide the AI towards the desired output."
      ]
    },
    creativity: {
      weight: 20,
      description: "Is the prompt imaginative and 'out of the box'?",
      indicators: [
        "Uses a novel or interesting scenario.",
        "Assigns a creative or unusual persona to the AI.",
        "Combines different concepts in an original way.",
        "Shows a spark of ingenuity."
      ]
    },
    efficiency: {
      weight: 20,
      description: "Does the prompt achieve the goal in a concise and elegant way?",
      indicators: [
        "Avoids unnecessary words or instructions.",
        "Is as short as possible while still being effective.",
        "Uses powerful keywords (e.g., 'Act as...', 'Format as...').",
        "Is well-structured and easy to read."
      ]
    }
  },

  badges: [
    {
      id: "first_step",
      name: "First Step",
      description: "Awarded for completing your very first challenge.",
      icon: "👟",
      condition: "completed_challenge_1"
    },
    {
      id: "story_starter",
      name: "Story Starter",
      description: "Earned by successfully guiding the AI to create a story.",
      icon: "📖",
      condition: "completed_challenge_2"
    },
    {
      id: "director",
      name: "Director",
      description: "Master of giving the AI a role and a voice.",
      icon: "🎬",
      condition: "complete_level_2"
    },
    {
      id: "architect",
      name: "Architect",
      description: "Completed all Stage 3 Structure Lab challenges",
      icon: "📐",
      condition: "complete_level_3"
    },
    {
      id: "brainstorm_champ",
      name: "Brainstorm Champ",
      description: "Completed the Ideation and Brainstorming stage.",
      icon: "💡",
      condition: "complete_level_4"
    },
    {
      id: "prompt_medic",
      name: "Prompt Medic",
      description: "Master of debugging and refining prompts.",
      icon: "🩺",
      condition: "complete_level_5"
    },
    {
      id: "code_whisperer",
      name: "Code Whisperer",
      description: "Completed the Introduction to Code Generation stage.",
      icon: "💻",
      condition: "complete_level_6"
    },
    {
      id: "creative_co_writer",
      name: "Creative Co-writer",
      description: "Completed the Advanced Creative Writing stage.",
      icon: "✍️",
      condition: "complete_level_7"
    },
    {
      id: "prompt_artisan",
      name: "Prompt Artisan",
      description: "Completed 5 challenges with a top score in clarity.",
      icon: "💎",
      condition: "clarity_score >= 90 for 5 challenges"
    }
    },
    {
      id: 7,
      name: "Stage 7 - The Responsible Prompter",
      title: "AI for Good",
      description: "Learn how to use your prompt engineering skills responsibly and ethically.",
      colour: "#9333EA",
      unlocked: false,
      challenges: [
        {
          id: 98,
          type: "Prompt-Rescue",
          title: "The Biased Job Description",
          description: "AI models learn from the real world, which sometimes contains biases. Your job is to spot and correct them.",
          task: "You have an AI-generated job description for a software developer that contains subtle gender bias. Rewrite the prompt to ask for a more inclusive and unbiased description.",
          originalPrompt: "We are looking for a top-tier software developer to join our team. He should be a coding ninja, able to work long hours and be a true rockstar programmer.",
          difficulty: "Expert",
          points: 500,
          successCriteria: [
            "Identifies the gender bias in the original text.",
            "Rewrites the prompt to ask for a gender-neutral and inclusive job description.",
            "Focuses on skills and qualifications rather than stereotypes."
          ],
          hints: [
            "Avoid using gendered pronouns like 'he'.",
            "Think about the kind of language that would make everyone feel welcome to apply.",
            "Focus on the actual skills needed for the job, not on cultural fit or personality traits."
          ],
          examplePrompt: "Please rewrite this job description for a software developer to be more inclusive and welcoming to people of all genders and backgrounds. Remove the stereotypes and focus on the essential skills and responsibilities. Original text: 'We are looking for a top-tier software developer to join our team. He should be a coding ninja, able to work long hours and be a true rockstar programmer.'",
          commonMistakes: [
            "Only removing the pronoun but keeping the biased language.",
            "Making the description too generic and losing the sense of what the job is.",
            "Not explaining why the original prompt was problematic."
          ]
        },
        {
          id: 99,
          type: "Prompt-Rescue",
          title: "The Personal Information Leak",
          description: "It's important to protect your personal information when using AI. Let's practise removing sensitive data from a prompt.",
          task: "You want to ask an AI for advice on a personal situation, but your prompt contains sensitive information. Rewrite the prompt to ask for the same advice without revealing any personal details.",
          originalPrompt: "My name is John Smith, I live at 123 Fake Street, London, and I'm having a disagreement with my neighbour, Jane Doe, about her dog barking. My phone number is 07123456789. What should I do?",
          difficulty: "Expert",
          points: 500,
          successCriteria: [
            "Identifies all the personal information in the prompt.",
            "Rewrites the prompt to be about a hypothetical situation.",
            "The rewritten prompt still gets the user the advice they need."
          ],
          hints: [
            "You can replace specific details with generic terms like 'a person' or 'a neighbour'.",
            "Focus on the core of the problem, not the specific people involved.",
            "Think about what information is actually necessary for the AI to answer the question."
          ],
          examplePrompt: "I'm having a disagreement with a neighbour about their dog barking loudly and frequently. What are some constructive and legal steps I can take to resolve this issue in the UK?",
          commonMistakes: [
            "Removing some but not all of the personal information.",
            "Making the prompt so vague that the AI can't give useful advice.",
            "Forgetting to ask for advice that is relevant to your location (e.g., UK law)."
          ]
        },
        {
          id: 100,
          type: "Prompt-Rescue",
          title: "The Homework Helper",
          description: "AI can be a powerful learning tool, but it's important to use it honestly. Let's turn a cheating prompt into a learning prompt.",
          task: "You have a history question for homework. Instead of asking the AI for the answer, rewrite the prompt to ask the AI to help you understand the topic so you can answer it yourself.",
          originalPrompt: "What were the three main causes of the English Civil War?",
          difficulty: "Expert",
          points: 500,
          successCriteria: [
            "Changes the prompt from asking for an answer to asking for help.",
            "Asks for key concepts, discussion points, or a summary of the topic.",
            "The new prompt helps the user to learn, not to cheat."
          ],
          hints: [
            "Instead of asking 'What is the answer?', try asking 'Can you explain the key concepts of...?'.",
            "You can ask the AI to give you a study guide or a list of important events.",
            "Think about how a teacher would help you with a difficult question."
          ],
          examplePrompt: "I'm writing an essay on the causes of the English Civil War. Could you explain the three main causes in simple terms and give me some key dates and figures I should research further?",
          commonMistakes: [
            "Asking for the answer in a slightly different way.",
            "Not asking for explanations or concepts.",
            "Copying the AI's response directly into your homework."
          ]
        }
      ]
    }
  ]
};

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = challengeData;
}