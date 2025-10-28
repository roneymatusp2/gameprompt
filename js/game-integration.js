// Game Integration - Connects all features together
class GameIntegration {
    constructor() {
        this.systems = {
            dragDrop: window.dragDropBuilder,
            miniGames: window.promptMiniGames,
            achievements: window.achievementSystem,
            aiPreview: window.aiPreviewSystem,
            multiplayer: window.multiplayerSystem,
            audio: window.audioSystem,
            progress: window.progressSystem,
            main: window.promptQuestGame
        };
        
        this.init();
    }

    init() {
        this.setupCrossSystemCommunication();
        this.integrateEventHandlers();
        this.enhanceMainGame();
        this.setupStatsPersistence();
    }

    setupCrossSystemCommunication() {
        // Connect drag-drop builder to AI preview
        document.addEventListener('drop', (e) => {
            if (e.target.closest('.prompt-drop-zone')) {
                const prompt = window.dragDropBuilder?.droppedBlocks
                    .map(b => b.text).join(' ');
                
                if (prompt) {
                    window.dispatchEvent(new CustomEvent('promptBuilderChanged', {
                        detail: { prompt }
                    }));
                }
            }
        });

        // Connect mini-games to achievements
        window.addEventListener('gameCompleted', (e) => {
            // Update stats
            const gamesPlayed = parseInt(localStorage.getItem('miniGamesPlayed') || 0) + 1;
            localStorage.setItem('miniGamesPlayed', gamesPlayed);
            
            // Check for mini-game achievements
            if (gamesPlayed >= 10 && !this.systems.achievements?.isUnlocked('gameAddict')) {
                this.systems.achievements?.unlockAchievement('gameAddict');
            }
        });

        // Connect achievements to audio
        window.addEventListener('achievementUnlocked', () => {
            this.systems.audio?.playSound('achievement');
        });

        // Connect multiplayer to progress
        window.addEventListener('collaborativeSuccess', (e) => {
            const points = e.detail.points || 100;
            this.systems.progress?.addPoints(points * 1.5); // Bonus for collaboration
        });
    }

    integrateEventHandlers() {
        // Enhanced prompt submission
        const originalSubmit = window.promptQuestGame?.submitPrompt;
        if (originalSubmit) {
            window.promptQuestGame.submitPrompt = function() {
                // Call original
                originalSubmit.call(this);
                
                // Update stats
                const totalPrompts = parseInt(localStorage.getItem('totalPrompts') || 0) + 1;
                localStorage.setItem('totalPrompts', totalPrompts);
                
                // Check for prompt milestones
                if (totalPrompts === 1) {
                    window.achievementSystem?.unlockAchievement('firstPrompt');
                }
                if (totalPrompts === 50) {
                    window.achievementSystem?.unlockAchievement('promptArtist');
                }
                
                // Play sound
                window.audioSystem?.playSound('success');
            };
        }

        // Track success rate
        window.addEventListener('challengeCompleted', (e) => {
            const total = parseInt(localStorage.getItem('totalChallenges') || 0) + 1;
            const successful = parseInt(localStorage.getItem('successfulChallenges') || 0);
            
            if (e.detail.success) {
                localStorage.setItem('successfulChallenges', successful + 1);
                
                // Update streak
                const streak = parseInt(localStorage.getItem('currentStreak') || 0) + 1;
                localStorage.setItem('currentStreak', streak);
                
                // Check streak achievements
                if (streak === 5) {
                    window.achievementSystem?.unlockAchievement('fiveInRow');
                }
            } else {
                localStorage.setItem('currentStreak', 0);
            }
            
            localStorage.setItem('totalChallenges', total);
            
            // Calculate success rate
            const rate = total > 0 ? Math.round((successful / total) * 100) : 0;
            localStorage.setItem('successRate', rate);
        });
    }

