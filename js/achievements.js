// Achievement System for Prompt Quest
class AchievementSystem {
    constructor() {
        this.achievements = {
            // Beginner Achievements
            firstPrompt: {
                id: 'firstPrompt',
                name: 'First Steps',
                description: 'Submit your first prompt',
                icon: '👶',
                points: 10,
                unlocked: false,
                rarity: 'common'
            },
            fiveInRow: {
                id: 'fiveInRow',
                name: 'On Fire!',
                description: 'Complete 5 challenges in a row',
                icon: '🔥',
                points: 50,
                unlocked: false,
                rarity: 'rare'
            },
            speedDemon: {
                id: 'speedDemon',
                name: 'Speed Demon',
                description: 'Complete a challenge in under 30 seconds',
                icon: '⚡',
                points: 30,
                unlocked: false,
                rarity: 'rare'
            },
            
            // Game Mode Achievements
            racingChampion: {
                id: 'racingChampion',
                name: 'Racing Champion',
                description: 'Score 1000+ in Prompt Racing',
                icon: '🏆',
                points: 100,
                unlocked: false,
                rarity: 'epic'
            },
            puzzleMaster: {
                id: 'puzzleMaster',
                name: 'Puzzle Master',
                description: 'Complete a puzzle with minimal moves',
                icon: '🧩',
                points: 75,
                unlocked: false,
                rarity: 'epic'
            },
            perfectMatch: {
                id: 'perfectMatch',
                name: 'Perfect Match',
                description: 'Complete matching game without mistakes',
                icon: '💯',
                points: 60,
                unlocked: false,
                rarity: 'rare'
            },
            
            // Skill Achievements
            promptArtist: {
                id: 'promptArtist',
                name: 'Prompt Artist',
                description: 'Create 50 successful prompts',
                icon: '🎨',
                points: 200,
                unlocked: false,
                rarity: 'legendary'
            },
            detailOriented: {
                id: 'detailOriented',
                name: 'Detail Oriented',
                description: 'Use all 5 prompt categories in one prompt',
                icon: '🔍',
                points: 40,
                unlocked: false,
                rarity: 'rare'
            },
            experimentalist: {
                id: 'experimentalist',
                name: 'Experimentalist',
                description: 'Try 20 different prompt combinations',
                icon: '🧪',
                points: 50,
                unlocked: false,
                rarity: 'rare'
            },
            
            // Special Achievements
            nightOwl: {
                id: 'nightOwl',
                name: 'Night Owl',
                description: 'Complete challenges after midnight',
                icon: '🦉',
                points: 25,
                unlocked: false,
                rarity: 'common'
            },
            earlyBird: {
                id: 'earlyBird',
                name: 'Early Bird',
                description: 'Complete challenges before 6 AM',
                icon: '🐦',
                points: 25,
                unlocked: false,
                rarity: 'common'
            },
            perfectionist: {
                id: 'perfectionist',
                name: 'Perfectionist',
                description: 'Achieve 100% accuracy on 10 challenges',
                icon: '✨',
                points: 150,
                unlocked: false,
                rarity: 'legendary'
            },
            socialButterfly: {
                id: 'socialButterfly',
                name: 'Social Butterfly',
                description: 'Share 5 prompts with the community',
                icon: '🦋',
                points: 30,
                unlocked: false,
                rarity: 'common'
            },
            
            // Hidden Achievements
            easterEgg: {
                id: 'easterEgg',
                name: 'Easter Egg Hunter',
                description: '???',
                icon: '🥚',
                points: 100,
                unlocked: false,
                rarity: 'secret',
                hidden: true
            },
            promptHacker: {
                id: 'promptHacker',
                name: 'Prompt Hacker',
                description: 'Discover the secret prompt pattern',
                icon: '💻',
                points: 200,
                unlocked: false,
                rarity: 'secret',
                hidden: true
            }
        };
        
        this.unlockedAchievements = this.loadAchievements();
        this.init();
    }

    init() {
        this.createNotificationSystem();
        this.setupTracking();
        this.setupAchievementLinks();
    }

