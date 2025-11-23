class Dashboard {
    constructor() {
        this.init();
    }

    init() {
        this.setupAuthListener();
        this.setupEventListeners();
    }

    setupAuthListener() {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                await this.loadUserData(user);
                this.loadStats();
            } else {
                window.location.href = 'index.html';
            }
        });
    }

    setupEventListeners() {
        // Avatar Upload
        document.getElementById('avatar-upload').addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            try {
                const btn = document.querySelector('.avatar-overlay span');
                const originalText = btn.textContent;
                btn.textContent = 'Uploading...';
                
                const url = await window.storageManager.uploadProfilePicture(file);
                document.getElementById('profile-image').src = url;
                
                btn.textContent = 'Success!';
                setTimeout(() => btn.textContent = originalText, 2000);
            } catch (error) {
                console.error(error);
                alert('Error uploading image: ' + error.message);
            }
        });

        // Password Update
        document.getElementById('password-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const newPassword = document.getElementById('new-password').value;
            if (newPassword.length < 6) {
                alert('Password must be at least 6 characters');
                return;
            }

            const user = firebase.auth().currentUser;
            try {
                await user.updatePassword(newPassword);
                alert('Password updated successfully!');
                document.getElementById('new-password').value = '';
            } catch (error) {
                if (error.code === 'auth/requires-recent-login') {
                    alert('For security, please sign out and sign in again to change your password.');
                } else {
                    alert('Error: ' + error.message);
                }
            }
        });
    }

    async loadUserData(user) {
        // Basic Auth Data
        document.getElementById('display-name').textContent = user.displayName || 'Explorer';
        document.getElementById('user-email').textContent = user.email;
        if (user.photoURL) {
            document.getElementById('profile-image').src = user.photoURL;
        }

        // Firestore Extended Data
        const db = firebase.firestore();
        try {
            const doc = await db.collection('users').doc(user.uid).get();
            if (doc.exists) {
                const data = doc.data();
                this.renderActivityLog(data.progress?.sessionHistory);
            }
        } catch (e) {
            console.error("Error loading detailed user data", e);
        }
    }

    loadStats() {
        // Get data from ProgressSystem (which syncs with LocalStorage/Firestore)
        if (!window.progressSystem) {
            console.warn('ProgressSystem not ready yet, retrying in 500ms...');
            setTimeout(() => this.loadStats(), 500);
            return;
        }
        const stats = window.progressSystem.userProgress;
        
        // Update Basic Counters
        document.getElementById('total-xp').textContent = stats.totalXP || 0;
        document.getElementById('current-level').textContent = stats.currentLevel || 1;
        document.getElementById('streak-days').textContent = stats.currentStreak || 0;
        document.getElementById('challenges-solved').textContent = (stats.completedChallenges || []).length;

        // Calculate Learning Progress
        let totalLearningProgress = 0;
        if (window.progressSystem.getStageProgress) {
            let totalPercentage = 0;
            for(let i=1; i<=5; i++) {
                totalPercentage += window.progressSystem.getStageProgress(i).percentage;
            }
            totalLearningProgress = Math.round(totalPercentage / 5);
        }
        
        document.getElementById('learning-progress').textContent = `${totalLearningProgress}%`;

        // Render Stages List
        this.renderStagesList(stats.levelProgress);
    }

    renderStagesList(levelProgress) {
        const container = document.getElementById('learning-stages-list');
        container.innerHTML = '';

        const stages = [
            { id: 1, name: "The Essentials" },
            { id: 2, name: "Context & Personas" },
            { id: 3, name: "Formatting & Structure" },
            { id: 4, name: "Creative Constraints" },
            { id: 5, name: "Iteration & Rescue" }
        ];

        stages.forEach(stage => {
            const status = levelProgress && levelProgress[stage.id] ? levelProgress[stage.id] : { unlocked: stage.id === 1, completed: false };
            
            // Get detailed progress
            let progress = { completed: 0, total: 10, percentage: 0 };
            if (window.progressSystem.getStageProgress) {
                progress = window.progressSystem.getStageProgress(stage.id);
            }

            let itemClass = 'border border-white/10 bg-white/5';
            let icon = '🔒';
            let titleColor = 'text-gray-500';

            if (status.completed || progress.percentage === 100) {
                itemClass = 'border border-emerald-500/30 bg-emerald-900/20';
                icon = '🏆';
                titleColor = 'text-white';
            } else if (status.unlocked) {
                itemClass = 'border border-indigo-500/30 bg-indigo-900/20';
                icon = '▶';
                titleColor = 'text-white';
            }

            const html = `
                <div class="p-4 rounded-lg ${itemClass} transition-all hover:scale-[1.01]">
                    <div class="flex justify-between items-center mb-2">
                        <div class="flex items-center gap-3">
                            <span class="text-lg">${icon}</span>
                            <div>
                                <h4 class="text-lg font-bold ${titleColor}">${stage.name}</h4>
                                <div class="text-xs text-gray-400">Stage ${stage.id}</div>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-xl font-bold ${status.unlocked ? 'text-white' : 'text-gray-600'}">${progress.percentage}%</span>
                        </div>
                    </div>
                    
                    ${status.unlocked ? `
                    <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-indigo-500 to-emerald-500" style="width: ${progress.percentage}%"></div>
                    </div>
                    <div class="flex justify-between mt-1">
                        <span class="text-xs text-gray-500">${progress.completed}/${progress.total} Modules</span>
                        <a href="learning-stage.html?stage=${stage.id}" class="text-xs text-indigo-400 hover:text-indigo-300 font-bold">
                            ${progress.percentage === 100 ? 'Review' : 'Continue'} →
                        </a>
                    </div>
                    ` : ''}
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }

    renderActivityLog(history) {
        const container = document.getElementById('activity-log');
        if (!history || history.length === 0) return;

        container.innerHTML = '';
        // Show last 5 items
        const recent = history.slice(-5).reverse();

        recent.forEach(item => {
            const date = item.timestamp ? new Date(item.timestamp.seconds * 1000).toLocaleDateString() : 'Just now';
            const html = `
                <div class="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                    <div class="mt-1">⚡</div>
                    <div>
                        <p class="text-gray-200 text-sm">Completed challenge <span class="font-bold text-white">#${item.challengeId}</span></p>
                        <p class="text-xs text-gray-500">${date} • Score: ${item.score}</p>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new Dashboard();
});
