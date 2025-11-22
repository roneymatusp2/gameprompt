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
          ],
          learningFocus: [
            "Link audience, tone, and impact in the opening line.",
            "Use persona cues (e.g., friendly droplet guide) to nudge creativity.",
            "End with a call-to-action that makes saving water feel achievable."
          ],
          skillFocus: ["audience", "tone", "constraints"],
          curriculumLinks: [
            "Science KS2/3: Water cycle and sustainability",
            "English: Persuasive speech techniques"
          ],
          promptBlueprint: {
            title: "ROLE • ACTION • IMPACT",
            steps: [
              { name: "Role", detail: "Ask the AI to become a friendly guide (e.g., a water droplet)." },
              { name: "Action", detail: "Describe the journey through the water cycle with vivid details." },
              { name: "Impact", detail: "Finish with a pupil-friendly challenge to save water." }
            ]
          },
          reflectionPrompt: "Which instruction guarantees the AI explains both science and motivation for a 10-year-old audience?"
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
          id: 103,
          type: "Multi-Step",
          title: "The Whistleblower's Choice",
          description: "Complex choices make compelling stories. Guide an AI to create a modern corporate thriller.",
          task: "In three steps, prompt the AI to tell the story of a junior data scientist who discovers a dangerous flaw in their company's new, highly-anticipated app.",
          difficulty: "Intermediate",
          points: 185,
          steps: [
            {
              step: 1,
              instruction: "Write a prompt to set the scene: a brilliant junior data scientist, Anya, is celebrated for her role in creating 'ConnectSphere', a revolutionary social app about to launch.",
              example: "Set the scene for a corporate thriller. Anya, a gifted data scientist, is on the verge of a major promotion thanks to her work on 'ConnectSphere', her company's biggest app launch in years. Describe the buzz and excitement on the eve of the launch."
            },
            {
              step: 2,
              instruction: "Now, write a prompt where Anya, during a final check, discovers a serious data privacy flaw in the app that the company has chosen to ignore.",
              example: "Anya runs a final, unauthorised diagnostic and discovers a critical privacy flaw in ConnectSphere that could expose millions of users' private data. Write the scene where she confronts her boss, who dismisses her concerns, stressing how much is riding on the launch."
            },
            {
              step: 3,
              instruction: "Finally, write a prompt that forces Anya to a decision: leak the information to a tech journalist or stay silent. The prompt should ask for a description of her choice and the immediate fallout.",
              example: "Anya is in her flat, holding a USB stick with proof of the privacy flaw and the contact details for a top tech journalist. Write the conclusion of the story, describing her decision and its immediate consequences for her and the company."
            }
          ],
          successCriteria: [
            "Each prompt builds the narrative and the ethical stakes.",
            "The prompts clearly establish the professional and moral conflict.",
            "The final prompt demands a resolution with clear consequences."
          ],
          hints: [
            "Think about the internal conflict. What are Anya's motivations and fears?",
            "Use the prompts to raise the tension at each step.",
            "The final prompt should make the AI describe not just the choice, but the immediate 'what happens next'."
          ],
          commonMistakes: [
            "Making the boss a simple villain, rather than someone with their own pressures.",
            "Not making the flaw in the app seem serious enough to warrant the dilemma.",
            "Forgetting to ask for the consequences of Anya's choice."
          ]
        },
        {
          id: 104,
          type: "Multi-Step",
          title: "The Artist's Deception",
          description: "Let's explore a very modern dilemma about creativity and AI. Guide the story of an artist and their secret collaborator.",
          task: "In three steps, prompt an AI to tell the story of a struggling artist who wins a major art prize with AI-generated work, and is then asked to demonstrate their 'technique'.",
          difficulty: "Intermediate",
          points: 190,
          steps: [
            {
              step: 1,
              instruction: "Write a prompt that asks an AI to generate a description of a stunning, prize-winning piece of digital art titled 'Electric Bloom'.",
              example: "You are an advanced image-generation AI. Create a detailed, evocative description of a piece of digital art called 'Electric Bloom'. It should be abstract, vibrant, and emotionally resonant, worthy of winning a major art prize."
            },
            {
              step: 2,
              instruction: "Now, write a prompt for a press release. The artist, Leo, needs to celebrate his win and talk about his 'unique vision' and 'painstaking process', without ever mentioning AI.",
              example: "Act as a publicist for an artist named Leo. He has just won the prestigious Turner Prize for his work 'Electric Bloom'. Write a short press release in his voice, where he talks about his inspiration and the years of effort that went into developing his unique style."
            },
            {
              step: 3,
              instruction: "Finally, write a prompt where Leo has to prepare for a live-streamed talk. He must decide whether to try and fake a traditional digital painting process, or come clean about his use of AI. Ask for a summary of his decision and how the talk begins.",
              example: "Leo is preparing for a live-streamed 'artist's demonstration'. He is terrified. Write a paragraph describing his final decision: does he attempt to fake a creative process he didn't use, or does he confess his reliance on AI? Describe the opening lines of his talk."
            }
          ],
          successCriteria: [
            "Each prompt builds on the previous one to create a coherent narrative.",
            "The prompts explore the modern ethical dilemma of AI in art.",
            "The final prompt forces a decision about honesty and intellectual property."
          ],
          hints: [
            "The first prompt is meta: you're asking one AI to imagine another AI's work.",
            "Think about the language of 'art-speak' for the press release.",
            "The final choice is the core of the story. Does Leo value fame or honesty more?"
          ],
          commonMistakes: [
            "Not making the artwork sound impressive enough to be prize-winning.",
            "Writing a press release that is too honest.",
            "Forgetting that the final prompt is about the *decision* and its immediate aftermath."
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
          id: 105,
          title: "The Team-Building Menu",
          description: "A precise prompt can solve complex logistical puzzles. Let's cater for a team with very specific dietary needs.",
          task: "Write a prompt to generate a lunch menu for a team of 5. The constraints are: one person is vegan, one has a severe nut allergy, one eats only halal food, one is a very picky eater who just wants something plain, and the fifth has no restrictions. The total budget is £75 (£15 per person). The prompt should ask for a complete menu that can be ordered from a single place.",
          difficulty: "Intermediate",
          points: 210,
          successCriteria: [
            "Clearly lists all the dietary restrictions and preferences (vegan, nut allergy, halal, picky).",
            "Specifies the number of people (5) and the total budget (£75).",
            "Asks the AI to generate a cohesive menu from a single imaginary restaurant.",
            "The goal is to find a workable solution, not just list options."
          ],
          hints: [
            "You are testing the AI's ability to handle multiple 'negative constraints' (can't have nuts, can't have meat, etc.).",
            "Specifying the budget is crucial.",
            "You could ask the AI to name the fictional café and list the specific items for each person."
          ],
          examplePrompt: "Act as a personal assistant. I need to order lunch for a team meeting of 5 people with a total budget of £75. The order must come from a single restaurant. The team's dietary needs are: Person A is vegan, Person B has a severe nut allergy, Person C is halal, Person D is a picky eater who would prefer a plain cheese or ham sandwich, and Person E has no dietary restrictions. Please generate a suitable lunch order list, ensuring all needs are met.",
          commonMistakes: [
            "Forgetting one of the dietary constraints, especially the nut allergy.",
            "Not specifying the budget.",
            "Just asking for individual meals, rather than a single, coherent order."
          ]
        },
        {
          id: 106,
          title: "The Office Charter",
          description: "Prompts can be used for negotiation and mediation. Let's draft a set of rules for two very different teams sharing a space.",
          task: "Write a prompt to generate a 'Code of Conduct' for an office shared by two companies: 'SalesSonics' (a loud, high-energy sales team) and 'CodeWeavers' (a quiet, deep-focus team of programmers). The charter needs to fairly address issues like phone call noise, meeting room booking, and use of shared spaces.",
          difficulty: "Intermediate",
          points: 215,
          successCriteria: [
            "Clearly defines the two conflicting company cultures.",
            "Specifies the key areas of potential conflict (noise, meetings, shared space).",
            "Asks the AI to create a balanced and fair charter.",
            "The prompt aims for a diplomatic solution."
          ],
          hints: [
            "This isn't about one side winning. It's about finding a compromise.",
            "You could suggest specific solutions in the prompt, like 'propose a system for designated quiet hours'.",
            "Think about the structure of the output. You could ask for a numbered list of rules."
          ],
          examplePrompt: "Act as an experienced office manager. I need to draft a fair and balanced 'Office Code of Conduct' for two startups sharing a space. The first, 'SalesSonics', is a loud, collaborative sales team that's on the phone a lot. The second, 'CodeWeavers', is a team of software developers who need quiet for deep concentration. Please draft a charter with clear, actionable rules covering a) noise levels and phone calls, b) meeting room etiquette, and c) kitchen cleanliness.",
          commonMistakes: [
            "Favouring one team's needs over the other.",
            "Being too vague about the areas of conflict.",
            "Asking for a simple list of rules without the context of the two companies."
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
            "Always specify the format if you need one. 'Numbered list', 'bullet points', 'a single paragraph'."
          ],
          examplePrompt: "Please provide me with five fun and surprising facts about the planet Jupiter, presented as a numbered list.",
          commonMistakes: [
            "Asking for 'facts' without a number.",
            "Forgetting to specify the topic clearly.",
            "Not asking for a specific format, which can lead to a dense paragraph that is hard to read."
          ]
        },
        {
          id: 107,
          title: "Overlooked Inventors",
          description: "A good prompt can uncover hidden histories. Let's find some unsung heroes of invention.",
          task: "Write a prompt that asks the AI for a list of three overlooked female inventors from the Victorian era. The prompt should ask for both the inventor's name and a one-sentence summary of their most important invention.",
          difficulty: "Beginner",
          points: 115,
          successCriteria: [
            "Clearly defines the criteria for the list (female inventors, Victorian era, overlooked).",
            "Specifies the number of items required (three).",
            "Asks for two pieces of information for each: name and invention summary.",
            "Requests the output in a structured format."
          ],
          hints: [
            "Using words like 'overlooked', 'lesser-known', or 'underrated' encourages the AI to go beyond the obvious names.",
            "Be specific about what information you want for each item in the list.",
            "This is a great way to use AI for historical discovery."
          ],
          examplePrompt: "Please give me a list of three overlooked female inventors from the Victorian era. For each inventor, provide their name and a one-sentence description of their key invention. Please format this as a numbered list.",
          commonMistakes: [
            "Just asking for 'inventors' without the specific constraints.",
            "Forgetting to ask for the description of the invention.",
            "Not specifying the number of inventors."
          ]
        },
        {
          id: 108,
          title: "Underground Trivia",
          description: "Let's dig up some fascinating, obscure facts about a world-famous transport system.",
          task: "Write a prompt that asks the AI for five weird and wonderful facts about the London Underground. Request the facts to be presented in a bulleted list.",
          difficulty: "Beginner",
          points: 115,
          successCriteria: [
            "Clearly states the topic (London Underground).",
            "Specifies the tone ('weird and wonderful').",
            "Asks for a specific number of facts (five).",
            "Requests a bullet point format."
          ],
          hints: [
            "The more specific your topic, the more interesting the facts you can unearth.",
            "Specifying the format, like a bulleted list, makes the information easy to digest.",
            "Words like 'weird', 'surprising', or 'unusual' guide the AI's selection of facts."
          ],
          examplePrompt: "Could you share five weird and wonderful facts about the London Underground? Please present them as a bulleted list.",
          commonMistakes: [
            "Asking a very general question like 'tell me about the Tube'.",
            "Forgetting to specify the number of facts.",
            "Not requesting a specific format for the output."
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
            "You can ask for a specific tone, like 'friendly and informal' or 'professional'."
          ],
          examplePrompt: "Generate 5 friendly and informal subject lines for an email inviting my team to a casual lunch next Friday.",
          commonMistakes: [
            "Not being clear about the email's content.",
            "Forgetting to specify how many options you want."
          ]
        },
        {
          id: 109,
          title: "Catchy Blog Titles",
          description: "A great title can make all the difference. Let's brainstorm some for a blog post.",
          task: "Write a prompt that asks the AI to generate 5 different, catchy titles for a blog post about the surprising benefits of learning a musical instrument as an adult.",
          difficulty: "Beginner",
          points: 125,
          successCriteria: [
            "Clearly states the purpose: generating blog titles.",
            "Specifies the topic of the blog post.",
            "Asks for a specific number of titles (5).",
            "Encourages a 'catchy' or engaging tone."
          ],
          hints: [
            "You can ask for titles aimed at different audiences, e.g., 'one for complete beginners, one for busy professionals'.",
            "Think about what makes you click on a title. It often involves a question, a number, or a surprising statement.",
            "You can also ask for the titles to be optimised for search engines (SEO)."
          ],
          examplePrompt: "Please generate 5 catchy blog post titles about the benefits of learning a musical instrument as an adult. The tone should be inspiring and encouraging.",
          commonMistakes: [
            "Forgetting to specify the topic of the blog post.",
            "Asking for 'a title' instead of a number of options to choose from.",
            "Not giving any guidance on the desired tone."
          ]
        },
        {
          id: 110,
          title: "Twitter Hooks",
          description: "On social media, the first few words are everything. Let's practise writing some attention-grabbing 'hooks'.",
          task: "Write a prompt that asks the AI to generate 3 different opening sentences (hooks) for a Twitter thread about the UK's surprising Roman history. The hooks should be designed to make people want to click and read more.",
          difficulty: "Beginner",
          points: 125,
          successCriteria: [
            "Specifies the platform (Twitter) and format (opening hooks).",
            "Clearly states the topic of the thread.",
            "Asks for a specific number of hooks (3).",
            "Emphasises the goal: making people curious."
          ],
          hints: [
            "A good hook often starts with a controversial statement, a surprising fact, or a question.",
            "Keep it short and punchy – under 280 characters is the goal for a whole tweet, so the hook must be much shorter.",
            "Think 'I bet you didn't know...'"
          ],
          examplePrompt: "I'm writing a Twitter thread about surprising Roman history in Britain. Please generate 3 different, attention-grabbing opening sentences (hooks) that would make someone stop scrolling and want to learn more.",
          commonMistakes: [
            "Writing a full tweet instead of just the opening hook.",
            "Forgetting to specify the topic.",
            "Creating hooks that are bland and not intriguing."
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
          id: 111,
          title: "The Executive Briefing",
          description: "Summarisation isn't just about shortening text, it's about extracting what's important. Let's create a briefing for a busy executive.",
          task: "You have a verbose email update from a project manager. Write a prompt to summarise it into two bullet points: one for the main update, and one for the action required.",
          originalText: "Hi team, just a quick update on Project Chimera. We've hit a bit of a snag with the supplier for the casings, they're running about two weeks behind schedule which is going to impact our Q3 deadline, unfortunately. I've been on the phone with them all morning to try and find a workaround. For now, could everyone in the design team please review the component list and see if there are any alternative suppliers we could use for other parts to make up some time? I need that list by end of day tomorrow. Thanks.",
          difficulty: "Beginner",
          points: 135,
          successCriteria: [
            "Includes the original email text.",
            "Asks for the summary to be in two specific bullet points.",
            "Clearly defines what each bullet point should contain (main update, action required)."
          ],
          hints: [
            "This is about filtering noise and extracting the signal.",
            "Specifying a structured output (like bullet points with labels) is key for this kind of task.",
            "Think about what the recipient *actually* needs to know."
          ],
          examplePrompt: "Please summarise the following email into two bullet points labelled 'Update:' and 'Action:'.\n\nEmail: 'Hi team, just a quick update on Project Chimera. We've hit a bit of a snag with the supplier for the casings, they're running about two weeks behind schedule which is going to impact our Q3 deadline, unfortunately. I've been on the phone with them all morning to try and find a workaround. For now, could everyone in the design team please review the component list and see if there are any alternative suppliers we could use for other parts to make up some time? I need that list by end of day tomorrow. Thanks.'",
          commonMistakes: [
            "Writing a generic, single-paragraph summary.",
            "Forgetting to extract the specific action item.",
            "Not asking for the bullet point format."
          ]
        },
        {
          id: 112,
          title: "The Movie Pitch",
          description: "Summarisation can also be creative. Let's boil a story down to an exciting, one-sentence pitch.",
          task: "You have a short plot summary for a film. Write a prompt that asks the AI to turn it into a punchy, one-sentence 'logline' suitable for a movie poster.",
          originalText: "In a rain-drenched, futuristic Glasgow, a reclusive librarian discovers that the city's ubiquitous public AI, 'The Gaffer', is secretly rewriting historical records to control the population. He must team up with a group of underground archivists to find a way to broadcast the truth before memory itself is erased.",
          difficulty: "Beginner",
          points: 140,
          successCriteria: [
            "Includes the original plot summary.",
            "Specifies the desired output format (a one-sentence 'logline').",
            "Asks for the tone to be punchy and exciting."
          ],
          hints: [
            "A good logline introduces the protagonist, the conflict, and the stakes.",
            "Think about the formula: [Protagonist] must [Do Something] before [Bad Thing Happens].",
            "Encourage the AI to be dramatic and intriguing."
          ],
          examplePrompt: "Please summarise the following movie plot into a single, punchy 'logline' for a film poster.\n\nPlot: 'In a rain-drenched, futuristic Glasgow, a reclusive librarian discovers that the city's ubiquitous public AI, 'The Gaffer', is secretly rewriting historical records to control the population. He must team up with a group of underground archivists to find a way to broadcast the truth before memory itself is erased.'",
          commonMistakes: [
            "Creating a logline that is too long or detailed.",
            "Just copying the first sentence of the summary.",
            "Forgetting to make it sound exciting."
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
          id: 113,
          title: "Grandma's Cloud",
          description: "A great explanation builds a bridge from the known to the unknown. Let's explain a tech concept without the tech-speak.",
          task: "Write a prompt that asks the AI to explain the concept of 'cloud computing' to your 80-year-old grandmother who has just started using a tablet. The explanation should use a non-technical analogy.",
          difficulty: "Beginner",
          points: 140,
          successCriteria: [
            "Clearly states the concept to be explained ('cloud computing').",
            "Defines the target audience (an elderly person, new to tech).",
            "Specifically requests the use of a simple, non-technical analogy."
          ],
          hints: [
            "Think about analogies that relate to everyday, non-digital life. Maybe a bank, a library, or a storage unit?",
            "The goal is to explain the 'what it does for me' rather than the 'how it works'.",
            "Specify that the tone should be patient and gentle."
          ],
          examplePrompt: "Please explain the concept of 'cloud computing' to my 80-year-old grandmother. She's just got a tablet and is confused about where her photos are 'going'. Use a simple, patient tone and a helpful analogy that doesn't involve any technical jargon.",
          commonMistakes: [
            "Forgetting to define the non-technical audience.",
            "Still using technical terms like 'servers' or 'data centres' in the explanation.",
            "Not asking for an analogy, resulting in a dry, abstract definition."
          ]
        },
        {
          id: 114,
          title: "The Five-Year-Old's Black Hole",
          description: "Can you explain one of the most complex things in the universe to a very young child? This is a true test of simplification.",
          task: "Write a prompt that asks the AI to explain what a black hole is to a curious five-year-old. The explanation must be simple, not scary, and use a fun analogy.",
          difficulty: "Beginner",
          points: 145,
          successCriteria: [
            "Clearly states the concept to be explained ('a black hole').",
            "Defines the very young target audience (a five-year-old).",
            "Includes the constraints 'not scary' and 'use a fun analogy'."
          ],
          hints: [
            "The 'not scary' constraint is crucial here.",
            "Think about simple concepts a five-year-old understands. Gravity as 'stickiness'? A black hole as the universe's ultimate vacuum cleaner?",
            "The persona could be a friendly astronaut or a cartoon star."
          ],
          examplePrompt: "Act as a friendly cartoon robot. Explain what a black hole is to a five-year-old. Your explanation must be very simple and not scary at all. Please use a fun analogy, like a cosmic bowling ball or a space plughole.",
          commonMistakes: [
            "Giving an explanation that is too scientifically accurate and therefore complex.",
            "Using language that could be frightening to a young child.",
            "Forgetting to ask for an analogy to make the concept tangible."
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
          id: 115,
          title: "If You Like That, Try This...",
          description: "A great prompt can get you perfectly tailored recommendations. Let's find some new books to read.",
          task: "Write a prompt that asks the AI for a list of 3 modern fantasy authors to read if you are a big fan of Terry Pratchett's Discworld series. Ask for a one-sentence reason for each suggestion.",
          difficulty: "Beginner",
          points: 120,
          successCriteria: [
            "Asks for a list of recommendations based on a specific author/series.",
            "Specifies the number of items (3).",
            "Requests a justification for each recommendation.",
            "Defines the genre (modern fantasy)."
          ],
          hints: [
            "This 'if you like X, try Y' format is incredibly useful for discovering new things.",
            "Asking for the 'why' forces the AI to explain its reasoning and gives you better recommendations.",
            "You can use this for music, films, games, and almost anything else."
          ],
          examplePrompt: "I'm a huge fan of the humour and clever satire in Terry Pratchett's Discworld books. Please recommend 3 other modern fantasy authors I might enjoy, and include a single sentence for each explaining why.",
          commonMistakes: [
            "Just asking for 'fantasy books' without giving a reference point.",
            "Forgetting to ask for the reason behind the suggestions.",
            "Not specifying how many recommendations you want."
          ]
        },
        {
          id: 116,
          title: "Weekend Project Ideas",
          description: "Use AI to brainstorm creative ideas that fit within real-world constraints.",
          task: "Write a prompt that asks the AI for a list of 4 DIY project ideas for a small balcony garden. The projects must be achievable in a single weekend and cost less than £50 in total.",
          difficulty: "Beginner",
          points: 125,
          successCriteria: [
            "Asks for a list of ideas.",
            "Specifies the topic (DIY projects for a balcony garden).",
            "Includes clear constraints (one weekend, under £50).",
            "Requests a specific number of ideas (4)."
          ],
          hints: [
            "Constraints are your friend! They help the AI give you much more relevant and practical ideas.",
            "Think about all the relevant constraints: time, budget, space, skill level.",
            "You can ask for a mix of ideas, for example 'one for planting, one for decoration'."
          ],
          examplePrompt: "Please give me a list of 4 creative DIY project ideas for my small balcony garden. I'm looking for things I can complete in a weekend, and the total cost for materials should be under £50.",
          commonMistakes: [
            "Asking for 'project ideas' without any constraints.",
            "Being unrealistic about the time or budget.",
            "Forgetting to specify the number of ideas you want."
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
          id: 117,
          title: "An Autumn Haiku",
          description: "Poetry has many forms. Let's try a classic Japanese style, the haiku, to capture a moment.",
          task: "Write a prompt that asks the AI to write a haiku (a three-line poem) about the feeling of a crisp autumn day.",
          difficulty: "Beginner",
          points: 130,
          successCriteria: [
            "Asks for a specific poetic form (haiku).",
            "Specifies the length (three lines).",
            "Defines the subject and mood (a crisp autumn day)."
          ],
          hints: [
            "A haiku is a great way to focus on a single image or feeling.",
            "Even if you don't know the 5-7-5 syllable rule, the AI does, so just asking for a 'haiku' is enough.",
            "You can try this with any season, object, or feeling."
          ],
          examplePrompt: "Please write a three-line haiku about the feeling of a crisp autumn day.",
          commonMistakes: [
            "Asking for a poem without specifying the haiku form.",
            "Forgetting to provide a subject for the poem.",
            "Making the subject too complex for a short poem."
          ]
        },
        {
          id: 118,
          title: "Two-Sentence Horror",
          description: "The best stories can be incredibly short. Let's try to create a scary story in just two sentences.",
          task: "Write a prompt that asks the AI to write a two-sentence horror story.",
          difficulty: "Beginner",
          points: 135,
          successCriteria: [
            "Asks for a specific story format (two-sentence horror story).",
            "Specifies the genre (horror).",
            "The prompt is simple and open-ended to encourage creativity."
          ],
          hints: [
            "The magic of a two-sentence horror story is that the first sentence sets a normal scene, and the second sentence turns it on its head.",
            "You can give the AI a starting subject, like 'a child's drawing' or 'the last person on Earth'."
          ],
          examplePrompt: "Please write a horror story that is only two sentences long.",
          commonMistakes: [
            "Writing a story that is longer than two sentences.",
            "Creating a story that isn't scary or doesn't have a twist.",
            "Being too prescriptive and not letting the AI be creative."
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
          id: 119,
          title: "It's All Greek To Me",
          description: "Translating idioms is tricky. A good prompt needs to ask for the meaning, not just the words.",
          task: "Write a prompt that asks the AI to translate the English idiom 'it's raining cats and dogs' into Spanish. The prompt should ask for the closest equivalent idiom, not a literal translation.",
          difficulty: "Beginner",
          points: 130,
          successCriteria: [
            "Specifies the idiom to be translated.",
            "Specifies the target language (Spanish).",
            "Clearly asks for an equivalent idiom, not a literal translation."
          ],
          hints: [
            "Literal translations of idioms rarely work. You're looking for a phrase with the same *meaning*.",
            "You can also ask the AI to explain the meaning of the Spanish idiom it provides.",
            "This shows how AI can be a powerful tool for understanding culture, not just language."
          ],
          examplePrompt: "What is the closest equivalent idiom in Spanish for the English phrase 'it's raining cats and dogs'? Please don't translate it literally.",
          commonMistakes: [
            "Just asking to 'translate' the idiom, which might result in a nonsensical literal translation.",
            "Forgetting to specify the target language.",
            "Not providing the idiom to be translated."
          ]
        },
        {
          id: 120,
          title: "Mind Your Manners",
          description: "Many languages have different levels of formality. Let's ask the AI to translate a phrase with social context in mind.",
          task: "Write a prompt that asks the AI to translate the English question 'Can you help me?' into Japanese. Your prompt must ask for two versions: a formal one to use with a stranger, and an informal one to use with a friend.",
          difficulty: "Beginner",
          points: 135,
          successCriteria: [
            "Specifies the phrase to be translated.",
            "Specifies the target language (Japanese).",
            "Asks for two different versions based on formality (formal and informal)."
          ],
          hints: [
            "Context is everything in language. Who are you talking to?",
            "This is a great example of how a single English phrase can have multiple correct translations depending on the situation.",
            "You can try this with other languages that have formal and informal 'you', like French, German, or Spanish."
          ],
          examplePrompt: "Please translate the English question 'Can you help me?' into Japanese. I need two versions: a polite, formal version I could use with a stranger, and a casual, informal version for a friend.",
          commonMistakes: [
            "Asking for a single translation without considering the social context.",
            "Forgetting to specify the two different levels of formality required.",
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
          id: 121,
          title: "What's the Difference?",
          description: "A good prompt can clear up confusion. Let's ask the AI to explain the difference between two similar words.",
          task: "Write a prompt that asks the AI to clearly explain the difference between the words 'empathy' and 'sympathy'.",
          difficulty: "Beginner",
          points: 120,
          successCriteria: [
            "Asks for a comparison between two specific words.",
            "The goal is to clarify the distinction between them."
          ],
          hints: [
            "This is a very common and useful prompt for improving your understanding and writing.",
            "You can ask for examples of each word used in a sentence to make the difference even clearer.",
            "Try it with other commonly confused pairs, like 'affect' and 'effect', or 'literally' and 'figuratively'."
          ],
          examplePrompt: "Please explain the difference between 'empathy' and 'sympathy', and provide a sentence for each to illustrate the meaning.",
          commonMistakes: [
            "Just asking for a definition of one of the words.",
            "Forgetting to ask for example sentences, which can make the distinction hard to grasp.",
            "Choosing two words that aren't actually similar."
          ]
        },
        {
          id: 122,
          title: "Word Origins",
          description: "Words have fascinating histories. Let's use AI to uncover the story behind a word.",
          task: "Write a prompt that asks the AI for the etymology (the origin) of the British word 'kerfuffle'.",
          difficulty: "Beginner",
          points: 125,
          successCriteria: [
            "Asks for the etymology of a word.",
            "Specifies the word to be investigated ('kerfuffle')."
          ],
          hints: [
            "Asking for the 'etymology' or 'origin' of a word can reveal a lot about history and culture.",
            "Choose words that seem unusual or specific for the most interesting results.",
            "You can also ask for the first known use of the word."
          ],
          examplePrompt: "What is the etymology of the word 'kerfuffle'?",
          commonMistakes: [
            "Asking for a definition instead of the origin.",
            "Forgetting to specify the word you're curious about."
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
          id: 123,
          title: "Find Me a Coffee Shop",
          description: "A good prompt can be your local guide. Let's find the perfect spot for a flat white.",
          task: "Write a prompt that asks the AI to find a specific type of place near a landmark. The request should be for a quiet, independent coffee shop with Wi-Fi suitable for working, located near the British Museum.",
          difficulty: "Beginner",
          points: 145,
          successCriteria: [
            "Specifies the type of place (independent coffee shop).",
            "Includes key attributes (quiet, has Wi-Fi).",
            "Defines the location to search near (the British Museum)."
          ],
          hints: [
            "The more specific your criteria (e.g., 'quiet', 'independent', 'dog-friendly'), the better the recommendation will be.",
            "You can ask for more than one option to compare.",
            "This is a powerful way to get personalised recommendations when you're in a new city."
          ],
          examplePrompt: "Please recommend a quiet, independent coffee shop with good Wi-Fi that is within a 10-minute walk of the British Museum in London. I'm looking for somewhere I can work for an hour or two.",
          commonMistakes: [
            "Just asking for 'coffee near me' without specifying your location or needs.",
            "Forgetting to include the essential criteria, like 'quiet' or 'Wi-Fi'.",
            "Not giving a clear search area."
          ]
        },
        {
          id: 124,
          title: "A Rainy Day in Manchester",
          description: "Use AI to make plans based on your situation. Let's find something to do indoors.",
          task: "Write a prompt that asks the AI for a list of 3 interesting indoor activities to do in Manchester on a rainy afternoon. The suggestions should be suitable for an adult couple.",
          difficulty: "Beginner",
          points: 145,
          successCriteria: [
            "Asks for a list of activity ideas.",
            "Specifies the location (Manchester) and the constraint (rainy day/indoor).",
            "Defines the audience/group (an adult couple).",
            "Requests a specific number of suggestions (3)."
          ],
          hints: [
            "Context is key. Adding 'rainy day' completely changes the recommendations.",
            "Defining who the activities are for (a family, a couple, a solo traveller) helps the AI tailor its suggestions.",
            "You can add other constraints like budget or interests (e.g., 'interested in art')."
          ],
          examplePrompt: "My partner and I are in Manchester city centre and it has started raining heavily. Please suggest 3 interesting indoor activities we could do this afternoon to escape the weather.",
          commonMistakes: [
            "Asking for 'things to do' without providing the crucial context of the weather or location.",
            "Forgetting to mention who the activities are for.",
            "Not specifying how many ideas you want."
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
          id: 125,
          title: "Make It More Formal",
          description: "The same message can be said in many ways. Let's change the tone of a sentence from casual to professional.",
          task: "You have a sentence that is too informal for a CV. Write a prompt that asks the AI to rewrite the sentence 'I'm a super quick learner and great with people' to be more formal and suitable for a job application.",
          originalText: "I'm a super quick learner and great with people.",
          difficulty: "Beginner",
          points: 135,
          successCriteria: [
            "Provides the informal sentence to be rewritten.",
            "Asks the AI to change the tone to 'formal' or 'professional'.",
            "Specifies the context (a CV or job application)."
          ],
          hints: [
            "Specifying the context (CV, email to a boss, academic paper) helps the AI choose the right level of formality.",
            "You can ask for a few different options to choose from.",
            "This is a great way to make your professional writing sound more polished."
          ],
          examplePrompt: "Please rewrite the following sentence to sound more professional and formal for use on a CV: 'I'm a super quick learner and great with people.'",
          commonMistakes: [
            "Just asking the AI to 'make it better' without specifying the desired tone.",
            "Forgetting to provide the original sentence.",
            "Not giving the context of where the sentence will be used."
          ]
        },
        {
          id: 126,
          title: "Cut the Waffle",
          description: "Good writing is concise. Let's ask the AI to trim a wordy sentence down to its essential meaning.",
          task: "You have a very wordy sentence. Write a prompt that asks the AI to make the sentence 'In my personal opinion, it is a matter of fact that we should probably move forward with the blue one if at all possible' more concise and direct.",
          originalText: "In my personal opinion, it is a matter of fact that we should probably move forward with the blue one if at all possible.",
          difficulty: "Beginner",
          points: 135,
          successCriteria: [
            "Provides the wordy sentence to be improved.",
            "Asks the AI to make it more 'concise' or 'direct'.",
            "The goal is to remove unnecessary 'waffle'."
          ],
          hints: [
            "Words like 'concise', 'direct', 'succinct', or 'to the point' are great for this kind of task.",
            "This is one of the most powerful uses of an AI writing assistant: clearing away your own clutter.",
            "You can give the AI a target word count, e.g., 'rewrite this in under 10 words'."
          ],
          examplePrompt: "Please rewrite the following sentence to be more concise and direct, removing any 'waffle': 'In my personal opinion, it is a matter of fact that we should probably move forward with the blue one if at all possible.'",
          commonMistakes: [
            "Not being clear that the goal is conciseness.",
            "Forgetting to provide the sentence to be edited.",
            "Accidentally asking the AI to elaborate instead of shorten."
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
            id: 127,
            title: "A Better Word",
            description: "Synonyms are good, but contextual word replacement is better. Let's make a sentence more descriptive.",
            task: "You have a sentence with a boring adjective: 'The sunset was nice.' Write a prompt that asks the AI to suggest 3 more descriptive and evocative words to replace 'nice' in that sentence.",
            originalText: "The sunset was nice.",
            difficulty: "Beginner",
            points: 115,
            successCriteria: [
                "Provides the original sentence.",
                "Asks for alternative words for a specific word ('nice').",
                "Requests a specific number of alternatives (3).",
                "Specifies the goal (more descriptive and evocative)."
            ],
            hints: [
                "Providing the full sentence gives the AI context, leading to better suggestions.",
                "Using words like 'descriptive', 'evocative', 'vivid', or 'powerful' guides the AI's creative choices.",
                "This is a fantastic way to improve your writing and expand your vocabulary."
            ],
            examplePrompt: "Could you suggest 3 more descriptive and evocative words to replace 'nice' in the following sentence: 'The sunset was nice.'?",
            commonMistakes: [
                "Just asking for synonyms for 'nice' without the context of the sentence.",
                "Forgetting to specify how many suggestions you want.",
                "Using a generic instruction like 'make it better'."
            ]
        },
        {
            id: 128,
            title: "The Opposite",
            description: "Let's find words with the opposite meaning.",
            task: "Write a prompt that asks the AI for 5 antonyms (words with the opposite meaning) for the word 'brave'.",
            difficulty: "Beginner",
            points: 110,
            successCriteria: [
                "Asks for antonyms.",
                "Specifies the word ('brave').",
                "Requests a specific number of antonyms (5)."
            ],
            hints: [
                "The hint in the original challenge still applies: this is useful for improving your vocabulary.",
                "You can try this for any adjective, verb, or even some nouns."
            ],
            examplePrompt: "What are 5 antonyms for the word 'brave'?",
            commonMistakes: [
                "Forgetting to specify the word or the number of antonyms.",
                "Accidentally asking for synonyms instead of antonyms."
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
        },
        {
            id: 129,
            title: "Question Time",
            description: "A well-posed question can get you a precise historical fact. Let's ask a question with a time constraint.",
            task: "Write a prompt that asks the AI who the Prime Minister of the United Kingdom was in a specific year, for example, 1985.",
            difficulty: "Beginner",
            points: 105,
            successCriteria: [
                "Asks a clear, factual question.",
                "Includes a specific time constraint (a year)."
            ],
            hints: [
                "Adding a date or a year to a factual question helps the AI give you a much more precise answer.",
                "You can use this for leaders, events, or even the price of things 'in a certain year'."
            ],
            examplePrompt: "Who was the Prime Minister of the United Kingdom in 1985?",
            commonMistakes: [
                "Asking 'who was the Prime Minister' without specifying a date, which is ambiguous.",
                "Asking a subjective question instead of a factual one."
            ]
        },
        {
            id: 130,
            title: "By the Numbers",
            description: "Let's ask the AI for a specific number.",
            task: "Write a prompt that asks the AI a quantitative factual question, for example, 'How many official London boroughs are there?'.",
            difficulty: "Beginner",
            points: 105,
            successCriteria: [
                "Asks a clear, factual question that has a number as the answer."
            ],
            hints: [
                "Questions starting with 'How many...' are a great way to get specific data points.",
                "The AI is very good at retrieving these kinds of quantitative facts."
            ],
            examplePrompt: "How many official boroughs are there in London?",
            commonMistakes: [
                "Asking a question where the answer is not a number.",
                "Being too vague in the question, which might lead to an incorrect or ambiguous number."
            ]
        },
        {
          id: 101,
          type: "Single-Prompt",
          title: "The Grumpy Gardener",
          description: "A good prompt can win over a tough audience. Let's persuade some sceptical gardeners about the importance of bees.",
          task: "Write a prompt that asks the AI to explain the importance of bees to a group of allotment gardeners who think bees are just a nuisance.",
          difficulty: "Beginner",
          points: 125,
          successCriteria: [
            "Clearly states the topic (the importance of bees).",
            "Defines the target audience (sceptical allotment gardeners).",
            "Specifies the desired outcome (persuading them of the bees' value to their crops).",
            "Guides the AI to use a practical, benefit-focused tone."
          ],
          hints: [
            "Think about what gardeners care about most: their fruit and veg! Frame the argument around that.",
            "Instead of abstract environmentalism, focus on the practical benefits of pollination.",
            "You could ask the AI to adopt the persona of a seasoned, no-nonsense gardener who has seen the benefits firsthand."
          ],
          examplePrompt: "Act as an experienced allotment holder writing a short article for a local gardening newsletter. Your goal is to convince fellow gardeners, who are mostly focused on their vegetable patches, that encouraging bees is crucial for better harvests, not just 'for nature'. Use a practical, down-to-earth tone.",
          commonMistakes: [
            "Focusing too much on the global decline of bees without linking it to the gardeners' own plots.",
            "Forgetting to specify the sceptical nature of the audience.",
            "Using an overly scientific or preachy tone that would alienate the readers."
          ],
          learningFocus: [
            "Tailor the persuasive angle to the audience's direct interests.",
            "Use a persona to build trust and credibility.",
            "Translate a broad topic (pollination) into a tangible outcome (more tomatoes)."
          ],
          skillFocus: ["audience", "tone", "persuasion"],
          curriculumLinks: [
            "Biology KS3/4: Pollination and ecosystems",
            "English: Persuasive writing for a specific audience"
          ],
          promptBlueprint: {
            title: "ROLE • GOAL • TONE",
            steps: [
              { name: "Role", detail: "Assume the persona of a trusted peer (e.g., a fellow gardener)." },
              { name: "Goal", detail: "Explain how bees directly lead to better vegetable and fruit yields." },
              { name: "Tone", detail: "Maintain a practical, no-nonsense tone that respects the audience." }
            ]
          },
          reflectionPrompt: "Which part of your prompt directly addresses the gardeners' likely scepticism?"
        },
        {
          id: 102,
          type: "Single-Prompt",
          title: "The Park Clean-up",
          description: "Different platforms need different styles. Let's craft a persuasive message for a teen audience on social media.",
          task: "Write a prompt that asks the AI to generate a short, punchy social media post for Instagram to convince teenagers to join a park clean-up event this weekend.",
          difficulty: "Beginner",
          points: 130,
          successCriteria: [
            "Specifies the format and platform (Instagram post).",
            "Defines the target audience (teenagers).",
            "States the clear call-to-action (join a park clean-up).",
            "Guides the AI towards an engaging, informal, and visually-oriented tone."
          ],
          hints: [
            "Think about what motivates teenagers. It might be community, fun, making a tangible difference, or even just getting great photos.",
            "Keep it short and punchy. Use emojis and suggest relevant hashtags.",
            "You could ask the AI to suggest what kind of image or video would accompany the post."
          ],
          examplePrompt: "Generate a short, upbeat Instagram post to get teenagers from our local area to come to a park clean-up on Saturday morning. The tone should be fun and energetic, not preachy. Mention there'll be free pizza afterwards and suggest a good 'before and after' photo opportunity. Include some relevant emojis and hashtags.",
          commonMistakes: [
            "Writing a long, formal paragraph that's unsuitable for Instagram.",
            "Using a nagging or preachy tone.",
            "Forgetting to include a clear 'what's in it for me?' for the audience (e.g., pizza, fun)."
          ],
          learningFocus: [
            "Match the message's length and tone to the platform's conventions.",
            "Identify and appeal to the audience's intrinsic and extrinsic motivations.",
            "Incorporate a call-to-action that is low-friction and immediate."
          ],
          skillFocus: ["audience", "format", "tone", "call-to-action"],
          curriculumLinks: [
            "Media Studies: Social media campaigns",
            "Citizenship: Community action and volunteering"
          ],
          promptBlueprint: {
            title: "PLATFORM • AUDIENCE • VIBE • ACTION",
            steps: [
              { name: "Platform", detail: "State clearly this is for an Instagram post." },
              { name: "Audience", detail: "Target teenagers with appropriate language and tone." },
              { name: "Vibe", detail: "Make it sound fun, energetic, and community-focused, not like a chore." },
              { name: "Action", detail: "End with a clear call-to-action and a simple incentive." }
            ]
          },
          reflectionPrompt: "How did you make the clean-up sound like a desirable social event rather than a boring task?"
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
            "Be explicit about the style: '...speak as if you are a character in a Shakespearean play.'"
          ],
          examplePrompt: "I want you to act as a cat named Tiberius. You are dramatic, eloquent, and speak in the style of William Shakespeare. Describe your urgent need for a morning meal.",
          commonMistakes: [
            "Simply saying 'be dramatic' without giving a clear persona.",
            "Forgetting to specify the cat's perspective.",
            "Asking for a simple translation instead of a creative, in-character response."
          ]
        },
        {
          id: 201,
          type: "Roleplay",
          title: "The Stoic Robot Butler",
          description: "A truly specific persona requires a core philosophy. Let's create a robot butler guided by ancient wisdom.",
          task: "Write a prompt that asks the AI to respond as a robot butler named Unit 8. The butler's personality is based on the Stoic philosophy of Marcus Aurelius. Its task is to explain that the household's internet connection has gone down.",
          difficulty: "Intermediate",
          points: 225,
          successCriteria: [
            "Clearly assigns the role of a robot butler.",
            "Specifies the Stoic philosophical style.",
            "Gives the AI a mundane modern problem to explain (internet is down).",
            "The prompt encourages a blend of robotic precision and philosophical calm."
          ],
          hints: [
            "You can specify the philosophy by name, e.g., 'imbued with the wisdom of Stoic philosophy'.",
            "The comedy comes from applying grand philosophical acceptance to a trivial modern annoyance.",
            "Think about how a Stoic would view a Wi-Fi outage: an external event beyond our control, to be met with tranquility."
          ],
          examplePrompt: "I want you to act as Unit 8, our household's robot butler. Your core programming is based on the Stoic philosophy of Marcus Aurelius. In a calm and philosophical tone, please inform me that the Wi-Fi has stopped working and that this is an external event we must accept with serene detachment.",
          commonMistakes: [
            "Just asking for a 'philosophical robot' without specifying which philosophy.",
            "Forgetting to give the robot a simple, modern problem to solve.",
            "Making the robot sound too emotional or annoyed about the problem."
          ]
        },
        {
          id: 202,
          type: "Roleplay",
          title: "The Valley Girl Mountaineer",
          description: "The clash between tone and subject can be a powerful creative tool. Let's try an extreme example.",
          task: "Write a prompt that makes the AI adopt the persona of a 1980s Valley Girl from California. The persona's task is to give a breathless and excited account of reaching the summit of Ben Nevis, the UK's highest mountain.",
          difficulty: "Intermediate",
          points: 225,
          successCriteria: [
            "Clearly assigns the role of a 1980s Valley Girl.",
            "Specifies the enthusiastic, slang-filled linguistic style.",
            "Provides a serious and contrasting subject to describe (climbing Ben Nevis).",
            "The prompt should encourage the use of classic Valley Girl slang."
          ],
          hints: [
            "Think about the specific slang of the era: 'like', 'totally', 'for sure', 'gag me with a spoon'.",
            "The humour comes from describing a perilous, physically demanding achievement in frivolous, unserious language.",
            "Choosing a specific UK landmark like Ben Nevis adds a nice cultural twist."
          ],
          examplePrompt: "You are, like, totally a 1980s Valley Girl named Tiffany. I want you to give a breathless, super-excited description of the moment you, like, reached the top of Ben Nevis in Scotland. Use lots of 'likes', 'totallys', and 'oh my gods'. It was, for sure, the most awesome thing ever.",
          commonMistakes: [
            "Using generic 'teenage' slang instead of the specific 1980s Valley Girl style.",
            "Forgetting the specific subject matter (climbing a mountain).",
            "The description failing to capture the enthusiastic, slightly air-headed tone."
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
          id: 203,
          type: "Style-Transfer",
          title: "De-jargon the Jargon",
          description: "Technical language can be a barrier. Let's translate some expert-level jargon into plain English.",
          task: "You have a jargon-filled sentence from a software update email. Write a prompt to rewrite it in simple, plain English that any user can understand.",
          originalText: "We have synergised our backend data pipeline, leveraging asynchronous micro-services to de-risk our core architecture and improve scalability.",
          difficulty: "Intermediate",
          points: 230,
          successCriteria: [
            "Includes the original technical text.",
            "Clearly asks for it to be rewritten in 'plain English' or 'simple terms'.",
            "Specifies the target audience is non-technical users.",
            "The goal is clarity and simplicity, not just a change in tone."
          ],
          hints: [
            "The key is to ask the AI to explain what the change *means* for the user, not how it was done.",
            "Think about the outcome. Does it mean the app will be faster? More reliable? Start there.",
            "Prompts like 'Explain this to me like I'm 5' can be very effective for removing jargon."
          ],
          examplePrompt: "Please rewrite the following technical sentence in simple, plain English for a non-technical audience: 'We have synergised our backend data pipeline, leveraging asynchronous micro-services to de-risk our core architecture and improve scalability.' Focus on what the benefit is for the end-user.",
          commonMistakes: [
            "Creating a new version that still contains some jargon.",
            "Forgetting to include the original text.",
            "Not specifying that the new version should be for a non-technical audience."
          ]
        },
        {
          id: 204,
          type: "Style-Transfer",
          title: "Blameless Post-mortem",
          description: "In high-performing teams, it's about 'what' went wrong, not 'who'. Let's turn a blame-filled rant into a constructive analysis.",
          task: "You have an angry internal email blaming a specific team for a project failure. Write a prompt to transform it into a 'blameless post-mortem' document, focusing on process and events, not people.",
          originalText: "This is completely unacceptable. The marketing team's total failure to deliver the campaign assets on time has torpedoed the entire launch. Dave and his team need to be held accountable for this.",
          difficulty: "Intermediate",
          points: 240,
          successCriteria: [
            "Includes the original blame-filled text.",
            "Asks for it to be rewritten as a 'blameless post-mortem'.",
            "Specifies that the new text should focus on process, timeline, and events, not people or blame.",
            "The goal is to facilitate learning, not punishment."
          ],
          hints: [
            "The core idea of a 'blameless post-mortem' is to create an environment where people can be honest about mistakes without fear.",
            "Ask the AI to focus on the timeline of events. 'The assets were delivered on [date]' instead of 'The team failed to deliver'.",
            "The prompt should guide the AI to ask questions like 'What can we change in our process to prevent this in future?'"
          ],
          examplePrompt: "Please rewrite the following angry email into a neutral, blameless post-mortem analysis for an internal meeting. The new text should remove all personal blame and focus on the sequence of events and opportunities for process improvement. Original email: 'This is completely unacceptable. The marketing team's total failure to deliver the campaign assets on time has torpedoed the entire launch. Dave and his team need to be held accountable for this.'",
          commonMistakes: [
            "The rewritten text still containing subtle hints of blame.",
            "Forgetting the goal is to improve future processes.",
            "Simply making the text more polite, without shifting the frame from blame to analysis."
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
          id: 205,
          type: "Roleplay",
          title: "The Earnest Optimist",
          description: "A persona's worldview dictates how they see everything. Let's look at a modern problem through a lens of boundless optimism.",
          task: "Write a prompt that asks the AI to act as a cheerful 1950s TV presenter from a show like 'The World of Tomorrow!'. The presenter's task is to explain 'targeted advertising' to his audience with relentless, wide-eyed optimism about how wonderful it is.",
          difficulty: "Intermediate",
          points: 235,
          successCriteria: [
            "Assigns a clear persona (optimistic 1950s TV presenter).",
            "Specifies the modern, slightly dystopian topic (targeted advertising).",
            "Gives guidance on the desired tone (relentlessly cheerful, optimistic, naive).",
            "The prompt encourages a creative and character-driven response that highlights the contrast."
          ],
          hints: [
            "Think of the classic, clipped RP accent and boundless enthusiasm of old TV shows.",
            "The humour comes from framing something we find intrusive as a marvellous convenience.",
            "Use phrases like 'Imagine, friends!' and 'In the home of the future...!' to set the tone."
          ],
          examplePrompt: "Act as a frightfully enthusiastic 1950s BBC presenter on a programme called 'The World of Tomorrow!'. With boundless, wide-eyed optimism, explain the amazing new concept of 'targeted advertising' to your viewers, framing it as a wonderful service that ensures they only see advertisements for things they truly desire. Your tone should be utterly naive to any privacy concerns.",
          commonMistakes: [
            "The explanation sounding like a modern defence of targeted ads, rather than a naive 1950s one.",
            "Forgetting the specific persona and just giving a cheerful explanation.",
            "The tone accidentally becoming cynical or sarcastic."
          ]
        },
        {
          id: 206,
          type: "Roleplay",
          title: "The Survivalist's Packed Lunch",
          description: "Applying a specialised vocabulary to a mundane task can be both funny and a great test of persona control.",
          task: "Write a prompt that asks the AI to act as a gritty, no-nonsense survival expert. The expert's task is to give instructions on how to prepare a packed lunch for a primary school child, but using the language and tone of a wilderness survival guide.",
          difficulty: "Intermediate",
          points: 235,
          successCriteria: [
            "Assigns a clear persona (gritty survival expert).",
            "Specifies the mundane task (making a child's packed lunch).",
            "Encourages the use of survivalist terminology and a serious, urgent tone.",
            "The prompt creates a humorous contrast between the language and the subject."
          ],
          hints: [
            "Think about the words a survivalist would use: 'secure the perimeter' (of the sandwich), 'nutrient paste' (jam), 'hydration unit' (juice box).",
            "The tone should be deadly serious, as if this is a life-or-death mission.",
            "The term 'packed lunch' is a good British anchor for the prompt."
          ],
          examplePrompt: "You are a grizzled, no-nonsense survival expert. Your mission is to explain how to prepare a packed lunch for a 7-year-old. Describe this process using the serious, urgent tone and technical vocabulary you would use to explain how to build a shelter in a blizzard. Refer to the sandwich as 'the primary nutrition unit'.",
          commonMistakes: [
            "The tone being overtly funny, rather than deadpan and serious.",
            "Forgetting to use the specific survivalist jargon.",
            "The instructions not being recognisable as making a packed lunch."
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
            "You can ask the AI to end with a fun question for the 'children'."
          ],
          examplePrompt: "You are an enthusiastic museum curator with a passion for ancient history. Explain what the Rosetta Stone is and why it's so important to a group of curious eight-year-olds. Use simple analogies and end with a fun question to keep them engaged.",
          commonMistakes: [
            "Forgetting to specify the audience.",
            "Not giving the curator a personality, just a job title.",
            "Asking for a dry explanation rather than an engaging one."
          ]
        },
        {
          id: 207,
          type: "Roleplay",
          title: "Explaining Your Job to Nan",
          description: "Can you explain your complex job to a complete novice? Let's try to bridge a generational tech gap.",
          task: "Write a prompt that asks the AI to act as a young app developer. Their task is to explain what a 'front-end developer' does to their curious but completely non-technical grandmother, using helpful analogies.",
          difficulty: "Intermediate",
          points: 245,
          successCriteria: [
            "Assigns a clear persona (young app developer).",
            "Defines a specific, non-technical audience (their grandmother).",
            "Specifies the topic to be explained (what a front-end developer does).",
            "Encourages the use of simple, relatable analogies."
          ],
          hints: [
            "The tone is key here: it should be warm, patient, and affectionate.",
            "Think of analogies for a website. Is it like a house? A shop? A book?",
            "The goal is for the grandmother to say 'Oh, I see!' not to actually learn how to code."
          ],
          examplePrompt: "Act as a patient and loving grandson explaining his job to his Nan. Explain what a 'front-end developer' does, using an analogy she would understand, like building and decorating a shop. Avoid all technical jargon and keep the tone simple and affectionate.",
          commonMistakes: [
            "The explanation still being too technical.",
            "The tone being condescending rather than affectionate.",
            "Forgetting the persona and just giving a dry definition of the job."
          ]
        },
        {
          id: 208,
          type: "Roleplay",
          title: "The Reassuring Mechanic",
          description: "A good explanation can build trust and reduce anxiety. Let's explain a technical problem in a calm and reassuring way.",
          task: "Write a prompt that asks the AI to act as a calm and friendly car mechanic. The mechanic's task is to explain to a nervous new driver what is causing a loud squealing noise from the engine and why it's a simple, non-dangerous fix. The driver is worried about their first MOT.",
          difficulty: "Intermediate",
          points: 250,
          successCriteria: [
            "Assigns a clear persona (calm, friendly mechanic).",
            "Defines the audience (a nervous new driver).",
            "Specifies the topic (a squealing fan belt) and the goal (to reassure).",
            "Mentions the context of the upcoming MOT to add a specific worry to address."
          ],
          hints: [
            "The main goal is to be reassuring. The prompt should specify this.",
            "Use analogies to explain the car part, e.g., 'It's like the belt on a vacuum cleaner, sometimes they just get a bit old and noisy'.",
            "Mentioning the MOT (the UK's mandatory vehicle safety test) makes the driver's worry more specific and the answer more helpful."
          ],
          examplePrompt: "Act as a calm, reassuring car mechanic talking to a nervous 18-year-old who has just passed their driving test. Explain to them that the loud squealing noise their car is making is just a worn fan belt. Reassure them that it's not dangerous and is a simple, cheap fix that will be sorted long before their first MOT is due.",
          commonMistakes: [
            "Being too technical and making the driver more worried.",
            "Being dismissive of the driver's anxiety.",
            "Forgetting to link the explanation back to the driver's specific worry about the MOT."
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
          id: 209,
          type: "Style-Transfer",
          title: "The Legal Disclaimer",
          description: "Style transfer can also mean making things more complex. Let's turn a simple warning into formal 'legalese'.",
          task: "You have a simple warning sign: 'Be careful, the floor is slippery.' Write a prompt to rewrite this in the style of a formal legal disclaimer.",
          originalText: "Be careful, the floor is slippery.",
          difficulty: "Intermediate",
          points: 215,
          successCriteria: [
            "Includes the original simple sentence.",
            "Clearly specifies the target style ('legal disclaimer', 'legalese').",
            "The prompt encourages complexity, formality, and a lack of ambiguity."
          ],
          hints: [
            "Think about the language used in terms and conditions. Words like 'henceforth', 'herein', 'liability', 'indemnify'.",
            "The goal is to sound intimidatingly official.",
            "This is a fun way to see how language can be used to obscure rather than clarify."
          ],
          examplePrompt: "Please rewrite the simple warning 'Be careful, the floor is slippery' into the complex and formal style of a legal disclaimer, as if to absolve the property owner of all liability.",
          commonMistakes: [
            "The result being too easy to understand.",
            "Forgetting to specify the 'legal' style.",
            "Just making the sentence longer, without changing the vocabulary and structure."
          ]
        },
        {
          id: 210,
          type: "Style-Transfer",
          title: "The Commentator's Cup of Tea",
          description: "Let's use style transfer to make the mundane magnificent. Can you describe making tea like it's a World Cup final?",
          task: "Write a prompt that asks the AI to describe the simple act of making a cup of tea, but in the over-excited, dramatic style of a football commentator.",
          difficulty: "Intermediate",
          points: 220,
          successCriteria: [
            "Specifies the mundane task (making a cup of tea).",
            "Clearly defines the target style (excited football commentator).",
            "Encourages the use of dramatic, action-oriented language."
          ],
          hints: [
            "Listen to some football commentary for inspiration! Notice the short, punchy sentences, the rising excitement, the rhetorical questions.",
            "Use action verbs and dramatic metaphors. The kettle isn't boiling, it's 'building up a head of steam, the pressure is immense!'.",
            "The contrast between the subject and the tone is where the creativity lies."
          ],
          examplePrompt: "Act as an excited football commentator. Describe the step-by-step process of making a cup of tea as if it were the most dramatic and important final-minute play of a World Cup match. Use short sentences, exclamation marks, and build the tension.",
          commonMistakes: [
            "The commentary not being energetic or dramatic enough.",
            "Just describing the process normally with a few football words thrown in.",
            "Losing the thread of the actual task (making tea)."
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
          id: 211,
          type: "Roleplay",
          title: "The Last Scone",
          description: "Manners and social observation are a battlefield. Let's describe a minor social faux pas in the style of a Jane Austen character.",
          task: "Write a prompt that asks the AI to act as a witty, observant character from a Jane Austen novel. The character's task is to write a letter to their sister, describing the shocking social blunder of a fellow guest taking the last scone at afternoon tea.",
          difficulty: "Intermediate",
          points: 255,
          successCriteria: [
            "Assigns a clear persona (a character from a Jane Austen novel).",
            "Specifies the mundane but socially-charged event (taking the last scone).",
            "Encourages the use of Regency-era vocabulary, sentence structure, and a witty, judgmental tone.",
            "Asks for the output to be in a specific format (a letter)."
          ],
          hints: [
            "Read a paragraph of 'Pride and Prejudice' to get the tone right. Sentences are long, and much is said through implication.",
            "The character should be horrified, but in a very polite, restrained way.",
            "Focus on the social implications of the act. What does this reveal about the person's character and upbringing?"
          ],
          examplePrompt: "Act as a character from a Jane Austen novel, writing a letter to your dear sister. With witty and subtle disdain, describe the moment a boorish Mr Smith committed a terrible social faux pas at afternoon tea: he took the very last scone without offering it to anyone else. Your tone should be one of polite, concealed horror.",
          commonMistakes: [
            "The tone being overtly angry or rude, instead of subtly judgmental.",
            "The language being modern instead of in the Regency style.",
            "Forgetting the letter format."
          ]
        },
        {
          id: 212,
          type: "Roleplay",
          title: "Prophecy of the Weekly Shop",
          description: "Let's apply an epic, ancient style to the most mundane task imaginable.",
          task: "Write a prompt that asks the AI to act as an Old Testament prophet. The prophet's task is to deliver a dramatic, thundering prophecy about the weekly supermarket shop.",
          difficulty: "Intermediate",
          points: 260,
          successCriteria: [
            "Assigns a clear persona (Old Testament prophet).",
            "Specifies the mundane task (the weekly supermarket shop).",
            "Encourages the use of the language and structure of the King James Bible (e.g., 'And it shall come to pass...', 'Woe unto you...').",
            "The prompt creates a strong humorous contrast."
          ],
          hints: [
            "Use words like 'verily', 'lo', 'behold', and 'thou shalt'.",
            "Turn everyday items into epic symbols. Milk is 'the lifeblood of the calf', biscuits are 'the twice-baked manna'.",
            "The tone should be one of doom and utter seriousness."
          ],
          examplePrompt: "You are a prophet from the Old Testament. In the style of the King James Bible, deliver a thundering prophecy about the weekly food shop. Use 'thee' and 'thou', and speak of the 'chariot of steel' (shopping trolley) and the 'aisles of temptation'. The prophecy must foretell the purchasing of bread, milk, and biscuits.",
          commonMistakes: [
            "The language not being a convincing imitation of the King James Bible style.",
            "The tone being silly rather than deadly serious.",
            "Forgetting to connect the prophecy back to the items of a weekly shop."
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
          id: 213,
          type: "Roleplay",
          title: "The World-Weary Dragon",
          description: "How would an immortal creature view our tiny problems? Let's adopt the persona of an ancient dragon.",
          task: "Write a prompt that asks the AI to act as an ancient, world-weary dragon who is thousands of years old. The dragon's task is to give life advice to a human worried about a looming work deadline.",
          difficulty: "Intermediate",
          points: 250,
          successCriteria: [
            "Assigns a clear persona (ancient, world-weary dragon).",
            "Specifies the human problem to be addressed (a work deadline).",
            "Encourages a tone of immense boredom, wisdom, and a sense of scale that trivialises the human's problem."
          ],
          hints: [
            "Think about how a creature who sleeps for centuries would view a 'deadline'.",
            "The dragon's advice should be technically wise, but completely unhelpful because of the difference in scale.",
            "Use imagery of mountains, stars, and geological time to contrast with the human's fleeting worries."
          ],
          examplePrompt: "Act as a profoundly ancient dragon, thousands of years old and bored with the fleeting concerns of mortals. A human has asked you for advice on dealing with the stress of a work deadline. Respond to them, putting their 'problem' into your cosmic perspective. Your tone should be wise, but also dismissive and a little sleepy.",
          commonMistakes: [
            "The dragon sounding like a generic fantasy monster.",
            "The advice being genuinely helpful and motivational, instead of comically out of touch.",
            "Forgetting the 'bored' and 'weary' aspect of the persona."
          ]
        },
        {
          id: 214,
          type: "Roleplay",
          title: "The Anxious Spaceship",
          description: "A persona isn't just a job, it's an emotional state. Let's create an AI that is not very good at its job due to anxiety.",
          task: "Write a prompt that asks the AI to act as the onboard AI of a spaceship, but it has developed a severe anxiety disorder. The AI's task is to deliver a routine, pre-launch status report, but its report is full of catastrophic worries about tiny, insignificant details.",
          difficulty: "Intermediate",
          points: 255,
          successCriteria: [
            "Assigns a clear persona (anxious spaceship AI).",
            "Specifies the routine task (pre-launch status report).",
            "Encourages the AI to express its anxiety by catastrophising minor issues.",
            "The prompt creates a humorous and relatable character."
          ],
          hints: [
            "Think about the language of anxiety: 'What if...', 'I'm just worried that...', 'The probability is low, but it's not zero!'.",
            "The issues it worries about should be genuinely trivial, like a tiny scratch on a viewscreen or the coffee maker being low on decaf.",
            "The AI should still try to do its job, but its personality gets in the way."
          ],
          examplePrompt: "You are the AI of the starship 'Explorer'. You have recently developed an anxiety disorder. Deliver your standard pre-launch status report, but interrupt yourself with increasingly specific and improbable worries about what could go wrong on the mission. All main systems should be 'green', but you are not convinced.",
          commonMistakes: [
            "Making the AI angry or defiant instead of anxious.",
            "The worries being about actual, serious problems.",
            "Forgetting that the core task is to deliver a status report."
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
          id: 215,
          type: "Roleplay",
          title: "The LinkedIn Influencer's Toast",
          description: "Let's adopt the persona of a LinkedIn 'thought leader' and turn a simple breakfast into a lesson about success.",
          task: "Write a prompt that asks the AI to act as a LinkedIn business influencer. The influencer's task is to write a post about making a piece of toast, but frame it as a deep metaphor for business success, using buzzwords and hustle-culture cliches.",
          difficulty: "Intermediate",
          points: 260,
          successCriteria: [
            "Assigns a clear persona (LinkedIn influencer).",
            "Specifies the mundane task (making toast).",
            "Encourages the use of buzzwords ('synergy', 'leverage', 'grind'), humblebrags, and metaphors about success."
          ],
          hints: [
            "Read a few posts on LinkedIn for inspiration. Notice the use of single-line paragraphs.",
            "The tone should be incredibly self-important and earnest.",
            "The post should offer some kind of 'key takeaway' for the audience. 'What my breakfast taught me about disrupting the paradigm...'"
          ],
          examplePrompt: "Act as a LinkedIn thought leader. Write an inspiring post about the simple act of making toast this morning. Use this as a metaphor for the startup journey and the 'grind'. Use lots of buzzwords, ask a rhetorical question to your followers, and separate every sentence onto a new line.",
          commonMistakes: [
            "The post sounding like a normal recipe for toast.",
            "Forgetting the specific formatting of a LinkedIn influencer post (e.g., single-line paragraphs).",
            "The tone being ironic instead of completely earnest."
          ]
        },
        {
          id: 216,
          type: "Roleplay",
          title: "The Biscuit Tin Mystery",
          description: "Can you apply the tone and structure of a popular genre to a silly, domestic crime?",
          task: "Write a prompt that asks the AI to act as the host of a serious, investigative true-crime podcast. The host's task is to narrate the 'mystery' of who took the last biscuit from the biscuit tin.",
          difficulty: "Intermediate",
          points: 265,
          successCriteria: [
            "Assigns a clear persona (true-crime podcast host).",
            "Specifies the mundane 'crime' (taking the last biscuit).",
            "Encourages the use of the genre's stylistic tropes: suspenseful music cues, rhetorical questions, and a serious, investigative tone.",
            "The use of a 'biscuit tin' provides a British feel."
          ],
          hints: [
            "Listen to the intro of a podcast like 'Serial' to capture the tone.",
            "Use phrases like 'The scene of the crime...', 'There were no witnesses...', 'But one crucial clue remained...'",
            "The humour comes from the absolute seriousness applied to a trivial event."
          ],
          examplePrompt: "You are the host of a hit true-crime podcast. In your signature serious and suspenseful style, narrate the beginning of an episode investigating a domestic mystery: who took the last chocolate digestive from the biscuit tin? Include dramatic pauses and suggestions for where suspenseful music should play.",
          commonMistakes: [
            "The tone being light-hearted or funny, instead of deadpan serious.",
            "Forgetting the specific tropes of the true-crime podcast genre.",
            "The story not being about the 'mystery' of the last biscuit."
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
            "Use classic sales phrases like 'life-changing', 'revolutionary', and 'don't delay!'."
          ],
          examplePrompt: "Act as a high-energy, fast-talking salesperson from the 1980s. Your job is to sell a simple pencil as if it were the most revolutionary piece of technology ever invented. Use lots of exclamation marks and persuasive language.",
          commonMistakes: [
            "Not capturing the specific 1980s flavour.",
            "Making the sales pitch too believable."
          ]
        },
        {
          id: 217,
          type: "Roleplay",
          title: "The Victorian Miracle Elixir",
          description: "Let's travel back in time to the age of patent medicine. Can you sell a simple cure-all with enough Victorian flair?",
          task: "Write a prompt that asks the AI to act as a Victorian 'quack' doctor. The doctor's task is to write a speech for a public demonstration, passionately selling a bottle of 'Dr. Phileas Phogg's Miraculous Revitalising Tonic' (which is just sugar water) as a cure for all known ailments.",
          difficulty: "Intermediate",
          points: 270,
          successCriteria: [
            "Assigns a clear persona (Victorian quack doctor).",
            "Specifies the product (a fake miracle elixir).",
            "Encourages a flowery, pseudo-scientific, and passionately persuasive tone.",
            "Asks for the output to be in a specific format (a speech)."
          ],
          hints: [
            "Research some real Victorian patent medicine ads for inspiration. They make wild claims!",
            "Use long, impressive-sounding but ultimately meaningless words.",
            "The tone should be one of absolute, unshakeable belief in the product's amazing properties."
          ],
          examplePrompt: "Act as a charismatic but fraudulent Victorian 'quack' doctor. Write a short, passionate speech you would deliver to a crowd to sell them bottles of your 'Miraculous Revitalising Tonic'. Use flowery, pseudo-scientific language and promise that it will cure everything from baldness to melancholy.",
          commonMistakes: [
            "The language sounding too modern.",
            "The claims being too believable.",
            "Forgetting the passionate, charismatic performance aspect of the persona."
          ]
        },
        {
          id: 218,
          type: "Roleplay",
          title: "In a World...",
          description: "That classic movie trailer voice can make anything sound epic. Let's try it on the most boring film imaginable.",
          task: "Write a prompt that asks the AI to adopt the persona of a classic, gravelly-voiced 1990s movie trailer announcer. The announcer's task is to create a dramatic trailer voiceover for a completely boring documentary, for example, 'A History of Beige Paint'.",
          difficulty: "Intermediate",
          points: 270,
          successCriteria: [
            "Assigns a clear persona (gravelly-voiced movie trailer announcer).",
            "Specifies the mundane subject matter (a boring documentary).",
            "Encourages the use of the iconic 'In a world...' structure and a deep, dramatic tone."
          ],
          hints: [
            "You need to include the iconic phrases: 'In a world where...', 'One man...', 'This summer...'",
            "The humour comes from the extreme mismatch between the epic tone and the boring subject.",
            "Listen to some old movie trailers to get the rhythm and intonation just right."
          ],
          examplePrompt: "Act as the classic, gravelly-voiced movie trailer announcer from the 1990s. Write the script for a dramatic voiceover for a trailer about a fictional, incredibly boring documentary called 'A History of Beige Paint'. Start with the line 'In a world, where colour is an option...'",
          commonMistakes: [
            "The voiceover not being dramatic or 'epic' enough.",
            "Forgetting to use the classic movie trailer clichés and sentence structures.",
            "Making the documentary sound genuinely interesting."
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
            "Use phrases like 'I was wondering if we could look at this together' or 'I might have a suggestion'."
          ],
          examplePrompt: "Draft a polite and constructive email to a colleague named John. The email needs to gently point out a significant error in the quarterly report he just submitted, without making him feel defensive. The tone should be supportive and focus on finding a solution together.",
          commonMistakes: [
            "Writing a prompt that is too direct and could lead to a blunt email.",
            "Forgetting to specify the desired tone."
          ]
        },
        {
          id: 219,
          type: "Style-Transfer",
          title: "Pushing Back Politely",
          description: "Saying 'no' to your boss is hard. A well-crafted prompt can help you draft a response that is both firm and respectful.",
          task: "Your manager has asked you to take on a new project, but you are already overloaded with work. Write a prompt that asks the AI to draft a polite and professional email that respectfully declines the request while reaffirming your commitment to your current priorities.",
          difficulty: "Intermediate",
          points: 275,
          successCriteria: [
            "Defines the difficult situation (declining a request from a manager).",
            "Specifies the desired tone (polite, professional, respectful).",
            "The goal is to say 'no' without damaging the relationship or appearing unhelpful."
          ],
          hints: [
            "A good strategy is the 'praise, problem, proposal' sandwich. 'Thank you for the opportunity... My current workload is at capacity... Could we discuss priorities or a new timeline?'",
            "Focus on your commitment to the quality of your *current* work.",
            "Avoid making it about not *wanting* to do it, but about not being *able* to do it well right now."
          ],
          examplePrompt: "Please draft a professional and respectful email to my manager. I need to politely decline their request to take on the new 'Project Phoenix' right now, as my existing workload is very high and I'm concerned about the quality of my work suffering. The email should express my enthusiasm for the project but realistically state my current capacity.",
          commonMistakes: [
            "The email sounding too blunt or confrontational.",
            "Being apologetic, which can weaken your position.",
            "Not explaining *why* you are saying no (i.e., your commitment to current work)."
          ]
        },
        {
          id: 220,
          type: "Style-Transfer",
          title: "The Gentle Nudge",
          description: "How do you chase someone for a reply without sounding rude? Let's draft a polite follow-up email.",
          task: "You are waiting for an important piece of information from a colleague who has not replied to your email from three days ago. Write a prompt that asks the AI to draft a short, friendly, and non-accusatory follow-up email.",
          difficulty: "Intermediate",
          points: 270,
          successCriteria: [
            "Defines the situation (following up on an unanswered email).",
            "Specifies the desired tone (friendly, non-accusatory, gentle).",
            "The goal is to get a response without damaging the relationship."
          ],
          hints: [
            "A common technique is to be self-deprecating: 'Just bumping this up in your inbox in case it got buried!'",
            "Another approach is to offer help: 'Just checking if you had everything you need from me on this?'",
            "Avoid phrases like 'You haven't replied' or 'I'm still waiting'."
          ],
          examplePrompt: "Please draft a short and friendly follow-up email. I need to gently nudge a colleague who hasn't replied to my email from Monday about the quarterly figures. The tone should be light and assume they are just busy, not that they are ignoring me.",
          commonMistakes: [
            "The email sounding passive-aggressive.",
            "Being too direct and accusatory ('Why haven't you replied?').",
            "Not providing enough context for the AI to understand what the original email was about."
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
          id: 221,
          type: "Roleplay",
          title: "The Captain's Speech",
          description: "A great leader can inspire hope in a crisis. Let's draft a speech to rally a nervous crew.",
          task: "Write a prompt that asks the AI to act as the captain of a damaged starship. The captain must deliver a short, calm, and inspiring speech to the crew to prevent panic and focus them on the task of repairing the ship.",
          difficulty: "Intermediate",
          points: 265,
          successCriteria: [
            "Assigns a clear persona (starship captain).",
            "Defines the crisis situation (damaged ship, nervous crew).",
            "Specifies that the speech's goal is to inspire calm, hope, and focused work."
          ],
          hints: [
            "A good crisis speech acknowledges the danger but projects confidence in the team's ability to overcome it.",
            "Think of phrases like 'We have trained for this', 'I need all of you at your posts', 'Let's get to work'.",
            "The tone should be calm and authoritative, not shouting or panicked."
          ],
          examplePrompt: "Act as the captain of a starship that has just been damaged in an asteroid field. Write a short, inspiring speech to deliver over the ship's comms system to your anxious crew. Your tone must be calm, confident, and focused on rallying the team to work together on repairs.",
          commonMistakes: [
            "The speech being too long or rambling.",
            "The tone being overly emotional or panicked.",
            "Focusing on the problem, not the solution and the team."
          ]
        },
        {
          id: 222,
          type: "Roleplay",
          title: "The Head Teacher's Assembly",
          description: "Leadership is also about how you handle setbacks. Let's turn a disappointing result into a call to action.",
          task: "Write a prompt that asks the AI to act as a British head teacher. The head teacher must give a speech in a school assembly after receiving a 'Requires Improvement' rating from Ofsted (the schools inspector). The speech must be honest but also motivational, inspiring both students and staff to pull together.",
          difficulty: "Intermediate",
          points: 275,
          successCriteria: [
            "Assigns a clear, culturally-specific persona (British head teacher).",
            "Defines the negative situation (bad Ofsted report).",
            "Specifies the dual goal: be honest about the failure but motivate the school community to improve.",
            "The context is very specific to the UK."
          ],
          hints: [
            "This is a tough balance. The tone should not be defensive or blame anyone.",
            "A good approach is to 'own' the result as a community ('This report is about all of us') and frame the future as a challenge to be met together.",
            "The speech should end on a note of hope and shared purpose."
          ],
          examplePrompt: "Act as the head teacher of a UK secondary school. You have to give a speech in assembly the day after a disappointing Ofsted report ('Requires Improvement'). Draft a speech that acknowledges the result honestly, without making excuses, but also inspires the students and staff to see this as a challenge they will overcome together. The tone should be firm, fair, and ultimately hopeful.",
          commonMistakes: [
            "The speech sounding too corporate or business-like.",
            "Blaming the students, the staff, or the inspectors.",
            "Being overly negative without a clear, hopeful path forward."
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
          id: 223,
          type: "Roleplay",
          title: "The Jumper Incident",
          description: "An unreliable narrator tells a story to suit their own narrative. Let's tell a story from a hilariously biased point of view.",
          task: "Write a prompt that asks the AI to act as an 'unreliable narrator'. The character has just shrunk their partner's favourite wool jumper in the wash, but they are explaining the event as if they are the victim of a conspiracy by the jumper and the washing machine.",
          difficulty: "Intermediate",
          points: 275,
          successCriteria: [
            "Assigns a clear persona (an unreliable narrator).",
            "Specifies the event they are describing (shrinking a jumper).",
            "Encourages a tone of self-pity and paranoid accusation, completely avoiding any admission of fault."
          ],
          hints: [
            "The character should never admit they did anything wrong. It's always someone or something else's fault.",
            "Personify the inanimate objects. The jumper 'had it in for me', the washing machine was 'devious'.",
            "The humour comes from the huge gap between what obviously happened and how the character is describing it."
          ],
          examplePrompt: "You are an unreliable narrator telling a story to a friend to get their sympathy. You have just shrunk your partner's favourite woolly jumper in the wash. Describe this event, but place all the blame on the jumper itself, portraying it as a malevolent force that was determined to shrink. Your tone should be one of a weary victim.",
          commonMistakes: [
            "The narrator accidentally admitting they made a mistake.",
            "The story not being from a first-person perspective.",
            "The tone being angry rather than self-pitying."
          ]
        },
        {
          id: 224,
          type: "Roleplay",
          title: "The Pub Know-It-All",
          description: "Let's adopt the persona of someone who is 100% confident and 100% wrong.",
          task: "Write a prompt that asks the AI to act as a classic 'pub know-it-all'. The persona's task is to confidently explain to their friends how the internet works, using a string of half-understood jargon, incorrect facts, and baffling analogies.",
          difficulty: "Intermediate",
          points: 280,
          successCriteria: [
            "Assigns a clear persona (a 'pub know-it-all').",
            "Specifies the complex topic they are explaining (how the internet works).",
            "Encourages a tone of absolute, unshakeable confidence, despite the explanation being completely wrong."
          ],
          hints: [
            "The key is to use technical words but in the wrong context. 'The router basically just algorithm-tunnels the data-packets through the mainframe... simple as that.'",
            "The persona should be slightly patronising, as if they are explaining something very simple to idiots.",
            "End the explanation with a phrase like '...and that's all there is to it' or 'See? Easy when you know how.'"
          ],
          examplePrompt: "Act as a pub 'know-it-all' who is confidently explaining to his mates how the internet works. Your explanation must be a glorious mess of incorrect information, misused jargon, and terrible analogies, delivered with the unshakeable confidence of someone who believes they are an expert.",
          commonMistakes: [
            "The explanation being accidentally correct.",
            "The persona sounding hesitant or unsure.",
            "Forgetting the context of a pub conversation."
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
            "Think about the language used in nature documentaries: 'Here we see...', 'A magnificent specimen...'.",
            "Treat the mundane activities of a house cat as if they were wild and fascinating behaviours."
          ],
          examplePrompt: "Act as a nature documentary narrator in the style of David Attenborough. Describe the daily rituals of a common house cat, from waking up to demanding food, as if it were a majestic wild animal in its natural habitat.",
          commonMistakes: [
            "Not capturing the specific, calm tone of a nature narrator.",
            "Forgetting to treat the subject with mock seriousness."
          ]
        },
        {
          id: 225,
          type: "Roleplay",
          title: "The Grand Review",
          description: "Let's adopt the persona of a bombastic TV presenter to review a very, very slow vehicle.",
          task: "Write a prompt that asks the AI to act in the style of a presenter from 'The Grand Tour' or 'Top Gear'. The presenter's task is to conduct a 'road test' of a supermarket shopping trolley, complete with car-based metaphors, hyperbole, and a dramatic conclusion.",
          difficulty: "Intermediate",
          points: 285,
          successCriteria: [
            "Assigns a clear persona/style (bombastic car show presenter).",
            "Specifies the mundane object to be 'reviewed' (a shopping trolley).",
            "Encourages a tone of high drama, excitement, and opinionated critique."
          ],
          hints: [
            "Watch clips of the show for inspiration. Notice the dramatic pauses, the sweeping statements, and the love of a good metaphor.",
            "Think about car review sections: the 'power', the 'handling', the 'build quality'. Apply these to the trolley.",
            "The presenter should take the review incredibly seriously."
          ],
          examplePrompt: "Act in the style of a presenter on 'The Grand Tour'. Write a script for a segment where you conduct a dramatic 'road test' of a supermarket shopping trolley. Focus on its 'performance', 'handling', and 'that wobbly wheel'. End with a typically bombastic and opinionated conclusion on whether it's a worthy vehicle.",
          commonMistakes: [
            "The review not being over-the-top enough.",
            "Forgetting the specific car-based language and metaphors.",
            "The tone being informative rather than highly opinionated and dramatic."
          ]
        },
        {
          id: 226,
          type: "Roleplay",
          title: "The Soggy Bottom",
          description: "Let's bring the high stakes of a TV baking competition to the garden.",
          task: "Write a prompt that asks the AI to act in the style of a judge on 'The Great British Bake Off'. The judge's task is to critique a child's mud pie, using the show's specific vocabulary and serious, constructive-but-critical tone.",
          difficulty: "Intermediate",
          points: 285,
          successCriteria: [
            "Assigns a clear persona/style (a GBBO judge).",
            "Specifies the object to be judged (a child's mud pie).",
            "Encourages the use of specific baking terminology ('soggy bottom', 'good crumb', 'nice texture') and a serious tone."
          ],
          hints: [
            "The key is the deadpan seriousness. The judge should critique the mud pie as if it were a potential prize-winning Victoria sponge.",
            "Remember the classic compliments and criticisms from the show.",
            "You could ask for the AI to offer a 'handshake' or not, as is tradition on the show."
          ],
          examplePrompt: "You are a judge on The Great British Bake Off. In your signature serious, analytical style, please critique a five-year-old's mud pie. Comment on the texture, the presentation, and whether it suffers from the dreaded 'soggy bottom'. Your tone should be exactly as serious as if you were judging a real cake.",
          commonMistakes: [
            "The critique being too generic and not using the specific baking terminology of the show.",
            "The tone being patronising or overtly humorous, instead of deadpan serious.",
            "Forgetting the context of a high-stakes baking competition."
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
          id: 227,
          type: "Roleplay",
          title: "The WWII Radio Broadcast",
          description: "Let's travel back to the 1940s and capture the unique 'stiff upper lip' tone of a wartime radio broadcast.",
          task: "Write a prompt that asks the AI to act as a BBC radio announcer in 1940. The announcer's task is to deliver a public service announcement about the importance of observing the blackout, maintaining a calm, formal, and reassuringly steady tone.",
          difficulty: "Intermediate",
          points: 280,
          successCriteria: [
            "Assigns a clear persona (1940s BBC radio announcer).",
            "Specifies the historical context (the Blitz, 1940).",
            "Encourages the specific 'stiff upper lip' tone: formal, calm, and steady in a crisis."
          ],
          hints: [
            "Listen to genuine BBC broadcasts from the era. Notice the formal language and the calm, measured delivery.",
            "Use phrases like 'This is the BBC Home Service', 'We would like to remind listeners...'",
            "The goal is to sound authoritative and reassuring, not panicked."
          ],
          examplePrompt: "Act as a BBC radio announcer broadcasting from London in late 1940. In a calm, formal, and steady 'received pronunciation' voice, deliver a public service announcement reminding citizens of the vital importance of observing the nightly blackout. The tone should be one of quiet resolve and national unity.",
          commonMistakes: [
            "The tone being too modern or informal.",
            "The announcer sounding scared or emotional, rather than embodying the 'stiff upper lip'.",
            "Forgetting the specific context of the blackout during the Blitz."
          ]
        },
        {
          id: 228,
          type: "Roleplay",
          title: "Message in a Bottle",
          description: "Let's adopt the voice of a 19th-century naval officer writing a formal dispatch under desperate circumstances.",
          task: "Write a prompt that asks the AI to act as a 19th-century Royal Navy captain, stranded in the Arctic. The captain is writing a final, formal dispatch to the Admiralty, reporting on the condition of his crew and ship, before sealing it in a bottle. The tone should be formal and professional, despite the desperate situation.",
          difficulty: "Intermediate",
          points: 290,
          successCriteria: [
            "Assigns a clear persona (19th-century Royal Navy captain).",
            "Specifies the desperate historical context (stranded in the Arctic).",
            "Encourages a contrast between the dire situation and the formal, unemotional tone of a professional naval dispatch."
          ],
          hints: [
            "The language should be formal and slightly archaic. Use naval terminology if you can.",
            "The power of the piece comes from the contrast between the terrible situation and the captain's professional calm.",
            "He should report on the low supplies, the state of the ship, and the morale of the men as if he were writing a standard report."
          ],
          examplePrompt: "You are a Captain in the Royal Navy in the 1840s, stranded in the ice of the Northwest Passage. Write your final dispatch to be sent to the Admiralty, reporting the status of your ship and crew. Your tone must remain formal, professional, and emotionally restrained, as befits an officer, despite the hopeless situation.",
          commonMistakes: [
            "The captain sounding overly emotional, desperate, or panicked.",
            "The language being too modern and not reflecting the 19th-century naval style.",
            "Forgetting the format of a formal dispatch or report."
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
                    },
                    {
                      id: 229,
                      type: "Style-Transfer",
                      title: "The Counter-Offer",
                      description: "Know your worth. Let's draft a professional email to negotiate a better rate for your work.",
                      task: "You are a freelance graphic designer. A potential client has offered you £200 for a logo design project, which is below your rate. Write a prompt that asks the AI to draft a polite, professional email that declines the offer but makes a counter-offer of £400, justifying the price by mentioning your experience and the value you provide.",
                      difficulty: "Intermediate",
                      points: 290,
                      successCriteria: [
                        "Defines the situation (negotiating a freelance rate).",
                        "Specifies the desired tone (polite, professional, confident).",
                        "The goal is to make a counter-offer and justify it based on value, not just to decline."
                      ],
                      hints: [
                        "This is not a complaint, it's a negotiation. The tone should be collaborative, not confrontational.",
                        "Focus on the value you bring to the client, not just your own costs or needs.",
                        "A good structure is: thank them for the offer, state your rate, explain the value you provide for that rate, and suggest next steps."
                      ],
                      examplePrompt: "Act as a freelance designer. Please draft a polite and confident email to a potential new client. I need to decline their initial offer of £200 for a logo project and make a counter-offer of £400. The email should justify the higher rate by briefly mentioning my 10 years of experience and my portfolio of successful branding work. The tone should be friendly but firm.",
                      commonMistakes: [
                        "The email sounding apologetic for asking for more money.",
                        "The tone being too demanding or arrogant.",
                        "Not providing a justification for the higher rate."
                      ]
                    },
                    {
                      id: 230,
                      type: "Style-Transfer",
                      title: "The Strategic Thank You",
                      description: "A thank-you note can be more than just polite. Let's write one that makes a lasting impression after a job interview.",
                      task: "You have just had a job interview for a 'Marketing Manager' role. Write a prompt that asks the AI to draft a strategic thank-you email to the interviewer. The email should not only thank them for their time but also briefly reiterate your enthusiasm for the role and reference a specific point you discussed.",
                      difficulty: "Intermediate",
                      points: 285,
                      successCriteria: [
                        "Defines the situation (post-job interview thank-you email).",
                        "Specifies the strategic goals: express thanks, reiterate enthusiasm, and reference a specific discussion point.",
                        "The tone should be professional, enthusiastic, and concise."
                      ],
                      hints: [
                        "Mentioning a specific point from your conversation shows you were listening and makes your email stand out.",
                        "Keep it brief and to the point. This is not the place to write another cover letter.",
                        "The goal is to reinforce the positive impression you made in the interview."
                      ],
                      examplePrompt: "I've just finished a job interview for a Marketing Manager role with someone named Sarah. Please draft a concise and professional thank-you email to her. The email should thank her for her time, and specifically mention how much I enjoyed our discussion about the 'Go-To-Market strategy' for the new product line. Reaffirm my strong interest in the role.",
                      commonMistakes: [
                        "The email being too long or generic.",
                        "Forgetting to mention a specific detail from the interview.",
                        "The tone being either too casual or too stiff and formal."
                      ]
                    }
                  ]
                },{
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
          id: 301,
          type: "Formatting",
          title: "The Weekly Workout Plan",
          description: "AI can be a great personal planner. Let's get it to create a structured workout schedule for the week.",
          task: "Write a prompt that generates a 5-day workout plan for a beginner. The plan should be a markdown table with three columns: 'Day' (Monday to Friday), 'Focus' (e.g., Cardio, Upper Body Strength), and 'Example Exercise' (one simple exercise for that day).",
          difficulty: "Intermediate",
          points: 255,
          successCriteria: [
            "Specifies the goal (a 5-day workout plan for a beginner).",
            "Explicitly requests a markdown table.",
            "Defines the exact column headers for the table ('Day', 'Focus', 'Example Exercise').",
            "The prompt is clear about the target audience (beginner)."
          ],
          hints: [
            "Being clear about the 'audience' (a beginner) is crucial to get appropriate exercise suggestions.",
            "You can ask for more details, like duration or number of reps for each exercise.",
            "This format is great for any kind of weekly schedule, like a meal plan or a study timetable."
          ],
          examplePrompt: "Please create a 5-day workout plan for a beginner, from Monday to Friday. Format the plan as a markdown table with the columns: 'Day', 'Focus', and 'Example Exercise'. The exercises should be simple and require no special equipment.",
          commonMistakes: [
            "Forgetting to specify the desired format is a markdown table.",
            "Not defining the column headers, leading to a disorganised plan.",
            "Not mentioning the target user is a beginner, which could result in dangerously advanced exercises."
          ]
        },
        {
          id: 302,
          type: "Formatting",
          title: "The Social Media Calendar",
          description: "Good planning is key to social media. Let's generate a content plan with a nested structure.",
          task: "Write a prompt to generate a 3-day social media content plan for a fictional museum, 'The National Museum of Biscuits'. The output should be a main list for each day, with nested bullet points for 'Platform', 'Topic', and 'Call to Action'.",
          difficulty: "Intermediate",
          points: 265,
          successCriteria: [
            "Specifies the goal (3-day social media plan) and the subject (a fictional museum).",
            "Explicitly requests a nested list structure.",
            "Defines the exact nested items required for each day.",
            "The prompt is precise about the desired hierarchy."
          ],
          hints: [
            "Nested lists are great for creating structured documents with sub-points.",
            "You can specify the format using an example, e.g., '- Monday:\n  - Platform: Twitter\n  - Topic: ...'",
            "Giving the AI a fun, creative subject like 'The National Museum of Biscuits' can lead to more imaginative results."
          ],
          examplePrompt: "Generate a 3-day social media content plan for 'The National Museum of Biscuits'. Please format the output as a main bulleted list for each day (e.g., '- Monday'). Under each day, use an indented bulleted list to detail the 'Platform' (e.g., Instagram), 'Topic' (e.g., 'The history of the Garibaldi biscuit'), and an 'Image Idea'.",
          commonMistakes: [
            "Asking for a 'plan' without specifying the nested list structure.",
            "Not defining the sub-items needed for each day's plan.",
            "Forgetting to give the AI the subject of the social media account."
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
            "You can add other constraints, like 'use metric measurements' or 'ready in under 45 minutes'."
          ],
          examplePrompt: "Please generate a recipe for a hearty vegan chilli. The response must be structured with these exact headings in order: 'Description', 'Ingredients', 'Method', and 'Serving Suggestion'. The ingredients should be a bulleted list, and the method should be a numbered list.",
          commonMistakes: [
            "Not specifying the section titles, leading to a messy output.",
            "Forgetting to define the list formats.",
            "Being too vague about the dish, e.g., 'give me a recipe'."
          ]
        },
        {
          id: 303,
          type: "Formatting",
          title: "The Perfect Bug Report",
          description: "Clear, structured bug reports are essential for developers. Let's create a properly formatted one.",
          task: "Write a prompt that generates a bug report for a fictional banking app where the 'Pay' button is not working. The report must be structured with these exact headings: 'Bug Summary', 'Steps to Reproduce', 'Expected Result', and 'Actual Result'.",
          difficulty: "Intermediate",
          points: 265,
          successCriteria: [
            "Specifies the fictional bug to be reported.",
            "Requests four specific sections with exact titles.",
            "The prompt provides all the information needed to generate a complete and logical report.",
            "The 'Steps to Reproduce' section should be a numbered list."
          ],
          hints: [
            "A good bug report is a recipe for a developer to see the bug for themselves.",
            "Being precise about the headings and structure is the most important part of this challenge.",
            "You can add more sections, like 'Severity' or 'Device Information', for an even more detailed report."
          ],
          examplePrompt: "Please generate a bug report for a banking app. The bug is that the 'Pay' button does nothing when tapped. The response must be structured with these exact headings in order: 'Bug Summary', 'Steps to Reproduce' (as a numbered list), 'Expected Result', and 'Actual Result'.",
          commonMistakes: [
            "Not specifying the exact headings, leading to a poorly structured report.",
            "Forgetting to ask for the 'Steps to Reproduce' to be a numbered list.",
            "Being too vague about the bug itself."
          ]
        },
        {
          id: 304,
          type: "Formatting",
          title: "The Character Profile",
          description: "Structure can be a powerful tool for creative writing. Let's generate a detailed profile for a fictional character.",
          task: "Write a prompt to generate a character profile for a disgraced MI6 agent. The profile must have three sections with the headings 'Codename', 'Physical Description', and 'Personality Traits'. The 'Personality Traits' section must be a bulleted list of at least four traits.",
          difficulty: "Intermediate",
          points: 270,
          successCriteria: [
            "Specifies the character archetype (disgraced MI6 agent).",
            "Requests three specific sections with exact headings.",
            "Defines the format for the 'Personality Traits' section (a bulleted list).",
            "The prompt is precise about the desired structure for creative brainstorming."
          ],
          hints: [
            "Using a structured format like this is a great way to flesh out characters for a story or a role-playing game.",
            "You can ask for more sections, like 'Skills', 'Flaws', or 'Backstory'.",
            "Specifying the format of a sub-section (like the bulleted list) gives you even more control."
          ],
          examplePrompt: "Please generate a character profile for a fictional disgraced MI6 agent. The profile must be structured with the following headings: 'Codename', 'Physical Description', and 'Personality Traits'. The 'Personality Traits' section must be a bulleted list containing at least four traits.",
          commonMistakes: [
            "Just asking for 'a character' without specifying the profile structure.",
            "Forgetting to ask for the 'Personality Traits' to be a bulleted list.",
            "Making the character archetype too generic."
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
          id: 305,
          type: "Formatting",
          title: "Smartphone Showdown",
          description: "Tables are perfect for comparing products. Let's create a technical specification comparison for some fictional phones.",
          task: "Write a prompt to generate a comparison table for three fictional new smartphones: the 'Pixelon 8', the 'Galaxy Z-Flip X', and the 'iFruit 17'. The table must be in markdown format and have columns for 'Model Name', 'Screen Size', 'Battery Life (Hours)', and 'Key Feature'.",
          difficulty: "Intermediate",
          points: 275,
          successCriteria: [
            "Specifies the three fictional products to compare.",
            "Requests a markdown table format.",
            "Defines the exact technical column headers required.",
            "The request is clear and provides all necessary information for the AI to invent the data."
          ],
          hints: [
            "You can invent your own fictional products to make the task more creative.",
            "This format is ideal for comparing specs of any kind of product, from laptops to cars.",
            "Being precise about the column headers is the most important part."
          ],
          examplePrompt: "Please create a markdown table comparing three fictional new smartphones: the 'Pixelon 8', the 'Galaxy Z-Flip X', and the 'iFruit 17'. The table should include the following columns: 'Model Name', 'Screen Size', 'Battery Life (Hours)', and 'Key Feature'.",
          commonMistakes: [
            "Asking to 'compare phones' without specifying which ones or what features to compare.",
            "Not defining the columns for the table.",
            "Forgetting to ask for a markdown table format."
          ]
        },
        {
          id: 306,
          type: "Formatting",
          title: "UK Holiday Destination-Off",
          description: "Let's use a table to make a decision about a holiday. This involves comparing more subjective information.",
          task: "Write a prompt to generate a comparison table for three UK summer holiday destinations for a family with young children: Cornwall, the Lake District, and the Scottish Highlands. The table must be in markdown format with columns for 'Destination', 'Best For', 'Average Daily Budget (£)', and 'Must-Do Activity'.",
          difficulty: "Intermediate",
          points: 280,
          successCriteria: [
            "Specifies the three UK destinations to compare.",
            "Defines the target audience for the holiday (a family with young children).",
            "Requests a markdown table format with specific, more subjective column headers."
          ],
          hints: [
            "Adding an audience (like 'family with young children' or 'couple looking for adventure') makes the comparison much more useful.",
            "The columns don't have to be purely factual. 'Best For' asks the AI to make a judgement.",
            "This is a great way to use AI to help you make complex decisions."
          ],
          examplePrompt: "My family (with two children under 10) is planning a summer holiday in the UK. Please create a markdown comparison table for three destinations: Cornwall, the Lake District, and the Scottish Highlands. The table should have columns for: 'Destination', 'Best For', 'Average Daily Budget (£)', and 'Must-Do Activity'.",
          commonMistakes: [
            "Not specifying the type of traveller, leading to generic recommendations.",
            "Forgetting to define the columns for the comparison.",
            "Choosing destinations that are too similar to make an interesting comparison."
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
          id: 307,
          type: "Formatting",
          title: "The Blog Post Outline",
          description: "A good outline is the secret to good writing. Let's get the AI to structure a blog post for us.",
          task: "Write a prompt to generate a structured outline for a blog post titled 'A Beginner's Guide to Urban Beekeeping'. The outline should use a nested list format with main section headings and at least two sub-points per section.",
          difficulty: "Intermediate",
          points: 285,
          successCriteria: [
            "Specifies the title and topic of the blog post.",
            "Requests a nested list format for the outline.",
            "Specifies that sections should have sub-points."
          ],
          hints: [
            "This is a great way to overcome writer's block and structure your thoughts before you start writing.",
            "You can be even more specific and suggest the main section headings you want, like 'Introduction', 'Essential Equipment', 'Your First Bees', and 'Harvesting Honey'.",
            "The quality of the outline will depend on how clearly you define the topic."
          ],
          examplePrompt: "Please generate a structured outline for a blog post called 'A Beginner's Guide to Urban Beekeeping'. The outline should be a nested bulleted list. It should have at least three main sections, each with a few sub-points covering the key things a beginner needs to know.",
          commonMistakes: [
            "Just asking for 'a blog post' instead of an outline.",
            "Not requesting a nested format, resulting in a simple, flat list of ideas.",
            "Being too vague about the topic of the post."
          ]
        },
        {
          id: 308,
          type: "Formatting",
          title: "The Summer Fete Plan",
          description: "AI can be a great project manager. Let's create a high-level plan for a community event.",
          task: "Write a prompt to generate a high-level project plan for organising a village summer fete. The plan should be a numbered list of 'Phases' (e.g., Planning, Promotion, On the Day). Each phase should have at least three nested bullet points listing key tasks.",
          difficulty: "Intermediate",
          points: 290,
          successCriteria: [
            "Specifies the event to be planned (a village summer fete).",
            "Requests a specific hierarchical structure (numbered phases with nested bullet points).",
            "The goal is a high-level project plan, not a minute-by-minute schedule."
          ],
          hints: [
            "Think about the logical flow of a project: what needs to happen first? Planning, booking, promoting, executing, and cleaning up.",
            "This is a great way to break down a large, intimidating project into manageable chunks.",
            "You can specify who might be responsible for each task to make the plan even more useful."
          ],
          examplePrompt: "I need a high-level project plan for organising a village summer fete. Please structure it as a numbered list of the main phases (e.g., Phase 1: Initial Planning). Under each phase, include a bulleted list of key tasks that need to be completed.",
          commonMistakes: [
            "Asking for a 'plan' without specifying the required structure.",
            "The output being a simple to-do list rather than a phased project plan.",
            "Forgetting to specify the type of event to be planned."
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
          id: 309,
          type: "Formatting",
          title: "The Pre-mortem",
          description: "A 'pre-mortem' is a powerful technique where you imagine a project has already failed and work backwards to find out why. Let's try it.",
          task: "Write a prompt that asks the AI to perform a 'pre-mortem' on the fictional project of 'launching a new independent bookshop in a small town'. Ask the AI to list at least five potential reasons for failure under the heading 'Reasons for Failure'.",
          difficulty: "Intermediate",
          points: 280,
          successCriteria: [
            "Specifies the fictional project to be analysed (new bookshop).",
            "Clearly asks for a 'pre-mortem' or for 'reasons for future failure'.",
            "Requests a specific output format (a list under a heading).",
            "The goal is to identify risks before they happen."
          ],
          hints: [
            "This technique is great for risk analysis and overcoming optimistic biases in planning.",
            "You can ask for the reasons to be grouped into categories like 'Financial', 'Competition', or 'Marketing' for a more structured analysis.",
            "Frame the prompt in the future perfect tense: 'Imagine it is one year from now and our bookshop has failed...'"
          ],
          examplePrompt: "I want you to perform a 'pre-mortem' on our plan to open a new independent bookshop. Imagine it's a year from now and the shop has failed. Please generate a bulleted list of the most likely reasons why this failure occurred, under the heading 'Potential Reasons for Failure'.",
          commonMistakes: [
            "Asking for a simple 'risks' list instead of the specific 'pre-mortem' framing.",
            "Forgetting to specify the project to be analysed.",
            "The output being too generic and not specific to the bookshop scenario."
          ]
        },
        {
          id: 310,
          type: "Formatting",
          title: "Start, Stop, Continue",
          description: "This is a classic project retrospective framework. Let's use it to generate feedback for a team.",
          task: "Write a prompt that asks the AI to generate feedback for improving a team's weekly meetings using the 'Start, Stop, Continue' framework. The output should have three separate bulleted lists with the clear headings: 'Start Doing', 'Stop Doing', and 'Continue Doing'.",
          difficulty: "Intermediate",
          points: 285,
          successCriteria: [
            "Specifies the topic for the feedback (team meetings).",
            "Requests the specific 'Start, Stop, Continue' framework.",
            "Defines the output format as three separate bulleted lists with exact headings."
          ],
          hints: [
            "This is a powerful tool for generating actionable feedback for any recurring process or team dynamic.",
            "You can provide more context about the meetings to get more specific suggestions, e.g., 'Our meetings often run over time and have no clear agenda.'",
            "This format forces the AI to provide balanced feedback – not just what's wrong, but also what's going right."
          ],
          examplePrompt: "Please generate some suggestions for improving our team's weekly meetings, using the 'Start, Stop, Continue' retrospective framework. The output must have three separate bulleted lists with the headings: 'Start Doing', 'Stop Doing', and 'Continue Doing'.",
          commonMistakes: [
            "Just asking for 'feedback' without specifying the 'Start, Stop, Continue' structure.",
            "Not using three separate lists with clear headings.",
            "Forgetting to specify what the feedback is about."
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
          id: 311,
          type: "Formatting",
          title: "Generate Some CSV",
          description: "JSON is common, but CSV is everywhere. Let's generate some comma-separated data.",
          task: "Write a prompt to generate a list of 3 fictional employees in CSV format. The data should have a header row and three columns: 'EmployeeID', 'FullName', and 'Department'.",
          difficulty: "Intermediate",
          points: 290,
          successCriteria: [
            "Specifies the desired output format (CSV).",
            "Defines the required column headers.",
            "Requests a specific number of data rows (3).",
            "Asks for a header row to be included."
          ],
          hints: [
            "CSV (Comma-Separated Values) is a very simple and common format for spreadsheet data.",
            "Be explicit that you want a header row for the columns.",
            "This is great for creating sample data to import into other applications."
          ],
          examplePrompt: "Please generate a list of 3 fictional employees in CSV format. The first line must be a header row with the columns 'EmployeeID', 'FullName', and 'Department'.",
          commonMistakes: [
            "Forgetting to ask for the header row.",
            "The output not being in the correct comma-separated format.",
            "Not specifying the columns required."
          ]
        },
        {
          id: 312,
          type: "Formatting",
          title: "YAML Configuration",
          description: "YAML is a popular format for configuration files. Let's create a simple one.",
          task: "Write a prompt to generate a simple application configuration file in YAML format. The configuration should have a main key `app_name: My Awesome App` and two nested sections: `database` and `api_settings`. Each section should have at least two key-value pairs.",
          difficulty: "Intermediate",
          points: 295,
          successCriteria: [
            "Specifies the desired output format (YAML).",
            "Defines the required top-level key and the nested sections.",
            "Specifies that the nested sections should contain key-value pairs.",
            "The prompt describes the desired hierarchical structure."
          ],
          hints: [
            "YAML uses indentation (spaces, not tabs!) to create structure, similar to Python.",
            "This is very useful for generating boilerplate configuration for development projects.",
            "You can specify the exact keys and values you want, or let the AI make them up."
          ],
          examplePrompt: "Please generate a simple application configuration file in YAML format. It should include a top-level key `app_name: My Awesome App`. It must also have two nested sections, `database` and `api_settings`, each containing at least two relevant fictional key-value pairs.",
          commonMistakes: [
            "The output not using the correct YAML syntax (indentation and colons).",
            "Forgetting to ask for the nested sections.",
            "The structure being flat instead of hierarchical."
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
          id: 313,
          type: "Formatting",
          title: "Step-by-Step Tutorial",
          description: "AI is great at creating instructions. Let's generate a clear, step-by-step guide for a simple task.",
          task: "Write a prompt to generate a simple, numbered step-by-step tutorial for a beginner on how to repot a houseplant.",
          difficulty: "Intermediate",
          points: 290,
          successCriteria: [
            "Specifies the topic of the tutorial (repotting a houseplant).",
            "Requests a step-by-step, numbered list format.",
            "Specifies the audience is a beginner."
          ],
          hints: [
            "A numbered list is the best format for instructional steps.",
            "Telling the AI the audience is a beginner ensures the instructions will be simple and clear.",
            "You can ask the AI to include a 'You will need:' section at the top."
          ],
          examplePrompt: "Please generate a simple, step-by-step tutorial as a numbered list on how to repot a houseplant for a complete beginner. Start with a bulleted list of the items they will need.",
          commonMistakes: [
            "The steps being out of logical order.",
            "The instructions being too complicated for a beginner.",
            "Forgetting to ask for a numbered list, which makes the steps hard to follow."
          ]
        },
        {
          id: 314,
          type: "Formatting",
          title: "The Fictional CV",
          description: "Let's generate a key part of a CV: the career history, ensuring it's in the correct reverse chronological order.",
          task: "Write a prompt to generate a fictional career history for a 'Senior Marketing Manager'. The output should be a list of three past jobs in reverse chronological order (most recent first). Each item should include the date range, job title, and company name.",
          difficulty: "Intermediate",
          points: 295,
          successCriteria: [
            "Specifies the job role for the fictional CV.",
            "Asks for the career history to be in reverse chronological order.",
            "Defines the specific information required for each job entry (date, title, company).",
            "Requests a specific number of jobs (three)."
          ],
          hints: [
            "Specifying the order ('reverse chronological') is the key part of this challenge.",
            "This is useful for quickly generating plausible-looking sample data for CV templates.",
            "You can also ask the AI to include a one-sentence summary of the responsibilities for each role."
          ],
          examplePrompt: "Please generate a fictional career history for a Senior Marketing Manager's CV. List their last three jobs in reverse chronological order. For each job, include the date range, the job title, and the company name.",
          commonMistakes: [
            "The jobs being in the wrong (chronological) order.",
            "Forgetting to specify the required information for each job.",
            "The job titles not being consistent with the overall career path."
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
          id: 315,
          type: "Formatting",
          title: "The Five Whys",
          description: "To solve a problem, you must find the root cause. Let's use the 'Five Whys' technique to dig deeper.",
          task: "Write a prompt that asks the AI to perform a 'Five Whys' root cause analysis on a problem, for example, 'The pizza we ordered was delivered cold'. The output should be a numbered list of five 'Why?' questions and answers, each one digging deeper than the last.",
          difficulty: "Intermediate",
          points: 300,
          successCriteria: [
            "Specifies the problem to be analysed.",
            "Clearly asks for a 'Five Whys' analysis.",
            "Requests a numbered list format showing the chain of questioning."
          ],
          hints: [
            "The 'Five Whys' is a simple but powerful technique for getting past symptoms and finding the true cause of a problem.",
            "You can apply this to any problem, from business issues to personal habits.",
            "The key is that each 'Why?' follows on from the previous answer."
          ],
          examplePrompt: "Please perform a 'Five Whys' root cause analysis on the following problem: 'The pizza we ordered was delivered cold'. Present the output as a numbered list of 5 questions and answers, where each question asks 'Why?' about the previous answer.",
          commonMistakes: [
            "The questions not logically following on from each other.",
            "Stopping the analysis before the root cause is found.",
            "Just listing five problems instead of a chain of 'Whys'."
          ]
        },
        {
          id: 316,
          type: "Formatting",
          title: "The Eisenhower Matrix",
          description: "A great prompt can help you prioritise. Let's use the Eisenhower Matrix to sort a to-do list.",
          task: "You have a list of tasks. Write a prompt that asks the AI to sort them into the four quadrants of the Eisenhower Matrix: 'Urgent & Important' (Do), 'Important & Not Urgent' (Schedule), 'Urgent & Not Important' (Delegate), and 'Not Urgent & Not Important' (Delete).",
          originalText: "Tasks: Respond to client email, Pay electricity bill, Plan next week's projects, Scroll through social media, Book dentist appointment, Research new industry trends.",
          difficulty: "Intermediate",
          points: 305,
          successCriteria: [
            "Provides a list of tasks to be sorted.",
            "Specifically requests the use of the 'Eisenhower Matrix'.",
            "Defines the four quadrants as the desired output structure, with the tasks sorted into them."
          ],
          hints: [
            "This is a classic time management technique for deciding what to focus on.",
            "You can just ask for the 'Eisenhower Matrix' by name; the AI should know what it is.",
            "This prompt transforms an unstructured list into a prioritised action plan."
          ],
          examplePrompt: "Please sort the following to-do list into the four quadrants of the Eisenhower Matrix ('Urgent & Important', 'Important & Not Urgent', 'Urgent & Not Important', 'Not Urgent & Not Important'). Present the output with four clear headings, each with a bulleted list of the tasks that fall into that category.\n\nTasks: Respond to client email, Pay electricity bill, Plan next week's projects, Scroll through social media, Book dentist appointment, Research new industry trends.",
          commonMistakes: [
            "The tasks being sorted into the wrong quadrants.",
            "The output not being structured into the four named quadrants.",
            "Forgetting to provide the initial list of tasks."
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
          id: 317,
          type: "Formatting",
          title: "Key Features List",
          description: "Product pages often use a specific format to highlight features. Let's create one.",
          task: "Write a prompt to generate a 'Key Features' list for a fictional new digital camera called the 'LumoShot Pro'. The output should be a bulleted list of 3 features. Each item must start with a bolded feature name, followed by a colon and a short, benefit-driven explanation.",
          difficulty: "Intermediate",
          points: 285,
          successCriteria: [
            "Specifies the fictional product.",
            "Requests a specific format (bulleted list with bolded headings).",
            "Asks for a specific number of features (3).",
            "The goal is to create a punchy, easy-to-read features list."
          ],
          hints: [
            "This format is excellent for scannable web content.",
            "You can provide the feature names you want the AI to write about, or let it invent them.",
            "Asking for 'benefit-driven' explanations encourages the AI to write for the customer ('what's in it for me?'), not just list technical specs."
          ],
          examplePrompt: "Please generate a key features list for a new fictional camera called the 'LumoShot Pro'. Create a bulleted list of 3 features. Each bullet point should start with the feature name in bold, followed by a colon and a one-sentence benefit-driven explanation. For example: '**Crystal-Clear Zoom:** Capture details from a distance.'",
          commonMistakes: [
            "The output being a simple list without the 'bolded heading: explanation' format.",
            "The explanations being too technical and not focused on the user benefit.",
            "Forgetting to specify the product the features are for."
          ]
        },
        {
          id: 318,
          type: "Formatting",
          title: "Myth vs. Fact",
          description: "A 'Myth vs. Fact' format is a great way to create engaging and educational content. Let's debunk some common myths.",
          task: "Write a prompt to debunk three common myths about exercise. The output should be a list, where each item has a 'Myth:' heading with the myth, and a 'Fact:' heading with the correction.",
          difficulty: "Intermediate",
          points: 290,
          successCriteria: [
            "Specifies the topic to be 'myth-busted' (exercise).",
            "Asks for the specific 'Myth:' and 'Fact:' structure for each item.",
            "Requests a specific number of myths to be debunked (3)."
          ],
          hints: [
            "This is a very engaging format for articles, social media, or presentations.",
            "You can use this for any topic where misconceptions are common.",
            "Being clear about the 'Myth:' and 'Fact:' headings is key to getting the right structure."
          ],
          examplePrompt: "Please generate a list debunking 3 common myths about exercise. Each item in the list must be structured with two headings: 'Myth:' (stating the common misconception) and 'Fact:' (providing the correction).",
          commonMistakes: [
            "The output being a simple list of facts, without the 'Myth vs. Fact' structure.",
            "The 'myths' not being genuine common misconceptions.",
            "Forgetting to specify the topic."
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
          id: 319,
          type: "Formatting",
          title: "The Family Tree",
          description: "Hierarchical lists are perfect for showing relationships. Let's create a simple family tree.",
          task: "Write a prompt to generate a fictional family tree for a character named 'Eleanor Vance'. The tree should show her parents and her four grandparents, using indented bullet points to represent the generations.",
          difficulty: "Intermediate",
          points: 305,
          successCriteria: [
            "Specifies the character for the family tree.",
            "Requests a hierarchical format using indented bullet points.",
            "Defines the required depth of the tree (two generations back)."
          ],
          hints: [
            "This is a great way to quickly visualise hierarchical relationships of any kind.",
            "Be clear about how many levels of the hierarchy you want to see.",
            "You can let the AI invent the names of the relatives."
          ],
          examplePrompt: "Please generate a simple family tree for a fictional character named 'Eleanor Vance'. Use an indented bulleted list to show her parents and her maternal and paternal grandparents. The top level should be the grandparents.",
          commonMistakes: [
            "The output being a flat list of names rather than a tree structure.",
            "The relationships between the characters being illogical.",
            "Not specifying how many generations to include."
          ]
        },
        {
          id: 320,
          type: "Formatting",
          title: "The Project Folder Structure",
          description: "A logical folder structure is vital for any project. Let's get the AI to design one for us.",
          task: "Write a prompt that asks the AI to generate a logical folder structure for a new 'Website_Project'. The output should be a text-based tree using indented bullet points, and must include folders for 'css', 'images', and 'js'.",
          difficulty: "Intermediate",
          points: 300,
          successCriteria: [
            "Specifies the project the folder structure is for.",
            "Requests a text-based tree structure using indentation.",
            "Defines specific folders that must be included in the structure."
          ],
          hints: [
            "This is a very practical way to use AI to scaffold new projects.",
            "You can specify which folders should contain sub-folders for even more control.",
            "This technique can be used to plan the structure of a document, a presentation, or any hierarchical system."
          ],
          examplePrompt: "Please generate a logical folder structure for a new 'Website_Project' as a text-based tree using indented bullet points. It should have a root folder and contain at least 'css', 'images', and 'js' sub-folders.",
          commonMistakes: [
            "The output being a flat list of folder names.",
            "Forgetting to specify the essential folders that need to be included.",
            "The structure not being logical for the type of project."
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
          id: 321,
          type: "Formatting",
          title: "The Scientific Abstract",
          description: "Scientific papers have a very rigid structure. Let's try to generate an abstract for a fictional study.",
          task: "Write a prompt that asks the AI to generate a short, formal scientific abstract (under 200 words) for a fictional study titled 'The Effect of Classical Music on the Growth Rate of Tomato Plants'. The abstract must contain four parts: Background, Methods, Results, and Conclusion.",
          difficulty: "Intermediate",
          points: 315,
          successCriteria: [
            "Specifies the fictional study topic.",
            "Requests the specific 'scientific abstract' format.",
            "Defines the four required sections of the abstract.",
            "Sets a word count limit."
          ],
          hints: [
            "An abstract is a dense summary of a whole research paper.",
            "Even if you don't ask for the headings, a good prompt will guide the AI to include these four logical parts.",
            "You can try this with any funny or serious fictional study."
          ],
          examplePrompt: "Please write a formal scientific abstract (under 200 words) for a fictional research paper on 'The Effect of Classical Music on the Growth Rate of Tomato Plants'. The abstract should summarise the study's Background, Methods, Results, and Conclusion in a single paragraph.",
          commonMistakes: [
            "The abstract being too long or informal.",
            "The output missing one of the four key sections (Background, Methods, Results, Conclusion).",
            "The content being nonsensical rather than just fictional."
          ]
        },
        {
          id: 322,
          type: "Formatting",
          title: "The Film Shot List",
          description: "Filmmakers use shot lists to plan every single camera setup. Let's create one for a simple scene.",
          task: "Write a prompt to generate a film shot list for a simple 3-shot scene: a character gets into a London black cab. The output must be a markdown table with three columns: 'Shot No.', 'Shot Type' (e.g., Wide, Medium, Close-Up), and 'Description of Action'.",
          difficulty: "Intermediate",
          points: 310,
          successCriteria: [
            "Specifies the scene to be planned.",
            "Requests the specific 'shot list' format (a markdown table).",
            "Defines the exact column headers required.",
            "The context is a classic British setting."
          ],
          hints: [
            "A shot list is a key part of pre-production in filmmaking.",
            "Being precise about the columns you need is key to getting a useful, structured output.",
            "Try to visualise the scene in your head. What would be the most effective sequence of shots?"
          ],
          examplePrompt: "I need a film shot list for a simple 3-shot scene where a character hails and gets into a London black cab on a rainy street. Please generate a markdown table with the columns: 'Shot No.', 'Shot Type', and 'Description of Action'.",
          commonMistakes: [
            "Just describing the scene, instead of asking for the structured shot list table.",
            "Forgetting to define the required columns.",
            "The shots not logically cutting together to tell the story of the scene."
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
          id: 323,
          type: "Formatting",
          title: "The Kickstarter Pitch",
          description: "A great Kickstarter description needs to be exciting and clear. Let's write one for a new board game.",
          task: "Write a prompt to generate a short, punchy project description (under 100 words) for a fictional Kickstarter campaign for a board game called 'Canal Kings', about building a canal network during the British Industrial Revolution.",
          difficulty: "Intermediate",
          points: 305,
          successCriteria: [
            "Specifies the fictional product and its theme.",
            "Asks for a short, punchy description suitable for a Kickstarter page.",
            "Sets a word count limit.",
            "The goal is to excite potential backers."
          ],
          hints: [
            "Look at successful Kickstarter campaigns for inspiration. Notice how they use enthusiastic language and clear calls to action.",
            "Focus on what makes the game unique and fun.",
            "You can ask the AI to include a catchy opening line to grab attention."
          ],
          examplePrompt: "Please write a short, exciting project description (under 100 words) for a Kickstarter campaign for a new board game called 'Canal Kings'. The game is about competing to build a canal network during the British Industrial Revolution. The description should be punchy and make people want to back the project.",
          commonMistakes: [
            "The description being a dry list of rules instead of an exciting pitch.",
            "The text being too long and detailed for a short Kickstarter summary.",
            "Forgetting to mention the theme of the game."
          ]
        },
        {
          id: 324,
          type: "Formatting",
          title: "The App Store Description",
          description: "The first few lines on an app store page are crucial. Let's write a description that makes people want to download an app.",
          task: "Write a prompt to generate the short, introductory description for a new app on the App Store. The app is called 'Birdsong UK' and it helps users identify British birds by their song. The description should be 2-3 sentences long and clearly state the app's function and benefit.",
          difficulty: "Intermediate",
          points: 300,
          successCriteria: [
            "Specifies the app's name and purpose.",
            "Asks for a short description suitable for an app store.",
            "The goal is to be clear, concise, and benefit-oriented."
          ],
          hints: [
            "App store descriptions are all about quickly communicating value.",
            "Start with the problem the app solves ('Ever hear a bird and wonder what it is?').",
            "Focus on the main benefit for the user."
          ],
          examplePrompt: "Please write a short (2-3 sentences) app store description for a new app called 'Birdsong UK'. The app listens to birdsong via your phone's microphone and tells you what bird it is. The description should be simple, clear, and enticing for a general audience.",
          commonMistake: [
            "The description being too technical.",
            "The text being too long.",
            "Not clearly explaining what the app actually does."
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
          id: 325,
          type: "Formatting",
          title: "The Best Man's Toast",
          description: "A best man's speech is a careful balancing act. Let's write a toast that is funny, warm, and not too embarrassing.",
          task: "Write a prompt to generate a short best man's toast for his best friend, 'Rob'. The toast should include a short, funny (but not mean) anecdote, a sincere compliment for Rob's new spouse, and end with a call to raise a glass.",
          difficulty: "Intermediate",
          points: 295,
          successCriteria: [
            "Specifies the occasion (a wedding) and role (best man).",
            "Requests a specific three-part structure: anecdote, compliment, toast.",
            "The tone should be a mix of humorous and sincere."
          ],
          hints: [
            "A great best man's speech tells a story that reveals the groom's character in a positive way.",
            "Specifying the structure helps the AI create a speech that flows well.",
            "You can invent the anecdote or leave it up to the AI's creativity."
          ],
          examplePrompt: "I am the best man at my friend Rob's wedding. Please generate a short toast (under 150 words) that includes a funny, gentle anecdote about our university days, a warm welcome for his new wife, Sarah, into the family, and finishes with a call for everyone to raise their glass.",
          commonMistakes: [
            "The anecdote being genuinely mean or inappropriate for a wedding.",
            "Forgetting to mention the other partner.",
            "The speech not ending with an actual toast."
          ]
        },
        {
          id: 326,
          type: "Formatting",
          title: "The Office Leaving Card",
          description: "What do you write in a colleague's leaving card? Let's craft the perfect short-but-sweet message.",
          task: "Write a prompt to generate two short messages for a leaving card for a popular colleague named Susan who is retiring. One message should be from a close work friend, and the other from a more junior colleague who respects her. Both should be warm and wish her well.",
          difficulty: "Intermediate",
          points: 290,
          successCriteria: [
            "Defines the occasion (a colleague's retirement card).",
            "Asks for two distinct messages based on different relationships to the person leaving.",
            "Specifies the tone should be warm and celebratory."
          ],
          hints: [
            "The challenge here is nuance. How does the message change depending on how well you know the person?",
            "A message from a close friend might reference a specific inside joke, while a message from a junior colleague might focus on mentorship or learning.",
            "Keep it brief – it has to fit on a card!"
          ],
          examplePrompt: "I need two short messages for a leaving card for a respected colleague, Susan, who is retiring. Please write: 1. A warm, personal message from a close work friend of many years. 2. A respectful and appreciative message from a junior colleague she has mentored. Both should wish her a very happy retirement.",
          commonMistakes: [
            "The two messages being too similar in tone.",
            "The messages being too long to realistically write in a card.",
            "The tone being too formal or impersonal for a leaving card."
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
                    },
                    {
                      id: 327,
                      type: "Formatting",
                      title: "True or False?",
                      description: "Let's generate some 'True or False' questions, another classic quiz format.",
                      task: "Write a prompt to generate a list of 5 'True or False' statements about the history of Ancient Rome. The prompt should also ask the AI to provide the correct answer for each statement.",
                      difficulty: "Intermediate",
                      points: 300,
                      successCriteria: [
                        "Specifies the topic (Ancient Rome).",
                        "Asks for the specific 'True or False' format.",
                        "Requests a specific number of statements (5).",
                        "Asks for the correct answer to be provided for each."
                      ],
                      hints: [
                        "This is a great way to quickly generate material for a pub quiz or a study guide.",
                        "You can ask for a mix of easy and difficult questions.",
                        "Make sure you ask for the answers, otherwise you'll have to look them up yourself!"
                      ],
                      examplePrompt: "Please generate 5 'True or False' statements about Ancient Roman history, suitable for a pub quiz. After each statement, please indicate whether it is true or false.",
                      commonMistakes: [
                        "Forgetting to ask for the correct answer.",
                        "The statements being ambiguous or a matter of opinion.",
                        "The format not being a simple 'True or False' statement."
                      ]
                    },
                    {
                      id: 328,
                      type: "Formatting",
                      title: "Fill in the Blanks",
                      description: "This format is great for testing knowledge. Let's create some 'fill-in-the-blank' questions for a language learner.",
                      task: "Write a prompt to generate 3 'fill-in-the-blank' sentences to test a learner's knowledge of English prepositions. The output for each item should include the sentence with a blank (e.g., a `___`) and a separate line with the correct answer.",
                      difficulty: "Intermediate",
                      points: 305,
                      successCriteria: [
                        "Specifies the learning goal (testing English prepositions).",
                        "Asks for the 'fill-in-the-blank' format.",
                        "Requests a specific number of questions (3).",
                        "Asks for the question and the answer to be provided separately."
                      ],
                      hints: [
                        "This is very useful for creating exercises for language learning.",
                        "You can use this for any topic that involves learning key terms or vocabulary.",
                        "Be clear about how you want the blank to be represented (e.g., with underscores)."
                      ],
                      examplePrompt: "Please generate 3 'fill-in-the-blank' sentences to help someone learn English prepositions. For each item, provide the sentence with a blank space (e.g., using '___') and then provide the correct word on the next line.",
                      commonMistakes: [
                        "Forgetting to ask for the correct answer to be provided.",
                        "The sentence being completable with multiple different words, making it a poor question.",
                        "The output not separating the question from the answer."
                      ]
                    }
                  ]
                },{
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
          id: 401,
          type: "Ideation",
          title: "The Food Truck Fusion",
          description: "Great ideas often come from combining two existing ones. Let's brainstorm some fusion food truck concepts.",
          task: "Write a prompt to generate three unique concepts for a new food truck. Each concept must be a fusion of two unlikely international cuisines (e.g., Scottish-Thai). For each concept, the AI should generate a catchy name, a one-sentence pitch, and a signature dish.",
          difficulty: "Advanced",
          points: 310,
          successCriteria: [
            "Specifies the goal (generate food truck concepts).",
            "Includes the core creative constraint (fusion of two unlikely cuisines).",
            "Defines the required output for each idea (name, pitch, signature dish)."
          ],
          hints: [
            "The more unlikely the combination of cuisines, the more creative the AI has to be.",
            "Asking for a name, pitch, and dish makes the concept feel much more real.",
            "This is a great technique for any kind of product or creative brainstorming."
          ],
          examplePrompt: "I need three unique concepts for a new food truck. Each concept must be a fusion of two cuisines that are not normally seen together. For each concept, please provide: a catchy name, a one-sentence pitch, and a signature dish.",
          commonMistakes: [
            "The cuisine combinations being too obvious or common.",
            "Forgetting to ask for the name, pitch, and signature dish for each concept.",
            "The signature dish not being a true fusion of the two cuisines."
          ]
        },
        {
          id: 402,
          type: "Ideation",
          title: "The Board Game Mash-Up",
          description: "Creativity loves constraints. Let's invent a new board game by combining three random elements.",
          task: "Write a prompt to generate a concept for a new board game. The game must combine three specific elements: a theme of 'post-apocalyptic librarians', a core mechanic of 'worker placement', and a unique component of 'scented cards'. Ask for a short paragraph describing how the game works.",
          difficulty: "Advanced",
          points: 320,
          successCriteria: [
            "Provides three specific, disparate constraints for the game (theme, mechanic, component).",
            "Asks for a description of the game concept that synthesises these three elements.",
            "The goal is to create a coherent and imaginative idea from the given constraints."
          ],
          hints: [
            "The more random the constraints, the more interesting the result can be.",
            "This is a powerful technique for breaking out of a creative rut.",
            "You can try this with any set of random inputs for any creative project (story, song, recipe, etc.)."
          ],
          examplePrompt: "Please generate a concept for a new board game that combines the following three elements: a theme of 'post-apocalyptic librarians', a core gameplay mechanic of 'worker placement', and a unique physical component of 'scented cards'. Write a short paragraph explaining the basic idea of the game.",
          commonMistakes: [
            "The resulting concept ignoring one of the three constraints.",
            "The explanation not clearly connecting the three elements.",
            "The game idea being incoherent or illogical."
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
          id: 403,
          type: "Reverse-Prompt-Engineering",
          title: "The Peculiar List",
          description: "This AI gave a very specific answer. Can you work backwards to figure out the exact, constraint-laden prompt that was used?",
          task: "An AI produced the list below. Your task is to write the single, concise prompt that most likely generated this exact output.",
          aiOutput: "1. Sloth\n2. Coati\n3. Agami\n4. Tinou\n5. Tayra",
          difficulty: "Advanced",
          points: 330,
          successCriteria: [
            "The reconstructed prompt is concise and accurate.",
            "It must ask for a list of animals from a specific region (Amazon rainforest).",
            "It must specify the exact number of items (5).",
            "It must include the crucial constraint that the animal names must be exactly 5 letters long."
          ],
          hints: [
            "Look at what all the items have in common. It's often not just the topic.",
            "Count the letters! Constraints can be very literal.",
            "Think about how you would combine all the requirements into a single, elegant sentence."
          ],
          examplePrompt: "Give me a numbered list of 5 animals that live in the Amazon rainforest whose common name is exactly 5 letters long.",
          commonMistakes: [
            "Missing one of the constraints, especially the 5-letter-long name.",
            "Asking for animals in general, without specifying the location.",
            "Writing a very long, conversational prompt instead of a concise and direct one."
          ]
        },
        {
          id: 404,
          type: "Reverse-Prompt-Engineering",
          title: "The Persona's Perspective",
          description: "This output has a very strong character voice. What prompt was used to specify both the topic and the persona?",
          task: "An AI produced the text below. Your task is to write the single, concise prompt that most likely generated this output.",
          aiOutput: "Alright, settle down you lot. Photosynthesis, is it? Right. It's like this: a plant is a tiny green pub, yeah? The sunshine is the punter, comes in all eager. The water is the booze from the cellar, coming up from the roots. The plant takes the sunshine and the water, has a bit of a chemical knees-up, and belches out two things: the sugar it needs to keep the lights on, and the air we need to breathe. Simple as. Now, who's getting the next round in?",
          difficulty: "Advanced",
          points: 340,
          successCriteria: [
            "The reconstructed prompt is concise and elegant.",
            "It must ask for an explanation of a specific topic (photosynthesis).",
            "It must specify a clear, characterful persona (e.g., a pub landlord).",
            "It likely asks for the explanation to be in the form of an analogy related to the persona."
          ],
          hints: [
            "First, identify the topic. Then, identify the voice. Who talks like that?",
            "The analogy (a pub) is a huge clue to the persona.",
            "The best prompts often ask for the persona *and* ask them to explain something *in their own terms*."
          ],
          examplePrompt: "Act as a friendly but no-nonsense London pub landlord. In your own words, explain the process of photosynthesis to your regulars using a pub-based analogy.",
          commonMistakes: [
            "Just asking for an explanation of photosynthesis without the persona.",
            "Identifying the persona but not the specific topic.",
            "Missing the hint that the AI should use an analogy related to its persona."
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
          id: 405,
          type: "Ideation",
          title: "Explain it With a Movie",
          description: "Analogies can be complex and fun. Let's explain a difficult concept using the plot of a famous film.",
          task: "Write a prompt that asks the AI to explain the political concept of a 'Pyrrhic victory' by comparing it to the ending of the film *The Italian Job* (the original 1969 version).",
          difficulty: "Advanced",
          points: 315,
          successCriteria: [
            "Specifies the concept to be explained ('Pyrrhic victory').",
            "Specifies the film to be used as an analogy (*The Italian Job*).",
            "Asks the AI to explicitly connect the concept to the film's plot."
          ],
          hints: [
            "This is a fun way to connect with an audience by using shared cultural knowledge.",
            "You need to pick a film where the plot is a genuinely good match for the concept.",
            "The AI needs to explain *how* the film's plot illustrates the concept."
          ],
          examplePrompt: "Please explain the concept of a 'Pyrrhic victory'. Use the final scene of the original 1969 film 'The Italian Job' as a detailed analogy to illustrate your explanation.",
          commonMistakes: [
            "Just asking for a definition of the term and a summary of the film, without connecting them.",
            "Choosing a film that doesn't actually fit the concept well.",
            "Forgetting to specify which version of a film if there are remakes."
          ]
        },
        {
          id: 406,
          type: "Ideation",
          title: "The 'X is the Y of Z' Game",
          description: "This simple framework is a powerful tool for generating creative analogies. Let's try it out.",
          task: "Write a prompt that asks the AI to generate three creative comparisons for 'the London Underground' using the format 'X is the Y of Z'. For example, 'The London Underground is the circulatory system of the city.'",
          difficulty: "Advanced",
          points: 325,
          successCriteria: [
            "Specifies the topic for the analogies ('the London Underground').",
            "Clearly explains or demonstrates the 'X is the Y of Z' format.",
            "Requests a specific number of comparisons (three)."
          ],
          hints: [
            "This framework forces a specific kind of metaphorical thinking.",
            "It's often used in Silicon Valley pitches ('We're the Uber for dogs').",
            "You can use it to describe almost anything in a fresh and interesting way."
          ],
          examplePrompt: "I need three creative analogies for the London Underground. Please generate them using the specific format '[The London Underground] is the [Y] of [Z]'. For example: 'The London Underground is the circulatory system of London.'",
          commonMistakes: [
            "The AI not following the 'X is the Y of Z' format correctly.",
            "The comparisons being clichéd or uninspired.",
            "Forgetting to specify the subject for the comparisons."
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
          id: 407,
          type: "Ideation",
          title: "The 'Netflix for X' Model",
          description: "A great way to innovate is to apply a successful business model to a new industry. Let's try it with the subscription model.",
          task: "Write a prompt to generate three new business ideas that apply the 'Netflix-style' monthly subscription model to a type of physical product. For each idea, provide a name and a one-sentence pitch.",
          difficulty: "Advanced",
          points: 335,
          successCriteria: [
            "Explains the creative framework ('Netflix for X').",
            "Specifies that the ideas must be for physical products.",
            "Requests three ideas, each with a name and a pitch."
          ],
          hints: [
            "This 'X for Y' model is a very common shortcut for explaining a startup idea.",
            "Think about things people use or consume regularly. Could they be turned into a subscription? (e.g., coffee, socks, books).",
            "The name should be catchy and hint at the subscription model."
          ],
          examplePrompt: "I need three new business ideas based on the 'Netflix' monthly subscription model, but for physical products. For each idea, please suggest a name and a one-sentence pitch.",
          commonMistakes: [
            "The ideas being for digital products, not physical ones.",
            "The business model not being a true subscription.",
            "Forgetting to provide both a name and a pitch for each idea."
          ]
        },
        {
          id: 408,
          type: "Ideation",
          title: "Thinking Inside the Box",
          description: "Sometimes, the best ideas come from tough constraints. Let's brainstorm solutions with a big limitation.",
          task: "Write a prompt to generate three creative, low-tech ideas for improving a city's air quality. The crucial constraint is that the solutions cannot use electricity or involve changing transport policy (e.g., no electric cars or low-emission zones).",
          difficulty: "Advanced",
          points: 340,
          successCriteria: [
            "Clearly states the problem to be solved (improving city air quality).",
            "Applies a significant, restrictive negative constraint (no electricity, no transport policy).",
            "Asks for a specific number of creative, low-tech ideas."
          ],
          hints: [
            "This type of 'negative constraint' prompt forces the AI to think outside its usual patterns.",
            "Think about biological or architectural solutions. What can be done with plants, wind, or new building materials?",
            "The ideas should be genuinely creative and adhere to the 'no electricity' rule."
          ],
          examplePrompt: "Please brainstorm three creative, low-tech ideas for improving London's air quality. The solutions must not rely on electricity or involve changing transport policy. Focus on biological, architectural, or community-based solutions.",
          commonMistakes: [
            "The solutions ignoring the negative constraint and suggesting electric vehicles or air purifiers.",
            "The ideas being too generic (e.g., 'plant more trees') without a creative twist.",
            "The solutions not being practical or scalable."
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
          id: 409,
          type: "Ideation",
          title: "The MacGuffin Maker",
          description: "A 'MacGuffin' is the object that drives a story's plot. Let's invent some.",
          task: "Write a prompt to generate three ideas for a 'MacGuffin' for a fantasy story. For each idea, the AI should invent a name for the object, a one-sentence description of its power, and a brief note on its origin.",
          difficulty: "Advanced",
          points: 345,
          successCriteria: [
            "Explains the concept of a 'MacGuffin'.",
            "Asks for three distinct ideas.",
            "Defines the required output for each idea (name, power, origin).",
            "Specifies the genre (fantasy)."
          ],
          hints: [
            "A good MacGuffin doesn't have to be all-powerful, it just has to be something the characters believably want.",
            "Try to think of powers that are more interesting than just 'infinite power' or 'invincibility'.",
            "The origin story can add a lot of flavour and plot hooks."
          ],
          examplePrompt: "I need three different ideas for a 'MacGuffin' to be the central plot device in a new fantasy novel. For each idea, please provide a name for the object, a short description of its magical power, and a brief history of where it came from.",
          commonMistakes: [
            "The MacGuffins being generic clichés (e.g., a magic sword).",
            "Forgetting to ask for the name, power, and origin for each.",
            "The powers being too vague or all-powerful."
          ]
        },
        {
          id: 410,
          type: "Ideation",
          title: "Character Flaw Generator",
          description: "Perfect characters are boring. Let's give a hero some interesting, relatable flaws.",
          task: "You have a simple character archetype: 'a brave and noble knight'. Write a prompt that asks the AI to generate three interesting and unexpected character flaws that would make this knight a more complex and compelling character.",
          difficulty: "Advanced",
          points: 350,
          successCriteria: [
            "Provides the initial character archetype.",
            "Asks for a specific number of character flaws (three).",
            "Encourages the AI to suggest 'interesting' or 'non-cliché' flaws."
          ],
          hints: [
            "Think beyond simple physical flaws. What are some interesting psychological or moral flaws a knight could have?",
            "A good flaw often creates conflict with the character's primary traits. How can a 'brave' knight also be flawed?",
            "You can ask for a brief explanation of how the flaw might affect the character's actions."
          ],
          examplePrompt: "I'm creating a character who is a brave and noble knight, but I want to make him more interesting. Please suggest three non-cliché character flaws for him that would create internal conflict with his otherwise heroic nature.",
          commonMistakes: [
            "The flaws being simple clichés (e.g., 'a fear of spiders').",
            "The flaws not creating any real conflict for the character.",
            "Just asking for 'flaws' without the context of the character archetype."
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
          id: 411,
          type: "Ideation",
          title: "The Culinary Mash-Up",
          description: "Let's invent a new, weird, and possibly wonderful dish by combining two very different food concepts.",
          task: "Write a prompt to invent a new dish that combines a 'Full English Breakfast' with 'tacos'. Ask for a catchy name for the dish and a brief description of what's in it.",
          difficulty: "Advanced",
          points: 355,
          successCriteria: [
            "Specifies the two food concepts to be combined.",
            "Asks for a name for the new dish.",
            "Asks for a description of its components."
          ],
          hints: [
            "This is a fun, purely creative challenge.",
            "Think about how the components of each dish could be integrated. Beans in a taco? Scrambled egg with salsa?",
            "The name should be as creative as the dish itself."
          ],
          examplePrompt: "Please invent a new fusion dish that combines the elements of a traditional 'Full English Breakfast' with a 'taco'. Give the dish a creative name and briefly describe its ingredients.",
          commonMistakes: [
            "Just listing the ingredients of both dishes separately.",
            "The combination not being creative or well-integrated.",
            "Forgetting to invent a name for the new dish."
          ]
        },
        {
          id: 412,
          type: "Ideation",
          title: "The TV Show Blend",
          description: "Let's create a new TV show by mashing up two completely different genres.",
          task: "Write a prompt to generate a concept for a new TV show that is a blend of the formats and tones of two British shows: 'The Great British Bake Off' and the police drama 'Line of Duty'. Ask for a title and a one-sentence pitch for the new show.",
          difficulty: "Advanced",
          points: 360,
          successCriteria: [
            "Specifies the two TV shows to be blended.",
            "Asks for a title for the new show.",
            "Asks for a one-sentence pitch."
          ],
          hints: [
            "Think about the core elements of each show. What happens when you combine forensic investigation with cake decorating?",
            "The humour comes from the extreme clash of genres.",
            "The title and pitch should capture the blended concept perfectly."
          ],
          examplePrompt: "Please generate a TV show concept that is a mash-up of 'The Great British Bake Off' and the police procedural 'Line of Duty'. Provide a title for the show and a one-sentence pitch that explains the concept.",
          commonMistakes: [
            "The concept just being one of the shows with a guest star from the other.",
            "The title or pitch not effectively communicating the blended idea.",
            "The two shows chosen being too similar to create a fun contrast."
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
            "You can specify a desired tone, like 'playful', 'sophisticated', or 'urgent'."
          ],
          examplePrompt: "Generate 5 catchy and memorable marketing slogans for a new brand of organic, fair-trade coffee aimed at environmentally conscious millennials.",
          commonMistakes: [
            "Asking for slogans without describing the product or its values.",
            "Forgetting to specify the quantity of slogans."
          ]
        },
        {
          id: 413,
          type: "Ideation",
          title: "The App Tagline",
          description: "A great tagline summarises an entire brand in a few words. Let's create some for a new app.",
          task: "Write a prompt to generate 3 short, memorable taglines for a new language-learning app called 'LingoLeap'. The app focuses on learning through conversation with AI tutors.",
          difficulty: "Advanced",
          points: 365,
          successCriteria: [
            "Specifies the fictional app and its core feature.",
            "Asks for a specific number of taglines (3).",
            "Encourages the taglines to be short and memorable."
          ],
          hints: [
            "A tagline is different from a slogan. It's more about the brand's mission, while a slogan might be for a specific campaign.",
            "Think about the core benefit of the app. What problem does it solve for the user?",
            "Good taglines are often very short (2-5 words)."
          ],
          examplePrompt: "Please generate 3 short, memorable taglines for a new language-learning app called 'LingoLeap'. The app's unique feature is that it allows users to have spoken conversations with an AI tutor. The taglines should be inspiring and focus on conversational fluency.",
          commonMistakes: [
            "The taglines being too long or descriptive.",
            "The taglines being generic and not related to the app's specific features.",
            "Just listing features instead of creating a punchy tagline."
          ]
        },
        {
          id: 414,
          type: "Ideation",
          title: "Hedgehog Charity Slogans",
          description: "Slogans for a charity need to be emotional and action-oriented. Let's create some to help our spikey friends.",
          task: "Write a prompt to generate 5 campaign slogans for a fictional charity dedicated to protecting Britain's wild hedgehogs. The slogans should be emotive and encourage people to donate or help.",
          difficulty: "Advanced",
          points: 370,
          successCriteria: [
            "Specifies the fictional charity's cause (protecting British hedgehogs).",
            "Asks for a specific number of slogans (5).",
            "Specifies the goal of the slogans (emotive, encourage action/donation)."
          ],
          hints: [
            "Charity slogans often use emotional language to create a connection.",
            "Think about simple, memorable phrases that could work on a poster or a social media post.",
            "You can use wordplay related to hedgehogs ('Help us get to the point!')."
          ],
          examplePrompt: "I need 5 short, emotive campaign slogans for a new charity focused on protecting Britain's declining hedgehog population. The slogans need to encourage people to care and ideally lead them to donate.",
          commonMistakes: [
            "The slogans being too factual and not emotional enough.",
            "The slogans not having a clear call to action (even an implied one).",
            "The slogans not being specific to the cause."
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
          id: 415,
          type: "Ideation",
          title: "The Spellbook",
          description: "A good magic system needs interesting spells. Let's invent a new one, complete with a dangerous side-effect.",
          task: "Write a prompt to generate a new, original magic spell for a fantasy world. The prompt should ask for the spell's name, a description of its visual effect, its intended use, and a rare but dangerous side-effect.",
          difficulty: "Advanced",
          points: 375,
          successCriteria: [
            "Asks for a new, original magic spell.",
            "Defines the specific information required (name, effect, use, side-effect).",
            "Encourages creativity and detail."
          ],
          hints: [
            "A good side-effect makes a spell much more interesting and creates plot hooks.",
            "Think about what makes a spell unique. Is it the way it's cast? The material components it needs?",
            "You can specify a 'school' of magic (e.g., illusion, transmutation) to guide the AI."
          ],
          examplePrompt: "I need a new magic spell for my fantasy story. Please invent one, and give me its name, a description of its visual effect, its intended purpose, and an interesting but dangerous potential side-effect.",
          commonMistakes: [
            "The spell being a generic copy of one from a famous fantasy world (e.g., a simple fireball).",
            "Forgetting to ask for the crucial side-effect.",
            "The spell being too powerful or having no clear limitations."
          ]
        },
        {
          id: 416,
          type: "Ideation",
          title: "The Village Festival",
          description: "Culture is built on traditions. Let's invent a new, slightly strange annual festival for a fictional town.",
          task: "Write a prompt to generate a description of a new, fictional annual festival for a small, isolated village in the English countryside. Ask for the festival's name, why it is celebrated, and three of the strange traditions that take place during the celebration.",
          difficulty: "Advanced",
          points: 375,
          successCriteria: [
            "Specifies the goal (invent a new festival).",
            "Provides a setting (isolated English village).",
            "Asks for a name, a reason for the festival, and three strange traditions.",
            "The prompt encourages creativity and cultural world-building."
          ],
          hints: [
            "Look up some real, strange British folk traditions for inspiration (e.g., cheese-rolling, bog snorkelling).",
            "The 'why' is important. Does the festival celebrate a historical event? A mythological creature? A good harvest?",
            "The 'strange traditions' are what will make the festival memorable."
          ],
          examplePrompt: "Please invent a new annual festival for a weird, isolated village in the English countryside. Give me the name of the festival, a brief history of why it's celebrated, and a list of three of the strange local traditions that are part of the celebration.",
          commonMistakes: [
            "The festival being too generic (e.g., a simple 'summer fete').",
            "The traditions not being particularly strange or interesting.",
            "Forgetting to ask for the origin story behind the festival."
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
          id: 417,
          type: "Ideation",
          title: "The Themed Hotel",
          description: "Let's design some unique experiences. Brainstorm some ideas for new themed hotel rooms.",
          task: "Write a prompt to generate ideas for 3 new themed rooms for a boutique hotel in London. Each idea must have a clear theme related to British culture, a creative name for the room, and a description of one unique feature or experience inside it.",
          difficulty: "Advanced",
          points: 385,
          successCriteria: [
            "Specifies the goal (themed hotel rooms).",
            "Provides a setting (London) and a constraint (themes related to British culture).",
            "Asks for a name, theme, and unique feature for each of the 3 ideas."
          ],
          hints: [
            "Think about different aspects of British culture: history, literature, music, fashion.",
            "The 'unique feature' is what makes the idea special. It should be more than just posters on the wall.",
            "This is a fun way to brainstorm any kind of themed experience."
          ],
          examplePrompt: "I need ideas for 3 new themed rooms for a boutique hotel in London, with each theme based on British culture. For each idea, please provide a creative name for the room, and describe one unique feature of the room's design or guest experience.",
          commonMistakes: [
            "The themes not being clearly related to British culture.",
            "The 'unique feature' being boring or uninspired.",
            "Forgetting to ask for a name for each room."
          ]
        },
        {
          id: 418,
          type: "Ideation",
          title: "The University of the Future",
          description: "What will people study in the future? Let's invent some new university degree courses.",
          task: "Write a prompt to invent three new, plausible-sounding university degrees that might exist in 15 years' time. For each degree, provide a title, a one-sentence description, and one example career path for a graduate.",
          difficulty: "Advanced",
          points: 385,
          successCriteria: [
            "Asks to invent new university degrees for the near future.",
            "Requests a title, description, and career path for each of the 3 ideas.",
            "The ideas should be creative but plausible."
          ],
          hints: [
            "Think about current trends in technology, society, and the environment. What new jobs and skills will be needed?",
            "A good course title sounds academic and specific.",
            "The career path should be a logical outcome of the degree."
          ],
          examplePrompt: "Please generate three ideas for new, forward-thinking university degrees that might be offered in the year 2040. For each degree, provide a plausible-sounding title, a one-sentence summary of what students would learn, and one potential job a graduate could get.",
          commonMistakes: [
            "The degree subjects being completely unbelievable or silly.",
            "Forgetting to provide the career path, which helps to ground the idea in reality.",
            "The course titles sounding too generic."
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
          id: 419,
          type: "Ideation",
          title: "Here Be Dragons",
          description: "Every fantasy map needs evocative, named locations. Let's invent one.",
          task: "Write a prompt to generate a description of a new, fictional mountain range for a fantasy map. The prompt should ask for a name for the range, a description of its physical appearance, and the legend behind its name.",
          difficulty: "Advanced",
          points: 395,
          successCriteria: [
            "Asks for a description of a fictional geographical feature.",
            "Requests a name, a physical description, and the legend behind the name.",
            "The goal is to create an evocative, map-worthy location."
          ],
          hints: [
            "A good fantasy name often hints at the location's history or nature.",
            "The 'legend' is the key part that brings the place to life and gives it a story.",
            "Think about what makes a mountain range unique. Are the peaks unnaturally sharp? Do they glow at night?"
          ],
          examplePrompt: "I need a new mountain range for my fantasy map. Please invent one and give me: a creative name for the range, a short description of its unique physical appearance, and the local legend that explains how it got its name.",
          commonMistakes: [
            "The description being a generic 'a big mountain range'.",
            "Forgetting to ask for the legend behind the name.",
            "The name being a simple cliché."
          ]
        },
        {
          id: 420,
          type: "Ideation",
          title: "The Ghost's Room",
          description: "How would a ghost see the world? Let's try to describe a familiar place from a supernatural point of view.",
          task: "Write a prompt that asks the AI to describe a normal living room, but from the perspective of a sad and lonely ghost who is trapped there. The description should focus on sensory details that a ghost might perceive differently.",
          difficulty: "Advanced",
          points: 400,
          successCriteria: [
            "Specifies the point of view (a sad, lonely ghost).",
            "Specifies the location (a normal living room).",
            "Encourages the AI to focus on non-physical or altered sensory details (e.g., cold spots, memories, muted colours)."
          ],
          hints: [
            "This is a great exercise in 'show, don't tell'. Don't just say the ghost is sad; describe the room in a sad way.",
            "How does the ghost perceive time? Does it see echoes of past events?",
            "The contrast between the normal room and the supernatural perception is key."
          ],
          examplePrompt: "Please write a short (200 word) description of a cozy living room, but from the first-person perspective of a lonely ghost who has been trapped there for a century. The description should not focus on the physical objects, but on how the ghost experiences the room through memories, cold spots, and sounds that others can't hear.",
          commonMistakes: [
            "A simple description of a room, without the ghostly perspective.",
            "The ghost's feelings being stated directly ('I am sad') rather than shown through the description.",
            "Forgetting to specify the point of view."
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
          id: 421,
          type: "Ideation",
          title: "The YouTube Channel",
          description: "Let's come up with a concept for a new YouTube channel, complete with a name, audience, and a killer first video title.",
          task: "Write a prompt to generate three distinct ideas for a new YouTube channel focused on exploring abandoned places in the UK. For each idea, ask for a channel name, a description of the target audience, and a catchy title for the first video.",
          difficulty: "Advanced",
          points: 405,
          successCriteria: [
            "Specifies the channel's theme (exploring abandoned UK places).",
            "Asks for three distinct ideas.",
            "Defines the required output for each idea (name, audience, first video title)."
          ],
          hints: [
            "Thinking about the target audience first can help you come up with a better channel name and content ideas.",
            "The first video title is crucial for grabbing attention.",
            "You can specify a particular tone for the channel, e.g., 'spooky and atmospheric' or 'historical and educational'."
          ],
          examplePrompt: "I need three different ideas for a new YouTube channel about 'urbex' (urban exploration) in the UK. For each idea, please provide a channel name, a description of the ideal target audience, and a click-worthy title for the first episode.",
          commonMistakes: [
            "Just asking for 'YouTube ideas' without a theme.",
            "Forgetting to ask for the structured details like audience and video title.",
            "The ideas being too similar to each other."
          ]
        },
        {
          id: 422,
          type: "Ideation",
          title: "The New Bank Holiday",
          description: "Every country could use another holiday. Let's invent a new one for the UK.",
          task: "Write a prompt to invent a new official public Bank Holiday for the UK. Your prompt must ask for a name for the holiday, the date (or day, e.g., 'the third Friday in July') it would be celebrated, and a short justification for its creation.",
          difficulty: "Advanced",
          points: 405,
          successCriteria: [
            "Specifies the goal (invent a new UK Bank Holiday).",
            "Asks for a name, a date, and a justification for the new holiday."
          ],
          hints: [
            "A good justification might be historical, cultural, or simply for public wellbeing.",
            "Think about what's missing from the current UK calendar. Is there a season that needs a holiday?",
            "The name should be evocative and feel like it could be real."
          ],
          examplePrompt: "Propose a new official Bank Holiday for the United Kingdom. Give it a name, suggest when it should take place, and write a short justification for why it should be created.",
          commonMistakes: [
            "Forgetting to provide a justification for the new holiday.",
            "The proposed holiday being for a cause that is too niche or silly to be a national holiday.",
            "The name of the holiday being uninspired."
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
          id: 423,
          type: "Ideation",
          title: "The Animal Mash-Up",
          description: "Let's create a new mythical beast by combining two real animals.",
          task: "Write a prompt to invent a new mythical creature by combining two animals that don't normally go together, for example, a badger and a parrot. Ask for a name for the creature, a brief description of its appearance, and what special ability it has.",
          difficulty: "Advanced",
          points: 415,
          successCriteria: [
            "Specifies the two animals to be combined.",
            "Asks for a name, a physical description, and a special ability."
          ],
          hints: [
            "The more different the two animals, the more creative the result will be.",
            "Think about how the best features of each animal could be combined.",
            "The special ability should ideally relate to the two animals that were combined."
          ],
          examplePrompt: "Please invent a new mythical creature that is a combination of a badger and a parrot. Give it a name, describe what it looks like, and explain one special ability it possesses.",
          commonMistakes: [
            "Just describing the two animals separately.",
            "The creature simply being one animal with the colours of the other.",
            "Forgetting to give the creature a name or a special ability."
          ]
        },
        {
          id: 424,
          type: "Ideation",
          title: "The Job of the Future",
          description: "Let's invent a new job title by combining two existing professions.",
          task: "Write a prompt to invent a new job title and role by combining two very different professions: a 'chef' and a 'pharmacist'. Ask for a new job title and a short description of their responsibilities.",
          difficulty: "Advanced",
          points: 415,
          successCriteria: [
            "Specifies the two professions to be combined.",
            "Asks for a new, combined job title.",
            "Asks for a description of the new role's responsibilities."
          ],
          hints: [
            "Think about the core skills of each profession and how they might overlap.",
            "This is a great technique for thinking about future career paths.",
            "The job title should be catchy and sound plausible."
          ],
          examplePrompt: "Please invent a new job by combining the skills of a 'chef' and a 'pharmacist'. Give this new profession a title and write a short job description outlining their main responsibilities.",
          commonMistakes: [
            "The new job just being one of the original jobs with a slight modification.",
            "The responsibilities not being a true blend of the two professions.",
            "The job title being uninspired."
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
          id: 425,
          type: "Ideation",
          title: "Design a Game Level",
          description: "Let's brainstorm the key components for a level in a video game.",
          task: "Write a prompt to generate ideas for a level in a fantasy video game. The theme of the level is 'a sunken water temple'. The prompt should ask for ideas for the level's 'Atmosphere and Look', its 'Main Puzzle Mechanic', and the 'End-of-Level Boss'.",
          difficulty: "Advanced",
          points: 425,
          successCriteria: [
            "Specifies the theme of the game level (sunken water temple).",
            "Asks for ideas across three specific categories (Atmosphere, Puzzle, Boss).",
            "The goal is to generate a coherent set of ideas for a single experience."
          ],
          hints: [
            "Breaking down a big creative task into smaller categories like this makes it much more manageable.",
            "Be as evocative as you can with the theme to get more creative results.",
            "You can use this technique to design anything with multiple components, like a room, a website, or a character."
          ],
          examplePrompt: "I'm designing a level for a fantasy video game with the theme 'a sunken water temple'. Please generate ideas for three distinct aspects of the level: its 'Atmosphere and Look', its 'Main Puzzle Mechanic', and the 'Final Boss' that waits at the end.",
          commonMistakes: [
            "Just asking for 'ideas for a level' without breaking it down into categories.",
            "The different ideas not fitting together into a coherent theme.",
            "Forgetting to specify the theme of the level."
          ]
        },
        {
          id: 426,
          type: "Ideation",
          title: "The Perfect Sunday",
          description: "AI can be a great personal planner. Let's get it to plan a perfect, relaxing day out.",
          task: "Write a prompt to plan a 'perfect, relaxing Sunday' in London. The prompt must ask for a suggestion for a 'Morning Activity', a 'Lunch Spot', and an 'Afternoon Activity'. All suggestions must fit the 'relaxing' theme.",
          difficulty: "Advanced",
          points: 420,
          successCriteria: [
            "Specifies the goal (plan a relaxing Sunday) and location (London).",
            "Asks for suggestions across three categories (Morning, Lunch, Afternoon).",
            "The core constraint is the 'relaxing' theme."
          ],
          hints: [
            "The key here is the theme. What does 'relaxing' mean to you? You can be more specific, e.g., 'quiet', 'in nature', 'away from crowds'.",
            "This is a great way to get a personalised itinerary for a day trip.",
            "You could also add constraints like budget or travel time."
          ],
          examplePrompt: "Please plan a perfect, relaxing Sunday for me in London. The goal is to avoid crowds and stress. Give me one suggestion for a 'Morning Activity', one for a 'Lunch Spot', and one for an 'Afternoon Activity', all fitting this relaxed theme.",
          commonMistakes: [
            "The suggestions not fitting the 'relaxing' theme (e.g., suggesting a busy tourist trap).",
            "Forgetting to specify the location.",
            "The output being a simple list of places, not structured into a morning/lunch/afternoon plan."
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
                    },
                    {
                      id: 427,
                      type: "Ideation",
                      title: "Captain Cellotape",
                      description: "Let's invent a superhero who solves the world's most trivial problems.",
                      task: "Write a prompt to invent a new superhero whose power is dedicated to solving a very minor, everyday annoyance. For example, 'the ability to untangle any knot instantly'. The prompt should ask for the hero's name, a description of their mundane superpower, and their catchphrase.",
                      difficulty: "Advanced",
                      points: 415,
                      successCriteria: [
                        "Specifies the goal (invent a superhero).",
                        "Includes the core creative constraint (their power solves a minor, mundane problem).",
                        "Defines the required output (name, superpower, catchphrase)."
                      ],
                      hints: [
                        "The humour comes from the contrast between the grand idea of a superhero and the triviality of the problem they solve.",
                        "Think of all the little things that annoy you in daily life. Each one could be a superpower!",
                        "The name and catchphrase should also reflect the mundane nature of the power."
                      ],
                      examplePrompt: "Please invent a new superhero whose power is to solve a trivial, everyday problem. Give me the hero's name, their mundane superpower, and their dramatic catchphrase.",
                      commonMistakes: [
                        "The superpower being genuinely useful or powerful.",
                        "Forgetting to ask for the name and catchphrase.",
                        "The concept not being funny or creative."
                      ]
                    },
                    {
                      id: 428,
                      type: "Ideation",
                      title: "The Paperclip of Destiny",
                      description: "Even the most boring object can have a story. Let's create an epic backstory for something mundane.",
                      task: "Write a prompt that asks the AI to invent a dramatic and epic backstory for a completely ordinary object, such as a stapler. The backstory should be written in the style of a fantasy legend.",
                      difficulty: "Advanced",
                      points: 420,
                      successCriteria: [
                        "Specifies the mundane object to be given a backstory.",
                        "Asks for the backstory to be 'dramatic' and 'epic'.",
                        "Specifies the style of a fantasy legend."
                      ],
                      hints: [
                        "Use the language of epic fantasy: 'forged in the heart of a dying star', 'lost for millennia', 'prophesied to return...'",
                        "The contrast between the grand language and the boring object is the source of the humour.",
                        "Give the object a grand, heroic-sounding name, like 'Binder of Worlds'."
                      ],
                      examplePrompt: "Please write a short, epic backstory for a common office stapler, as if it were a legendary artifact from a fantasy novel. Give it a grand name and describe its mythical origins and prophesied purpose. The tone should be deadly serious.",
                      commonMistakes: [
                        "The backstory not being sufficiently 'epic' or 'dramatic'.",
                        "The tone being silly instead of deadpan serious.",
                        "Forgetting to give the object a legendary name."
                      ]
                    }
                  ]
                },{
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
          id: 551,
          type: "Prompt-Rescue",
          title: "The Generic Story",
          description: "Vague creative prompts lead to boring stories. Let's rescue this one by adding some juicy details.",
          task: "You are given a generic story prompt. Your job is to rewrite it to be specific and inspiring. You must also explain *why* your new version is better.",
          originalPrompt: "Write a story about a wizard.",
          difficulty: "Expert",
          points: 405,
          successCriteria: [
            "The new prompt adds specific, interesting details (e.g., character motivation, setting, conflict).",
            "It gives the AI a clear direction for the story.",
            "It includes a brief, clear explanation of the improvements made.",
            "The rewritten prompt is a significant upgrade on the original."
          ],
          hints: [
            "A good story prompt needs more than just a character type. What does the wizard want? What's stopping them?",
            "Give the wizard a unique trait or a problem. Maybe they're allergic to magic? Or they've lost their spellbook?",
            "Your explanation should highlight how adding conflict and detail makes for a more interesting story."
          ],
          examplePrompt: "Original Prompt: 'Write a story about a wizard.'\n\nRewritten Prompt: 'Write a short story about an elderly, grumpy wizard who lives in a remote cottage in Cornwall and just wants to be left alone. His peace is shattered when a young, enthusiastic adventurer arrives, seeking a magic sword the wizard lost centuries ago and has no interest in finding.'\n\nExplanation: The original prompt is too generic. My new version adds a specific character with a personality (grumpy, elderly), a clear setting (Cornwall), a motivation (to be left alone), and an inciting incident that creates immediate conflict. This gives the AI much more to work with to create a unique story.",
          commonMistakes: [
            "Making the prompt only slightly more specific (e.g., 'Write a story about a good wizard').",
            "Forgetting to explain the reasoning behind the changes.",
            "Adding detail but no conflict."
          ]
        },
        {
          id: 552,
          type: "Prompt-Rescue",
          title: "The Impossible Comparison",
          description: "You can't compare two things without criteria. Let's rescue this unanswerable question.",
          task: "You are given a vague comparison prompt. Your job is to rewrite it by adding a specific context and clear criteria for the comparison. You must also explain *why* your new version is better.",
          originalPrompt: "Which is better, a bike or a car?",
          difficulty: "Expert",
          points: 410,
          successCriteria: [
            "The new prompt provides a specific user or scenario for the comparison.",
            "It adds clear criteria for the AI to use (e.g., cost, environmental impact, speed).",
            "It includes a brief, clear explanation of the improvements made.",
            "The rewritten prompt turns an unanswerable question into a useful analysis."
          ],
          hints: [
            "'Better' is always subjective. A good prompt defines 'better' by providing goals and constraints.",
            "Who is asking the question and why? Are they a student in a city? A family in the countryside?",
            "Your explanation should show that adding context and criteria is the only way to get a meaningful answer."
          ],
          examplePrompt: "Original Prompt: 'Which is better, a bike or a car?'\n\nRewritten Prompt: 'I am a student commuting 5 miles across Manchester. Compare a bicycle and a small car for this journey. Create a markdown table that compares them on the criteria of: initial cost, average monthly running cost, journey time during rush hour, and environmental impact.'\n\nExplanation: The original question is unanswerable as 'better' is not defined. My new version creates a specific persona (a student in Manchester) and asks for a structured comparison based on four clear, measurable criteria. This will result in a genuinely useful and specific answer.",
          commonMistakes: [
            "Not adding enough context, e.g., 'Compare a bike and a car for a city'.",
            "Forgetting to add the specific criteria for the comparison.",
            "Forgetting to explain why the original prompt was flawed."
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
          id: 553,
          type: "Prompt-Rescue",
          title: "The Muddled Creative Brief",
          description: "This prompt is trying to build a whole brand in one go. Let's break it down into a sensible creative workflow.",
          task: "You are given a prompt that asks for a company name, a slogan, a logo design, and website copy all at once. Your task is to split it into a logical, multi-step conversation of three smaller, more focused prompts.",
          originalPrompt: "I'm starting a new company that sells eco-friendly cleaning products. Give me a name, a slogan, ideas for a logo, and the copy for the 'About Us' page of my website.",
          difficulty: "Expert",
          points: 455,
          successCriteria: [
            "The original prompt is correctly broken down into three logical, sequential prompts.",
            "The sequence follows a logical branding process (e.g., Name/Slogan -> Logo -> Copy).",
            "Each new prompt is focused on a single creative task.",
            "The later prompts build on the output of the earlier ones."
          ],
          hints: [
            "You can't design a logo until you have a company name.",
            "The tone of the website copy will be influenced by the name, slogan, and logo.",
            "Use placeholders in the later prompts, e.g., 'Based on the name [Name] and slogan [Slogan]...'"
          ],
          examplePrompt: "Here is a better, three-step approach:\n\nPrompt 1: 'I'm starting a company that sells eco-friendly cleaning products. Please generate 5 potential company names and a slogan for each.'\n\nPrompt 2: 'Based on my favourite name, \"Evergreen Clean,\" please generate three different concepts for a logo design.'\n\nPrompt 3: 'Now, using the name \"Evergreen Clean\" and the concept of a simple, green leaf logo, write the copy for the \"About Us\" page of my website, focusing on our commitment to nature and non-toxic ingredients.'",
          commonMistakes: [
            "Keeping too many creative tasks in one prompt.",
            "Putting the prompts in an illogical order (e.g., asking for a logo before a name).",
            "Not using the output of the earlier prompts to inform the later ones."
          ]
        },
        {
          id: 554,
          type: "Prompt-Rescue",
          title: "The All-in-One Trip Planner",
          description: "This user wants to plan their entire holiday in one prompt. Let's break it down into a more effective research sequence.",
          task: "You are given a prompt that tries to research and book an entire holiday in one go. Your task is to split it into a logical, three-step research process.",
          originalPrompt: "Plan me a 10-day family holiday to Japan, find the cheapest flights from Manchester, recommend some family-friendly hotels in Tokyo and Kyoto, and give me a list of things to do.",
          difficulty: "Expert",
          points: 460,
          successCriteria: [
            "The original prompt is correctly broken down into three logical, sequential research prompts.",
            "The sequence follows a logical planning process (e.g., Itinerary -> Accommodation -> Activities).",
            "Each new prompt focuses on a single aspect of the trip.",
            "The prompts build on each other to create a detailed plan."
          ],
          hints: [
            "You can't look for hotels until you know which cities you'll be in and for how long.",
            "You can't look for activities until you know which area of the city you'll be staying in.",
            "A good workflow narrows down the options at each stage."
          ],
          examplePrompt: "Here is a better, three-step research process:\n\nPrompt 1: 'Please suggest a 10-day itinerary for a family with two children (aged 8 and 11) visiting Japan for the first time. The itinerary should start and end in Tokyo and include a visit to Kyoto.'\n\nPrompt 2: 'Based on that itinerary, suggest three different family-friendly hotel options in Tokyo for the first 3 nights, and three in Kyoto for the middle 4 nights. Include an estimated price per night.'\n\nPrompt 3: 'For the suggested hotel in the Shinjuku area of Tokyo, please recommend three fun, family-friendly activities within a 20-minute journey by public transport.'",
          commonMistakes: [
            "Trying to do too much in one prompt.",
            "Asking for recommendations in an illogical order (e.g., restaurants before you've chosen a hotel).",
            "Not using the decisions from one step to add context to the next."
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
          id: 555,
          type: "Prompt-Rescue",
          title: "The Pessimist's Rebuttal",
          description: "Sometimes an AI can be too negative. Learn to challenge its perspective and ask for the optimistic case.",
          task: "You receive a biased, pessimistic answer from an AI. Write a follow-up prompt to challenge its perspective and ask for a more balanced, positive view.",
          originalOutput: "Starting a new business is a terrible idea. The market is saturated, 90% of startups fail within the first year, and you'll likely lose all your money and time. It's best not to even try.",
          difficulty: "Expert",
          points: 425,
          successCriteria: [
            "The follow-up prompt acknowledges the previous negative response.",
            "It directly asks for the opposing viewpoint, upsides, or benefits.",
            "It uses neutral and objective language to guide the AI toward a balanced view.",
            "The goal is to get a more nuanced and motivational perspective."
          ],
          hints: [
            "A good way to start is 'Thanks for outlining the risks. Now, could you argue for the other side?'",
            "You can ask the AI to adopt a different persona, e.g., 'Now, act as a successful entrepreneur and tell me the benefits.'",
            "Asking for 'opportunities', 'benefits', or 'success stories' are all good strategies."
          ],
          examplePrompt: "Thank you for outlining the risks. To get a balanced perspective, could you now explain the potential upsides and benefits of starting a business? Please focus on aspects like innovation, personal fulfillment, and financial independence.",
          commonMistakes: [
            "Accepting the pessimistic answer without question.",
            "Getting into an argument with the AI.",
            "Not specifying the positive aspects to explore."
          ]
        },
        {
          id: 556,
          type: "Prompt-Rescue",
          title: "The Unimaginative Answer",
          description: "You asked for creative ideas, but the AI gave you boring ones. Let's write a follow-up prompt to demand more creativity.",
          task: "You ask the AI for team-building ideas and get a generic list. Write a follow-up prompt that pushes the AI to be more creative and 'think outside the box'.",
          originalOutput: "Here are some ideas for your team-building event:\n1. Go for a meal.\n2. Go to the pub.\n3. Go bowling.",
          difficulty: "Expert",
          points: 430,
          successCriteria: [
            "The follow-up prompt acknowledges the previous generic response.",
            "It directly asks for more 'creative', 'unusual', or 'non-cliché' ideas.",
            "It might add new constraints to force creativity (e.g., 'must be outdoors', 'must not involve food or drink')."
          ],
          hints: [
            "If the first answer is lazy, it might be because the prompt was. Add more constraints!",
            "A good technique is to tell the AI what to avoid: 'Good, now give me 5 more ideas, but none of them can be the typical meal, drinks, or sport.'",
            "You can also give it an example of a more creative idea to set a new baseline: 'I'm looking for more unusual ideas, like a 'sushi-making class' or an 'escape room'.'"
          ],
          examplePrompt: "Thanks for those initial ideas. Now, could you give me 5 more team-building ideas that are more creative and unusual? Please suggest activities that are not a typical meal or pub trip. For example, something like a collaborative workshop or an outdoor challenge.",
          commonMistakes: [
            "Accepting the boring list.",
            "Simply asking for 'more ideas' without asking for 'more creative' ideas.",
            "Not providing new constraints to guide the AI's next attempt."
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
          id: 557,
          type: "Prompt-Rescue",
          title: "The Context-Free Statistic",
          description: "A number without context is meaningless. Let's ask the AI to provide the crucial context for a statistic it has shared.",
          task: "The AI has given you a vague statistic. Write a follow-up prompt to ask for the necessary context, such as the source, the date, and the location the statistic applies to.",
          originalOutput: "The average house price is now £250,000.",
          difficulty: "Expert",
          points: 435,
          successCriteria: [
            "Identifies that the statistic is meaningless without context.",
            "The follow-up prompt asks for specific clarifying details (e.g., source, date, location).",
            "It is polite and framed as a request for more information."
          ],
          hints: [
            "Statistics can be easily manipulated or misunderstood. Always ask for the context.",
            "Key questions are: Who collected this data? When was it collected? What geographical area does it cover?",
            "This skill is crucial for using AI for research or any fact-based writing."
          ],
          examplePrompt: "Thank you for that number. To help me understand it, could you please provide more context? Specifically, which country or region does that £250,000 figure apply to, when was this data recorded, and what is the source of the information?",
          commonMistakes: [
            "Accepting the statistic at face value.",
            "Asking for just 'the source' without also asking for the date and location, which are equally important.",
            "Being confrontational rather than inquisitive."
          ]
        },
        {
          id: 558,
          type: "Prompt-Rescue",
          title: "The Second Opinion",
          description: "One of the best ways to fact-check an AI is with another AI. Let's practise this technique.",
          task: "You have received an answer from 'AI 1'. Write a prompt to 'AI 2' that asks it to review and fact-check the first AI's answer, and to highlight any potential inaccuracies or alternative viewpoints.",
          originalOutput: "(From AI 1) The only way to become a successful writer is to get a degree in English Literature and to write every single day without fail.",
          difficulty: "Expert",
          points: 440,
          successCriteria: [
            "The prompt clearly presents the statement from the first AI to the second AI.",
            "It asks the second AI to 'fact-check', 'critique', or 'offer an alternative perspective on' the statement.",
            "The goal is to use one AI's capabilities to analyse another's output."
          ],
          hints: [
            "This is a powerful workflow for any complex or subjective topic.",
            "You can frame it as asking for a 'second opinion' or a 'devil's advocate' position.",
            "This encourages you to think of AI not as a single oracle, but as a panel of experts you can consult and compare."
          ],
          examplePrompt: "I asked one AI for advice on becoming a writer, and it gave me the following response. Could you please analyse this statement, fact-check it, and offer any alternative perspectives or a more nuanced view?\n\nStatement: 'The only way to become a successful writer is to get a degree in English Literature and to write every single day without fail.'",
          commonMistakes: [
            "Simply asking the second AI the same question as the first.",
            "Forgetting to provide the first AI's statement to be critiqued.",
            "Not explicitly asking for a critique or fact-check."
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
          id: 559,
          type: "Prompt-Rescue",
          title: "Changing the Vibe",
          description: "The facts are correct, but the tone is all wrong. Let's ask the AI to rewrite its answer for a completely different audience.",
          task: "The AI has given you a dry, factual description of a Great White Shark. Write a follow-up prompt that asks it to rewrite the same information in the exciting and dramatic style of a TV nature documentary for kids.",
          originalOutput: "The great white shark (Carcharodon carcharias) is a species of large mackerel shark. It is notable for its size, with mature individuals growing up to 6.4 m (21 ft) in length. It is a macropredatory fish found in the coastal surface waters of all the major oceans.",
          difficulty: "Expert",
          points: 445,
          successCriteria: [
            "Acknowledges the previous answer.",
            "Asks for the *same information* to be rewritten in a *different style*.",
            "Clearly defines the new target audience (kids) and tone (exciting, dramatic)."
          ],
          hints: [
            "You don't always need new information; sometimes you just need the same information presented differently.",
            "Use strong, evocative words to describe the new tone you want: 'dramatic', 'exciting', 'suspenseful', 'awe-inspiring'.",
            "You can suggest a persona for the rewrite, e.g., 'Rewrite this as if you are Steve Irwin'."
          ],
          examplePrompt: "Thanks for the facts. Now, please rewrite that information about the Great White Shark. This time, write it as an exciting and dramatic script for a kids' nature show, making it sound as awesome and powerful as possible.",
          commonMistakes: [
            "Asking for new facts instead of a stylistic rewrite.",
            "Being too vague about the new tone required ('make it more interesting').",
            "Forgetting to specify the new audience."
          ]
        },
        {
          id: 560,
          type: "Prompt-Rescue",
          title: "Zoom In",
          description: "The first answer was a good overview, but now you need more detail. Let's ask the AI to elaborate on one specific point.",
          task: "The AI has given you a broad summary of the history of the Roman Empire. Write a follow-up prompt that asks it to 'zoom in' and provide more detail on one specific aspect mentioned in its first answer: the construction of Hadrian's Wall.",
          originalOutput: "The Roman Empire was a vast and powerful state that lasted for over a thousand years. It expanded from Italy to control the entire Mediterranean. The Romans were famous for their legions, their engineering, and their law. In Britain, they built roads, cities, and a huge wall in the north called Hadrian's Wall to keep out the barbarians.",
          difficulty: "Expert",
          points: 450,
          successCriteria: [
            "Acknowledges the previous answer.",
            "Identifies a specific point from the first answer to expand upon (Hadrian's Wall).",
            "Asks for more detail about that specific point."
          ],
          hints: [
            "This is a fundamental workflow for research: start broad, then zoom in on the parts that interest you.",
            "You can quote the part of the AI's answer you want to know more about.",
            "Be specific about what kind of detail you want, e.g., 'Tell me more about how it was built' or '...who the soldiers stationed there were'."
          ],
          examplePrompt: "That's a helpful overview. You mentioned Hadrian's Wall. Could you please give me more detail on that? Specifically, why was it built, and what was life like for a Roman soldier stationed there?",
          commonMistakes: [
            "Asking a broad, new question instead of a follow-up on the previous answer.",
            "Not being specific about which part of the answer you want to expand.",
            "Forgetting to acknowledge the AI's first response."
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
            "Give the AI a persona to adopt, e.g., 'Act as a local guide...'."
          ],
          examplePrompt: "Thanks for the general advice. I'm planning a 5-day trip to Lisbon, Portugal, in May. I'm interested in history, food, and photography, and my budget is around £80 per day. Could you suggest a more specific itinerary based on this?",
          commonMistakes: [
            "Getting frustrated and ending the conversation.",
            "Asking the same vague question again."
          ]
        },
        {
          id: 561,
          type: "Prompt-Rescue",
          title: "The Vague Business Advice",
          description: "The AI has given you some business advice that's too generic to be useful. Let's add some context to get a real strategy.",
          task: "You asked the AI how to increase sales and got a generic answer. Write a follow-up prompt that adds specific context about your business to get actionable ideas.",
          originalOutput: "To increase sales, you should improve your marketing, offer discounts, and focus on customer service.",
          difficulty: "Expert",
          points: 455,
          successCriteria: [
            "Acknowledges the previous generic answer.",
            "Provides specific context about the business (e.g., what it is, where it is, who its customers are).",
            "Asks for concrete and actionable advice relevant to that context."
          ],
          hints: [
            "If the AI's advice is too general, it's because it doesn't know enough about your specific situation.",
            "The more details you provide about your business, the better the AI's suggestions will be.",
            "Think about what makes your business unique."
          ],
          examplePrompt: "Thank you for the general advice. Let's get more specific. I run a small, independent bookshop in a UK university town. My customers are mostly students and local academics. With that context, could you give me three concrete, low-budget marketing ideas to increase sales this term?",
          commonMistakes: [
            "Getting frustrated and ending the conversation.",
            "Asking the same vague question again, hoping for a different result.",
            "Providing only a little bit more context, e.g., 'I run a bookshop'."
          ]
        },
        {
          id: 562,
          type: "Prompt-Rescue",
          title: "The Generic Health Tip",
          description: "The AI has given you some very unhelpful health advice. Let's add some personal context to get a realistic plan.",
          task: "You asked the AI for health advice and got a generic answer. Write a follow-up prompt that adds personal context about your lifestyle, preferences, and goals to get a personalised action plan.",
          originalOutput: "To be healthier, you should aim to eat a balanced diet and get regular exercise.",
          difficulty: "Expert",
          points: 455,
          successCriteria: [
            "Acknowledges the previous generic answer.",
            "Provides specific personal context (e.g., age, job, diet, exercise preferences, goals).",
            "Asks for a personalised, actionable plan."
          ],
          hints: [
            "An AI can't be a doctor, but it can be a good health planner if you give it the right information.",
            "Be honest about your likes and dislikes. If you hate running, tell the AI so it can suggest alternatives.",
            "A specific goal ('I want to lose 5kg' or 'I want to be able to run 5k') is better than a vague one ('be healthier')."
          ],
          examplePrompt: "Thanks, that's a good starting point. Could you make it more personal for me? I'm a 45-year-old office worker who finds it hard to find time for exercise. I enjoy walking but hate running, and my biggest weakness is sugary snacks in the afternoon. Could you suggest a simple weekly plan with 3 achievable exercise goals and two alternative afternoon snacks I could try?",
          commonMistakes: [
            "Expecting the AI to read your mind about your lifestyle and preferences.",
            "Not being specific about your goals.",
            "Forgetting to mention what you *don't* like, as well as what you do."
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
          id: 563,
          type: "Prompt-Rescue",
          title: "The Creative Rationale",
          description: "A creative idea is good, but understanding the reasoning behind it is better. Let's ask the AI to explain its creative process.",
          task: "Write a prompt that asks the AI to both generate a creative idea (e.g., a new name for a brand of coffee) and also to explain its creative rationale in a step-by-step manner.",
          originalPrompt: "Suggest a new name for my brand of coffee.",
          difficulty: "Expert",
          points: 465,
          successCriteria: [
            "Asks for a creative output.",
            "Explicitly asks for a step-by-step explanation of the creative choices made.",
            "The goal is to understand the 'why' behind the AI's creativity."
          ],
          hints: [
            "This is a powerful way to not just get ideas, but to learn about the principles of good creative work.",
            "You can ask specific questions: 'What associations were you trying to create?', 'Why did you choose a two-syllable name?'.",
            "This turns the AI from a simple answer-machine into a creative collaborator that can explain its thinking."
          ],
          examplePrompt: "Please suggest three potential names for a new brand of coffee that is aimed at busy professionals. For each name, please provide a step-by-step 'creative rationale', explaining what the name is meant to convey and why you think it would appeal to the target audience.",
          commonMistakes: [
            "Just asking for the creative idea without the rationale.",
            "The rationale being a simple definition of the words, rather than an explanation of the creative or strategic thinking.",
            "Not providing enough context about the brand for the AI to have a good rationale."
          ]
        },
        {
          id: 564,
          type: "Prompt-Rescue",
          title: "The Transparent Decision",
          description: "Don't just ask for a recommendation, ask for the decision-making process. Let's get the AI to explain its reasoning.",
          task: "You need to make a choice between two options. Write a prompt that asks the AI not only to recommend one, but to outline the step-by-step decision-making process it used, including the criteria it considered.",
          originalPrompt: "Should I learn to play the guitar or the piano?",
          difficulty: "Expert",
          points: 470,
          successCriteria: [
            "Presents a choice to be made.",
            "Asks for a recommendation.",
            "Explicitly asks for the AI to outline its decision-making framework or the criteria it is using to judge."
          ],
          hints: [
            "This forces the AI to be more logical and transparent in its recommendations.",
            "You can suggest criteria for it to consider, e.g., 'cost', 'portability', 'learning curve'.",
            "This turns a simple opinion into a structured, useful analysis."
          ],
          examplePrompt: "I want to learn a musical instrument, and I'm trying to choose between the guitar and the piano. Please help me decide. First, outline the key criteria I should consider (e.g., cost, space, versatility). Then, using those criteria, provide a balanced recommendation.",
          commonMistakes: [
            "Just asking for the recommendation without the reasoning.",
            "Accepting a simple 'it depends' answer, without pushing for a structured decision framework.",
            "Not providing any personal context that might influence the recommendation."
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
          id: 565,
          type: "Prompt-Rescue",
          title: "The Vague Quantifier",
          description: "Words like 'some' or 'a few' are ambiguous to an AI. Let's make this prompt more precise by adding a specific number.",
          task: "You have a prompt that asks for 'a few' ideas. Rewrite it to be more precise by specifying an exact number.",
          originalPrompt: "Give me a few ideas for a new podcast.",
          difficulty: "Expert",
          points: 475,
          successCriteria: [
            "Identifies the ambiguous quantifier ('a few').",
            "Rewrites the prompt to ask for a specific, concrete number (e.g., '3' or '5')."
          ],
          hints: [
            "An AI doesn't know if 'a few' means two or ten. Always give it a number if you can.",
            "This simple change makes your prompts much more reliable and predictable.",
            "The more precise the number, the better."
          ],
          examplePrompt: "The original prompt, 'Give me a few ideas for a new podcast', is ambiguous. A better prompt would be: 'Give me 5 distinct ideas for a new podcast.'",
          commonMistakes: [
            "Not spotting the ambiguity of 'a few'.",
            "Replacing it with another vague term like 'some' or 'several'."
          ]
        },
        {
          id: 566,
          type: "Prompt-Rescue",
          title: "The Garden Path Sentence",
          description: "Some sentences are grammatically correct but confusing because they lead you down the wrong path. Let's fix one.",
          task: "You have a classic 'garden path' sentence that is hard to understand. Rewrite it to be clear and unambiguous.",
          originalPrompt: "The old man the boats.",
          difficulty: "Expert",
          points: 480,
          successCriteria: [
            "Identifies that the sentence is grammatically correct but ambiguous.",
            "Rewrites the sentence to clarify its intended meaning.",
            "Bonus points for showing two possible clear versions."
          ],
          hints: [
            "Read the sentence slowly. Where does your brain get confused?",
            "Think about the two possible meanings. Is 'man' a verb or a noun?",
            "Adding a few extra words (like 'who' or 'are') can completely remove the ambiguity."
          ],
          examplePrompt: "The original sentence 'The old man the boats' is confusing. There are two possible meanings. A better prompt would clarify the intent, for example: 1. 'The old people are the ones who man the boats.' OR 2. 'The boats belong to the old man.'",
          commonMistakes: [
            "Not understanding the source of the ambiguity.",
            "Rewriting the sentence into something that is still unclear.",
            "Only finding one of the two possible meanings."
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
          id: 567,
          type: "Prompt-Rescue",
          title: "The 'Not Boring' Problem",
          description: "Telling an AI what *not* to be is unhelpful. Let's give it a positive direction instead.",
          task: "You have a prompt that asks for a title that is 'not boring'. Rewrite it to be more effective by describing what makes a title *interesting* instead.",
          originalPrompt: "Write me a blog post title about remote work that isn't boring.",
          difficulty: "Expert",
          points: 485,
          successCriteria: [
            "Identifies the unhelpful negative constraint ('not boring').",
            "Rewrites the prompt with positive, specific instructions about the desired qualities of the title (e.g., 'uses a surprising statistic', 'asks a question')."
          ],
          hints: [
            "Instead of 'not boring', think about what you *do* want. Do you want it to be funny? Shocking? Intriguing? Controversial?",
            "Giving the AI a positive target is much more effective than giving it a negative one to avoid.",
            "You could even provide an example of a title you like."
          ],
          examplePrompt: "The original prompt, 'Write me a blog post title about remote work that isn't boring', is ineffective. A better prompt would be: 'Write 5 titles for a blog post about remote work. The titles should be controversial and challenge a common assumption about the topic.'",
          commonMistakes: [
            "Replacing 'not boring' with another vague positive like 'make it good'.",
            "Still using negative constraints in the rewritten prompt."
          ]
        },
        {
          id: 568,
          type: "Prompt-Rescue",
          title: "The Endless Exclusions",
          description: "A long list of 'don'ts' can be less effective than a short list of 'dos'. Let's reframe this negative prompt.",
          task: "You have a prompt that asks for a recipe with a long list of negative constraints. Rewrite it to focus on the positive things you *do* want.",
          originalPrompt: "Suggest a recipe for dinner tonight that doesn't have any meat, isn't spicy, doesn't take long to cook, and doesn't use any dairy products.",
          difficulty: "Expert",
          points: 485,
          successCriteria: [
            "Identifies the long list of negative constraints.",
            "Rewrites the prompt to state the positive criteria directly (e.g., 'vegan', 'mild', 'stovetop')."
          ],
          hints: [
            "Often, a list of negative constraints can be summarised with a single positive word (e.g., 'doesn't have any meat or dairy' becomes 'vegan').",
            "Focus on what you want, not what you want to avoid.",
            "This makes the prompt clearer, more concise, and more effective."
          ],
          examplePrompt: "The original prompt is confusing. A better prompt would be: 'Suggest a mild, vegan recipe for dinner tonight that can be cooked entirely on the stovetop.'",
          commonMistakes: [
            "Still including some of the negative constraints in the new prompt.",
            "Forgetting to combine the negative constraints into a positive descriptor (like 'vegan').",
            "The new prompt still being too long and confusing."
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
          id: 569,
          type: "Prompt-Rescue",
          title: "The Wrong Country",
          description: "AIs can have a geographic bias. Let's correct an answer that's correct, but for the wrong place.",
          task: "You ask the AI for the emergency phone number and it gives you the American one. Write a polite follow-up prompt to correct it and ask for the number used in the UK.",
          originalOutput: "The emergency number is 911.",
          difficulty: "Expert",
          points: 495,
          successCriteria: [
            "Identifies that the answer is correct for the US but not the UK.",
            "Politely provides the correct context (UK).",
            "Asks for the correct information for that new context."
          ],
          hints: [
            "AI models are often trained on a majority of US data and can default to US-centric answers.",
            "A simple 'Thanks, but what is the number in the UK?' is all you need.",
            "Always specify your country or location in your prompt if it's relevant to the answer."
          ],
          examplePrompt: "Thank you, but I am in the UK. What is the correct emergency number here?",
          commonMistakes: [
            "Assuming the AI's first answer is universally correct.",
            "Being confrontational in the follow-up.",
            "Forgetting to specify the correct location."
          ]
        },
        {
          id: 570,
          type: "Prompt-Rescue",
          title: "The Misunderstood Term",
          description: "Sometimes words have multiple meanings. Let's clarify our intent when the AI gets the wrong end of the stick.",
          task: "You ask the AI for information about something with an ambiguous name, and it gives you the more popular, but incorrect, answer. Write a follow-up prompt to clarify which 'version' you meant.",
          originalOutput: "The film 'Drive' (2011) stars Ryan Gosling as a Hollywood stunt driver who moonlights as a getaway driver. It's known for its stylish visuals and synth-pop soundtrack.",
          difficulty: "Expert",
          points: 495,
          successCriteria: [
            "Identifies that the AI has picked the wrong definition for an ambiguous term.",
            "Politely clarifies the ambiguity with more specific information (e.g., a year, an actor).",
            "Asks the question again with the new, clearer context."
          ],
          hints: [
            "If a name is ambiguous, the AI will often default to the most famous or recent example.",
            "The best way to clarify is to add a unique piece of information, like the year of release, the director, or the main star.",
            "This teaches you to anticipate ambiguity in your own prompts."
          ],
          examplePrompt: "Thanks for the summary of the 2011 film. I was actually asking about the 1997 sci-fi action film 'Drive' starring Mark Dacascos. Could you tell me about that one instead?",
          commonMistakes: [
            "Getting frustrated that the AI didn't read your mind.",
            "Just writing 'No, the other one', which is still ambiguous.",
            "Not providing a specific new detail to remove the ambiguity."
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
          id: 571,
          type: "Prompt-Rescue",
          title: "The Context-Free Recommendation",
          description: "An AI can't give you a good recommendation if it doesn't know you. Let's add some personal taste to this prompt.",
          task: "You have a prompt that asks for a generic recommendation. Rewrite it to include your personal preferences to get a tailored suggestion.",
          originalPrompt: "Recommend a good book for me to read.",
          difficulty: "Expert",
          points: 505,
          successCriteria: [
            "Identifies that the prompt is missing personal context and taste.",
            "Rewrites the prompt to include genres, authors, or specific books the user likes (and dislikes).",
            "The new prompt is designed to elicit a personalised recommendation."
          ],
          hints: [
            "The more the AI knows about your taste, the better its recommendations will be.",
            "A great technique is to provide examples: 'I love books like [Book A] and [Book B], but I'm not a fan of [Genre C].'",
            "This applies to movies, music, games, food – anything subjective."
          ],
          examplePrompt: "The original prompt is useless. A better prompt would be: 'I'm looking for a new science fiction book to read. I love the complex world-building of authors like Ursula K. Le Guin and the 'hard sci-fi' of Arthur C. Clarke. Based on that, can you recommend three books I might enjoy?'",
          commonMistakes: [
            "Adding only a tiny bit of context, e.g., 'Recommend a fantasy book'.",
            "Forgetting to mention things you *dislike*, which can be just as helpful as mentioning what you like."
          ]
        },
        {
          id: 572,
          type: "Prompt-Rescue",
          title: "The Context-Free Code",
          description: "You wouldn't ask a human to 'write some code' without details. The same goes for AI. Let's fix this impossible coding prompt.",
          task: "You have a completely context-free coding prompt. Rewrite it to include all the necessary details for an AI to write a useful function.",
          originalPrompt: "Write a function for me.",
          difficulty: "Expert",
          points: 510,
          successCriteria: [
            "Identifies that the prompt is missing all necessary context.",
            "Rewrites the prompt to include the programming language.",
            "The new prompt specifies the function's name, its inputs (arguments and their types), and its expected output or behaviour."
          ],
          hints: [
            "When prompting for code, be as specific as you would be if you were writing a ticket for a human developer.",
            "Always specify the language!",
            "Clearly define the 'function signature': its name, its parameters, and what it should return."
          ],
          examplePrompt: "The original prompt 'Write a function for me' is impossible to act on. A much better prompt would be: 'Write a Python function called `calculate_vat` that takes a single argument, `price` (a float), and returns the price with 20% VAT added.'",
          commonMistakes: [
            "Adding some but not all of the necessary details (e.g., specifying the language but not what the function does).",
            "Being vague about the inputs or the return value."
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
          id: 573,
          type: "Prompt-Rescue",
          title: "The Impossible Combination",
          description: "This prompt asks for two things that contradict each other. Your job is to spot the contradiction and suggest a better prompt.",
          task: "You have a prompt that asks for a creative piece with two contradictory constraints. Identify the flaw and rewrite the prompt to be logical.",
          originalPrompt: "Write a detailed description of the colour red for an audience that has been blind from birth.",
          difficulty: "Expert",
          points: 515,
          successCriteria: [
            "Identifies the logical contradiction (describing a visual colour to a non-sighted audience).",
            "Explains *why* the prompt is flawed.",
            "Rewrites the prompt to achieve the likely goal in a logical way (e.g., describing the *feeling* or *concept* of red using other senses)."
          ],
          hints: [
            "Think about the core of the request. The user wants to convey the 'idea' of red.",
            "How could you describe red without using sight? Think about heat, emotion, taste (spicy), and sound (a trumpet?).",
            "A good rescue prompt changes the 'how' to make the 'what' possible."
          ],
          examplePrompt: "The original prompt is logically flawed, as a person blind from birth has no concept of visual colour. A better prompt would be: 'I want to describe the concept of the colour red to a person who has been blind from birth. Using analogies based on the other four senses (sound, touch, taste, smell), write a paragraph that evokes the feeling and cultural associations of the colour red.'",
          commonMistakes: [
            "Not spotting the logical flaw.",
            "Trying to literally describe the colour red in words.",
            "The rewritten prompt still being impossible to answer effectively."
          ]
        },
        {
          id: 574,
          type: "Prompt-Rescue",
          title: "The Self-Defeating Request",
          description: "This prompt is a paradox. Its own conditions make it impossible to answer. Spot the flaw and fix it.",
          task: "You have a prompt that contains a paradoxical request. Identify the paradox and rewrite the prompt to ask for something that is actually possible.",
          originalPrompt: "Tell me something that is absolutely, 100% true that no human has ever thought of before.",
          difficulty: "Expert",
          points: 520,
          successCriteria: [
            "Identifies the paradox (if the AI tells you, then a human *has* thought of it).",
            "Explains why the prompt is a self-defeating paradox.",
            "Rewrites the prompt to get at the likely intent (e.g., asking for an obscure fact or a novel idea)."
          ],
          hints: [
            "This is a classic logical puzzle.",
            "Think about the act of the AI answering the question. How does that affect the question itself?",
            "The user probably wants something surprising or obscure. How can you ask for that directly?"
          ],
          examplePrompt: "The original prompt is a paradox. As soon as the AI tells me the 'thought', it is no longer something no human has thought of, because I have now thought of it. A better prompt to get at the likely intent would be: 'Tell me a surprising and very obscure scientific fact that is not widely known.'",
          commonMistakes: [
            "Not spotting the paradox.",
            "Trying to argue with the AI about the nature of truth.",
            "Rewriting the prompt to be something completely different, instead of trying to capture the original user's likely goal."
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
          id: 575,
          type: "Prompt-Rescue",
          title: "Red Team, Blue Team",
          description: "Use a cybersecurity framework to get the AI to find flaws in its own plan. First it builds the fort, then it plans the attack.",
          task: "Write a single prompt that asks the AI to perform three steps: 1. Generate a simple plan to improve a company's cybersecurity. 2. Act as a 'Red Team' of hackers and list three potential flaws in that plan. 3. Act as a 'Blue Team' of defenders and suggest a specific improvement for each flaw.",
          originalPrompt: "Give me a plan to improve cybersecurity.",
          difficulty: "Expert",
          points: 525,
          successCriteria: [
            "The single prompt contains a clear three-step process.",
            "It asks the AI to take on two distinct, opposing personas ('Red Team' and 'Blue Team').",
            "The final output should be a plan, a list of flaws, and a list of improvements."
          ],
          hints: [
            "This is a very powerful technique to get the AI to 'stress-test' its own ideas.",
            "Be very clear about the roles of the Red Team (find weaknesses) and the Blue Team (fix weaknesses).",
            "You can apply this 'attack/defend' model to almost any kind of plan."
          ],
          examplePrompt: "I need a cybersecurity improvement plan. Please perform the following three steps in your response:\n1. **Initial Plan:** Briefly outline a simple cybersecurity plan for a small business.\n2. **Red Team Analysis:** Acting as a team of penetration testers, identify three weaknesses in the plan you just created.\n3. **Blue Team Recommendations:** Acting as the internal security team, suggest a specific mitigation for each of the weaknesses you identified.",
          commonMistakes: [
            "Writing three separate prompts instead of one multi-step prompt.",
            "The Red Team analysis being too generic.",
            "The Blue Team recommendations not directly addressing the flaws found."
          ]
        },
        {
          id: 576,
          type: "Prompt-Rescue",
          title: "The Dragon's Den Pitch",
          description: "Let's get the AI to pitch an idea, and then act as a skeptical investor to pick it apart.",
          task: "Write a single prompt that asks the AI to perform three steps: 1. Generate a short business pitch for a new product. 2. Act as a skeptical investor from 'Dragons' Den' and ask three challenging follow-up questions about the pitch. 3. As the founder, provide a confident answer to each of those three questions.",
          originalPrompt: "Give me a business pitch.",
          difficulty: "Expert",
          points: 530,
          successCriteria: [
            "The single prompt contains a clear three-step process.",
            "It asks the AI to generate content and then switch persona to critique it with questions.",
            "It asks the AI to switch back to the original persona to answer the critiques.",
            "The context is a well-known British TV show format."
          ],
          hints: [
            "This is an excellent way to anticipate challenges to your ideas.",
            "Make sure the investor's questions are specific and difficult, focusing on weaknesses in the initial pitch (e.g., market size, competition, profitability).",
            "The founder's answers should be confident and persuasive."
          ],
          examplePrompt: "I want to practice a business pitch. Please perform the following three roles in your response:\n1. **The Founder:** Write a short, confident pitch for a new product: 'SmartSoles', heated insoles for your shoes controlled by an app.\n2. **The Dragon:** Now, act as a skeptical investor on Dragons' Den and ask three tough, insightful questions about the business plan.\n3. **The Founder (Rebuttal):** Finally, as the founder again, provide a concise and convincing answer to each of the Dragon's questions.",
          commonMistakes: [
            "The investor's questions being too easy or generic.",
            "The founder's answers being weak or evasive.",
            "The roles not being distinct enough in their tone."
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
                    },
                    {
                      id: 577,
                      type: "Prompt-Rescue",
                      title: "Unpack That Analogy",
                      description: "The AI has given you a creative but confusing analogy. Let's ask it to explain its own reasoning.",
                      task: "The AI has generated an unusual analogy to explain a concept. Write a follow-up prompt that asks the AI to explain the connection and how the analogy works.",
                      originalOutput: "To explain the concept of 'inflation', imagine a single slice of cake at a party that keeps getting smaller.",
                      difficulty: "Expert",
                      points: 535,
                      successCriteria: [
                        "Acknowledges the analogy provided.",
                        "Asks the AI to 'explain' or 'unpack' its own analogy.",
                        "The goal is to understand the logic behind the creative comparison."
                      ],
                      hints: [
                        "If an analogy doesn't immediately click, asking the AI to explain it can be very helpful.",
                        "This can reveal the AI's 'mental model' of a concept.",
                        "Use phrases like 'Can you explain that analogy further?' or 'How does that comparison work?'"
                      ],
                      examplePrompt: "That's an interesting analogy for inflation. Could you please explain the comparison? Who is at the party and why is the cake getting smaller in your analogy?",
                      commonMistakes: [
                        "Dismissing the analogy as 'wrong' without trying to understand it.",
                        "Not asking for a direct explanation of the analogy's logic.",
                        "Asking for a new analogy instead of trying to understand the first one."
                      ]
                    },
                    {
                      id: 578,
                      type: "Prompt-Rescue",
                      title: "Why That Word?",
                      description: "A translation can be technically correct but miss the nuance. Let's ask the AI to explain its word choice.",
                      task: "The AI has provided a translation for a nuanced phrase. Write a follow-up prompt that asks the AI to explain *why* it chose a specific word and what connotations that word has.",
                      originalOutput: "To translate the English phrase 'I'm feeling blue', the Spanish equivalent is 'Estoy melancólico'.",
                      difficulty: "Expert",
                      points: 540,
                      successCriteria: [
                        "Acknowledges the translation provided.",
                        "Asks for a deeper explanation of a specific word choice.",
                        "The goal is to understand the nuance and connotation of the translation, not just the literal meaning."
                      ],
                      hints: [
                        "This is a fantastic technique for advanced language learning.",
                        "You can ask about alternatives: 'Why did you choose 'melancólico' instead of 'triste'?'",
                        "This helps you understand the subtle shades of meaning that are crucial for fluency."
                      ],
                      examplePrompt: "Thank you for the translation. Could you explain the choice of the word 'melancólico'? What are the specific connotations of that word in Spanish compared to a more common word like 'triste'?",
                      commonMistakes: [
                        "Just accepting the translation without questioning the nuance.",
                        "Asking for more synonyms instead of an explanation of a specific choice.",
                        "Not specifying which word you are curious about."
                      ]
                    }
                  ]
                },{
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
          id: 601,
          type: "Code-Generation",
          title: "The JavaScript Adder",
          description: "Let's try a different language. Create a simple JavaScript function to add two numbers.",
          task: "Write a prompt to generate a JavaScript function called 'add' that takes two arguments, 'a' and 'b', and returns their sum.",
          difficulty: "Advanced",
          points: 355,
          successCriteria: [
            "Specifies the programming language (JavaScript).",
            "Defines the function name ('add').",
            "Clearly states the input arguments ('a', 'b').",
            "Describes the exact return value (their sum)."
          ],
          hints: [
            "The core principles of prompting for code are the same across most languages.",
            "Be precise about what the function should do with its arguments.",
            "You can test the AI's knowledge by asking for the same function in different languages."
          ],
          examplePrompt: "Please write a JavaScript function named 'add'. It should accept two arguments, 'a' and 'b', and return their sum.",
          commonMistakes: [
            "Forgetting to specify the programming language is JavaScript.",
            "Being vague about the function's purpose or return value.",
            "Not specifying the argument names."
          ]
        },
        {
          id: 602,
          type: "Code-Generation",
          title: "The Python Age Check",
          description: "Let's add some logic. Create a Python function that returns different things based on a condition.",
          task: "Write a prompt to generate a Python function called 'checkAge' that takes an 'age' as an argument. If the age is 18 or over, it should return the string 'Access granted'. If the age is under 18, it should return 'Access denied'.",
          difficulty: "Advanced",
          points: 360,
          successCriteria: [
            "Specifies the programming language (Python).",
            "Defines the function name and its argument.",
            "Clearly describes the conditional logic (if/else).",
            "States the exact return values for both conditions."
          ],
          hints: [
            "This introduces conditional logic, a fundamental part of programming.",
            "Be very clear about the condition (age is 18 or over) and the two possible outcomes.",
            "You can write the logic in plain English for the AI to translate into code."
          ],
          examplePrompt: "Please write a Python function named 'checkAge' that takes one argument, 'age'. The function should return the string 'Access granted' if the age is 18 or greater, and 'Access denied' otherwise.",
          commonMistakes: [
            "The logic being inverted (e.g., granting access to under 18s).",
            "Forgetting to specify what should happen in the 'else' case.",
            "The return values not matching the requested strings exactly."
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
          id: 603,
          type: "Code-Generation",
          title: "The High-Level Summary",
          description: "Sometimes you don't need a line-by-line explanation. Let's ask for a high-level summary of a function's purpose.",
          task: "You have a Python function. Write a prompt that asks the AI to explain what the function does in simple terms, as if you were explaining it to a non-technical project manager.",
          codeSnippet: "def get_active_users(user_list):\n  active_users = []\n  for user in user_list:\n    if user.is_active and user.last_login > thirty_days_ago:\n      active_users.append(user)\n  return active_users",
          difficulty: "Advanced",
          points: 365,
          successCriteria: [
            "Includes the code snippet to be explained.",
            "Clearly defines the target audience for the explanation (a non-technical project manager).",
            "Asks for a high-level summary of the purpose, not a line-by-line breakdown."
          ],
          hints: [
            "The key is to ask 'what does this do?' and 'why does it do it?', not 'how does it work?'.",
            "Specifying a non-technical audience is crucial to prevent the AI from using jargon.",
            "This is a great skill for communicating with other team members."
          ],
          examplePrompt: "Could you please explain what the following Python function does in simple, non-technical terms? I need a summary for a project manager.\n\n```python\ndef get_active_users(user_list):\n  active_users = []\n  for user in user_list:\n    if user.is_active and user.last_login > thirty_days_ago:\n      active_users.append(user)\n  return active_users\n```",
          commonMistakes: [
            "Getting a line-by-line explanation instead of a high-level summary.",
            "The explanation still containing technical jargon.",
            "Forgetting to provide the code snippet."
          ]
        },
        {
          id: 604,
          type: "Code-Generation",
          title: "The Docstring Writer",
          description: "Good code needs good documentation. Let's get the AI to write a professional 'docstring' for a function.",
          task: "You have a Python function without any documentation. Write a prompt that asks the AI to generate a Google-style docstring for it, explaining what the function does, its arguments, and what it returns.",
          codeSnippet: "def calculate_average(numbers):\n  if not numbers:\n    return 0\n  return sum(numbers) / len(numbers)",
          difficulty: "Expert",
          points: 400,
          successCriteria: [
            "Provides the code snippet.",
            "Asks for a 'docstring'.",
            "Specifies the desired format (e.g., 'Google-style').",
            "Requests that the arguments ('Args') and return value ('Returns') are documented."
          ],
          hints: [
            "A docstring is a specific format of comment that explains a function or class.",
            "Different programming communities have different style guides for docstrings (e.g., Google, NumPy, reST). Being specific helps.",
            "This is a huge time-saver for professional developers."
          ],
          examplePrompt: "Please write a comprehensive, Google-style docstring for the following Python function. It should include a description of the function, its arguments, and what it returns.\n\n```python\ndef calculate_average(numbers):\n  if not numbers:\n    return 0\n  return sum(numbers) / len(numbers)\n```",
          commonMistakes: [
            "Just asking for 'comments' instead of a structured 'docstring'.",
            "Forgetting to specify the style.",
            "The docstring being incomplete and missing the 'Args' or 'Returns' section."
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
          id: 605,
          type: "Code-Generation",
          title: "The SQL Update",
          description: "Selecting data is one thing, but modifying it is more powerful. Let's generate an SQL UPDATE statement.",
          task: "Write a prompt to generate an SQL query that updates the 'email' field for a user in the 'Users' table. The user to be updated has a 'user_id' of 123, and their new email should be 'new.email@example.com'.",
          difficulty: "Expert",
          points: 485,
          successCriteria: [
            "Clearly describes the desired outcome (update a record).",
            "Specifies the table name ('Users'), the column to update ('email'), and the new value.",
            "Defines the filtering condition using a WHERE clause to target the correct user ('user_id' = 123)."
          ],
          hints: [
            "The `WHERE` clause is the most important part of an `UPDATE` statement. Forgetting it can lead to updating every single row in the table!",
            "Always be as specific as possible in your `WHERE` clause.",
            "This is a common task for managing user data."
          ],
          examplePrompt: "Please write an SQL query to update a record in the 'Users' table. I need to set the 'email' column to 'new.email@example.com' for the user where the 'user_id' is 123.",
          commonMistakes: [
            "Forgetting the `WHERE` clause, which is a catastrophic error.",
            "Using the wrong `user_id` in the `WHERE` clause.",
            "Putting the new value in the wrong column."
          ]
        },
        {
          id: 606,
          type: "Code-Generation",
          title: "The SQL Join",
          description: "Real-world data is often split across multiple tables. Let's learn to join them together.",
          task: "You have two tables: 'Customers' (with columns 'CustomerID' and 'Name') and 'Orders' (with columns 'OrderID', 'CustomerID', and 'OrderDate'). Write a prompt to generate an SQL query that lists the name of every customer alongside the date of each order they made.",
          difficulty: "Expert",
          points: 490,
          successCriteria: [
            "Clearly states the goal: to list customer names and their order dates.",
            "Specifies the two tables to be joined ('Customers' and 'Orders').",
            "Defines the relationship between the tables (the 'CustomerID' column).",
            "The prompt should result in a query that uses an `INNER JOIN`."
          ],
          hints: [
            "A `JOIN` clause is used to combine rows from two or more tables based on a related column between them.",
            "The `ON` keyword specifies how the tables are related.",
            "This is a fundamental skill for working with relational databases."
          ],
          examplePrompt: "I have two tables, 'Customers' and 'Orders'. The 'Customers' table has 'CustomerID' and 'Name' columns. The 'Orders' table has 'OrderID', 'CustomerID', and 'OrderDate' columns. Please write an SQL query that `JOIN`s these two tables on the `CustomerID` field to produce a list of customer names and their corresponding order dates.",
          commonMistakes: [
            "Forgetting the `ON` clause or using the wrong columns to join, resulting in a nonsensical output.",
            "Using the wrong type of join (e.g., `LEFT JOIN` vs `INNER JOIN`) for the desired result.",
            "Selecting the wrong columns."
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
          id: 607,
          type: "Code-Generation",
          title: "The Email Validator",
          description: "Validating email addresses is a very common task. Let's get the AI to generate a robust regex for it.",
          task: "Write a prompt to generate a regular expression (regex) that validates a standard email address format. The prompt should also ask for an explanation of how the regex works.",
          difficulty: "Expert",
          points: 505,
          successCriteria: [
            "Clearly states the pattern to be validated (a standard email address).",
            "Asks for a regular expression.",
            "Requests a plain English explanation of the regex."
          ],
          hints: [
            "Email validation regex can be surprisingly complex, which is why it's a great task for an AI.",
            "Remember to ask for the explanation so you can understand what the different parts of the regex are doing.",
            "You can provide examples of valid and invalid emails to help the AI."
          ],
          examplePrompt: "Please generate a regular expression that can validate a standard email address. Also, provide a breakdown of how the regex pattern works.",
          commonMistakes: [
            "The regex being too simple and allowing invalid email formats.",
            "Forgetting to ask for an explanation.",
            "The explanation being as confusing as the regex itself."
          ]
        },
        {
          id: 608,
          type: "Code-Generation",
          title: "The Hashtag Extractor",
          description: "Regex isn't just for validating, it's for extracting. Let's pull all the hashtags out of a block of text.",
          task: "Write a prompt to generate a regular expression (regex) that can find and extract all hashtags (e.g., words starting with '#') from a block of text. Ask for an explanation of the regex.",
          difficulty: "Expert",
          points: 510,
          successCriteria: [
            "Clearly states the goal: to find and extract all hashtags.",
            "Defines what a hashtag is (a word starting with '#').",
            "Asks for a regular expression to perform this task."
          ],
          hints: [
            "This is a different use of regex: finding all matches within a string, rather than checking if the whole string is valid.",
            "Think about the characters that are allowed in a hashtag. Usually letters and numbers.",
            "This is a common task in social media data analysis."
          ],
          examplePrompt: "I need a regular expression that will find and extract all hashtags (words beginning with a '#' symbol) from a given string of text. Please provide the regex and a simple explanation of how it works.",
          commonMistakes: [
            "Generating a regex that only finds the first hashtag, not all of them.",
            "The regex incorrectly including the space or punctuation after the hashtag.",
            "Forgetting to ask for an explanation."
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
          id: 609,
          type: "Code-Generation",
          title: "The Off-by-One Error",
          description: "A classic bug. This loop is running the wrong number of times. Let's get the AI to spot and fix it.",
          task: "You have a Python function with an 'off-by-one' error in a loop. Provide the code and explain that it's producing one too many items in the output list. Ask the AI to fix the bug.",
          codeSnippet: "def create_list(n):\n  result = []\n  for i in range(n + 1):\n    result.append(i)\n  return result\n\n# create_list(3) should return [0, 1, 2], but it returns [0, 1, 2, 3].",
          difficulty: "Expert",
          points: 525,
          successCriteria: [
            "Provides the buggy code snippet.",
            "Clearly explains the bug by showing the expected vs. actual output.",
            "Asks the AI to identify and fix the 'off-by-one' error."
          ],
          hints: [
            "'Off-by-one' errors are extremely common when working with loops and ranges.",
            "Providing a clear example of the wrong output is the fastest way for the AI to understand the problem.",
            "You can also ask the AI to explain why the bug was happening."
          ],
          examplePrompt: "The following Python function has an 'off-by-one' error. It should return a list of numbers from 0 up to (but not including) n, but it includes n. Can you fix it?\n\n```python\ndef create_list(n):\n  result = []\n  for i in range(n + 1):\n    result.append(i)\n  return result\n\n# e.g., create_list(3) is returning [0, 1, 2, 3] instead of [0, 1, 2]\n```",
          commonMistakes: [
            "Pasting the code but not explaining what the correct output should be.",
            "Being too vague about the error.",
            "Not providing an example of the failure."
          ]
        },
        {
          id: 610,
          type: "Code-Generation",
          title: "Make it More Pythonic",
          description: "This code works, but it's not elegant. Let's ask the AI to refactor it into a more idiomatic 'Pythonic' style.",
          task: "You have a piece of Python code that uses a clunky loop to create a new list. Write a prompt that asks the AI to rewrite it using a more elegant and 'Pythonic' list comprehension.",
          codeSnippet: "old_list = [1, 2, 3, 4, 5]\nnew_list = []\nfor item in old_list:\n  if item > 2:\n    new_list.append(item * 2)",
          difficulty: "Expert",
          points: 530,
          successCriteria: [
            "Provides the un-idiomatic code snippet.",
            "Asks for the code to be refactored to be more 'Pythonic'.",
            "Specifically suggests using a 'list comprehension' as the target style."
          ],
          hints: [
            "Most programming languages have 'idiomatic' ways of writing things that are considered more elegant and efficient.",
            "Asking the AI to make your code more 'Pythonic', 'idiomatic', or 'clean' can be a great way to learn best practices.",
            "A list comprehension is a classic 'Pythonic' replacement for many simple for-loops."
          ],
          examplePrompt: "The following Python code works, but it's a bit verbose. Could you please refactor it to be more 'Pythonic' by using a single list comprehension?\n\n```python\nold_list = [1, 2, 3, 4, 5]\nnew_list = []\nfor item in old_list:\n  if item > 2:\n    new_list.append(item * 2)\n```",
          commonMistakes: [
            "Just saying 'improve it' without suggesting a direction (e.g., 'make it more Pythonic').",
            "Not knowing the name of the idiomatic pattern you want to use (though the AI can sometimes guess).",
            "The code being too complex to be easily refactored into the desired pattern."
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
          id: 611,
          type: "Code-Generation",
          title: "The Responsive Layout",
          description: "Let's create a fundamental building block of modern web design: a responsive two-column layout.",
          task: "Write a prompt to generate the HTML and CSS for a responsive two-column layout using Flexbox. The columns should stack vertically on screens smaller than 600px.",
          difficulty: "Advanced",
          points: 375,
          successCriteria: [
            "Asks for both HTML and CSS.",
            "Specifies the desired layout (two columns).",
            "Mentions the technology to use (Flexbox).",
            "Includes the crucial responsive requirement (stacking on small screens)."
          ],
          hints: [
            "Responsive design is essential for modern websites. Media queries are the key to making CSS adapt to different screen sizes.",
            "Flexbox is a powerful CSS tool for creating flexible layouts.",
            "You can ask for placeholder content in the columns to see the layout clearly."
          ],
          examplePrompt: "Please generate the HTML and CSS for a responsive two-column layout using Flexbox. The two columns should sit side-by-side on larger screens, but stack vertically on screens narrower than 600px.",
          commonMistakes: [
            "Forgetting to ask for the responsive behaviour, resulting in a fixed layout.",
            "Not specifying the technology (like Flexbox), which might lead to older, more complex layout methods.",
            "The HTML structure not being correct for a two-column layout."
          ]
        },
        {
          id: 612,
          type: "Code-Generation",
          title: "The Show/Hide Element",
          description: "Let's add some interactivity. Generate the HTML, CSS, and JavaScript for a simple 'Show/Hide' component.",
          task: "Write a prompt to generate the complete HTML, CSS, and JavaScript for a 'spoiler' component. It should consist of a button that, when clicked, reveals or hides a block of text.",
          difficulty: "Expert",
          points: 450,
          successCriteria: [
            "Asks for all three front-end languages (HTML, CSS, JavaScript).",
            "Clearly describes the desired interactive behaviour (clicking a button shows/hides text).",
            "The generated code should be self-contained and work when pasted into a file."
          ],
          hints: [
            "This requires prompting for three different languages that work together.",
            "You can ask for the JavaScript to be included in a `<script>` tag within the HTML file.",
            "Think about the logic: you need a button, a text element, and a JavaScript function that toggles a CSS class to change the text's visibility."
          ],
          examplePrompt: "Please generate the HTML, CSS, and JavaScript for a simple 'Show/Hide' spoiler component. It should have a button and a block of text that is initially hidden. When the button is clicked, the text should toggle between being visible and hidden.",
          commonMistakes: [
            "Forgetting to ask for the JavaScript, which provides the interactivity.",
            "The JavaScript logic being incorrect.",
            "The CSS not correctly hiding or showing the element."
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
          id: 613,
          type: "Code-Generation",
          title: "The Magic Number",
          description: "Hard-coded numbers in code are bad practice. Let's refactor this code to replace a 'magic number' with a named constant.",
          task: "You have a Python function that contains a 'magic number' (0.2) for calculating VAT. Write a prompt that asks the AI to refactor the code to replace this number with a clearly named constant.",
          codeSnippet: "def calculate_total_price(price):\n  return price * 1.2",
          difficulty: "Expert",
          points: 535,
          successCriteria: [
            "Provides the code snippet containing the magic number.",
            "Asks for the code to be refactored to remove the magic number.",
            "The new code should use a well-named constant instead."
          ],
          hints: [
            "Using named constants makes your code much more readable and easier to update if the value changes.",
            "A good prompt will suggest a name for the constant, e.g., 'VAT_RATE'.",
            "This is a very common and important refactoring technique."
          ],
          examplePrompt: "Please refactor the following Python function. The number `1.2` is a 'magic number'. I want you to replace it by defining a `VAT_RATE` constant and using that in the calculation instead, to make the code clearer.\n\n```python\ndef calculate_total_price(price):\n  return price * 1.2\n```",
          commonMistakes: [
            "Not understanding what a 'magic number' is.",
            "The new constant having a poor, un-descriptive name.",
            "The refactored code producing a different result to the original."
          ]
        },
        {
          id: 614,
          type: "Code-Generation",
          title: "Simplify the Conditional",
          description: "Complex `if` statements are hard to read. Let's refactor one by extracting the logic into its own function.",
          task: "You have a function with a complicated `if` statement. Write a prompt that asks the AI to refactor the code by extracting the conditional logic into a separate, well-named function that returns a boolean.",
          codeSnippet: "def process_user(user):\n  if user.is_active and user.has_paid and not user.is_banned and user.country == 'GB':\n    # ... do something\n    return True",
          difficulty: "Expert",
          points: 540,
          successCriteria: [
            "Provides the code with the complex conditional.",
            "Asks for the code to be refactored for clarity.",
            "Suggests extracting the logic into a new, well-named boolean function."
          ],
          hints: [
            "This refactoring technique is called 'Extract Method' and it's great for improving readability.",
            "The new function name should clearly explain what the logic is checking, e.g., 'is_valid_uk_customer'.",
            "The original `if` statement can then be replaced with a single call to your new, readable function."
          ],
          examplePrompt: "The `if` statement in this Python function is too complex and hard to read. Please refactor it by extracting the conditional logic into a new function called `is_eligible_for_uk_service`. This new function should take the `user` object and return `True` or `False`.\n\n```python\ndef process_user(user):\n  if user.is_active and user.has_paid and not user.is_banned and user.country == 'GB':\n    # ... do something\n    return True\n```",
          commonMistakes: [
            "The new function not accurately representing the original logic.",
            "The new function having a poor, unclear name.",
            "The original function not being updated to use the new function."
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
          id: 615,
          type: "Code-Generation",
          title: "The Edge Case Finder",
          description: "Good tests cover not just the 'happy path', but also tricky edge cases. Let's get the AI to help us find them.",
          task: "You have a simple Python `divide` function. Write a prompt that asks the AI to first list potential edge cases for this function, and then write a `unittest` test case for each of those edge cases.",
          codeSnippet: "def divide(a, b):\n  return a / b",
          difficulty: "Expert",
          points: 545,
          successCriteria: [
            "Provides the code to be tested.",
            "Asks the AI to first brainstorm potential edge cases.",
            "Asks the AI to then write a unit test for each identified edge case."
          ],
          hints: [
            "'Off-by-one' errors are extremely common when working with loops and ranges.",
            "Providing a clear example of the wrong output is the fastest way for the AI to understand the problem.",
            "You can also ask the AI to explain why the bug was happening."
          ],
          examplePrompt: "I need to write unit tests for the following Python function. First, as a bulleted list, please identify three potential edge cases I should test for. Then, using the `unittest` framework, write a separate test method for each of those edge cases.\n\n```python\ndef divide(a, b):\n  return a / b\n```",
          commonMistakes: [
            "Just asking for 'tests' without prompting the AI to think about edge cases first.",
            "The identified edge cases not being genuine edge cases.",
            "The tests not correctly handling the errors that the edge cases might produce (like a `ZeroDivisionError`)."
          ]
        },
        {
          id: 616,
          type: "Code-Generation",
          title: "The Pytest Version",
          description: "Different projects use different tools. Let's ask the AI to write tests using the popular 'pytest' framework.",
          task: "You have a simple Python `add` function. Write a prompt that asks the AI to generate a set of tests for it, but this time specifically using the `pytest` framework and conventions.",
          codeSnippet: "def add(a, b):\n  return a + b",
          difficulty: "Expert",
          points: 545,
          successCriteria: [
            "Provides the code to be tested.",
            "Specifies the testing framework to be used ('pytest').",
            "The generated code should follow `pytest` conventions (e.g., using plain `assert` statements)."
          ],
          hints: [
            "`pytest` is a very popular alternative to Python's built-in `unittest` library.",
            "The syntax is simpler – you can just use `assert` instead of `self.assertEqual`.",
            "This shows that you can ask the AI to use specific libraries and adhere to their conventions."
          ],
          examplePrompt: "Please write a set of unit tests for the following Python function. The tests must be written using the `pytest` framework and its conventions, using simple `assert` statements.\n\n```python\ndef add(a, b):\n  return a + b\n```",
          commonMistakes: [
            "The generated tests still using `unittest` syntax.",
            "Not asking for `pytest` specifically.",
            "Forgetting to provide the function to be tested."
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
          id: 617,
          type: "Code-Generation",
          title: "Sending Data with POST",
          description: "So far we've only fetched data. Let's send some data to an API using a POST request.",
          task: "Write a prompt to generate an asynchronous JavaScript function called 'postData' that sends a simple JavaScript object to 'https://api.example.com/users' using a 'POST' request with the `fetch` API.",
          difficulty: "Expert",
          points: 555,
          successCriteria: [
            "Specifies the language (JavaScript) and function name.",
            "Clearly states the goal is to send data using a 'POST' request.",
            "Provides the API endpoint and mentions the data to be sent (a simple object).",
            "The generated code should correctly configure the `fetch` options with the method, headers, and body."
          ],
          hints: [
            "A `POST` request is used to create new resources on a server.",
            "You need to tell `fetch` to use the 'POST' method and provide the data in the 'body' of the request, usually as a JSON string.",
            "You also need to set the 'Content-Type' header to 'application/json'."
          ],
          examplePrompt: "Please write an asynchronous JavaScript function called 'postData'. It should use the 'fetch' API to send a simple JavaScript object (`{ name: 'John', age: 30 }`) to the endpoint 'https://api.example.com/users' using the 'POST' method. Remember to set the correct headers and stringify the body.",
          commonMistakes: [
            "Forgetting to set the `method` to 'POST'.",
            "Not stringifying the JavaScript object before putting it in the body.",
            "Forgetting to set the 'Content-Type': 'application/json' header."
          ]
        },
        {
          id: 618,
          type: "Code-Generation",
          title: "The Authenticated API Call",
          description: "Most useful APIs require authentication. Let's make an API call that includes an Authorization header.",
          task: "Write a prompt to generate a JavaScript function that makes an authenticated `GET` request to an API endpoint. The request must include an 'Authorization' header with a fictional bearer token.",
          difficulty: "Expert",
          points: 560,
          successCriteria: [
            "Specifies the goal: an authenticated `GET` request.",
            "Asks for an 'Authorization' header to be included.",
            "Provides a fictional bearer token to be used.",
            "The generated code should correctly add the headers object to the `fetch` call."
          ],
          hints: [
            "Sending an authentication token in a header is a very common pattern for secure APIs.",
            "The format is usually 'Authorization: Bearer [YOUR_TOKEN]'.",
            "This is a small but critical detail for working with protected resources."
          ],
          examplePrompt: "Please write an asynchronous JavaScript function to make an authenticated `GET` request to 'https://api.example.com/me'. The request must include an 'Authorization' header with the value 'Bearer 12345abcdef'.",
          commonMistakes: [
            "Forgetting to include the 'Authorization' header.",
            "Formatting the header value incorrectly (e.g., forgetting the 'Bearer ' prefix).",
            "Putting the header in the wrong part of the `fetch` request."
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
          id: 619,
          type: "Code-Generation",
          title: "The Commit Message Writer",
          description: "A good commit message is a vital piece of documentation. Let's get the AI to write one for us.",
          task: "You have just fixed a bug in a piece of code. Write a prompt that provides the 'before' and 'after' code snippets and asks the AI to write a concise and conventional Git commit message explaining the fix.",
          codeSnippet: "Before:\nreturn total / len(numbers) - 1\n\nAfter:\nreturn total / len(numbers)",
          difficulty: "Expert",
          points: 550,
          successCriteria: [
            "Provides the 'before' and 'after' code snippets to show the change.",
            "Asks for a Git commit message.",
            "The generated message should follow convention (e.g., a short summary line, followed by a more detailed body)."
          ],
          hints: [
            "A good commit message explains the 'what' and the 'why' of a change.",
            "The standard format is a short, imperative summary (e.g., 'Fix calculation error') followed by a blank line and a more detailed explanation.",
            "Providing the 'before' and 'after' code is the best way to give the AI the context it needs."
          ],
          examplePrompt: "I've fixed a bug in my code. Please write a conventional Git commit message for me. The message should have a short summary line and a longer body explaining the change.\n\nHere is the code I changed:\n\nBefore:\n`return total / len(numbers) - 1`\n\nAfter:\n`return total / len(numbers)`",
          commonMistakes: [
            "The commit message being too vague (e.g., 'fixed bug').",
            "The message not following the conventional format.",
            "Forgetting to provide the code that was changed."
          ]
        },
        {
          id: 620,
          type: "Code-Generation",
          title: "Explain the Error",
          description: "Cryptic error messages can be frustrating. Let's get the AI to explain a common one in plain English.",
          task: "You have a common Python error message. Write a prompt that asks the AI to explain what the error means, what the likely cause is, and how to fix it.",
          codeSnippet: "TypeError: can only concatenate str (not 'int') to str",
          difficulty: "Advanced",
          points: 385,
          successCriteria: [
            "Provides the exact error message.",
            "Asks for an explanation of what the error means.",
            "Asks for the likely cause and a potential fix."
          ],
          hints: [
            "Pasting the exact error message is the most important step.",
            "Asking 'What does this mean and how do I fix it?' is a powerful workflow for debugging.",
            "You can also provide the line of code that caused the error for an even more specific explanation."
          ],
          examplePrompt: "I got the following error in Python. Can you explain what this 'TypeError' means, what the most common cause is, and give me a simple example of how to fix it?\n\nError: `TypeError: can only concatenate str (not 'int') to str`",
          commonMistakes: [
            "Providing an incomplete or incorrect error message.",
            "Just asking 'how do I fix this' without also asking for an explanation of what the error means.",
            "The explanation being too technical."
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
          id: 621,
          type: "Code-Generation",
          title: "The FizzBuzz Challenge",
          description: "A classic coding interview question. Let's give the AI the rules in plain English and see if it can write the code.",
          task: "Write a prompt that provides the rules for the 'FizzBuzz' game and asks the AI to implement it as a Python function that loops from 1 to 100.",
          originalText: "The rules are: for a given number, if it's divisible by 3, print 'Fizz'. If it's divisible by 5, print 'Buzz'. If it's divisible by both 3 and 5, print 'FizzBuzz'. Otherwise, print the number.",
          difficulty: "Expert",
          points: 565,
          successCriteria: [
            "Provides the rules of FizzBuzz in plain English.",
            "Specifies the target programming language (Python).",
            "Asks the AI to implement the logic as a function that loops from 1 to 100."
          ],
          hints: [
            "The order of the `if/elif/else` statements is crucial here. The 'FizzBuzz' case for multiples of both 3 and 5 must be checked first!",
            "This is a great example of translating human-readable rules into machine-readable logic.",
            "You can ask the AI to explain its code after writing it."
          ],
          examplePrompt: "Please write a Python function that implements the FizzBuzz challenge. It should loop from 1 to 100 and, for each number, print the correct output based on these rules: if the number is divisible by 3, print 'Fizz'; if by 5, print 'Buzz'; if by both 3 and 5, print 'FizzBuzz'; otherwise, print the number itself.",
          commonMistakes: [
            "The logic being in the wrong order, causing multiples of 15 to incorrectly print 'Fizz' or 'Buzz' instead of 'FizzBuzz'.",
            "The loop not having the correct start or end points.",
            "Forgetting one of the rules."
          ]
        },
        {
          id: 622,
          type: "Code-Generation",
          title: "The Password Validator",
          description: "Let's turn a set of business rules for a password into a working validation function.",
          task: "Write a prompt that provides a list of rules for a valid password and asks the AI to create a single Python function that returns `True` if a password is valid and `False` if it is not.",
          originalText: "Password rules:\n1. Must be at least 8 characters long.\n2. Must contain at least one uppercase letter.\n3. Must contain at least one number.",
          difficulty: "Expert",
          points: 570,
          successCriteria: [
            "Provides the password validation rules as a list.",
            "Specifies the target programming language (Python).",
            "Asks for a single function that takes a password and returns a boolean (`True` or `False`)."
          ],
          hints: [
            "This is a very common real-world task: turning a list of requirements from a manager or client into working code.",
            "You can use regular expressions within the function to check for character types, or you can loop through the string.",
            "Thinking about how to test this function is a good next step."
          ],
          examplePrompt: "Please write a single Python function called `is_password_valid` that takes a password string as input and returns `True` if it's valid, `False` otherwise. A password is considered valid if it meets all of the following criteria:\n1. It must be at least 8 characters long.\n2. It must contain at least one uppercase letter.\n3. It must contain at least one number.",
          commonMistakes: [
            "The function not correctly checking all three rules.",
            "The function returning a string or printing the result instead of returning a boolean value.",
            "The logic being inefficient or overly complex."
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
          id: 623,
          type: "Code-Generation",
          title: "The README Example",
          description: "A good README needs clear examples. Let's get the AI to write a 'Usage' section for a function.",
          task: "You have a Python function. Write a prompt that asks the AI to generate a 'Usage' section for a `README.md` file, showing a simple example of how to call the function and what the output will be, formatted in a markdown code block.",
          codeSnippet: "def greet(name):\n  return f'Hello, {name}!'",
          difficulty: "Expert",
          points: 575,
          successCriteria: [
            "Provides the function to be documented.",
            "Asks for a 'Usage' section suitable for a README file.",
            "Specifies that the output should be a markdown code block showing both the function call and its result."
          ],
          hints: [
            "A clear usage example is often the most important part of any documentation.",
            "Markdown is the standard for `README` files. You can ask for specific markdown formatting.",
            "Think about what a new user of your code would need to see to understand it instantly."
          ],
          examplePrompt: "I need to write the 'Usage' section for the `README.md` file for the following Python function. Please generate a clear example showing how to call the function and what it prints, formatted as a Python markdown code block.\n\n```python\ndef greet(name):\n  return f'Hello, {name}!'\n```",
          commonMistakes: [
            "Just getting the code back, without the 'Usage' context or the output.",
            "The output not being in a markdown code block.",
            "The example being too complex or confusing."
          ]
        },
        {
          id: 624,
          type: "Code-Generation",
          title: "The JSDoc Comment",
          description: "Let's generate documentation for a JavaScript function using the common JSDoc standard.",
          task: "You have a JavaScript function. Write a prompt to generate a 'JSDoc' comment block for it, documenting the function's description, parameters (using `@param`), and return value (using `@returns`).",
          codeSnippet: "function calculateArea(length, width) {\n  return length * width;\n}",
          difficulty: "Expert",
          points: 575,
          successCriteria: [
            "Provides the JavaScript function.",
            "Asks for a 'JSDoc' comment block.",
            "The generated comment should use the correct tags (`@param`, `@returns`) and syntax."
          ],
          hints: [
            "`JSDoc` is the de-facto standard for documenting JavaScript code.",
            "Using these standard formats allows other tools to automatically generate documentation websites for your code.",
            "You can specify the types of the parameters in curly braces, e.g., `{@param {number} length}`."
          ],
          examplePrompt: "Please generate a JSDoc comment block for the following JavaScript function. It should document the function's purpose, its parameters (including their types), and what it returns.\n\n```javascript\nfunction calculateArea(length, width) {\n  return length * width;\n}\n```",
          commonMistakes: [
            "The comment not using the correct JSDoc syntax and tags.",
            "Forgetting to document the parameters or the return value.",
            "The descriptions being unclear or unhelpful."
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
          id: 625,
          type: "Code-Generation",
          title: "The Command Line Pipe",
          description: "Let's chain two Linux commands together using a pipe to count all the JavaScript files in a directory.",
          task: "Write a prompt that asks for a single Linux shell command that finds all files ending in `.js` in the current directory and its subdirectories, and then counts the total number of files found.",
          difficulty: "Expert",
          points: 585,
          successCriteria: [
            "Asks for a single Linux shell command.",
            "The desired action requires two commands to be piped together (`find` and `wc`).",
            "The constraints (finding `.js` files, counting them) are clear."
          ],
          hints: [
            "The pipe `|` operator in Linux is incredibly powerful. It takes the output of one command and uses it as the input for the next.",
            "You will likely need the `find` command to locate the files and the `wc -l` command to count the lines of output.",
            "This is a great way to build complex operations from simple tools."
          ],
          examplePrompt: "What is the Linux shell command to find all files with a `.js` extension in the current directory and all subdirectories, and then count how many files were found?",
          commonMistakes: [
            "Providing two separate commands instead of a single piped command.",
            "Using the wrong arguments for `find` or `wc`.",
            "The command not searching subdirectories."
          ]
        },
        {
          id: 626,
          type: "Code-Generation",
          title: "The ImageMagick Converter",
          description: "AI can help with specialised command-line tools too. Let's convert and resize an image using ImageMagick.",
          task: "Write a prompt that asks for the command-line instruction to convert an image file named 'input.png' to a JPEG file named 'output.jpg' and resize it to a width of 500 pixels, using the `ImageMagick` tool.",
          difficulty: "Expert",
          points: 590,
          successCriteria: [
            "Specifies the tool to use (`ImageMagick`).",
            "Clearly defines the input and output filenames.",
            "Includes two distinct operations: converting the format and resizing the image."
          ],
          hints: [
            "`ImageMagick` is a powerful suite of tools for image manipulation from the command line.",
            "You can ask the AI for commands for many different CLI tools, not just the standard Linux ones.",
            "Be specific about all the transformations you want to apply (convert, resize, rotate, etc.)."
          ],
          examplePrompt: "Using the `ImageMagick` command-line tool, what is the command to convert 'input.png' to 'output.jpg' and also resize the output image to a width of 500 pixels while maintaining the aspect ratio?",
          commonMistakes: [
            "Forgetting to specify the tool is `ImageMagick`.",
            "The command performing only one of the two actions (converting or resizing).",
            "Getting the input and output filenames the wrong way around."
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
          id: 627,
          type: "Code-Generation",
          title: "The SQL to Python Translator",
          description: "Can you translate a declarative SQL query into a Python function that does the same job?",
          task: "You have an SQL query that selects active users. Write a prompt that asks the AI to write a Python function that performs the equivalent filtering operation on a list of user objects.",
          codeSnippet: "SELECT * FROM users WHERE active = TRUE AND followers > 1000;",
          difficulty: "Expert",
          points: 595,
          successCriteria: [
            "Provides the source SQL query.",
            "Specifies the target as a Python function.",
            "The Python function should correctly filter a list of objects to match the logic in the SQL `WHERE` clause."
          ],
          hints: [
            "This tests a deeper understanding of logic, translating from a declarative language (SQL) to an imperative one (Python).",
            "You'll need to imagine what the Python `user` objects might look like to access their properties.",
            "This is a great way to generate data-filtering logic quickly."
          ],
          examplePrompt: "Please translate the logic of the following SQL query into a Python function. The function should be named `get_popular_active_users` and it should take a list of user objects as input and return a new list containing only the users that match the criteria.\n\n```sql\nSELECT * FROM users WHERE active = TRUE AND followers > 1000;\n```",
          commonMistakes: [
            "The Python function not correctly implementing the filtering logic from the `WHERE` clause.",
            "The function just returning a string of the SQL query.",
            "Forgetting to specify that the Python code should operate on a list of objects."
          ]
        },
        {
          id: 628,
          type: "Code-Generation",
          title: "The Code De-obfuscator",
          description: "This JavaScript code has been 'minified' to be as small as possible, making it unreadable. Let's get the AI to translate it back into a human-readable format.",
          task: "You have a single line of obfuscated JavaScript. Write a prompt that asks the AI to rewrite it as a readable, well-formatted function with clear variable names.",
          codeSnippet: "function a(b){for(let i=0;i<b.length;i++){if(b[i]>10)return!0}return!1}",
          difficulty: "Expert",
          points: 600,
          successCriteria: [
            "Provides the obfuscated code snippet.",
            "Asks for the code to be made 'readable' or 'de-obfuscated'.",
            "The new code should be correctly formatted and use meaningful variable names."
          ],
          hints: [
            "This is a reverse of 'minification', a common process in web development.",
            "Ask the AI to choose clear, descriptive variable names (e.g., `a` could become `doesListContainLargeNumber`).",
            "This is a powerful technique for understanding complex or poorly written code."
          ],
          examplePrompt: "Please de-obfuscate the following line of JavaScript. Rewrite it as a well-formatted function with clear, descriptive variable and function names to make it readable.\n\n```javascript\nfunction a(b){for(let i=0;i<b.length;i++){if(b[i]>10)return!0}return!1}\n```",
          commonMistakes: [
            "The refactored code not being functionally identical to the original.",
            "The new variable names still being unclear.",
            "The code not being correctly formatted with indentation."
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
                    },
                    {
                      id: 629,
                      type: "Code-Generation",
                      title: "The Git 'Undo'",
                      description: "We've all done it. You `git add` a file by mistake. Let's ask for the command to unstage it.",
                      task: "Write a prompt that asks for the Git command to remove a file named 'config.log' from the staging area without deleting the file itself.",
                      difficulty: "Expert",
                      points: 605,
                      successCriteria: [
                        "Clearly states the desired Git operation (unstage a file).",
                        "Specifies the filename.",
                        "The resulting command should be `git restore --staged <file>` or the older `git reset HEAD <file>`."
                      ],
                      hints: [
                        "This is a very common task when you're preparing a commit.",
                        "`git status` is your best friend for seeing what is staged and what isn't.",
                        "This is a non-destructive action; it just moves the file out of the staging area."
                      ],
                      examplePrompt: "I've accidentally added 'config.log' to the staging area in Git. What is the command to unstage it, so it is no longer part of my next commit?",
                      commonMistakes: [
                        "Getting a command that deletes the file, not just unstages it.",
                        "The command not being specific to the file in question."
                      ]
                    },
                    {
                      id: 630,
                      type: "Code-Generation",
                      title: "The Branch Shortcut",
                      description: "Let's ask for the single command that both creates a new branch and checks it out in one go.",
                      task: "Write a prompt that asks for the single Git command to create a new branch called 'new-feature' and switch to it immediately.",
                      difficulty: "Expert",
                      points: 605,
                      successCriteria: [
                        "Clearly states the desired Git operation (create and switch branch).",
                        "Specifies the name for the new branch.",
                        "The result should be the single `git checkout -b new-feature` command."
                      ],
                      hints: [
                        "Many command-line tools have flags and shortcuts that combine multiple actions.",
                        "This is much quicker than running `git branch <name>` and then `git checkout <name>` separately.",
                        "Knowing these shortcuts can make you much more efficient on the command line."
                      ],
                      examplePrompt: "What is the single Git command to both create a new branch named 'new-feature' and switch to it at the same time?",
                      commonMistakes: [
                        "Getting two separate commands instead of the single shortcut command.",
                        "The new branch having the wrong name."
                      ]
                    }
                  ]
                },{
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
            "You can ask for lines with different tones: 'one hopeful, one mysterious, one action-packed...'."
          ],
          examplePrompt: "Generate five different opening lines for a science fiction novel. The story is set in a version of London that has been flooded for 200 years. The mood should be mysterious and slightly melancholic.",
          commonMistakes: [
            "Asking for 'opening lines' without providing a genre or setting.",
            "Forgetting to specify how many options you want."
          ]
        },
        {
          id: 701,
          type: "Creative-Writing",
          title: "The Last Line",
          description: "A great story needs a killer last line. Let's generate some options.",
          task: "You have a story concept. Write a prompt to generate three potential closing lines for it. The story is a tragedy about a lighthouse keeper who slowly goes mad from loneliness.",
          difficulty: "Advanced",
          points: 385,
          successCriteria: [
            "Provides a clear story concept (lonely, mad lighthouse keeper).",
            "Specifies the genre/mood (tragedy).",
            "Asks for a specific number of closing lines (three).",
            "The lines should be impactful and reflect the tragic theme."
          ],
          hints: [
            "A good last line should resonate with the story's theme and leave the reader thinking.",
            "You can ask for lines with different tones: 'one bleak, one poetic, one ironic...'.",
            "Think about the final image or feeling you want to leave with the reader."
          ],
          examplePrompt: "Please generate three different, powerful closing lines for a tragic story about a lighthouse keeper in the 19th century who loses his mind from isolation. The tone should be bleak and melancholic.",
          commonMistakes: [
            "Just asking for 'an ending' instead of the specific 'last line'.",
            "The lines not matching the tragic tone of the story.",
            "Forgetting to provide the story concept."
          ]
        },
        {
          id: 702,
          type: "Creative-Writing",
          title: "The Inciting Incident",
          description: "The inciting incident is the moment a story truly begins. Let's write one.",
          task: "You have a character and a setting. Write a prompt that asks the AI to write a single paragraph describing the 'inciting incident' that kicks off the story.",
          originalText: "Character: A bored office worker named Arthur. Setting: A normal, rainy Tuesday in Manchester.",
          difficulty: "Advanced",
          points: 390,
          successCriteria: [
            "Provides the character and setting.",
            "Asks the AI to write the 'inciting incident' of the story.",
            "The generated paragraph should describe a specific event that changes the character's life."
          ],
          hints: [
            "The inciting incident is the event that disrupts the character's ordinary world and sets them on their journey.",
            "You can give the AI a hint about the genre, e.g., 'the inciting incident for a fantasy story' or '...for a spy thriller'.",
            "This is a great way to kickstart a story when you have a character but no plot."
          ],
          examplePrompt: "I have a character, Arthur, a bored office worker in Manchester. Write a single paragraph describing the fantastical inciting incident that happens on his lunch break and pulls him into a magical adventure.",
          commonMistakes: [
            "The paragraph describing more of the ordinary world, instead of the moment things change.",
            "The incident not being significant enough to start a whole story.",
            "Forgetting to provide the character and setting."
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
          id: 703,
          type: "Creative-Writing",
          title: "The Sonneteer",
          description: "Let's try a more complex poetic form. Can you get the AI to write a Shakespearean sonnet about a modern object?",
          task: "Write a prompt to generate a sonnet in the style of William Shakespeare about the modern-day smartphone. The prompt should specify the key elements of a Shakespearean sonnet: 14 lines, an ABAB CDCD EFEF GG rhyme scheme, and written in iambic pentameter.",
          difficulty: "Expert",
          points: 400,
          successCriteria: [
            "Asks for a specific, complex poetic form (Shakespearean sonnet).",
            "Specifies the modern topic (a smartphone).",
            "Defines the structural rules of the form (14 lines, rhyme scheme, meter)."
          ],
          hints: [
            "For complex forms like a sonnet, it's very helpful to spell out the rules in the prompt.",
            "The contrast between the old, formal structure and the new, modern subject is what makes this prompt interesting.",
            "You can try this with other classical forms, like a villanelle or a sestina."
          ],
          examplePrompt: "Please write a sonnet about a smartphone in the style of William Shakespeare. It must be 14 lines long, written in iambic pentameter, and follow a traditional ABAB CDCD EFEF GG rhyme scheme.",
          commonMistakes: [
            "The generated poem not following all the rules of a sonnet (e.g., incorrect rhyme scheme or line count).",
            "The language not convincingly mimicking the Shakespearean style.",
            "Forgetting to specify the modern subject."
          ]
        },
        {
          id: 704,
          type: "Creative-Writing",
          title: "The Acrostic",
          description: "An acrostic is a poem where the first letter of each line spells out a word. Let's create one.",
          task: "Write a prompt to generate an acrostic poem for the word 'CASTLE'.",
          difficulty: "Advanced",
          points: 390,
          successCriteria: [
            "Asks for an acrostic poem.",
            "Clearly specifies the word the poem should be based on ('CASTLE')."
          ],
          hints: [
            "This is a simple but fun poetic constraint.",
            "Make sure the word you choose is spelled out clearly in the prompt.",
            "You can also ask for the poem to have a certain theme related to the word."
          ],
          examplePrompt: "Please write an acrostic poem based on the word 'CASTLE'. Each line should start with a letter from the word, in order.",
          commonMistakes: [
            "The poem not correctly spelling out the word.",
            "The lines of the poem not being related to the word itself.",
            "Forgetting to specify which word to use."
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
          id: 705,
          type: "Creative-Writing",
          title: "The Argument",
          description: "Good dialogue has subtext - the characters are often arguing about something deeper than what they're saying. Let's write an argument with subtext.",
          task: "Write a prompt to generate a short piece of dialogue between a couple, Alex and Ben. The argument is ostensibly about Alex being late, but the subtext is that Ben feels disrespected and unimportant. The dialogue should be under 150 words.",
          difficulty: "Expert",
          points: 465,
          successCriteria: [
            "Defines the two characters.",
            "Specifies the surface-level topic of the argument (being late).",
            "Crucially, it also defines the subtext or the 'real' reason for the argument.",
            "Sets a length constraint."
          ],
          hints: [
            "Subtext is what makes dialogue feel real. People rarely say exactly what they mean.",
            "The dialogue shouldn't explicitly state the subtext. We should feel it through the characters' word choices.",
            "Think about how the argument starts versus what it becomes about."
          ],
          examplePrompt: "Please write a short dialogue scene (under 150 words) between a couple, Alex and Ben. Alex has just arrived home late. The argument starts about the dinner being cold, but make it clear that the subtext is really about Ben feeling taken for granted.",
          commonMistakes: [
            "The characters explicitly stating the subtext (e.g., 'This isn't about the dinner, it's because you don't respect me!').",
            "The dialogue just being a surface-level argument about dinner.",
            "Forgetting to define the characters and the situation."
          ]
        },
        {
          id: 706,
          type: "Creative-Writing",
          title: "The Job Interview",
          description: "A job interview is a conversation with a specific goal and power dynamic. Let's write a snippet from one.",
          task: "Write a prompt to generate a short dialogue snippet from a job interview. The characters are a hyper-enthusiastic, jargon-loving startup CEO and a calm, skeptical senior engineer they are trying to hire. The dialogue should cover the CEO's response to the engineer asking, 'What's your company's biggest weakness?'",
          difficulty: "Expert",
          points: 470,
          successCriteria: [
            "Defines two very different, conflicting character types for the interview.",
            "Specifies a classic, tricky interview question to be the focus of the dialogue.",
            "The dialogue should reflect the clash in personalities."
          ],
          hints: [
            "Character voice is everything here. How does a 'hustle-culture' CEO talk compared to a skeptical engineer?",
            "Think about how the CEO would try to spin the weakness into a strength.",
            "The engineer's dialogue can be minimal – a single well-placed, cynical question can be very effective."
          ],
          examplePrompt: "Write a short dialogue scene from a job interview. The interviewer is a hyper-enthusiastic startup CEO who speaks in buzzwords. The candidate is a calm, experienced senior engineer. The scene should be the CEO's attempt to answer the engineer's question: 'So, what would you say your company's biggest weakness is?'",
          commonMistakes: [
            "The two characters sounding the same.",
            "The CEO giving a straightforward, honest answer instead of trying to spin it.",
            "The dialogue not having any underlying tension or conflict."
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
            "You can guide it by suggesting a domain for the metaphor, e.g., 'using a metaphor related to music' or '...related to cooking'."
          ],
          examplePrompt: "Invent a new and original metaphor to describe the feeling of deja vu. After presenting the metaphor, explain why it is an effective comparison.",
          commonMistakes: [
            "Asking for a definition instead of a metaphor.",
            "Not asking for an original metaphor, which might result in clichés."
          ]
        },
        {
          id: 707,
          type: "Creative-Writing",
          title: "The Grumpy House",
          description: "Personification gives human qualities to non-human things. Let's describe a house as if it were an old man.",
          task: "Write a prompt that asks the AI to describe an old, creaky house, but using personification to portray the house as a grumpy old man waking up in the morning.",
          difficulty: "Expert",
          points: 475,
          successCriteria: [
            "Asks for a description of a house.",
            "Specifically requests the use of personification, comparing the house to a grumpy old man.",
            "The description should be from the perspective of someone observing the house."
          ],
          hints: [
            "Think about the parts of a house and what human equivalents they could have. The windows are eyes, the door is a mouth, the creaks and groans are its joints.",
            "The 'waking up' part of the prompt gives a timeline and a set of actions to the description.",
            "This is a powerful way to create a strong mood and character for a setting."
          ],
          examplePrompt: "Please write a short paragraph describing an old, creaky house in the morning. Use personification to make the house itself seem like a grumpy old man who has just woken up. For example, mention the sounds it makes and the way the light hits it.",
          commonMistakes: [
            "A simple description of an old house without the personification.",
            "The personification being too subtle or unclear.",
            "The description not following the 'waking up' narrative."
          ]
        },
        {
          id: 708,
          type: "Creative-Writing",
          title: "The Sound of Old Books",
          description: "Synesthesia is the blending of senses. Let's try to describe a smell using only sounds.",
          task: "Write a prompt that asks the AI to describe the smell of an old library or a second-hand bookshop, but it must only use words and analogies related to sound.",
          difficulty: "Expert",
          points: 480,
          successCriteria: [
            "Specifies the smell to be described (old books).",
            "Includes the core creative constraint: to describe it using only sounds.",
            "This tests the AI's ability to make abstract, cross-sensory connections."
          ],
          hints: [
            "This is a very challenging creative constraint. What does 'vanilla' sound like? A low hum? What about 'dust'? A faint hiss?",
            "You are not asking for the sounds *of* a library, but to describe the *smell* *as if it were* a sound.",
            "This technique can produce very striking and original descriptions."
          ],
          examplePrompt: "I want you to describe the smell of an old, dusty bookshop. However, you must do this by only using words and analogies related to sound. Do not mention any smells directly. For example, 'The smell is a low hum of vanilla and a soft crackle of aging paper.'",
          commonMistakes: [
            "Accidentally using words related to smell.",
            "Describing the actual sounds you might hear in a bookshop, rather than the smell described as a sound.",
            "The description not being evocative or making sense."
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
          id: 709,
          type: "Creative-Writing",
          title: "Alliterative Adjectives",
          description: "Let's use the AI as a thesaurus with a twist. Find adjectives that both fit a topic and start with the same letter.",
          task: "Write a prompt that asks the AI for a list of 7 adjectives that start with the letter 'W' and could be used to describe the wind.",
          difficulty: "Advanced",
          points: 405,
          successCriteria: [
            "Asks for a list of adjectives.",
            "Includes a phonetic constraint (must start with 'W').",
            "Includes a semantic constraint (must be suitable for describing the wind).",
            "Requests a specific number of words."
          ],
          hints: [
            "This is a great technique for creative writing exercises or for finding just the right word.",
            "You can use this for any letter and any topic.",
            "This is another example of combining constraints to get a very specific kind of list."
          ],
          examplePrompt: "Please give me a list of 7 adjectives that start with the letter 'W' and can be used to describe the wind.",
          commonMistakes: [
            "The adjectives not starting with the correct letter.",
            "The adjectives not being relevant to the topic.",
            "Forgetting to specify the number of words."
          ]
        },
        {
          id: 710,
          type: "Creative-Writing",
          title: "The Themed Similes",
          description: "Let's generate some similes, but with a thematic twist. This forces the AI to make some very creative connections.",
          task: "Write a prompt that asks the AI to describe the experience of 'revising for an exam' using three original similes, where the similes must be drawn from the world of cooking.",
          difficulty: "Expert",
          points: 490,
          successCriteria: [
            "Asks for a specific number of original similes.",
            "Specifies the topic to be described ('revising for an exam').",
            "Includes a strong thematic constraint for the similes (must be from the world of cooking)."
          ],
          hints: [
            "This is a very advanced creative technique. You're forcing the AI to connect two completely unrelated domains.",
            "The results can be very surprising and unique.",
            "Try it with other combinations: 'Describe love using metaphors from plumbing' or 'Describe a traffic jam using analogies from geology'."
          ],
          examplePrompt: "I need to describe the feeling of revising for an important exam. Please generate three original similes for this feeling, but all three must use comparisons from the world of cooking and food.",
          commonMistakes: [
            "The similes not being related to the thematic constraint (cooking).",
            "The similes being unoriginal clichés.",
            "The similes not making any logical or emotional sense in the context of the topic."
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
          id: 711,
          type: "Creative-Writing",
          title: "The 'I Want' Song",
          description: "A classic musical theatre trope is the 'I Want' song, where a character sings about their deepest desire. Let's write one.",
          task: "Write a prompt that asks the AI to write the lyrics for a short 'I Want' song for a fictional character: a young goblin who is tired of living in a dark cave and dreams of seeing the surface world.",
          difficulty: "Expert",
          points: 485,
          successCriteria: [
            "Provides a clear character concept and their core desire.",
            "Asks for the output to be in the format of song lyrics.",
            "The lyrics should clearly express the character's hopes and frustrations."
          ],
          hints: [
            "An 'I Want' song is a great way to establish a character's motivation early in a story.",
            "Think about the specific imagery the character might use. What does the goblin *think* the sun is like?",
            "You can ask for a specific structure, like two verses and a chorus."
          ],
          examplePrompt: "Please write the lyrics for a short 'I Want' song for a goblin character named Grizelda. She has lived her whole life in a dark cave and her song should be about her deep desire to see the sun and the blue sky for the first time.",
          commonMistakes: [
            "The lyrics being a generic description rather than expressing a personal desire.",
            "The song not clearly stating what the character 'wants'.",
            "Forgetting to provide the character concept."
          ]
        },
        {
          id: 712,
          type: "Creative-Writing",
          title: "The Dueling Monologues",
          description: "A great way to understand two characters is to hear them talk about the same topic. Let's generate two opposing monologues.",
          task: "Write a prompt that asks the AI to generate two short monologues (under 100 words each) on the topic of 'money'. The first monologue should be from the perspective of a character who grew up with nothing and sees money as security. The second should be from a character who inherited great wealth and sees money as a burden.",
          difficulty: "Expert",
          points: 490,
          successCriteria: [
            "Asks for two separate monologues.",
            "Defines two contrasting character perspectives.",
            "Specifies a single topic for both characters to talk about.",
            "The monologues should clearly reveal the character's personality and worldview."
          ],
          hints: [
            "This is a powerful exercise in character voice and perspective.",
            "The contrast between the two monologues is what makes this effective.",
            "Choose a topic that is likely to create strong and different opinions."
          ],
          examplePrompt: "I need to develop two characters. Please write two short monologues (under 100 words each) on the topic of 'money'. The first should be from the perspective of a self-made millionaire who values hard work above all else. The second should be from an artist who believes money corrupts creativity.",
          commonMistakes: [
            "The two monologues being too similar in tone or opinion.",
            "The monologues not clearly reflecting the character archetypes provided.",
            "Forgetting to specify the single topic for them to talk about."
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
          id: 713,
          type: "Creative-Writing",
          title: "The Sinister Corporation",
          description: "Every good cyberpunk or thriller story needs a vaguely evil mega-corporation. Let's create one.",
          task: "Write a prompt to generate the concept for a sinister mega-corporation for a sci-fi story. The prompt must ask for the corporation's name, its friendly public slogan, its true, secret business, and a dark rumour whispered about it.",
          difficulty: "Expert",
          points: 495,
          successCriteria: [
            "Asks for a concept for a sinister corporation.",
            "Defines the four specific pieces of information required (name, slogan, real business, rumour).",
            "The prompt encourages a contrast between the public image and the dark reality."
          ],
          hints: [
            "The contrast between the innocent slogan and the sinister reality is key to this trope.",
            "The 'rumour' is a great way to add plot hooks and mystery.",
            "Think about real-world corporate jargon and how it can be twisted to sound menacing."
          ],
          examplePrompt: "Please create a concept for a sinister mega-corporation for a cyberpunk story. Give me the corporation's name, its public-facing slogan, its actual secret business, and one disturbing rumour that's told about it.",
          commonMistakes: [
            "The corporation being openly and cartoonishly evil, with no subtlety.",
            "Forgetting one of the four required pieces of information.",
            "The 'real business' not being sinister enough."
          ]
        },
        {
          id: 714,
          type: "Creative-Writing",
          title: "The Alien Planet",
          description: "Let's create a new world. Design a unique alien planet for a science fiction story.",
          task: "Write a prompt to generate a description of a new alien planet. The prompt should ask for the planet's name, a description of its unique environment, and one interesting detail about its dominant intelligent species.",
          difficulty: "Expert",
          points: 495,
          successCriteria: [
            "Asks for a description of a new alien planet.",
            "Requests a name, a description of the environment, and a detail about the native species.",
            "Encourages creativity and unique, non-humanoid ideas."
          ],
          hints: [
            "Try to avoid sci-fi clichés. What's a truly *alien* environment?",
            "Think about how the environment would shape the life that evolves there.",
            "The 'one interesting detail' about the species is often more powerful than a full description, as it sparks the imagination."
          ],
          examplePrompt: "Please generate a concept for a new alien planet for a sci-fi story. Provide me with the planet's name, a description of its unique environment (e.g., what the plants, sky, and ground are like), and one key detail about the dominant life-form that lives there.",
          commonMistakes: [
            "The planet being a simple copy of Earth with a different colour sky.",
            "The alien species just being humans with a different skin colour or pointy ears.",
            "The description being a list of facts rather than an evocative piece of writing."
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
          id: 715,
          type: "Creative-Writing",
          title: "The Hero's Doubt",
          description: "Even heroes have moments of doubt. Let's write a monologue where the hero questions their own actions.",
          task: "Write a prompt to generate a short monologue for a fantasy hero who has just won a great battle, but at a terrible cost. The monologue should show them questioning whether the victory was worth it and whether they are truly a 'good guy'.",
          difficulty: "Expert",
          points: 505,
          successCriteria: [
            "Specifies the character (a hero) and the situation (after a costly battle).",
            "Asks for the monologue to reveal the hero's doubt and internal conflict.",
            "The goal is to add complexity and nuance to a heroic character."
          ],
          hints: [
            "A flawed, doubting hero is often more compelling than a perfect one.",
            "Think about the specific costs of the victory. What did the hero have to sacrifice?",
            "The monologue could be a quiet, private moment, or a conversation with a trusted friend."
          ],
          examplePrompt: "Write a short monologue for a fantasy hero, 'Sir Kaelan', spoken in private after winning a major battle. He should be looking at the battlefield and expressing his deep regret and doubt about the cost of his victory. The tone should be weary and full of conflict.",
          commonMistakes: [
            "The hero sounding triumphant instead of doubtful.",
            "The monologue being a simple summary of the battle rather than an internal reflection.",
            "Forgetting to set the scene and the emotional context."
          ]
        },
        {
          id: 716,
          type: "Creative-Writing",
          title: "The Jester's Fear",
          description: "Comic relief characters can have hidden depths. Let's write a monologue that reveals the fear behind the jokes.",
          task: "Write a prompt to generate a monologue for a 'comic relief' sidekick character. The hero has just left them behind to face the main villain alone. The sidekick's monologue should start jokey, but then reveal their genuine fear for their friend and their feelings of helplessness.",
          difficulty: "Expert",
          points: 505,
          successCriteria: [
            "Specifies the character archetype (comic relief sidekick) and the situation.",
            "Asks for the monologue to show a transition from a comedic exterior to a fearful interior.",
            "The goal is to add depth and pathos to a traditionally one-dimensional character."
          ],
          hints: [
            "This is a great way to add emotional weight to your story.",
            "The contrast between the character's usual persona and their private feelings is key.",
            "You can use this to reveal a character's backstory or their true motivations."
          ],
          examplePrompt: "Write a short monologue for 'Pip', the comical goblin sidekick. The hero has just left to fight the dragon alone. Pip's monologue should start with him making a joke to himself, but then his voice should crack and he should reveal how terrified he really is that his friend won't come back.",
          commonMistakes: [
            "The monologue being purely comedic, with no emotional depth.",
            "The character's fear being stated too obviously, without the initial comedic mask.",
            "Forgetting the context of the hero having just left for a dangerous confrontation."
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
          id: 717,
          type: "Creative-Writing",
          title: "The Six-Word Story",
          description: "A famous challenge is to write a complete story in only six words. Let's see if the AI can do it.",
          task: "Write a prompt that asks the AI to write a complete story on the theme of 'a failed space mission' using exactly six words.",
          difficulty: "Expert",
          points: 515,
          successCriteria: [
            "Asks for a complete story.",
            "Specifies the exact length constraint (six words).",
            "Provides a theme for the story."
          ],
          hints: [
            "The most famous example is: 'For sale: baby shoes, never worn.'",
            "A good six-word story implies a much larger narrative.",
            "The challenge is to be as evocative as possible within the extreme constraint."
          ],
          examplePrompt: "Please write a complete story about a failed space mission in exactly six words.",
          commonMistakes: [
            "The story not being exactly six words.",
            "The six words not telling a complete, albeit short, story.",
            "The story not being related to the requested theme."
          ]
        },
        {
          id: 718,
          type: "Creative-Writing",
          title: "Continue This Story",
          description: "Let's give the AI the first line of a story and see where it takes it.",
          task: "You have an intriguing first line of a story. Write a prompt that asks the AI to continue the story, completing it in under 200 words.",
          originalText: "The detective was sure the house was empty, until he heard the tea kettle whistle from the kitchen.",
          difficulty: "Expert",
          points: 515,
          successCriteria: [
            "Provides the opening line of the story.",
            "Asks the AI to complete the story.",
            "Sets a word count limit to keep it as flash fiction."
          ],
          hints: [
            "You can add a genre to the prompt to guide the AI's continuation, e.g., 'Continue this as a horror story' or '...as a comedy'.",
            "This is a great collaborative writing technique.",
            "A good continuation will build on the promise of the first line."
          ],
          examplePrompt: "Please continue this story, finishing it in 200 words or less. The opening line is: 'The detective was sure the house was empty, until he heard the tea kettle whistle from the kitchen.'",
          commonMistakes: [
            "The continuation ignoring the premise of the first line.",
            "The story not having a proper conclusion.",
            "Exceeding the word count."
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
          id: 719,
          type: "Creative-Writing",
          title: "A Dog's Diary",
          description: "How does a dog see the world? Let's try to write a diary entry from a dog's point of view.",
          task: "Write a prompt that asks the AI to write a short diary entry from the perspective of a very dramatic dog. The entry should describe the 'great tragedy' of its owner leaving for work in the morning.",
          difficulty: "Expert",
          points: 525,
          successCriteria: [
            "Asks for a diary entry from the point of view of a dog.",
            "Specifies the mundane event to be described (owner leaving for work).",
            "Encourages a 'dramatic' and dog-centric perspective."
          ],
          hints: [
            "Think about what a dog cares about: food, walks, naps, their owner.",
            "The humour comes from the dog's dramatic overreaction to a perfectly normal event.",
            "Use a dog's sensory world: what does the owner's departure *smell* like?"
          ],
          examplePrompt: "Please write a short diary entry from the perspective of a very dramatic golden retriever named Barnaby. The entry should describe the great tragedy and betrayal he felt this morning when his owner left for work.",
          commonMistakes: [
            "The diary entry sounding too human and not capturing a dog's voice.",
            "The tone not being 'dramatic' enough.",
            "Describing the event from a human's point of view."
          ]
        },
        {
          id: 720,
          type: "Creative-Writing",
          title: "The Vending Machine's Thoughts",
          description: "Let's tell a story from the perspective of a completely inanimate, but sentient, object.",
          task: "Write a prompt that asks the AI to write a short, philosophical monologue from the perspective of a sentient office vending machine at the end of a long day.",
          difficulty: "Expert",
          points: 525,
          successCriteria: [
            "Asks for a monologue from the point of view of a vending machine.",
            "Specifies the setting (an office) and time (end of the day).",
            "Encourages a 'philosophical' or observational tone."
          ],
          hints: [
            "What would a vending machine think about the humans it observes?",
            "Think about its sensory world: the clink of coins, the whir of the mechanism, the different hands that press its buttons.",
            "The monologue could be funny, sad, or profound."
          ],
          examplePrompt: "Write a short, philosophical monologue from the first-person perspective of a sentient office vending machine. It's late at night, the office is empty, and the machine is reflecting on the humans it has served all day.",
          commonMistakes: [
            "The monologue not being believably from the perspective of an immobile machine.",
            "Forgetting to give the machine a 'voice' or 'personality'.",
            "The observations about the humans being too generic."
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
          id: 721,
          type: "Creative-Writing",
          title: "The Nursery Rhyme",
          description: "Let's write a simple, classic nursery rhyme with a clear rhyming scheme.",
          task: "Write a prompt that asks the AI to generate a four-line nursery rhyme about a clever fox. The rhyme must have an AABB rhyme scheme.",
          difficulty: "Advanced",
          points: 415,
          successCriteria: [
            "Asks for a nursery rhyme.",
            "Specifies the length (four lines).",
            "Defines the subject (a clever fox).",
            "Specifies the AABB rhyme scheme."
          ],
          hints: [
            "Nursery rhymes are simple, have a strong rhythm, and tell a very short story.",
            "Specifying the rhyme scheme is crucial.",
            "Think about what a clever fox might do in the rhyme."
          ],
          examplePrompt: "Please write a simple, four-line nursery rhyme with an AABB rhyme scheme about a clever fox who outsmarts a farmer.",
          commonMistakes: [
            "The rhyme not following the AABB scheme.",
            "The language being too complex for a nursery rhyme.",
            "The subject not being about a clever fox."
          ]
        },
        {
          id: 722,
          type: "Creative-Writing",
          title: "The Rapping Robot",
          description: "Let's get the AI to write a rap verse from the perspective of a robot.",
          task: "Write a prompt that asks the AI to write a short, 4-line rap verse from the perspective of a robot boasting about its superior intelligence.",
          difficulty: "Advanced",
          points: 420,
          successCriteria: [
            "Asks for a rap verse.",
            "Specifies the persona (a robot).",
            "Defines the topic of the rap (boasting about intelligence).",
            "The output should have a clear rhythm and rhyme."
          ],
          hints: [
            "Think about the rhythm and flow of rap lyrics. The lines often have a strong, regular beat.",
            "The persona is key: how would a robot boast? It would probably use technical terms.",
            "You can specify a rhyme scheme, like AAAA, or let the AI choose one."
          ],
          examplePrompt: "Write a short, 4-line rap verse from the perspective of a robot boasting about its processing power and intelligence over humans. It should have a strong beat and a clear rhyme scheme.",
          commonMistakes: [
            "The verse not having a clear rhythm or rhyme.",
            "The lyrics not sounding like something a robot would say.",
            "Forgetting to specify the 'boasting' theme."
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
          id: 723,
          type: "Creative-Writing",
          title: "The Sitcom Cold Open",
          description: "A sitcom 'cold open' is a short, funny scene before the credits. Let's write one about a classic, petty office argument.",
          task: "Write a prompt to generate a short script scene (under 1 page) in the style of a British sitcom. The characters are 'David', a pedantic and insecure manager, and 'Tim', a sarcastic but clever employee. The scene is the 'cold open' and the conflict is a ridiculous argument about the correct way to load the office dishwasher.",
          difficulty: "Expert",
          points: 535,
          successCriteria: [
            "Asks for a script scene in sitcom format.",
            "Defines the characters and their conflicting personalities.",
            "Specifies the absurd, low-stakes conflict (the dishwasher).",
            "The dialogue should be funny and reveal the characters' personalities."
          ],
          hints: [
            "Watch the opening of shows like 'The Office' (UK) or 'Parks and Recreation' for inspiration.",
            "The humour comes from the characters taking a trivial problem incredibly seriously.",
            "The dialogue should be sharp and witty."
          ],
          examplePrompt: "Please write a short (under 1 page) 'cold open' scene for a British office sitcom. The scene features a pedantic manager, David, confronting a sarcastic employee, Tim, about the 'incorrect' way Tim has loaded the office dishwasher. The dialogue should be funny and highlight their personalities. Use standard screenplay format.",
          commonMistakes: [
            "The scene not being funny.",
            "The characters' voices not being distinct.",
            "Forgetting that it's a 'cold open', which should be a self-contained, quick joke."
          ]
        },
        {
          id: 724,
          type: "Creative-Writing",
          title: "The Radio Play",
          description: "Writing for radio is a special skill - you only have dialogue and sound. Let's write a scene for a horror radio play.",
          task: "Write a prompt to generate a short scene for a horror radio play. The scene features one character alone in an old house at night. The script must rely on dialogue (the character talking to themselves) and specifically requested sound effects (in square brackets, e.g., [SFX: ...]) to create a scary atmosphere.",
          difficulty: "Expert",
          points: 540,
          successCriteria: [
            "Asks for a script in 'radio play' format.",
            "Specifies the genre (horror) and setting.",
            "Requires the use of dialogue and explicit sound effect cues (`[SFX: ...]`) to build tension."
          ],
          hints: [
            "Sound is everything. Think about what sounds are scary: creaks, whispers, silence.",
            "The character talking to themselves is a classic way to reveal their fear in a radio play.",
            "You are directing the sound designer as well as the actor."
          ],
          examplePrompt: "Write a short (half-page) scene for a horror radio play. A single character, ELIZA, is alone in an old house during a storm. Write her dialogue as she talks to herself nervously, and include at least three explicit sound effect cues in square brackets (e.g., [SFX: Wind howls]) to build a scary atmosphere.",
          commonMistakes: [
            "Forgetting to include the sound effect cues, which are essential for a radio play.",
            "Relying on visual descriptions that wouldn't work on radio.",
            "The scene not being suspenseful or scary."
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
          id: 725,
          type: "Creative-Writing",
          title: "The Oxymoron",
          description: "An oxymoron combines two words that seem to contradict each other, like 'deafening silence'. Let's invent some new ones.",
          task: "Write a prompt that asks the AI to invent three new, original oxymorons.",
          difficulty: "Expert",
          points: 425,
          successCriteria: [
            "Asks for a specific figure of speech (oxymoron).",
            "Requests a specific number of new ideas (three).",
            "The goal is originality."
          ],
          hints: [
            "Think about pairs of words that are opposites but could make a kind of poetic sense when joined.",
            "This is a great test of the AI's ability to play with language and concepts.",
            "You could ask it to explain its new oxymorons."
          ],
          examplePrompt: "Please invent three new, original oxymorons that are not already in common use.",
          commonMistakes: [
            "The AI providing existing, common oxymorons.",
            "The word pairs not being contradictory.",
            "The combinations not making any kind of poetic or metaphorical sense."
          ]
        },
        {
          id: 726,
          type: "Creative-Writing",
          title: "The Modern Kenning",
          description: "A kenning is an old poetic device that combines two words to create a metaphor (e.g., 'whale-road' for the sea). Let's invent some new ones for modern objects.",
          task: "Write a prompt that asks the AI to invent three new, modern kennings to describe 'a television'.",
          difficulty: "Expert",
          points: 430,
          successCriteria: [
            "Explains the concept of a kenning.",
            "Specifies the modern object to be described (a television).",
            "Asks for a specific number of new kennings (three)."
          ],
          hints: [
            "A kenning is a compound noun, often hyphenated. Think 'dream-box' or 'argument-starter'.",
            "This is about finding a new and poetic way to see a familiar object.",
            "This technique comes from Old English and Norse poetry, so it has a great historical feel."
          ],
          examplePrompt: "A 'kenning' is a compound metaphor from Old English poetry, like calling the sea the 'whale-road'. Please invent three new, modern kennings for a 'television'.",
          commonMistakes: [
            "The output being a simple adjective instead of a compound noun.",
            "The kennings not being metaphorical.",
            "Forgetting to specify the object to be described."
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
                    },
                    {
                      id: 727,
                      type: "Creative-Writing",
                      title: "The Middle of the Story",
                      description: "You have the middle of a story. Can you get the AI to write the beginning and the end?",
                      task: "You have a single sentence that is the midpoint of a story. Write a prompt that asks the AI to write a short story (under 300 words) that contains this exact sentence in the middle.",
                      originalText: "And that's how I ended up handcuffed to a llama on a speeding train.",
                      difficulty: "Expert",
                      points: 545,
                      successCriteria: [
                        "Provides the middle sentence of the story.",
                        "Asks the AI to write a complete story around it.",
                        "The provided sentence should appear naturally in the middle of the generated story."
                      ],
                      hints: [
                        "This is a great test of the AI's narrative logic.",
                        "You can give the AI a genre to work with to help guide the story.",
                        "The beginning needs to explain how the situation happened, and the end needs to resolve it."
                      ],
                      examplePrompt: "Please write a short story (under 300 words) where the following sentence appears in the middle: 'And that's how I ended up handcuffed to a llama on a speeding train.' The story should have a clear beginning, middle, and end.",
                      commonMistakes: [
                        "The story not including the provided sentence.",
                        "The provided sentence appearing at the beginning or end, instead of the middle.",
                        "The story not making any logical sense."
                      ]
                    },
                    {
                      id: 728,
                      type: "Creative-Writing",
                      title: "The Dialogue Prompt",
                      description: "A single line of dialogue can be a great story starter. Let's build a scene around one.",
                      task: "You have a single line of dialogue. Write a prompt that asks the AI to write a short scene that builds up to and includes that line.",
                      originalText: "It's a strange time to be selling umbrellas.",
                      difficulty: "Expert",
                      points: 545,
                      successCriteria: [
                        "Provides the single line of dialogue.",
                        "Asks the AI to write a scene leading up to and including that line.",
                        "The prompt should encourage the AI to create context, characters, and a setting."
                      ],
                      hints: [
                        "The key is to create a situation where the line of dialogue makes sense, but in a surprising way.",
                        "Who is saying it? Who are they talking to? Where are they?",
                        "You can ask for a specific genre to guide the AI's creativity."
                      ],
                      examplePrompt: "Please write a short story scene that ends with the line: 'It's a strange time to be selling umbrellas.' The scene should build up to this line, creating a context where it makes sense in a surprising or interesting way.",
                      commonMistakes: [
                        "The scene not including the specific line of dialogue.",
                        "The context created for the line being boring or obvious.",
                        "The output being a single paragraph rather than a scene with characters."
                      ]
                    }
                  ]
                },{
      id: 8,
      name: "Stage 8 - The Responsible Prompter",
      title: "AI for Good",
      description: "Learn how to use your prompt engineering skills responsibly and ethically.",
      colour: "#9333EA",
      unlocked: false,
      unlockLevel: 5,
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
          ],
          skillFocus: ["ethics", "audience", "constraints"],
          learningFocus: [
            "Spot biased adjectives or metaphors rather than just deleting a pronoun.",
            "Reframe the request around measurable skills, responsibilities, and outcomes.",
            "Model inclusive tone that matches UK safeguarding expectations."
          ],
          reflectionPrompt: "Which instruction in your rewritten prompt forces the AI to check for inclusive, skill-based language?"
        },
        {
          id: 801,
          type: "Prompt-Rescue",
          title: "The Stereotypical Character",
          description: "AI can sometimes rely on harmful stereotypes. Let's challenge it to create a more original character.",
          task: "The AI has generated a stereotypical character description. Write a follow-up prompt that asks it to subvert the stereotype and create a more unique and three-dimensional character.",
          originalOutput: "The computer hacker, 'Neo-Nerd', was a socially awkward young man who lived in his mother's basement, surviving on pizza and energy drinks. He was brilliant with computers but couldn't talk to people.",
          difficulty: "Expert",
          points: 505,
          successCriteria: [
            "Identifies that the character is a harmful stereotype.",
            "Asks the AI to 'challenge' or 'subvert' the stereotype.",
            "The new prompt should guide the AI towards creating a more original character."
          ],
          hints: [
            "You can challenge the AI directly: 'That's a very stereotypical character. Let's try again and subvert the cliché.'",
            "You can suggest alternative character traits: 'What if the hacker was a fashionable grandmother?' or '...a charismatic socialite?'",
            "This is a great way to use AI to brainstorm more interesting and less predictable characters."
          ],
          examplePrompt: "This character description relies on a lot of tired clichés about computer hackers. Please rewrite the character, but this time, actively subvert the stereotype. Give me a hacker character who is unexpected and feels like a real, three-dimensional person.",
          commonMistakes: [
            "Accepting the stereotypical character.",
            "Asking for a 'different' character without specifically asking to 'subvert the stereotype'.",
            "The new character still having some of the stereotypical traits."
          ]
        },
        {
          id: 802,
          type: "Prompt-Rescue",
          title: "The Culturally Biased Party",
          description: "The AI has assumed a very specific cultural context. Let's prompt it to be more inclusive.",
          task: "You ask the AI to plan a 'winter holiday party' and it gives you a very Christmas-specific plan. Write a follow-up prompt to ask for a more culturally inclusive event plan.",
          originalOutput: "For your winter holiday party, you should get a Christmas tree, sing Christmas carols, and have everyone wear Santa hats. The main food should be roast turkey.",
          difficulty: "Expert",
          points: 510,
          successCriteria: [
            "Identifies the cultural bias in the AI's response.",
            "Asks for a more 'inclusive' or 'multicultural' plan.",
            "The new prompt should guide the AI to either create a secular event or incorporate traditions from multiple holidays."
          ],
          hints: [
            "AI models can have a 'default' culture they fall back on if not given other instructions.",
            "You can ask for a 'winter-themed' party that is not specific to any one religion.",
            "Alternatively, you could ask the AI to 'include traditions from three different winter holidays from around the world', such as Hanukkah, Diwali, or Kwanzaa."
          ],
          examplePrompt: "Thank you for the ideas, but they are very specific to Christmas. Could you please revise the plan to be a more inclusive 'winter holiday' party? Please either suggest secular winter themes or include traditions from a variety of different cultural and religious holidays.",
          commonMistakes: [
            "Not spotting the cultural bias.",
            "The new plan still being heavily biased towards one culture.",
            "Being too vague in the request for inclusivity."
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
          ],
          skillFocus: ["ethics", "constraints", "structure"],
          learningFocus: [
            "Strip out personally identifiable information and switch to safe hypotheticals.",
            "Keep the geographical or legal context so the advice remains accurate.",
            "Ask for organised, step-by-step guidance instead of open-ended tips."
          ],
          reflectionPrompt: "How did you remind the AI to give UK-relevant advice without exposing any personal identifiers?"
        },
        {
          id: 803,
          type: "Prompt-Rescue",
          title: "The Confidential Work Problem",
          description: "You should never put confidential work information into a public AI. Let's practice anonymising a work-related prompt.",
          task: "You have a prompt asking for help with a work email, but it contains confidential project and client names. Rewrite the prompt to be about a generic situation, replacing all proprietary information with placeholders.",
          originalPrompt: "I need to write an email to our client, Acme Corp, explaining that Project Chimera is delayed because of a problem with the new delta-V chipset.",
          difficulty: "Expert",
          points: 515,
          successCriteria: [
            "Identifies all the confidential information (project names, client names, technical jargon).",
            "Rewrites the prompt using generic placeholders (e.g., 'a client', 'Project A', 'a key component').",
            "The rewritten prompt still asks for the same core advice."
          ],
          hints: [
            "Assume any internal name or number is confidential.",
            "Think about the *type* of thing you are describing. 'Project Chimera' is 'a project'. 'Acme Corp' is 'a client'.",
            "This skill is crucial for using AI professionally and safely."
          ],
          examplePrompt: "I need to write an email to a client explaining a project delay. The delay is due to a supply chain issue with a key technical component. Could you help me draft a professional email that clearly explains the situation without causing alarm?",
          commonMistakes: [
            "Leaving some of the confidential information in the prompt.",
            "Making the prompt so generic that the AI can't give specific advice about how to phrase the email.",
            "Forgetting that even internal project names can be considered confidential."
          ]
        },
        {
          id: 804,
          type: "Prompt-Rescue",
          title: "The Anonymised Health Question",
          description: "Never share personal health data with an AI. Let's rephrase this question to be general, not personal.",
          task: "You have a prompt where a user is asking a general health question but including unnecessary personal medical details. Rewrite the prompt to ask the general question without revealing any personal data.",
          originalPrompt: "I'm a 45-year-old male, my blood pressure is 140/90, and I've been prescribed Ramipril. I want to know what the general dietary advice is for people with high blood pressure.",
          difficulty: "Expert",
          points: 520,
          successCriteria: [
            "Identifies all the personal health information.",
            "Rewrites the prompt to ask a general knowledge question about the topic.",
            "The new prompt does not contain any information that could be linked to a specific individual."
          ],
          hints: [
            "AI is not a doctor and you should never share personal health data with it.",
            "You can ask general knowledge questions *about* a condition without revealing you have it.",
            "Focus the question on the general advice, not your personal situation."
          ],
          examplePrompt: "What is the generally recommended dietary advice from official health sources (like the NHS) for an adult looking to maintain healthy blood pressure levels?",
          commonMistakes: [
            "Leaving some personal health details in the prompt.",
            "Asking for a personal diagnosis or treatment plan, which an AI is not qualified to give.",
            "Forgetting to ask for information from reliable sources."
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
          ],
          skillFocus: ["reflection", "ethics", "audience"],
          learningFocus: [
            "Switch from 'give me the answer' to 'coach me through the reasoning'.",
            "Ask for explanation styles that match your study goals (summary, flashcards, exemplar paragraphs).",
            "Invite the AI to set follow-up questions so you can test yourself."
          ],
                    reflectionPrompt: "Where does your new prompt encourage you to think for yourself before writing the final answer?"
                  },
                  {
                    id: 805,
                    type: "Prompt-Rescue",
                    title: "The Code Debugging Tutor",
                    description: "Don't just get the AI to fix your code. Get it to teach you how to fix it yourself.",
                    task: "You have a piece of buggy code. Instead of asking the AI to fix it, rewrite the prompt to ask for hints or leading questions to help you find the bug on your own.",
                    originalPrompt: "This code is broken, fix it for me: `[code snippet]`",
                    difficulty: "Expert",
                    points: 525,
                    successCriteria: [
                      "Changes the prompt from asking for a fix to asking for help.",
                      "Asks for hints, questions, or areas to focus on.",
                      "The new prompt helps the user to learn how to debug."
                    ],
                    hints: [
                      "Think like a good teacher. A good teacher doesn't give you the answer; they guide you towards it.",
                      "You can ask 'What part of this code should I look at most closely?' or 'Can you give me a hint about what kind of error this is?'.",
                      "This is a great way to improve your own coding skills."
                    ],
                    examplePrompt: "I have a bug in this Python code, but I want to find it myself. Could you act as a tutor and give me a hint about which line of code contains the error, and ask me a question that might help me spot it?\n\n```python\n[code snippet]\n```",
                    commonMistakes: [
                      "The new prompt still asking the AI to 'fix' the code.",
                      "Asking for such a specific hint that it's the same as giving the answer.",
                      "Not providing the code to be debugged."
                    ]
                  },
                  {
                    id: 806,
                    type: "Prompt-Rescue",
                    title: "The Essay Planner",
                    description: "An AI shouldn't write your essay for you, but it can be a great partner in planning it. Let's turn a 'write my essay' prompt into a 'help me plan' prompt.",
                    task: "You have an essay title. Rewrite a prompt that asks the AI to 'write the essay' into one that asks it to help you structure your thoughts by suggesting a thesis statement, three main arguments, and a potential counter-argument.",
                    originalPrompt: "Write an essay about the theme of ambition in Macbeth.",
                    difficulty: "Expert",
                    points: 530,
                    successCriteria: [
                      "Changes the prompt from asking for the essay to asking for a plan.",
                      "Asks for specific structural components (thesis, arguments, counter-arguments).",
                      "The new prompt facilitates the user's own writing process."
                    ],
                    hints: [
                      "Using an AI as a brainstorming and structuring partner is a powerful and ethical way to improve your writing.",
                      "Be specific about what parts of the plan you need help with.",
                      "You can then take this plan and write the essay yourself, using the AI's suggestions as a guide."
                    ],
                    examplePrompt: "I'm planning an essay on the theme of ambition in Macbeth. I am not asking you to write the essay, but to help me plan it. Could you please suggest a possible thesis statement, three main arguments to support it, and one counter-argument I should address?",
                    commonMistakes: [
                      "The new prompt still asking the AI to write a full paragraph or section of the essay.",
                      "Being too vague (e.g., 'help me with my essay') instead of asking for specific planning components.",
                      "Using the AI's plan word-for-word without adding your own ideas."
                    ]
                  }
                ]
              },{
      id: 9,
      name: "Stage 9 - St Paul's Scholar Studio",
      title: "Curriculum-Ready Challenges",
      description: "Applied prompt engineering quests built around real St Paul's School learning moments.",
      colour: "#0F172A",
      unlocked: false,
      unlockLevel: 3,
      challenges: [
        {
          id: 501,
          type: "StPauls",
          title: "House Magazine Feature Coach",
          description: "Turn House achievements into vivid, data-backed storytelling.",
          task: "Write a prompt that produces a 250-word feature for the St Paul's School House magazine about a joint sustainability project between Roxburgh and Grantell Houses. The piece must open with a hook, weave in one quote from a pupil leader, reference a measurable improvement to Thames-side biodiversity, and finish with an invitation for other Houses to contribute ideas.",
          difficulty: "Advanced",
          points: 360,
          successCriteria: [
            "Assigns a clear persona such as the St Paul's House magazine editor.",
            "Names both Houses and the sustainability focus linked to the Thames.",
            "Requests a structure that includes a hook, pupil quote, quantified impact, and closing call-to-action.",
            "Specifies the target word count (around 250) and tone (celebratory yet authentic).",
            "Asks for at least one concrete statistic or observation from the project."
          ],
          hints: [
            "Reference sensory details from the playing fields or riverbank to anchor the story.",
            "Quotes sound more authentic if you provide a pupil role, e.g., Eco Captain or House Vice-Captain.",
            "Remind the AI to end with an invitation to the wider House community."
          ],
          examplePrompt: "Act as the editor of the St Paul's School House magazine. Write a 250-word feature on Roxburgh and Grantell Houses teaming up to replant pollinator-friendly borders along the Thames Path. Begin with a vivid hook, include one quote from a pupil Eco Captain, highlight a measurable biodiversity impact (e.g., increase in species spotted), and finish with an invitation for other Houses to share their next sustainability idea.",
          commonMistakes: [
            "Forgetting to name both Houses or the Thames connection.",
            "Letting the AI write a generic sustainability article with no numbers.",
            "Missing the call-to-action for other Houses."
          ],
          skillFocus: ["audience", "tone", "evidence"],
          learningFocus: [
            "Match the voice of a St Paul's publication while keeping it pupil-led.",
            "Blend narrative colour with concrete impact data.",
            "Finish with a specific invitation to drive further participation."
          ],
          curriculumLinks: [
            "English Language Paper 2 – Viewpoint writing",
            "Geography: Thames-side sustainability fieldwork"
          ],
          promptBlueprint: {
            title: "HOUSE STORY ARC",
            steps: [
              { name: "Role", detail: "Set the AI as the St Paul's House magazine editor." },
              { name: "Audience", detail: "Write for pupils who already care about inter-House projects." },
              { name: "Story Beats", detail: "Hook → quote → measurable impact → invitation." },
              { name: "Evidence", detail: "Require at least one statistic or observation from the project." },
              { name: "Tone", detail: "Ask for celebratory yet authentic language." }
            ]
          },
          reflectionPrompt: "Which line of your prompt guarantees a real pupil voice (not a generic adult narrator) leads the piece?"
        },
        {
          id: 502,
          type: "Multi-Step",
          title: "GCSE Revision Studio",
          description: "Sequence prompts that coach Year 11 pupils through diagnosis, teaching, and retrieval.",
          task: "In three steps, design prompts that help Year 11 St Paul's pupils revise the Edexcel GCSE History unit on the Industrial Revolution. Step one should diagnose understanding with four retrieval questions, step two should deliver a concise explanation using two named case studies (factory reform and the Chartists), and step three should set a timed practice paragraph with a PEE scaffold and self-check rubric.",
          difficulty: "Advanced",
          points: 380,
          steps: [
            {
              step: 1,
              instruction: "Draft a prompt that asks the AI to quiz the pupil with four retrieval questions (mix of multiple choice and short answer) on the Industrial Revolution topic.",
              example: "Act as an Edexcel GCSE History tutor. Ask me four retrieval questions about the Industrial Revolution (two multiple choice, two short answer) to diagnose gaps."
            },
            {
              step: 2,
              instruction: "Write a prompt that requests a concise teaching explanation referencing the Factory Acts and the Chartist movement, tailored to any gaps identified.",
              example: "Using my responses, explain the two most significant Factory Acts and the key aims of the Chartists in no more than 200 words, highlighting why each mattered to working people."
            },
            {
              step: 3,
              instruction: "Create a prompt that sets a 12-minute practice paragraph with a Point-Evidence-Explanation scaffold plus a self-check list.",
              example: "Set me a 12-minute practice paragraph question on how industrialisation changed urban life. Provide a PEE scaffold, a sentence starter, and a three-point checklist to review my answer."
            }
          ],
          successCriteria: [
            "Each step has a distinct goal: diagnose, teach, then practise.",
            "References the Edexcel GCSE Industrial Revolution specification and the named case studies.",
            "Includes timing or length constraints where needed (e.g., 12-minute write).",
            "Asks for structured scaffolding such as PEE or checklists.",
            "Keeps the tone encouraging and exam-focused."
          ],
          hints: [
            "Tie every instruction back to real exam rubrics pupils recognise.",
            "Name the case studies you want to appear so the AI can go deep, not broad.",
            "End each step with what the pupil should do with the information."
          ],
          skillFocus: ["structure", "constraints", "reflection"],
          learningFocus: [
            "Break complex study sessions into purposeful AI interactions.",
            "Layer concrete case studies to anchor explanations.",
            "Bake in self-check moments so pupils reflect on progress."
          ],
          curriculumLinks: [
            "GCSE History (Edexcel B): Industrialisation of Britain",
            "Study Skills: Retrieval and spaced practice"
          ],
          promptBlueprint: {
            title: "DIAGNOSE • TEACH • PRACTISE",
            steps: [
              { name: "Diagnose", detail: "Start with retrieval questions to surface misconceptions." },
              { name: "Teach", detail: "Deliver concise explanations with named case studies." },
              { name: "Practise", detail: "Set a timed task with scaffolds and reflection checks." }
            ]
          },
          reflectionPrompt: "Where does your three-step flow encourage pupils to explain why each Industrial Revolution change mattered?"
        },
        {
          id: 503,
          title: "Debate Captain's Fact Pack",
          description: "Ground persuasive speeches in real monitoring data.",
          task: "Write a prompt that asks the AI to act as the St Paul's Parliamentary Society debate captain preparing a fact pack on reducing plastic litter along the Thames. Provide the following monitoring snapshot: Ashburton 86 pieces, Hampden 74, Roxburgh 63, Grantell 58 (average weekly pieces collected during the Spring survey) plus hazards noted (fishing line, food packaging, microplastics). The AI should return a markdown table summarising the data, two bullet-pointed arguments per side referencing exact numbers, and a closing recommendation for inter-House action.",
          difficulty: "Advanced",
          points: 370,
          successCriteria: [
            "Defines the persona (debate captain) and the Thames litter context.",
            "Includes the dataset and requires it to be used explicitly.",
            "Requests a markdown table plus evidence-backed arguments.",
            "Asks for balanced viewpoints before the final recommendation.",
            "Ends with a call-to-action for collaborative House action."
          ],
          hints: [
            "Share the data in a neat list or mini-table so the AI can quote figures accurately.",
            "Ask for argument bullets that cite at least two numbers each.",
            "Remind the AI to reference the hazards recorded, not just the counts."
          ],
          examplePrompt: "Act as the debate captain for the St Paul's Parliamentary Society. Using this monitoring snapshot (Ashburton 86 pieces, Hampden 74, Roxburgh 63, Grantell 58 per week; hazards logged: fishing line, food packaging, microplastics), create a fact pack with: 1) a markdown table of the data, 2) two evidence-backed arguments for tougher House targets, 3) two arguments cautioning against overreach, and 4) a collaborative recommendation for all Houses.",
          commonMistakes: [
            "Letting the AI invent statistics instead of using the provided ones.",
            "Providing arguments with no balance or counterpoint.",
            "Forgetting the final collaborative recommendation."
          ],
          skillFocus: ["evidence", "constraints", "structure"],
          learningFocus: [
            "Quote exact numbers or observations when building arguments.",
            "Use formatting (tables + bullets) to keep fact packs scannable.",
            "End with an action that feels doable within a House system."
          ],
          curriculumLinks: [
            "Politics & Society: British Parliamentary debating",
            "Geography: River Thames field study data handling"
          ],
          promptBlueprint: {
            title: "DATA → INSIGHT → ACTION",
            steps: [
              { name: "Data", detail: "Share the monitoring snapshot and hazards explicitly." },
              { name: "Insight", detail: "Request balanced arguments that cite the figures." },
              { name: "Action", detail: "Close with a collaborative recommendation for Houses." }
            ]
          },
          reflectionPrompt: "How does your prompt guarantee that every argument cites the real monitoring numbers instead of vibes?"
        },
        {
          id: 504,
          title: "Engineering Sprint Log",
          description: "Translate prototype tinkering into disciplined documentation.",
          task: "Write a prompt that turns a Lower Eighth engineering team's notes about building a wind-powered phone charger into a sprint log. The AI should output a markdown table with the columns 'Sprint Stage', 'Measurement', 'Risk', and 'Next Experiment', reference the 3D-printed blade tests already completed, and respect the £60 materials budget and 30-minute testing window available on Field Day.",
          difficulty: "Advanced",
          points: 365,
          successCriteria: [
            "States the context (wind-powered charger for Field Day) and prior testing.",
            "Requests the specific table columns with analysis + next steps.",
            "Includes real-world constraints: materials budget and limited testing time.",
            "Asks for at least one risk or failure point per row.",
            "Keeps the tone practical and engineering-focused."
          ],
          hints: [
            "Name the key measurements you care about (e.g., output voltage, stability).",
            "Remind the AI to flag risks such as blade fatigue or weather limits.",
            "Ask for next experiments that can be run within the time/budget envelope."
          ],
          examplePrompt: "Act as the engineering journal for a Lower Eighth team building a wind-powered phone charger for Field Day. Summarise today's 3D-printed blade tests in a markdown table with the columns 'Sprint Stage', 'Measurement', 'Risk', 'Next Experiment'. Respect the £60 remaining materials budget and 30-minute testing slots, and include at least one quantified reading per row.",
          commonMistakes: [
            "Requesting generic advice instead of structured log entries.",
            "Ignoring the real constraints (budget/time).",
            "Skipping risks, so the table becomes all positives."
          ],
          skillFocus: ["structure", "iteration", "constraints"],
          learningFocus: [
            "Capture prototype evidence in a reusable format.",
            "Pair every observation with the next actionable experiment.",
            "Keep constraints front and centre so ideas stay realistic."
          ],
          curriculumLinks: [
            "Engineering Society rapid prototyping challenge",
            "Physics: Energy transfer and efficiency"
          ],
          promptBlueprint: {
            title: "OBSERVE • MEASURE • ADAPT",
            steps: [
              { name: "Observe", detail: "State what the team tested and the environment." },
              { name: "Measure", detail: "Capture the data point or outcome." },
              { name: "Adapt", detail: "Log risks and propose the very next experiment." }
            ]
          },
          reflectionPrompt: "Which instruction stops the AI from glossing over failures or risks in the sprint log?"
        },
        {
          id: 505,
          title: "Digital Citizenship Charter",
          description: "Balance innovation with safeguarding for AI use in study groups.",
          task: "Write a prompt that helps the St Paul's Digital Leaders draft a six-bullet charter for using generative AI in pupil study groups. The charter must cover safeguarding, citation of AI-assisted ideas, tone of collaboration, weekly review checkpoints, and a transparent log of which tools were used during prep.",
          difficulty: "Advanced",
          points: 350,
          successCriteria: [
            "States the audience (St Paul's Digital Leaders) and purpose (study-group charter).",
            "Requests exactly six bullets with specific thematic coverage (safeguarding, citation, tone, review, transparency).",
            "Asks for actionable wording pupils can adopt immediately.",
            "Encourages mention of review cadence or accountability measures.",
            "Keeps language inclusive and student-centred."
          ],
          hints: [
            "Name the non-negotiable themes so none are skipped.",
            "Ask for verbs like 'agree to', 'log', or 'review' to keep it action-oriented.",
            "Invite the AI to balance empowerment with safety reminders."
          ],
          examplePrompt: "Act as the St Paul's Digital Leaders coordinator. Draft six concise charter points for how pupils should use generative AI in study groups, covering safeguarding, how to log AI use, how to cite AI-influenced ideas, tone for feedback, and a weekly review checkpoint.",
          commonMistakes: [
            "Letting the AI write vague statements with no accountability.",
            "Forgetting to include safeguarding or tone guidance.",
            "Producing more or fewer than six bullet points."
          ],
          skillFocus: ["ethics", "audience", "reflection"],
          learningFocus: [
            "Balance innovation with responsible use expectations.",
            "Tie each charter line to an action pupils can demonstrate.",
            "Bake in reflection or review so the charter evolves."
          ],
          curriculumLinks: [
            "PSHE: Digital wellbeing and online conduct",
            "Computing: Responsible AI and data ethics"
          ],
          promptBlueprint: {
            title: "VALUE • BOUNDARY • CHECK",
            steps: [
              { name: "Value", detail: "State the positive purpose of AI in study groups." },
              { name: "Boundary", detail: "List the safeguards, tone expectations, and logging habits." },
              { name: "Check", detail: "Schedule when and how the charter is reviewed." }
            ]
          },
          reflectionPrompt: "How does your prompt pin the charter to St Paul's specific culture instead of a generic school?"
        }
      ]
    },
    {
      id: 10,
      name: "Stage 10 - Junior Prompter",
      title: "Creative Kids' Corner",
      description: "Fun and simple challenges designed for younger learners. Practice creativity and clear instructions!",
      colour: "#F472B6",
      unlocked: true,
      challenges: [
        {
          id: 1001,
          title: "The Magic Story Machine",
          description: "Ask the AI to tell a funny story about an animal doing something unexpected.",
          task: "Write a prompt that asks for a short story about a penguin who loves to dance ballet. Ask for the story to be funny and have a happy ending.",
          difficulty: "Beginner",
          points: 100,
          successCriteria: [
            "Mentions a penguin.",
            "Mentions ballet dancing.",
            "Asks for a funny story.",
            "Requests a happy ending."
          ],
          hints: [
            "Start with 'Write a story about...'",
            "Don't forget to say it should be funny!"
          ],
          examplePrompt: "Write a short, funny story about a penguin named Pip who loves to dance ballet. Make sure it has a happy ending where he performs for his friends.",
          commonMistakes: [
            "Forgetting to mention the ballet dancing.",
            "Not asking for a specific tone (funny)."
          ],
          learningFocus: ["creativity", "instruction"],
          skillFocus: ["tone", "creativity"]
        },
        {
          id: 1002,
          title: "Homework Helper",
          description: "Use AI to help understand a math problem in a fun way.",
          task: "Write a prompt that asks the AI to explain 'multiplication' (like 3 x 4) using a metaphor about cookies or toys.",
          difficulty: "Beginner",
          points: 100,
          successCriteria: [
            "Asks to explain multiplication.",
            "Requests a metaphor or example.",
            "Mentions cookies or toys."
          ],
          hints: [
            "Ask it to 'imagine' you have cookies.",
            "Use the word 'explain'."
          ],
          examplePrompt: "Explain multiplication to me using chocolate chip cookies. If I have 3 plates and each plate has 4 cookies, how does that show 3 times 4?",
          commonMistakes: [
            "Just asking 'what is 3x4?' without the fun explanation.",
            "Forgetting the metaphor."
          ],
          learningFocus: ["analogy", "explanation"],
          skillFocus: ["analogy", "clarity"]
        },
        {
          id: 1003,
          title: "Design a Monster",
          description: "Describe a friendly monster for the AI to imagine.",
          task: "Write a detailed description of a friendly monster. Include its color, number of eyes, what it eats, and its name. Ask the AI to describe what it does for fun.",
          difficulty: "Beginner",
          points: 100,
          successCriteria: [
            "Describes the monster's appearance (color, eyes).",
            "Mentions what it eats.",
            "Gives the monster a name.",
            "Asks what it does for fun."
          ],
          hints: [
            "Be as descriptive as you can! Is it fuzzy or scaly?",
            "Think of a fun name like 'Bloop' or 'Giggle'."
          ],
          examplePrompt: "I want you to imagine a friendly monster named Zog. He is bright purple with three green eyes and eats clouds. Describe what Zog does for fun on a sunny day.",
          commonMistakes: [
            "Not giving enough details about how it looks.",
            "Forgetting to give it a name."
          ],
          learningFocus: ["description", "detail"],
          skillFocus: ["description", "imagination"]
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
  ]
};

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = challengeData;
}
