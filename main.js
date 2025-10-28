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
        // Handle challenge selection with event delegation
        document.addEventListener('click', (e) => {
            // Challenge selection
            const challengeBtn = e.target.closest('.select-challenge');
            if (challengeBtn) {
                e.preventDefault();
                e.stopPropagation();
                const challengeId = parseInt(challengeBtn.dataset.challengeId);
                if (!isNaN(challengeId)) {
                    this.selectChallenge(challengeId);
                }
                return;
            }
            
            // Hint button
            if (e.target.closest('.show-hint')) {
                e.preventDefault();
                e.stopPropagation();
                this.showHint();
                return;
            }
            
            // Example button
            if (e.target.closest('.show-example')) {
                e.preventDefault();
                e.stopPropagation();
                this.showExample();
                return;
            }
            
            // Challenge card click (entire card)
            const challengeCard = e.target.closest('.challenge-card');
            if (challengeCard && !e.target.closest('.select-challenge')) {
                const selectBtn = challengeCard.querySelector('.select-challenge');
                if (selectBtn) {
                    const challengeId = parseInt(selectBtn.dataset.challengeId);
                    if (!isNaN(challengeId)) {
                        this.selectChallenge(challengeId);
                    }
                }
            }
        });

        // Handle prompt submission
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'prompt-form') {
                e.preventDefault();
                e.stopPropagation();
                this.submitPrompt();
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
        
        // Highlight selected challenge card
        document.querySelectorAll('.challenge-card').forEach(card => {
            card.style.borderColor = 'rgba(75, 85, 99, 0.4)';
            card.style.boxShadow = 'none';
        });
        
        const selectedCard = document.querySelector(`[data-challenge-id="${challengeId}"]`)?.closest('.challenge-card');
        if (selectedCard) {
            selectedCard.style.borderColor = 'rgba(79, 70, 229, 0.8)';
            selectedCard.style.boxShadow = '0 8px 24px rgba(79, 70, 229, 0.3)';
        }
        
        // Scroll to challenge display section
        const challengeDisplay = document.querySelector('.challenge-display');
        if (challengeDisplay) {
            challengeDisplay.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    displayChallenge(challenge, level) {
        const container = document.getElementById('challenge-content');
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
                    <ul class="space-y-2">
                        ${challenge.successCriteria.map(criterion => `
                            <li class="flex items-start text-gray-700">
                                <span class="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                <span>${criterion}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        // Show the prompt input section
        const promptSection = document.getElementById('prompt-input-section');
        if (promptSection) {
            promptSection.classList.remove('hidden');
            
            // Clear previous input
            const textarea = document.getElementById('user-prompt');
            if (textarea) {
                textarea.value = '';
            }
            
            // Hide feedback section
            const feedbackSection = document.getElementById('feedback-section');
            if (feedbackSection) {
                feedbackSection.classList.add('hidden');
            }
        }
    }

    async submitPrompt() {
        if (this.isSubmitting) {
            console.log('Already submitting, please wait...');
            return;
        }
        
        const promptInput = document.getElementById('user-prompt');
        if (!promptInput) {
            console.error('Prompt input not found');
            return;
        }
        
        const userPrompt = promptInput.value.trim();
        
        if (!userPrompt) {
            this.showNotification('Please enter a prompt before submitting.', 'warning');
            return;
        }
        
        if (!this.currentChallenge) {
            this.showNotification('Please select a challenge first.', 'warning');
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
            
            // Show feedback
            this.showFeedback(evaluation, userPrompt);
            
            // Update stats
            this.updateStats();
            
        } catch (error) {
            console.error('Error submitting prompt:', error);
            this.showNotification('An error occurred while evaluating your prompt. Please try again.', 'error');
        } finally {
            this.isSubmitting = false;
            this.showLoadingState(false);
        }
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium animate-slide-in`;
        notification.style.animation = 'slideInRight 0.3s ease-out';
        
        const bgColor = type === 'error' ? 'bg-red-500' : 
                       type === 'warning' ? 'bg-yellow-500' : 
                       type === 'success' ? 'bg-green-500' : 'bg-blue-500';
        
        notification.classList.add(bgColor);
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    updateStats() {
        const stats = {
            totalPrompts: parseInt(localStorage.getItem('totalPrompts') || '0') + 1,
            successRate: localStorage.getItem('successRate') || 0,
            achievements: window.achievementSystem?.getUnlockedCount() || 0,
            gamesPlayed: localStorage.getItem('miniGamesPlayed') || 0
        };
        
        localStorage.setItem('totalPrompts', stats.totalPrompts);
        
        document.getElementById('total-prompts').textContent = stats.totalPrompts;
        document.getElementById('success-rate').textContent = stats.successRate + '%';
        document.getElementById('achievements-unlocked').textContent = stats.achievements;
        document.getElementById('mini-games-played').textContent = stats.gamesPlayed;
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

    showFeedback(evaluation, userPrompt) {
        const feedbackSection = document.getElementById('feedback-section');
        const content = document.getElementById('feedback-content');
        
        if (!feedbackSection || !content) {
            console.error('Feedback section not found');
            return;
        }
        
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
            
        `;

        feedbackSection.classList.remove('hidden');
        
        // Scroll to feedback
        feedbackSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'nearest'
        });
        
        // Animate feedback in
        if (typeof anime !== 'undefined') {
            anime({
                targets: feedbackSection,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 500,
                easing: 'easeOutQuart'
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
function scrollToChallenges() {
    document.getElementById('challenges').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.promptQuestGame = new PromptQuestGame();
    
    // Make functions globally available
    window.scrollToChallenges = scrollToChallenges;
    window.loadChallenges = () => window.promptQuestGame.loadChallenges();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PromptQuestGame;
}