    enhanceMainGame() {
        // Add toggle for drag-drop builder
        const promptSection = document.querySelector('.prompt-input-section');
        if (promptSection) {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'btn btn-secondary mb-4';
            toggleBtn.innerHTML = '🔄 Switch to Visual Builder';
            toggleBtn.onclick = () => this.togglePromptBuilder();
            
            promptSection.insertBefore(toggleBtn, promptSection.firstChild);
        }

        // Add quick access buttons
        this.addQuickAccessBar();
        
        // Initialize with welcome animation
        this.showWelcomeAnimation();
    }

    togglePromptBuilder() {
        const traditional = document.getElementById('prompt-input-section');
        const visual = document.getElementById('prompt-builder-section');
        const toggleBtn = document.querySelector('.prompt-input-section button');
        
        if (traditional.style.display === 'none') {
            traditional.style.display = 'block';
            visual.classList.add('hidden');
            toggleBtn.innerHTML = '🔄 Switch to Visual Builder';
        } else {
            traditional.style.display = 'none';
            visual.classList.remove('hidden');
            toggleBtn.innerHTML = '🔄 Switch to Text Input';
            
            // Initialize drag-drop if not already done
            if (!window.dragDropBuilder) {
                window.dragDropBuilder = new DragDropPromptBuilder();
            }
        }
        
        // Animate transition
        anime({
            targets: traditional.style.display === 'none' ? visual : traditional,
            opacity: [0, 1],
            scale: [0.95, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
    }

    addQuickAccessBar() {
        const quickAccessHTML = `
            <div class="quick-access-bar fixed bottom-20 right-4 flex flex-col gap-2 z-30">
                <button class="quick-btn bg-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                        onclick="gameIntegration.quickAction('miniGames')"
                        title="Mini-Games">
                    🎮
                </button>
                <button class="quick-btn bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                        onclick="gameIntegration.quickAction('achievements')"
                        title="Achievements">
                    🏆
                </button>
                <button class="quick-btn bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                        onclick="gameIntegration.quickAction('multiplayer')"
                        title="Multiplayer">
                    🌐
                </button>
                <button class="quick-btn bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                        onclick="gameIntegration.quickAction('leaderboard')"
                        title="Leaderboard">
                    📊
                </button>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', quickAccessHTML);
    }

    quickAction(action) {
        switch(action) {
            case 'miniGames':
                this.systems.miniGames?.openGameHub();
                break;
            case 'achievements':
                this.systems.achievements?.showPanel();
                break;
            case 'multiplayer':
                this.systems.multiplayer?.showPanel();
                break;
            case 'leaderboard':
                this.showLeaderboard();
                break;
        }
        
        this.systems.audio?.playSound('click');
    }

    showLeaderboard() {
        // Simple leaderboard implementation
        const leaderboardHTML = `
            <div class="leaderboard-panel fixed inset-0 bg-gray-900 bg-opacity-95 z-50 p-8 overflow-auto">
                <div class="leaderboard-content max-w-4xl mx-auto bg-white rounded-xl p-8">
                    <h2 class="text-3xl font-bold mb-6 gradient-text text-center">🏅 Global Leaderboard</h2>
                    
                    <div class="leaderboard-tabs flex gap-4 mb-6 justify-center">
                        <button class="tab-btn active" data-tab="points">Total Points</button>
                        <button class="tab-btn" data-tab="streak">Best Streak</button>
                        <button class="tab-btn" data-tab="achievements">Achievements</button>
                        <button class="tab-btn" data-tab="games">Mini-Games</button>
                    </div>
                    
                    <div class="leaderboard-list">
                        ${this.generateLeaderboardData()}
                    </div>
                    
                    <button class="btn btn-secondary mt-6" onclick="gameIntegration.closeLeaderboard()">
                        Close
                    </button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', leaderboardHTML);
        
        // Tab functionality
        document.querySelectorAll('.leaderboard-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.leaderboard-tabs .tab-btn').forEach(b => 
                    b.classList.remove('active'));
                e.target.classList.add('active');
                // In real implementation, would load different data
            });
        });
    }

    generateLeaderboardData() {
        const players = [
            { rank: 1, name: 'PromptMaster', score: 15420, avatar: '🏆' },
            { rank: 2, name: 'You', score: 8750, avatar: '🎮', highlight: true },
            { rank: 3, name: 'AIWhisperer', score: 8320, avatar: '🧙' },
            { rank: 4, name: 'CodeNinja', score: 7890, avatar: '🥷' },
            { rank: 5, name: 'PromptPro', score: 6540, avatar: '💫' }
        ];
        
        return players.map(player => `
            <div class="leaderboard-row flex items-center justify-between p-4 ${
                player.highlight ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50'
            } rounded-lg mb-2">
                <div class="flex items-center gap-4">
                    <span class="rank text-2xl font-bold ${
                        player.rank === 1 ? 'text-yellow-500' :
                        player.rank === 2 ? 'text-gray-400' :
                        player.rank === 3 ? 'text-orange-600' : 'text-gray-600'
                    }">#${player.rank}</span>
                    <span class="avatar text-3xl">${player.avatar}</span>
                    <span class="name font-semibold ${player.highlight ? 'text-blue-600' : ''}">${player.name}</span>
                </div>
                <span class="score text-xl font-bold">${player.score.toLocaleString()}</span>
            </div>
        `).join('');
    }

    closeLeaderboard() {
        document.querySelector('.leaderboard-panel')?.remove();
    }

    showWelcomeAnimation() {
        // Only show once per session
        if (sessionStorage.getItem('welcomeShown')) return;
        
        const welcomeHTML = `
            <div class="welcome-overlay fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex items-center justify-center">
                <div class="welcome-content text-center text-white">
                    <h1 class="text-6xl font-bold mb-4 animate-bounce">Welcome to Prompt Quest 2.0!</h1>
                    <p class="text-2xl mb-8 opacity-90">Your journey to AI mastery begins now</p>
                    
                    <div class="features-preview grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                        <div class="feature-card bg-white bg-opacity-10 p-6 rounded-lg">
                            <div class="text-4xl mb-2">🎮</div>
                            <h3 class="font-bold">Mini-Games</h3>
                        </div>
                        <div class="feature-card bg-white bg-opacity-10 p-6 rounded-lg">
                            <div class="text-4xl mb-2">🏆</div>
                            <h3 class="font-bold">Achievements</h3>
                        </div>
                        <div class="feature-card bg-white bg-opacity-10 p-6 rounded-lg">
                            <div class="text-4xl mb-2">🤖</div>
                            <h3 class="font-bold">AI Preview</h3>
                        </div>
                        <div class="feature-card bg-white bg-opacity-10 p-6 rounded-lg">
                            <div class="text-4xl mb-2">🌐</div>
                            <h3 class="font-bold">Multiplayer</h3>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary text-xl px-8 py-4" onclick="gameIntegration.closeWelcome()">
                        Let's Start! 🚀
                    </button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', welcomeHTML);
        
        // Animate features
        anime({
            targets: '.feature-card',
            scale: [0, 1],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 600,
            easing: 'easeOutElastic(1, .8)'
        });
        
        sessionStorage.setItem('welcomeShown', 'true');
    }

    closeWelcome() {
        const overlay = document.querySelector('.welcome-overlay');
        anime({
            targets: overlay,
            opacity: [1, 0],
            duration: 500,
            easing: 'easeOutQuart',
            complete: () => overlay.remove()
        });
        
        // Play welcome sound
        this.systems.audio?.playSound('levelUp');
    }

    setupStatsPersistence() {
        // Initialize stats if not exists
        const defaultStats = {
            totalPrompts: 0,
            successRate: 0,
            totalChallenges: 0,
            successfulChallenges: 0,
            currentStreak: 0,
            bestStreak: 0,
            miniGamesPlayed: 0,
            totalPoints: 0
        };
        
        Object.entries(defaultStats).forEach(([key, value]) => {
            if (!localStorage.getItem(key)) {
                localStorage.setItem(key, value);
            }
        });
    }
}

// Initialize integration when all systems are ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait for all systems to initialize
    setTimeout(() => {
        window.gameIntegration = new GameIntegration();
    }, 1000);
});