    // Redirect achievement buttons/links to the achievements page
    setupAchievementLinks() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.open-achievements')) {
                e.preventDefault();
                window.location.href = 'achievements.html';
            }
        });
    }

    renderAchievements(category = 'all') {
        return Object.values(this.achievements)
            .filter(ach => !ach.hidden || ach.unlocked)
            .filter(ach => category === 'all' || ach.rarity === category)
            .map(ach => this.renderAchievementCard(ach))
            .join('');
    }

    renderAchievementCard(achievement) {
        const unlocked = this.unlockedAchievements.includes(achievement.id);
        const rarityColors = {
            common: 'from-gray-400 to-gray-500',
            rare: 'from-blue-400 to-blue-500',
            epic: 'from-purple-400 to-purple-500',
            legendary: 'from-yellow-400 to-yellow-500',
            secret: 'from-pink-400 to-pink-500'
        };

        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'} 
                        bg-white rounded-lg shadow-lg p-4 transition-all hover:shadow-xl
                        ${unlocked ? 'ring-2 ring-' + achievement.rarity : 'opacity-75'}">
                <div class="achievement-icon text-4xl mb-2 ${unlocked ? '' : 'grayscale'}">
                    ${achievement.icon}
                </div>
                <h4 class="font-bold mb-1">${achievement.name}</h4>
                <p class="text-sm text-gray-600 mb-2">${achievement.hidden && !unlocked ? '???' : achievement.description}</p>
                <div class="achievement-footer flex justify-between items-center">
                    <span class="rarity-badge text-xs px-2 py-1 rounded-full text-white bg-gradient-to-r ${rarityColors[achievement.rarity]}">
                        ${achievement.rarity.toUpperCase()}
                    </span>
                    <span class="points text-sm font-bold">${achievement.points} pts</span>
                </div>
            </div>
        `;
    }

    createNotificationSystem() {
        const notificationHTML = `
            <div class="achievement-notification-container fixed top-4 right-4 z-50">
                <!-- Notifications will appear here -->
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', notificationHTML);
    }

    setupTracking() {
        // Track various game events for achievements
        this.trackFirstPrompt();
        this.trackStreaks();
        this.trackSpeed();
        this.trackGameModes();
        this.trackSpecialConditions();
    }

    trackFirstPrompt() {
        if (!window.firstPromptTracked) {
            window.firstPromptTracked = true;
            document.addEventListener('submit', (e) => {
                if (e.target.id === 'prompt-form' && !this.isUnlocked('firstPrompt')) {
                    this.unlockAchievement('firstPrompt');
                }
            });
        }
    }

    trackStreaks() {
        let streak = 0;
        window.addEventListener('challengeCompleted', (e) => {
            if (e.detail.success) {
                streak++;
                if (streak >= 5 && !this.isUnlocked('fiveInRow')) {
                    this.unlockAchievement('fiveInRow');
                }
            } else {
                streak = 0;
            }
        });
    }

    trackSpeed() {
        window.addEventListener('challengeCompleted', (e) => {
            if (e.detail.timeSpent < 30 && e.detail.success && !this.isUnlocked('speedDemon')) {
                this.unlockAchievement('speedDemon');
            }
        });
    }

    trackGameModes() {
        window.addEventListener('gameCompleted', (e) => {
            const { gameType, score } = e.detail;
            
            if (gameType === 'racing' && score >= 1000 && !this.isUnlocked('racingChampion')) {
                this.unlockAchievement('racingChampion');
            }
            
            if (gameType === 'puzzle' && e.detail.moves <= 10 && !this.isUnlocked('puzzleMaster')) {
                this.unlockAchievement('puzzleMaster');
            }
            
            if (gameType === 'match' && e.detail.mistakes === 0 && !this.isUnlocked('perfectMatch')) {
                this.unlockAchievement('perfectMatch');
            }
        });
    }

    trackSpecialConditions() {
        // Time-based achievements
        const hour = new Date().getHours();
        
        window.addEventListener('challengeCompleted', () => {
            if (hour >= 0 && hour < 6 && !this.isUnlocked('earlyBird')) {
                this.unlockAchievement('earlyBird');
            }
            
            if (hour >= 0 && hour < 5 && !this.isUnlocked('nightOwl')) {
                this.unlockAchievement('nightOwl');
            }
        });

        // Easter egg - Konami code
        let konamiProgress = 0;
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        
        document.addEventListener('keydown', (e) => {
            if (e.key === konamiCode[konamiProgress]) {
                konamiProgress++;
                if (konamiProgress === konamiCode.length) {
                    this.unlockAchievement('easterEgg');
                    konamiProgress = 0;
                }
            } else {
                konamiProgress = 0;
            }
        });
    }

    unlockAchievement(achievementId) {
        const achievement = this.achievements[achievementId];
        if (!achievement || this.isUnlocked(achievementId)) return;

        this.unlockedAchievements.push(achievementId);
        achievement.unlocked = true;
        this.saveAchievements();
        this.showUnlockNotification(achievement);
        this.playUnlockSound();
        this.updateDisplay();

        // Trigger confetti for legendary achievements
        if (achievement.rarity === 'legendary' || achievement.rarity === 'secret') {
            this.triggerConfetti();
        }
    }

    showUnlockNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-unlocked bg-white rounded-lg shadow-2xl p-4 mb-4 flex items-center gap-4 min-w-[300px]';
        notification.innerHTML = `
            <div class="achievement-icon text-4xl animate-bounce">${achievement.icon}</div>
            <div class="achievement-details">
                <h4 class="font-bold text-lg">Achievement Unlocked!</h4>
                <p class="text-gray-600">${achievement.name}</p>
                <p class="text-sm text-gray-500">+${achievement.points} points</p>
            </div>
        `;

        const container = document.querySelector('.achievement-notification-container');
        container.appendChild(notification);

        // Animate in
        anime({
            targets: notification,
            translateX: [300, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuart'
        });

        // Remove after delay
        setTimeout(() => {
            anime({
                targets: notification,
                translateX: [0, 300],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInQuart',
                complete: () => notification.remove()
            });
        }, 4000);
    }

    // Panel methods removed - achievements now displayed on dedicated page

    triggerConfetti() {
        // Create confetti particles
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-particle';
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#7FFF00'][Math.floor(Math.random() * 5)]};
                left: ${Math.random() * 100}%;
                top: -20px;
                transform: rotate(${Math.random() * 360}deg);
                z-index: 9999;
            `;
            document.body.appendChild(confetti);

            anime({
                targets: confetti,
                translateY: window.innerHeight + 20,
                translateX: `${(Math.random() - 0.5) * 200}px`,
                rotate: Math.random() * 720,
                duration: 2000 + Math.random() * 1000,
                easing: 'easeOutQuad',
                complete: () => confetti.remove()
            });
        }
    }

    playUnlockSound() {
        if (window.audioSystem) {
            window.audioSystem.playSound('achievement');
        }
    }

    updateDisplay() {
        // Display is now handled by the dedicated achievements page
        // This method is kept for compatibility with existing code
    }

    // Utility methods
    isUnlocked(achievementId) {
        return this.unlockedAchievements.includes(achievementId);
    }

    getTotalPoints() {
        return this.unlockedAchievements.reduce((total, id) => {
            return total + (this.achievements[id]?.points || 0);
        }, 0);
    }

    getUnlockedCount() {
        return this.unlockedAchievements.length;
    }

    getCompletionPercentage() {
        const total = Object.keys(this.achievements).filter(id => !this.achievements[id].hidden).length;
        const unlocked = this.unlockedAchievements.filter(id => !this.achievements[id].hidden).length;
        return Math.round((unlocked / total) * 100);
    }

    loadAchievements() {
        const saved = localStorage.getItem('promptQuestAchievements');
        return saved ? JSON.parse(saved) : [];
    }

    saveAchievements() {
        localStorage.setItem('promptQuestAchievements', JSON.stringify(this.unlockedAchievements));
    }
}

// Initialize when ready
document.addEventListener('DOMContentLoaded', () => {
    window.achievementSystem = new AchievementSystem();
});

// Styles for achievement notifications (panel styles removed - now on dedicated page)
const achievementStyles = `
    <style>
        .achievement-notification-container {
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 9999;
        }

        .achievement-unlocked {
            animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', achievementStyles);