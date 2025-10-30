class ProgressSystem {
    constructor() {
        this.userProgress = this.loadProgress();
        this.achievements = challengeData.badges;
        this.init();
    }

    init() {
        // Initialize user progress if first time
        if (!this.userProgress.userId) {
            this.userProgress = {
                userId: this.generateUserId(),
                userName: 'Prompt Explorer',
                totalXP: 0,
                currentLevel: 1,
                completedChallenges: [],
                earnedBadges: [],
                currentStreak: 0,
                bestStreak: 0,
                lastActiveDate: new Date().toISOString().split('T')[0],
                challengeScores: {},
                levelProgress: {
                    1: { unlocked: true, completed: false },
                    2: { unlocked: false, completed: false },
                    3: { unlocked: false, completed: false },
                    4: { unlocked: false, completed: false },
                    5: { unlocked: false, completed: false }
                }
            };
            this.saveProgress();
        }

        this.syncLevelUnlocks();
        this.saveProgress();
        this.updateUI();
        this.checkAchievements();
    }

    generateUserId() {
        return 'user_' + Math.random().toString(36).substr(2, 9);
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('promptQuestProgress');
            return saved ? JSON.parse(saved) : {};
        } catch (error) {
            console.error('Error loading progress:', error);
            return {};
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('promptQuestProgress', JSON.stringify(this.userProgress));
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }

    syncLevelUnlocks() {
        challengeData.levels.forEach(level => {
            if (!this.userProgress.levelProgress[level.id]) {
                this.userProgress.levelProgress[level.id] = {
                    unlocked: level.unlocked || level.id === 1,
                    completed: false
                };
            }

            level.unlocked = Boolean(this.userProgress.levelProgress[level.id].unlocked);
        });

        this.updateLevelCompletionStatus();
    }

    updateLevelCompletionStatus() {
        challengeData.levels.forEach(level => {
            const allCompleted = level.challenges.every(challenge =>
                this.userProgress.completedChallenges.includes(challenge.id)
            );

            if (!this.userProgress.levelProgress[level.id]) {
                this.userProgress.levelProgress[level.id] = {
                    unlocked: level.unlocked || level.id === 1,
                    completed: allCompleted
                };
            } else {
                this.userProgress.levelProgress[level.id].completed = allCompleted;
            }
        });
    }

    isLevelCompleted(levelId) {
        const level = challengeData.levels.find(l => l.id === levelId);
        if (!level) return false;
        return level.challenges.every(challenge =>
            this.userProgress.completedChallenges.includes(challenge.id)
        );
    }

    awardPoints(points, challengeId) {
        const previousXP = this.userProgress.totalXP;
        this.userProgress.totalXP += points;
        
        // Add to challenge scores
        this.userProgress.challengeScores[challengeId] = points;
        
        // Mark challenge as completed
        if (!this.userProgress.completedChallenges.includes(challengeId)) {
            this.userProgress.completedChallenges.push(challengeId);
        }

        // Check for level up
        const newLevel = this.calculateLevel(this.userProgress.totalXP);
        if (newLevel > this.userProgress.currentLevel) {
            this.userProgress.currentLevel = newLevel;
            this.showLevelUpNotification(newLevel);
        }

        // Update streak
        this.updateStreak();

        this.updateLevelCompletionStatus();
        this.saveProgress();
        this.updateUI();
        this.checkAchievements();
        
        // Show XP gain animation
        this.showXPGain(points, previousXP);
    }

    calculateLevel(xp) {
        // Level progression: Level 1: 0 XP, Level 2: 500 XP, Level 3: 1200 XP, etc.
        if (xp < 500) return 1;
        if (xp < 1200) return 2;
        if (xp < 2000) return 3;
        if (xp < 3000) return 4;
        return 5;
    }

    updateStreak() {
        const today = new Date().toISOString().split('T')[0];
        const lastActive = this.userProgress.lastActiveDate;
        
        // Check if it's a new day
        if (today !== lastActive) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];
            
            if (yesterdayStr === lastActive) {
                // Continue streak
                this.userProgress.currentStreak++;
            } else if (lastActive !== today) {
                // Reset streak (missed a day)
                this.userProgress.currentStreak = 1;
            }
            
            this.userProgress.lastActiveDate = today;
            
            if (this.userProgress.currentStreak > this.userProgress.bestStreak) {
                this.userProgress.bestStreak = this.userProgress.currentStreak;
            }
        }
    }

    checkAchievements() {
        const newBadges = [];
        
        // Check each achievement condition
        this.achievements.forEach(badge => {
            if (!this.userProgress.earnedBadges.includes(badge.id)) {
                if (this.evaluateBadgeCondition(badge)) {
                    this.userProgress.earnedBadges.push(badge.id);
                    newBadges.push(badge);
                }
            }
        });

        // Show notifications for new badges
        newBadges.forEach((badge, index) => {
            setTimeout(() => {
                this.showAchievementNotification(badge);
            }, index * 1000);
        });
    }

    evaluateBadgeCondition(badge) {
        switch (badge.id) {
            case 'clarity_champion':
                return this.checkConsecutiveHighScores('clarity', 80, 3);
            
            case 'specificity_star':
                return this.checkHighScoreCount('specificity', 85, 5);
            
            case 'context_king':
                return this.checkConsecutiveHighScores('context', 90, 3);
            
            case 'prompt_pioneer':
                return this.isLevelCompleted(1);

            case 'roleplay_ranger':
                return this.isLevelCompleted(2);

            case 'structure_scholar':
                return this.isLevelCompleted(3);

            case 'constraint_conductor':
                return this.isLevelCompleted(4);

            case 'diagnostics_maestro':
                return this.isLevelCompleted(5);
            
            case 'streak_master':
                return this.userProgress.currentStreak >= 5;
            
            default:
                return false;
        }
    }

    checkConsecutiveHighScores(criteria, threshold, count) {
        // This would need to be implemented with actual challenge scoring data
        // For now, return false until we have scoring system
        return false;
    }

    checkHighScoreCount(criteria, threshold, count) {
        // This would need to be implemented with actual challenge scoring data
        // For now, return false until we have scoring system
        return false;
    }

    showAchievementNotification(badge) {
        const notification = document.getElementById('achievement-notification');
        const icon = document.getElementById('achievement-icon');
        const title = document.getElementById('achievement-title');
        const description = document.getElementById('achievement-description');

        icon.textContent = badge.icon;
        title.textContent = badge.name;
        description.textContent = badge.description;

        notification.classList.add('show');

        // Animate badge unlock
        anime({
            targets: notification,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutBack'
        });

        // Hide after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);
    }

    showLevelUpNotification(level) {
        const notification = document.getElementById('achievement-notification');
        const icon = document.getElementById('achievement-icon');
        const title = document.getElementById('achievement-title');
        const description = document.getElementById('achievement-description');

        icon.textContent = '🚀';
        title.textContent = 'Level Up!';
        description.textContent = `You've reached Level ${level}! New challenges unlocked.`;

        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);
    }

    showXPGain(points, previousXP) {
        // Create floating XP animation
        const xpElement = document.createElement('div');
        xpElement.textContent = `+${points} XP`;
        xpElement.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-green-500 pointer-events-none z-50';
        document.body.appendChild(xpElement);

        anime({
            targets: xpElement,
            translateY: -100,
            opacity: [1, 0],
            scale: [1, 1.5],
            duration: 2000,
            easing: 'easeOutQuart',
            complete: () => {
                document.body.removeChild(xpElement);
            }
        });
    }

    updateUI() {
        // Update XP display
        const xpElement = document.getElementById('total-xp');
        if (xpElement) {
            anime({
                targets: { value: parseInt(xpElement.textContent) || 0 },
                value: this.userProgress.totalXP,
                duration: 1000,
                easing: 'easeOutQuart',
                update: function(anim) {
                    xpElement.textContent = Math.round(anim.animatables[0].target.value);
                }
            });
        }

        // Update level display
        const levelElements = document.querySelectorAll('#current-level, #level-number');
        levelElements.forEach(el => {
            if (el) el.textContent = this.userProgress.currentLevel;
        });

        // Update streak display
        const streakElement = document.getElementById('streak-count');
        if (streakElement) {
            streakElement.textContent = this.userProgress.currentStreak;
        }

        // Update level progress
        this.updateLevelProgress();
    }

    updateLevelProgress() {
        const unlockThresholds = {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5
        };

        Object.entries(unlockThresholds).forEach(([levelId, requiredPlayerLevel]) => {
            const numericId = parseInt(levelId, 10);
            const isUnlocked = this.userProgress.currentLevel >= requiredPlayerLevel;

            if (!this.userProgress.levelProgress[numericId]) {
                this.userProgress.levelProgress[numericId] = { unlocked: isUnlocked, completed: false };
            } else if (isUnlocked && !this.userProgress.levelProgress[numericId].unlocked) {
                this.userProgress.levelProgress[numericId].unlocked = true;
            }

            const levelData = challengeData.levels.find(level => level.id === numericId);
            if (levelData) {
                levelData.unlocked = this.userProgress.levelProgress[numericId].unlocked;
            }
        });

        this.updateLevelCompletionStatus();

        if (typeof window.loadChallenges === 'function') {
            window.loadChallenges();
        }
    }

    getProgress() {
        return this.userProgress;
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            localStorage.removeItem('promptQuestProgress');
            location.reload();
        }
    }

    // Statistics methods
    getTotalChallengesCompleted() {
        return this.userProgress.completedChallenges.length;
    }

    getAverageScore() {
        const scores = Object.values(this.userProgress.challengeScores);
        if (scores.length === 0) return 0;
        return scores.reduce((sum, score) => sum + score, 0) / scores.length;
    }

    getLevelProgress() {
        const currentLevelXP = this.userProgress.totalXP;
        let nextLevelXP, prevLevelXP;
        
        if (this.userProgress.currentLevel === 1) {
            prevLevelXP = 0;
            nextLevelXP = 500;
        } else if (this.userProgress.currentLevel === 2) {
            prevLevelXP = 500;
            nextLevelXP = 1200;
        } else {
            prevLevelXP = 1200;
            nextLevelXP = 2000;
        }
        
        const progress = ((currentLevelXP - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;
        return Math.min(100, Math.max(0, progress));
    }
}

// Initialize progress system
const progressSystem = new ProgressSystem();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProgressSystem;
}
