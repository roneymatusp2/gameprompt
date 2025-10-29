// Firebase Configuration and Authentication System
class FirebaseAuthSystem {
    constructor() {
        this.auth = null;
        this.db = null;
        this.currentUser = null;
        this.firebaseEnabled = false;
        this.init();
    }

    init() {
        // Check if Firebase is available and configured
        if (typeof firebase === 'undefined') {
            console.log('Firebase not loaded - running in local-only mode');
            this.firebaseEnabled = false;
            return;
        }

        // Firebase config - Replace these with your actual values
        // Or set them in Netlify environment variables
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY", // Replace with your Firebase API key
            authDomain: "promtgames.firebaseapp.com", // Replace with your domain
            projectId: "promtgames", // Replace with your project ID
            storageBucket: "promtgames.appspot.com", // Replace with your bucket
            messagingSenderId: "YOUR_SENDER_ID", // Replace with your sender ID
            appId: "YOUR_APP_ID" // Replace with your app ID
        };

        // Check if config is set up
        if (firebaseConfig.apiKey === "YOUR_API_KEY") {
            console.log('Firebase not configured - running in local-only mode');
            console.log('To enable cloud features, follow the guide in FIREBASE_SETUP.md');
            this.firebaseEnabled = false;
            return;
        }

        try {
            // Initialize Firebase
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            
            this.auth = firebase.auth();
            this.db = firebase.firestore();
            this.firebaseEnabled = true;
            
            this.setupAuthStateListener();
            console.log('Firebase initialized successfully');
        } catch (error) {
            console.error('Firebase initialization failed:', error);
            console.log('Running in local-only mode');
            this.firebaseEnabled = false;
        }
    }

    setupAuthStateListener() {
        if (!this.firebaseEnabled || !this.auth) return;
        
        this.auth.onAuthStateChanged((user) => {
            if (user) {
                this.currentUser = user;
                this.onUserLoggedIn(user);
            } else {
                this.currentUser = null;
                this.onUserLoggedOut();
            }
        });
    }

    async onUserLoggedIn(user) {
        console.log('User logged in:', user.email);
        
        // Load user data from Firestore
        await this.loadUserData(user.uid);
        
        // Update UI
        this.updateUIForLoggedInUser(user);
        
        // Sync local progress to cloud
        await this.syncProgressToCloud();
        
        // Show main game
        this.showMainGame();
    }

    onUserLoggedOut() {
        console.log('User logged out');
        this.showLoginScreen();
    }

    // Authentication Methods
    async login(email, password) {
        if (!this.firebaseEnabled) {
            this.showNotification('Firebase not configured. Running in local-only mode.', 'error');
            throw new Error('Firebase not enabled');
        }
        
        try {
            const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
            this.showNotification('Login successful!', 'success');
            return userCredential.user;
        } catch (error) {
            console.error('Login error:', error);
            this.showNotification(this.getErrorMessage(error.code), 'error');
            throw error;
        }
    }

    async register(email, password, displayName) {
        try {
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            
            // Update profile
            await user.updateProfile({ displayName });
            
            // Create user document in Firestore
            await this.createUserDocument(user.uid, {
                email,
                displayName,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                stats: {
                    totalPrompts: 0,
                    successRate: 0,
                    achievements: 0,
                    gamesPlayed: 0,
                    totalPoints: 0,
                    level: 1,
                    streak: 0,
                    bestStreak: 0
                },
                progress: {
                    completedChallenges: [],
                    challengeScores: {},
                    unlockedLevels: [1]
                }
            });
            
            // Send verification email
            await user.sendEmailVerification();
            
            this.showNotification('Account created! Please verify your email.', 'success');
            return user;
        } catch (error) {
            console.error('Registration error:', error);
            this.showNotification(this.getErrorMessage(error.code), 'error');
            throw error;
        }
    }

    async logout() {
        try {
            // Save progress before logout
            await this.syncProgressToCloud();
            await this.auth.signOut();
            this.showNotification('Logged out successfully', 'success');
        } catch (error) {
            console.error('Logout error:', error);
            this.showNotification('Error logging out', 'error');
        }
    }

    async resetPassword(email) {
        try {
            await this.auth.sendPasswordResetEmail(email);
            this.showNotification('Password reset email sent!', 'success');
        } catch (error) {
            console.error('Password reset error:', error);
            this.showNotification(this.getErrorMessage(error.code), 'error');
            throw error;
        }
    }

    // Google Sign-In
    async loginWithGoogle() {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const result = await this.auth.signInWithPopup(provider);
            
            // Check if user document exists, create if not
            const userDoc = await this.db.collection('users').doc(result.user.uid).get();
            if (!userDoc.exists) {
                await this.createUserDocument(result.user.uid, {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    stats: {
                        totalPrompts: 0,
                        successRate: 0,
                        achievements: 0,
                        gamesPlayed: 0,
                        totalPoints: 0,
                        level: 1,
                        streak: 0,
                        bestStreak: 0
                    },
                    progress: {
                        completedChallenges: [],
                        challengeScores: {},
                        unlockedLevels: [1]
                    }
                });
            }
            
            this.showNotification('Logged in with Google!', 'success');
            return result.user;
        } catch (error) {
            console.error('Google login error:', error);
            this.showNotification(this.getErrorMessage(error.code), 'error');
            throw error;
        }
    }

    // Firestore Methods
    async createUserDocument(uid, data) {
        try {
            await this.db.collection('users').doc(uid).set(data);
        } catch (error) {
            console.error('Error creating user document:', error);
            throw error;
        }
    }

    async loadUserData(uid) {
        try {
            const doc = await this.db.collection('users').doc(uid).get();
            if (doc.exists) {
                const userData = doc.data();
                
                // Update local storage with cloud data
                if (userData.progress) {
                    localStorage.setItem('userProgress', JSON.stringify(userData.progress));
                }
                if (userData.stats) {
                    Object.keys(userData.stats).forEach(key => {
                        localStorage.setItem(key, userData.stats[key]);
                    });
                }
                
                return userData;
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    }

    async syncProgressToCloud() {
        if (!this.currentUser) {
            console.log('Guest mode - progress saved locally only');
            return;
        }

        try {
            const progress = JSON.parse(localStorage.getItem('userProgress') || '{}');
            const stats = {
                totalPrompts: parseInt(localStorage.getItem('totalPrompts') || '0'),
                successRate: parseInt(localStorage.getItem('successRate') || '0'),
                achievements: window.achievementSystem?.getUnlockedCount() || 0,
                gamesPlayed: parseInt(localStorage.getItem('miniGamesPlayed') || '0'),
                totalPoints: parseInt(localStorage.getItem('totalPoints') || '0'),
                level: parseInt(localStorage.getItem('currentLevel') || '1'),
                streak: parseInt(localStorage.getItem('currentStreak') || '0'),
                bestStreak: parseInt(localStorage.getItem('bestStreak') || '0')
            };

            await this.db.collection('users').doc(this.currentUser.uid).update({
                progress,
                stats,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            });

            console.log('Progress synced to cloud');
        } catch (error) {
            console.error('Error syncing progress:', error);
        }
    }
    
    // Check if user is in guest mode
    isGuestMode() {
        return localStorage.getItem('guestMode') === 'true';
    }
    
    // Prompt user to sign up to save progress
    promptSignUp() {
        if (this.isGuestMode()) {
            const shouldSignUp = confirm(
                'Sign in to save your progress and unlock all features!\n\n' +
                '✓ Save progress across devices\n' +
                '✓ Unlock achievements\n' +
                '✓ Compete on leaderboards\n\n' +
                'Would you like to create an account now?'
            );
            
            if (shouldSignUp) {
                window.location.href = 'auth.html';
            }
        }
    }

    async updateUserStats(stats) {
        if (!this.currentUser) return;

        try {
            await this.db.collection('users').doc(this.currentUser.uid).update({
                stats,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            });
        } catch (error) {
            console.error('Error updating stats:', error);
        }
    }

    async savePromptSubmission(challengeId, prompt, score, evaluation) {
        if (!this.currentUser) return;

        try {
            await this.db.collection('promptSubmissions').add({
                userId: this.currentUser.uid,
                userEmail: this.currentUser.email,
                challengeId,
                prompt,
                score,
                evaluation,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        } catch (error) {
            console.error('Error saving prompt submission:', error);
        }
    }

    async getLeaderboard(limit = 10) {
        try {
            const snapshot = await this.db.collection('users')
                .orderBy('stats.totalPoints', 'desc')
                .limit(limit)
                .get();

            return snapshot.docs.map(doc => ({
                uid: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error getting leaderboard:', error);
            return [];
        }
    }

    // UI Methods
    showLoginScreen() {
        document.querySelector('.main-game-container')?.classList.add('hidden');
        document.getElementById('auth-container')?.classList.remove('hidden');
    }

    showMainGame() {
        document.getElementById('auth-container')?.classList.add('hidden');
        document.querySelector('.main-game-container')?.classList.remove('hidden');
    }

    updateUIForLoggedInUser(user) {
        // Update user display in nav
        const userDisplay = document.getElementById('user-display');
        if (userDisplay) {
            userDisplay.innerHTML = `
                <div class="flex items-center gap-3">
                    <img src="${user.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.displayName || user.email)}" 
                         class="w-8 h-8 rounded-full" 
                         alt="User avatar">
                    <span class="text-sm font-medium">${user.displayName || user.email}</span>
                    <button onclick="firebaseAuth.logout()" class="text-xs text-red-500 hover:text-red-700">
                        Logout
                    </button>
                </div>
            `;
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium animate-slide-in ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            'bg-blue-500'
        }`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    getErrorMessage(errorCode) {
        const messages = {
            'auth/email-already-in-use': 'This email is already registered',
            'auth/invalid-email': 'Invalid email address',
            'auth/operation-not-allowed': 'Operation not allowed',
            'auth/weak-password': 'Password is too weak (min 6 characters)',
            'auth/user-disabled': 'This account has been disabled',
            'auth/user-not-found': 'No account found with this email',
            'auth/wrong-password': 'Incorrect password',
            'auth/too-many-requests': 'Too many attempts. Try again later',
            'auth/network-request-failed': 'Network error. Check your connection'
        };
        return messages[errorCode] || 'An error occurred. Please try again.';
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }
}

// Initialize Firebase Auth System
let firebaseAuth;
document.addEventListener('DOMContentLoaded', () => {
    firebaseAuth = new FirebaseAuthSystem();
    window.firebaseAuth = firebaseAuth;
});
