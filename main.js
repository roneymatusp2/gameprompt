class PromptQuestGame {
    constructor() {
        this.currentChallenge = null;
        this.isSubmitting = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialChallenge();
        this.loadChallenges();
        this.initializeAnimations();
    }

    setupEventListeners() {
        // Handle challenge selection
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('select-challenge')) {
                const challengeId = parseInt(e.target.dataset.challengeId);
                this.selectChallenge(challengeId);
            }
        });

        // Handle prompt submission
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'prompt-form') {
                e.preventDefault();
                this.submitPrompt();
            }
        });

        // Handle hint requests
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('show-hint')) {
                this.showHint();
            }
        });

        // Handle example requests
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('show-example')) {
                this.showExample();
            }
        });
    }

    loadInitialChallenge() {
        // Load the first available challenge
        const firstLevel = challengeData.levels.find(level => level.unlocked);
        if (firstLevel && firstLevel.challenges.length > 0) {
            this.selectChallenge(firstLevel.challenges[0].id);
        }
    }

    loadChallenges() {
        const grid = document.getElementById('challenge-grid');
        if (!grid) return;

        grid.innerHTML = '';

        challengeData.levels.forEach(level => {
            if (!level.unlocked) return;

            level.challenges.forEach(challenge => {
                const isCompleted = progressSystem.userProgress.completedChallenges.includes(challenge.id);
                const score = progressSystem.userProgress.challengeScores[challenge.id] || 0;

                const challengeCard = this.createChallengeCard(challenge, level, isCompleted, score);
                grid.appendChild(challengeCard);
            });
        });

        // Animate cards in
        anime({
            targets: '.challenge-card',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(100),
            duration: 600,
            easing: 'easeOutQuart'
        });
    }

    createChallengeCard(challenge, level, isCompleted, score) {
        const card = document.createElement('div');
        card.className = 'challenge-card card-hover bg-white rounded-2xl p-6 shadow-lg cursor-pointer fade-in';
        
        const difficultyClass = challenge.difficulty.toLowerCase() === 'beginner' ? 'difficulty-easy' :
                               challenge.difficulty.toLowerCase() === 'intermediate' ? 'difficulty-intermediate' :
                               'difficulty-advanced';

        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div class="badge ${difficultyClass}">${challenge.difficulty}</div>
                ${isCompleted ? '<div class="text-green-500 text-xl">✓</div>' : ''}
            </div>
            
            <h3 class="font-display text-xl font-bold mb-2 text-gray-900">${challenge.title}</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">${challenge.description}</p>
            
            <div class="flex justify-between items-center mb-4">
                <div class="text-sm text-gray-500">
                    <span class="font-medium">${challenge.points} XP</span>
                </div>
                ${isCompleted ? `<div class="text-sm font-bold text-green-600">Score: ${score}</div>` : ''}
            </div>
            
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-400">
                    Level ${level.id}
                </div>
                <button class="select-challenge btn-primary text-white px-4 py-2 rounded-lg text-sm font-medium" 
                        data-challenge-id="${challenge.id}">
                    ${isCompleted ? 'Retry' : 'Start'}
                </button>
            </div>
        `;

        return card;
    }

    selectChallenge(challengeId) {
        // Find the challenge in the data
        let selectedChallenge = null;
        let challengeLevel = null;

        challengeData.levels.forEach(level => {
            const challenge = level.challenges.find(c => c.id === challengeId);
            if (challenge) {
                selectedChallenge = challenge;
                challengeLevel = level;
            }
        });

        if (!selectedChallenge) {
            console.error('Challenge not found:', challengeId);
            return;
        }

        this.currentChallenge = selectedChallenge;
        this.displayChallenge(selectedChallenge, challengeLevel);
        
        // Scroll to challenge section
        document.getElementById('current-challenge').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    displayChallenge(challenge, level) {
        const container = document.getElementById('challenge-container');
        if (!container) return;

        container.innerHTML = `
            <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                            ${challenge.id}
                        </div>
                        <div>
                            <h3 class="font-display text-2xl font-bold text-gray-900">${challenge.title}</h3>
                            <p class="text-gray-600">Level ${level.id} • ${challenge.difficulty}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-2xl font-bold gradient-text">${challenge.points} XP</div>
                        <div class="text-sm text-gray-500">Available</div>
                    </div>
                </div>
                
                <div class="bg-blue-50 rounded-xl p-4 mb-6">
                    <h4 class="font-semibold text-blue-900 mb-2">Challenge Description</h4>
                    <p class="text-blue-800">${challenge.description}</p>
                </div>
                
                <div class="bg-amber-50 rounded-xl p-4 mb-6">
                    <h4 class="font-semibold text-amber-900 mb-2">Your Task</h4>
                    <p class="text-amber-800">${challenge.task}</p>
                </div>
                
                <div class="bg-gray-50 rounded-xl p-4 mb-6">
                    <h4 class="font-semibold text-gray-900 mb-3">Success Criteria</h4>
                    <ul class="space-y-1">
                        ${challenge.successCriteria.map(criterion => `
                            <li class="flex items-center text-gray-700">
                                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                ${criterion}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            
            <form id="prompt-form" class="space-y-6">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">
                        Write your prompt below:
                    </label>
                    <textarea 
                        id="prompt-input" 
                        class="prompt-input w-full h-32 p-4 rounded-xl resize-none focus:outline-none"
                        placeholder="Enter your prompt here..."
                        maxlength="1000"
                        required
                    ></textarea>
                    <div class="flex justify-between items-center mt-2">
                        <div class="flex space-x-2">
                            <button type="button" class="show-hint text-sm text-blue-600 hover:text-blue-800 font-medium">
                                💡 Need a hint?
                            </button>
                            <button type="button" class="show-example text-sm text-green-600 hover:text-green-800 font-medium">
                                📋 Show example
                            </button>
                        </div>
                        <div class="text-sm text-gray-500">
                            <span id="char-count">0</span>/1000
                        </div>
                    </div>
                </div>
                
                <div class="flex justify-between items-center">
                    <div class="text-sm text-gray-600">
                        Ready to test your prompt engineering skills?
                    </div>
                    <button 
                        type="submit" 
                        id="submit-btn"
                        class="btn-primary text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span id="submit-text">Submit for Evaluation</span>
                        <span id="submit-loading" class="hidden">Evaluating...</span>
                    </button>
                </div>
            </form>
            
            <div id="hint-section" class="hidden mt-6 p-4 bg-purple-50 rounded-xl">
                <h4 class="font-semibold text-purple-900 mb-2">💡 Hint</h4>
                <div id="hint-content" class="text-purple-800"></div>
            </div>
            
            <div id="example-section" class="hidden mt-6 p-4 bg-green-50 rounded-xl">
                <h4 class="font-semibold text-green-900 mb-2">📋 Example Prompt</h4>
                <div id="example-content" class="text-green-800 bg-white p-3 rounded-lg font-mono text-sm"></div>
            </div>
        `;

        // Setup character counter
        const textarea = document.getElementById('prompt-input');
        const counter = document.getElementById('char-count');
        
        textarea.addEventListener('input', () => {
            counter.textContent = textarea.value.length;
        });
    }

    async submitPrompt() {
        if (this.isSubmitting) return;
        
        const promptInput = document.getElementById('prompt-input');
        const userPrompt = promptInput.value.trim();
        
        if (!userPrompt) {
            alert('Please enter a prompt before submitting.');
            return;
        }

        this.isSubmitting = true;
        this.showLoadingState(true);

        try {
            // Get AI evaluation
            const evaluation = await geminiIntegration.evaluatePrompt(userPrompt, this.currentChallenge);
            
            // Award points based on score
            const pointsAwarded = Math.round(evaluation.overallScore);
            progressSystem.awardPoints(pointsAwarded, this.currentChallenge.id);
            
            // Show feedback modal
            this.showFeedbackModal(evaluation, userPrompt);
            
        } catch (error) {
            console.error('Error submitting prompt:', error);
            alert('An error occurred while evaluating your prompt. Please try again.');
        } finally {
            this.isSubmitting = false;
            this.showLoadingState(false);
        }
    }

    showLoadingState(loading) {
        const submitBtn = document.getElementById('submit-btn');
        const submitText = document.getElementById('submit-text');
        const submitLoading = document.getElementById('submit-loading');
        
        if (loading) {
            submitBtn.disabled = true;
            submitText.classList.add('hidden');
            submitLoading.classList.remove('hidden');
        } else {
            submitBtn.disabled = false;
            submitText.classList.remove('hidden');
            submitLoading.classList.add('hidden');
        }
    }

    showHint() {
        const hintSection = document.getElementById('hint-section');
        const hintContent = document.getElementById('hint-content');
        
        if (this.currentChallenge && this.currentChallenge.hints.length > 0) {
            const randomHint = this.currentChallenge.hints[Math.floor(Math.random() * this.currentChallenge.hints.length)];
            hintContent.textContent = randomHint;
            hintSection.classList.remove('hidden');
            
            // Animate in
            anime({
                targets: hintSection,
                opacity: [0, 1],
                translateY: [-10, 0],
                duration: 300,
                easing: 'easeOutQuart'
            });
        }
    }

    showExample() {
        const exampleSection = document.getElementById('example-section');
        const exampleContent = document.getElementById('example-content');
        
        if (this.currentChallenge && this.currentChallenge.examplePrompt) {
            exampleContent.textContent = this.currentChallenge.examplePrompt;
            exampleSection.classList.remove('hidden');
            
            // Animate in
            anime({
                targets: exampleSection,
                opacity: [0, 1],
                translateY: [-10, 0],
                duration: 300,
                easing: 'easeOutQuart'
            });
        }
    }

    showFeedbackModal(evaluation, userPrompt) {
        const modal = document.getElementById('feedback-modal');
        const content = document.getElementById('feedback-content');
        
        // Calculate stars (1-3 stars based on score)
        const stars = evaluation.overallScore >= 80 ? 3 : evaluation.overallScore >= 60 ? 2 : 1;
        
        content.innerHTML = `
            <div class="text-center mb-8">
                <div class="text-6xl mb-4">
                    ${stars >= 3 ? '🌟' : stars >= 2 ? '⭐' : '✨'}
                </div>
                <h4 class="font-display text-3xl font-bold gradient-text mb-2">
                    ${evaluation.overallScore} Points
                </h4>
                <div class="text-xl text-gray-600 mb-4">
                    ${stars} Star${stars !== 1 ? 's' : ''} Rating
                </div>
                <div class="text-lg text-gray-700">
                    You've earned ${Math.round(evaluation.overallScore)} XP!
                </div>
            </div>
            
            <div class="space-y-6">
                <div class="bg-gray-50 rounded-xl p-4">
                    <h5 class="font-semibold text-gray-900 mb-3">Your Prompt:</h5>
                    <div class="bg-white p-3 rounded-lg font-mono text-sm border">
                        ${userPrompt}
                    </div>
                </div>
                
                <div class="bg-blue-50 rounded-xl p-4">
                    <h5 class="font-semibold text-blue-900 mb-3">Score Breakdown:</h5>
                    <div class="space-y-2">
                        ${Object.entries(evaluation.criteriaScores).map(([criteria, score]) => `
                            <div class="flex justify-between items-center">
                                <span class="capitalize text-blue-800">${criteria}:</span>
                                <div class="flex items-center space-x-2">
                                    <div class="w-24 bg-blue-200 rounded-full h-2">
                                        <div class="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                                             style="width: ${(score / 20) * 100}%"></div>
                                    </div>
                                    <span class="text-blue-900 font-semibold">${score}/20</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="bg-green-50 rounded-xl p-4">
                    <h5 class="font-semibold text-green-900 mb-3">Feedback:</h5>
                    <ul class="space-y-2">
                        ${evaluation.feedback.map(feedback => `
                            <li class="flex items-start text-green-800">
                                <span class="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                ${feedback}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="bg-purple-50 rounded-xl p-4">
                    <h5 class="font-semibold text-purple-900 mb-3">Suggestions for Improvement:</h5>
                    <ul class="space-y-2">
                        ${evaluation.suggestions.map(suggestion => `
                            <li class="flex items-start text-purple-800">
                                <span class="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                ${suggestion}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                ${evaluation.exampleImprovement ? `
                    <div class="bg-amber-50 rounded-xl p-4">
                        <h5 class="font-semibold text-amber-900 mb-3">Example Improvement:</h5>
                        <div class="bg-white p-3 rounded-lg font-mono text-sm border text-amber-800">
                            ${evaluation.exampleImprovement}
                        </div>
                    </div>
                ` : ''}
            </div>
            
            <div class="flex justify-center space-x-4 mt-8">
                <button onclick="closeFeedbackModal()" class="btn-primary text-white px-6 py-3 rounded-xl font-semibold">
                    Continue Quest
                </button>
            </div>
        `;

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Animate modal in
        anime({
            targets: modal.querySelector('.bg-white'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutBack'
        });

        // Animate score bars
        setTimeout(() => {
            const scoreBars = content.querySelectorAll('.bg-blue-600');
            anime({
                targets: scoreBars,
                width: (el) => el.style.width,
                duration: 1000,
                delay: anime.stagger(100),
                easing: 'easeOutQuart'
            });
        }, 300);
    }

    initializeAnimations() {
        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }
}

// Global functions
function closeFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function scrollToChallenges() {
    document.getElementById('challenges').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.promptQuestGame = new PromptQuestGame();
    
    // Make functions globally available
    window.closeFeedbackModal = closeFeedbackModal;
    window.scrollToChallenges = scrollToChallenges;
    window.loadChallenges = () => window.promptQuestGame.loadChallenges();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PromptQuestGame;
}