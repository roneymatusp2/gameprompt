// Mini-Games System for Prompt Quest
class PromptMiniGames {
    constructor() {
        this.currentGame = null;
        this.gameScores = {
            racing: [],
            puzzle: [],
            match: [],
            fillBlanks: []
        };
        this.init();
    }

    init() {
        this.createGameHub();
        this.setupEventListeners();
    }

    createGameHub() {
        const hubHTML = `
            <div class="mini-games-hub hidden" id="mini-games-hub">
                <!-- Navigation Bar -->
                <nav class="mini-games-nav bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg px-6 py-4 mb-8">
                    <div class="max-w-7xl mx-auto flex justify-between items-center">
                        <div class="flex items-center space-x-4">
                            <a href="index.html" class="font-display text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">Prompt Quest</a>
                            <span class="text-sm text-gray-400">Mini-Games Arena</span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <a href="index.html" class="btn btn-secondary text-sm">
                                🏠 Home
                            </a>
                            <button class="back-to-main btn btn-secondary text-sm">
                                ← Back
                            </button>
                        </div>
                    </div>
                </nav>

                <!-- Main Content -->
                <div class="max-w-7xl mx-auto px-6 py-8">
                    <div class="hub-header text-center mb-12">
                        <h2 class="text-5xl font-bold gradient-text mb-4">🎮 Mini-Games Arena</h2>
                        <p class="text-xl text-gray-400">Master prompt engineering through fun challenges!</p>
                    </div>
                    
                    <div class="games-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        ${this.createGameCards()}
                    </div>
                </div>

                <!-- Footer -->
                <footer class="bg-gray-900 bg-opacity-50 backdrop-blur-lg text-white py-8 px-4 mt-16 border-t border-gray-800">
                    <div class="max-w-7xl mx-auto text-center">
                        <div class="font-display text-2xl font-bold mb-3 gradient-text">Prompt Quest</div>
                        <p class="text-gray-400 mb-4">Master the art of AI communication through interactive learning</p>
                        <div class="text-sm text-gray-500">
                            © 2025 Prompt Quest. Educational tool for AI literacy development.
                        </div>
                        <div class="text-xs text-gray-600 mt-2">
                            Created by Mr Nascimento
                        </div>
                    </div>
                </footer>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', hubHTML);
    }

    createGameCards() {
        const games = [
            {
                id: 'racing',
                title: 'Prompt Racing',
                icon: '🏁',
                description: 'Race against time to create perfect prompts!',
                color: 'from-blue-400 to-blue-600'
            },
            {
                id: 'puzzle',
                title: 'Prompt Puzzle',
                icon: '🧩',
                description: 'Rearrange scrambled prompt parts',
                color: 'from-purple-400 to-purple-600'
            },
            {
                id: 'match',
                title: 'Prompt Match',
                icon: '🎯',
                description: 'Match prompts to their ideal outputs',
                color: 'from-green-400 to-green-600'
            },
            {
                id: 'fillBlanks',
                title: 'Fill the Blanks',
                icon: '✏️',
                description: 'Complete partial prompts correctly',
                color: 'from-orange-400 to-orange-600'
            }
        ];

        return games.map(game => `
            <div class="game-card bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
                 data-game-id="${game.id}">
                <div class="game-icon text-6xl mb-4 text-center">${game.icon}</div>
                <h3 class="text-xl font-bold mb-2">${game.title}</h3>
                <p class="text-gray-600 mb-4">${game.description}</p>
                <div class="play-button bg-gradient-to-r ${game.color} text-white text-center py-3 rounded-lg font-bold hover:opacity-90">
                    Play Now
                </div>
                <div class="high-score mt-2 text-center text-sm text-gray-500">
                    High Score: <span class="font-bold">${this.getHighScore(game.id)}</span>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            const gameCard = e.target.closest('.game-card');
            if (gameCard) {
                this.startGame(gameCard.dataset.gameId);
            }

            if (e.target.classList.contains('back-to-main')) {
                this.closeGameHub();
            }

            if (e.target.classList.contains('open-mini-games')) {
                this.openGameHub();
            }
        });
    }

    openGameHub() {
        document.getElementById('mini-games-hub').classList.remove('hidden');
        document.querySelector('.main-game-container')?.classList.add('hidden');
    }

    closeGameHub() {
        document.getElementById('mini-games-hub').classList.add('hidden');
        document.querySelector('.main-game-container')?.classList.remove('hidden');
    }

    startGame(gameId) {
        switch(gameId) {
            case 'racing':
                this.startPromptRacing();
                break;
            case 'puzzle':
                this.startPromptPuzzle();
                break;
            case 'match':
                this.startPromptMatch();
                break;
            case 'fillBlanks':
                this.startFillBlanks();
                break;
        }
    }

    // PROMPT RACING GAME
    startPromptRacing() {
        const gameHTML = `
            <div class="prompt-racing-game full-screen-game">
                <div class="game-header flex justify-between items-center mb-6">
                    <h2 class="text-3xl font-bold">🏁 Prompt Racing</h2>
                    <div class="game-stats flex gap-6">
                        <div class="timer text-2xl font-bold text-red-500">
                            <span class="time-left">60</span>s
                        </div>
                        <div class="score text-2xl font-bold text-green-500">
                            Score: <span class="current-score">0</span>
                        </div>
                    </div>
                </div>
                
                <div class="racing-track bg-gray-100 rounded-xl p-6 mb-6">
                    <div class="challenge-prompt bg-white p-4 rounded-lg mb-4">
                        <h3 class="font-bold mb-2">Create a prompt for:</h3>
                        <p class="challenge-text text-lg"></p>
                    </div>
                    
                    <div class="racing-input">
                        <textarea class="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500" 
                                  placeholder="Type your prompt here..." 
                                  rows="3"></textarea>
                        <button class="submit-racing-prompt mt-4 btn btn-primary w-full">
                            Submit Prompt (Enter)
                        </button>
                    </div>
                    
                    <div class="racing-progress mt-4">
                        <div class="progress-bar bg-gray-300 rounded-full h-4 overflow-hidden">
                            <div class="progress-fill bg-gradient-to-r from-green-400 to-blue-500 h-full transition-all duration-300" 
                                 style="width: 0%"></div>
                        </div>
                    </div>
                </div>
                
                <button class="exit-game btn btn-secondary">Exit Game</button>
            </div>
        `;

        this.showGame(gameHTML);
        this.initPromptRacing();
    }

    initPromptRacing() {
        const challenges = [
            "Write a haiku about coding",
            "Explain quantum computing to a child",
            "Create a recipe using only 3 ingredients",
            "Describe the color blue to someone who can't see",
            "Write a motivational quote for programmers",
            "Explain why the sky is blue in one sentence",
            "Create a superhero origin story in 50 words"
        ];

        let currentChallenge = 0;
        let score = 0;
        let timeLeft = 60;

        const showNextChallenge = () => {
            if (currentChallenge < challenges.length) {
                document.querySelector('.challenge-text').textContent = challenges[currentChallenge];
                document.querySelector('.racing-input textarea').value = '';
                document.querySelector('.racing-input textarea').focus();
            } else {
                this.endRacingGame(score);
            }
        };

        const timer = setInterval(() => {
            timeLeft--;
            document.querySelector('.time-left').textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                this.endRacingGame(score);
            }
        }, 1000);

        showNextChallenge();

        // Handle prompt submission
        const submitBtn = document.querySelector('.submit-racing-prompt');
        const textarea = document.querySelector('.racing-input textarea');

        const submitPrompt = async () => {
            const prompt = textarea.value.trim();
            if (prompt.length < 10) {
                this.showQuickFeedback('Prompt too short! Write at least 10 characters.', 'error');
                return;
            }
            
            // Disable submit button during evaluation
            submitBtn.disabled = true;
            submitBtn.textContent = 'Evaluating...';
            
            try {
                // Create a simple challenge object for evaluation
                const miniChallenge = {
                    id: currentChallenge,
                    title: challenges[currentChallenge],
                    task: challenges[currentChallenge],
                    description: `Create a prompt for: ${challenges[currentChallenge]}`,
                    successCriteria: [
                        'Creates a proper AI instruction prompt',
                        'Does not simply copy the challenge text',
                        'Includes context or persona',
                        'Is clear and specific'
                    ]
                };
                
                // Use Gemini to evaluate the prompt
                const evaluation = await geminiIntegration.evaluatePrompt(prompt, miniChallenge);
                
                // Award points based on evaluation score
                const pointsEarned = Math.round(evaluation.overallScore);
                
                if (pointsEarned === 0) {
                    console.log('🚫 Showing copy detection feedback...');
                    this.showQuickFeedback('❌ Copying detected! Write a proper prompt instruction.', 'error');
                    // Don't advance, let them try again
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit Prompt (Enter)';
                    return;
                }
                
                score += pointsEarned;
                currentChallenge++;
                
                document.querySelector('.current-score').textContent = score;
                document.querySelector('.progress-fill').style.width = 
                    `${(currentChallenge / challenges.length) * 100}%`;
                
                // Show success animation with actual score
                const feedback = pointsEarned >= 80 ? 'Excellent prompt!' : 
                                pointsEarned >= 60 ? 'Good prompt!' : 
                                'Acceptable prompt.';
                this.showQuickFeedback(`${feedback} +${pointsEarned}`, 'success');
                
                showNextChallenge();
            } catch (error) {
                console.error('Error evaluating prompt:', error);
                this.showQuickFeedback('Error evaluating prompt. Try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Prompt (Enter)';
            }
        };

        submitBtn.addEventListener('click', submitPrompt);
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submitPrompt();
            }
        });

        document.querySelector('.exit-game').addEventListener('click', () => {
            clearInterval(timer);
            this.closeCurrentGame();
        });
    }

    // PROMPT PUZZLE GAME
    startPromptPuzzle() {
        const gameHTML = `
            <div class="prompt-puzzle-game full-screen-game">
                <div class="game-header text-center mb-6">
                    <h2 class="text-3xl font-bold mb-2">🧩 Prompt Puzzle</h2>
                    <p class="text-gray-600">Drag and drop to arrange the prompt correctly</p>
                </div>
                
                <div class="puzzle-area bg-gray-100 rounded-xl p-6">
                    <div class="target-prompt bg-white p-4 rounded-lg mb-6">
                        <h3 class="font-bold mb-2">Target Prompt:</h3>
                        <p class="target-text text-lg font-mono"></p>
                    </div>
                    
                    <div class="puzzle-pieces flex flex-wrap gap-3 mb-6 min-h-[100px] p-4 bg-gray-200 rounded-lg">
                        <!-- Scrambled pieces will be added here -->
                    </div>
                    
                    <div class="puzzle-solution flex flex-wrap gap-3 min-h-[100px] p-4 bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg">
                        <p class="empty-text text-gray-400 w-full text-center">Drop pieces here in correct order</p>
                    </div>
                    
                    <button class="check-puzzle mt-4 btn btn-primary w-full">Check Solution</button>
                </div>
                
                <div class="puzzle-score text-center mt-4">
                    <p class="text-2xl font-bold">Moves: <span class="moves-count">0</span></p>
                </div>
                
                <button class="exit-game btn btn-secondary mt-4">Exit Game</button>
            </div>
        `;

        this.showGame(gameHTML);
        this.initPromptPuzzle();
    }

    initPromptPuzzle() {
        const puzzles = [
            "Explain machine learning to a 10-year-old using simple analogies",
            "Create a step-by-step guide for making the perfect cup of coffee",
            "Write a short story about a robot learning to paint in exactly 100 words"
        ];

        let currentPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
        let moves = 0;

        // Display target prompt
        document.querySelector('.target-text').textContent = currentPuzzle;

        // Create scrambled pieces
        const words = currentPuzzle.split(' ');
        const scrambled = [...words].sort(() => Math.random() - 0.5);
        
        const piecesContainer = document.querySelector('.puzzle-pieces');
        scrambled.forEach((word, index) => {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece bg-white px-4 py-2 rounded-lg shadow cursor-move select-none';
            piece.textContent = word;
            piece.draggable = true;
            piece.dataset.word = word;
            piece.dataset.index = index;
            piecesContainer.appendChild(piece);
        });

        // Setup drag and drop
        let draggedPiece = null;

        document.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('puzzle-piece')) {
                draggedPiece = e.target;
                e.target.classList.add('opacity-50');
            }
        });

        document.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('puzzle-piece')) {
                e.target.classList.remove('opacity-50');
            }
        });

        const solutionArea = document.querySelector('.puzzle-solution');
        
        solutionArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            solutionArea.classList.add('bg-blue-100');
        });

        solutionArea.addEventListener('dragleave', () => {
            solutionArea.classList.remove('bg-blue-100');
        });

        solutionArea.addEventListener('drop', (e) => {
            e.preventDefault();
            solutionArea.classList.remove('bg-blue-100');
            
            if (draggedPiece) {
                const emptyText = solutionArea.querySelector('.empty-text');
                if (emptyText) emptyText.remove();
                
                solutionArea.appendChild(draggedPiece);
                moves++;
                document.querySelector('.moves-count').textContent = moves;
            }
        });

        // Allow pieces to be dragged back
        piecesContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        piecesContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedPiece && draggedPiece.parentElement === solutionArea) {
                piecesContainer.appendChild(draggedPiece);
            }
        });

        // Check solution
        document.querySelector('.check-puzzle').addEventListener('click', () => {
            const solutionPieces = Array.from(solutionArea.querySelectorAll('.puzzle-piece'));
            const solution = solutionPieces.map(p => p.textContent).join(' ');
            
            if (solution === currentPuzzle) {
                const score = Math.max(1000 - (moves * 10), 100);
                this.showQuickFeedback(`Perfect! Score: ${score}`, 'success');
                this.gameScores.puzzle.push(score);
                setTimeout(() => this.closeCurrentGame(), 2000);
            } else {
                this.showQuickFeedback('Not quite right. Keep trying!', 'error');
            }
        });

        document.querySelector('.exit-game').addEventListener('click', () => {
            this.closeCurrentGame();
        });
    }

    // PROMPT MATCH GAME
    startPromptMatch() {
        const gameHTML = `
            <div class="prompt-match-game full-screen-game">
                <div class="game-header text-center mb-6">
                    <h2 class="text-3xl font-bold mb-2">🎯 Prompt Match</h2>
                    <p class="text-gray-600">Match each prompt with its best output</p>
                </div>
                
                <div class="match-board grid grid-cols-2 gap-6">
                    <div class="prompts-column">
                        <h3 class="text-xl font-bold mb-4">Prompts</h3>
                        <div class="prompts-list space-y-3">
                            <!-- Prompts will be added here -->
                        </div>
                    </div>
                    
                    <div class="outputs-column">
                        <h3 class="text-xl font-bold mb-4">Outputs</h3>
                        <div class="outputs-list space-y-3">
                            <!-- Outputs will be added here -->
                        </div>
                    </div>
                </div>
                
                <div class="match-score text-center mt-6">
                    <p class="text-2xl font-bold">Matches: <span class="matches-made">0</span> / <span class="total-matches">5</span></p>
                </div>
                
                <button class="exit-game btn btn-secondary mt-4">Exit Game</button>
            </div>
        `;

        this.showGame(gameHTML);
        this.initPromptMatch();
    }

    initPromptMatch() {
        const matchPairs = [
            {
                prompt: "Write a haiku about coding",
                output: "Fingers dance on keys\nLogic flows through silicon\nBugs flee from my code"
            },
            {
                prompt: "Explain AI in one sentence",
                output: "AI is computer systems that can perform tasks that typically require human intelligence"
            },
            {
                prompt: "Create a metaphor for learning",
                output: "Learning is like building a house: each lesson is a brick that strengthens your foundation"
            },
            {
                prompt: "List 3 benefits of reading",
                output: "1. Expands vocabulary\n2. Improves focus\n3. Reduces stress"
            },
            {
                prompt: "Describe success briefly",
                output: "Success is achieving your goals while maintaining your values and well-being"
            }
        ];

        let selectedPrompt = null;
        let matchesFound = 0;
        let attempts = 0;

        // Shuffle outputs
        const shuffledOutputs = [...matchPairs].sort(() => Math.random() - 0.5);

        // Create prompt cards
        const promptsList = document.querySelector('.prompts-list');
        matchPairs.forEach((pair, index) => {
            const card = document.createElement('div');
            card.className = 'match-card prompt-card bg-blue-100 p-4 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors';
            card.dataset.index = index;
            card.innerHTML = `
                <p class="font-medium">${pair.prompt}</p>
            `;
            promptsList.appendChild(card);
        });

        // Create output cards
        const outputsList = document.querySelector('.outputs-list');
        shuffledOutputs.forEach((pair, index) => {
            const card = document.createElement('div');
            card.className = 'match-card output-card bg-green-100 p-4 rounded-lg cursor-pointer hover:bg-green-200 transition-colors';
            card.dataset.matchIndex = matchPairs.indexOf(pair);
            card.innerHTML = `
                <p class="text-sm">${pair.output}</p>
            `;
            outputsList.appendChild(card);
        });

        // Handle card selection
        document.addEventListener('click', (e) => {
            const promptCard = e.target.closest('.prompt-card');
            const outputCard = e.target.closest('.output-card');

            if (promptCard && !promptCard.classList.contains('matched')) {
                // Deselect previous selection
                document.querySelectorAll('.prompt-card.selected').forEach(c => 
                    c.classList.remove('selected', 'ring-2', 'ring-blue-500'));
                
                promptCard.classList.add('selected', 'ring-2', 'ring-blue-500');
                selectedPrompt = parseInt(promptCard.dataset.index);
            }

            if (outputCard && selectedPrompt !== null && !outputCard.classList.contains('matched')) {
                attempts++;
                const outputIndex = parseInt(outputCard.dataset.matchIndex);

                if (selectedPrompt === outputIndex) {
                    // Correct match!
                    matchesFound++;
                    
                    document.querySelector(`.prompt-card[data-index="${selectedPrompt}"]`)
                        .classList.add('matched', 'bg-green-300', 'opacity-50');
                    outputCard.classList.add('matched', 'bg-green-300', 'opacity-50');
                    
                    this.showQuickFeedback('Perfect match!', 'success');
                    document.querySelector('.matches-made').textContent = matchesFound;
                    
                    selectedPrompt = null;
                    document.querySelectorAll('.prompt-card.selected').forEach(c => 
                        c.classList.remove('selected', 'ring-2', 'ring-blue-500'));

                    if (matchesFound === matchPairs.length) {
                        const score = Math.max(1000 - (attempts - matchesFound) * 50, 100);
                        setTimeout(() => {
                            this.showQuickFeedback(`All matched! Score: ${score}`, 'success');
                            this.gameScores.match.push(score);
                            setTimeout(() => this.closeCurrentGame(), 2000);
                        }, 500);
                    }
                } else {
                    // Wrong match
                    outputCard.classList.add('shake-animation');
                    this.showQuickFeedback('Try again!', 'error');
                    setTimeout(() => outputCard.classList.remove('shake-animation'), 500);
                }
            }
        });

        document.querySelector('.total-matches').textContent = matchPairs.length;
        document.querySelector('.exit-game').addEventListener('click', () => {
            this.closeCurrentGame();
        });
    }

    // FILL THE BLANKS GAME
    startFillBlanks() {
        const gameHTML = `
            <div class="fill-blanks-game full-screen-game">
                <div class="game-header text-center mb-6">
                    <h2 class="text-3xl font-bold mb-2">✏️ Fill the Blanks</h2>
                    <p class="text-gray-600">Complete the prompts with the right words</p>
                </div>
                
                <div class="blanks-challenges space-y-6">
                    <!-- Challenges will be added here -->
                </div>
                
                <button class="check-all-answers btn btn-primary mt-6 w-full">Check All Answers</button>
                
                <div class="blanks-score text-center mt-4">
                    <p class="text-2xl font-bold">Score: <span class="current-score">0</span> / <span class="max-score">100</span></p>
                </div>
                
                <button class="exit-game btn btn-secondary mt-4">Exit Game</button>
            </div>
        `;

        this.showGame(gameHTML);
        this.initFillBlanks();
    }

    initFillBlanks() {
        const challenges = [
            {
                template: "_____ the concept of machine learning _____ simple terms _____ a beginner",
                answers: ["Explain", "in", "for"],
                options: ["Explain", "Describe", "in", "with", "for", "to", "Show", "using"]
            },
            {
                template: "Create a _____ list of _____ for staying _____ while working from home",
                answers: ["detailed", "tips", "productive"],
                options: ["detailed", "simple", "list", "tips", "ideas", "productive", "focused", "busy"]
            },
            {
                template: "_____ a creative story about a _____ who discovers a _____ ability",
                answers: ["Write", "character", "magical"],
                options: ["Write", "Tell", "character", "person", "magical", "special", "unique", "Create"]
            }
        ];

        const challengesContainer = document.querySelector('.blanks-challenges');
        let totalScore = 0;

        challenges.forEach((challenge, index) => {
            const challengeDiv = document.createElement('div');
            challengeDiv.className = 'blank-challenge bg-white p-6 rounded-lg shadow';
            
            // Create template with input fields
            let templateHTML = challenge.template;
            challenge.answers.forEach((answer, i) => {
                templateHTML = templateHTML.replace('_____', 
                    `<input type="text" class="blank-input inline-block w-32 px-2 py-1 border-b-2 border-gray-400 focus:border-blue-500 text-center" 
                            data-challenge="${index}" data-blank="${i}" placeholder="?">`);
            });

            challengeDiv.innerHTML = `
                <div class="challenge-text text-lg mb-4">${templateHTML}</div>
                <div class="word-options flex flex-wrap gap-2">
                    ${challenge.options.map(option => 
                        `<button class="word-option px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" 
                                 data-word="${option}">${option}</button>`
                    ).join('')}
                </div>
                <div class="feedback-text mt-2 text-sm font-medium"></div>
            `;

            challengesContainer.appendChild(challengeDiv);
        });

        // Handle word option clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('word-option')) {
                const word = e.target.dataset.word;
                const activeInput = document.querySelector('.blank-input:focus');
                if (activeInput) {
                    activeInput.value = word;
                    // Move to next input
                    const nextInput = activeInput.nextElementSibling?.querySelector('.blank-input') ||
                                    activeInput.parentElement.nextElementSibling?.querySelector('.blank-input');
                    if (nextInput) nextInput.focus();
                }
            }
        });

        // Check answers
        document.querySelector('.check-all-answers').addEventListener('click', () => {
            totalScore = 0;
            let maxScore = challenges.length * 100;

            challenges.forEach((challenge, challengeIndex) => {
                let challengeScore = 0;
                let allCorrect = true;

                challenge.answers.forEach((correctAnswer, blankIndex) => {
                    const input = document.querySelector(
                        `.blank-input[data-challenge="${challengeIndex}"][data-blank="${blankIndex}"]`
                    );
                    
                    if (input.value.toLowerCase() === correctAnswer.toLowerCase()) {
                        input.classList.add('border-green-500', 'bg-green-50');
                        input.classList.remove('border-red-500', 'bg-red-50');
                        challengeScore += 33.33;
                    } else {
                        input.classList.add('border-red-500', 'bg-red-50');
                        input.classList.remove('border-green-500', 'bg-green-50');
                        allCorrect = false;
                    }
                });

                const feedback = challengesContainer.children[challengeIndex].querySelector('.feedback-text');
                if (allCorrect) {
                    feedback.textContent = '✅ Perfect!';
                    feedback.className = 'feedback-text mt-2 text-sm font-medium text-green-600';
                    totalScore += 100;
                } else {
                    feedback.textContent = '❌ Some answers need correction';
                    feedback.className = 'feedback-text mt-2 text-sm font-medium text-red-600';
                    totalScore += Math.round(challengeScore);
                }
            });

            document.querySelector('.current-score').textContent = totalScore;
            document.querySelector('.max-score').textContent = maxScore;

            if (totalScore === maxScore) {
                setTimeout(() => {
                    this.showQuickFeedback('Perfect score! You\'re a prompt master!', 'success');
                    this.gameScores.fillBlanks.push(totalScore);
                    setTimeout(() => this.closeCurrentGame(), 2000);
                }, 500);
            }
        });

        document.querySelector('.exit-game').addEventListener('click', () => {
            this.closeCurrentGame();
        });
    }

    // Utility functions
    showGame(html) {
        const gameContainer = document.createElement('div');
        gameContainer.className = 'mini-game-container fixed inset-0 bg-gray-900 bg-opacity-95 z-50 p-8 overflow-auto';
        gameContainer.innerHTML = html;
        document.body.appendChild(gameContainer);
        
        // Add entrance animation
        anime({
            targets: '.full-screen-game',
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 500,
            easing: 'easeOutQuart'
        });
    }

    closeCurrentGame() {
        const container = document.querySelector('.mini-game-container');
        if (container) {
            anime({
                targets: '.full-screen-game',
                opacity: [1, 0],
                scale: [1, 0.9],
                duration: 300,
                easing: 'easeInQuart',
                complete: () => container.remove()
            });
        }
    }

    showQuickFeedback(message, type) {
        console.log('📢 Showing feedback:', message, 'Type:', type);
        const feedback = document.createElement('div');
        feedback.className = `quick-feedback fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             px-8 py-4 rounded-lg text-white font-bold text-xl shadow-2xl ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`;
        feedback.style.zIndex = '9999';
        feedback.style.minWidth = '300px';
        feedback.style.textAlign = 'center';
        feedback.textContent = message;
        document.body.appendChild(feedback);
        
        console.log('✅ Feedback element added to DOM:', feedback);

        // Longer duration for errors so users can read them
        const duration = type === 'error' ? 3500 : 2000;
        
        // Check if anime is available
        if (typeof anime !== 'undefined') {
            anime({
                targets: feedback,
                scale: [0.5, 1.2, 1],
                opacity: [0, 1, 1, 0],
                duration: duration,
                easing: 'easeOutElastic(1, .8)',
                complete: () => {
                    console.log('🗑️ Removing feedback element');
                    feedback.remove();
                }
            });
        } else {
            // Fallback without animation
            console.warn('⚠️ anime.js not available, using fallback');
            setTimeout(() => {
                feedback.style.opacity = '0';
                setTimeout(() => feedback.remove(), 500);
            }, duration);
        }
    }

    endRacingGame(score) {
        this.gameScores.racing.push(score);
        this.showQuickFeedback(`Game Over! Final Score: ${score}`, 'success');
        setTimeout(() => this.closeCurrentGame(), 2000);
    }

    getHighScore(gameId) {
        const scores = this.gameScores[gameId];
        return scores.length > 0 ? Math.max(...scores) : 0;
    }
}

// Add shake animation CSS
const style = document.createElement('style');
style.textContent = `
    .shake-animation {
        animation: shake 0.5s ease-in-out;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    .full-screen-game {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .mini-game-container {
        backdrop-filter: blur(5px);
    }
`;
document.head.appendChild(style);

// Initialize when ready
document.addEventListener('DOMContentLoaded', () => {
    window.promptMiniGames = new PromptMiniGames();
});