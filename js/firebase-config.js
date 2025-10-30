// Firebase Configuration and Authentication System
// Supports both Netlify environment variables and local configuration
// All text in British English

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

        // Get Firebase config from environment variables (Netlify) or use local config
        const firebaseConfig = this.getFirebaseConfig();

        // Check if config is set up
        if (!firebaseConfig || firebaseConfig.apiKey === "YOUR_API_KEY" || !firebaseConfig.apiKey) {
            console.log('Firebase not configured - running in local-only mode');
            console.log('To enable cloud features, configure Firebase in Netlify or update js/firebase-config.js');
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
            console.log('Firebase initialised successfully');
        } catch (error) {
            console.error('Firebase initialisation failed:', error);
            console.log('Running in local-only mode');
            this.firebaseEnabled = false;
        }
    }

    getFirebaseConfig() {
        // First, check if config was injected via inline script (Netlify build)
        if (typeof window !== 'undefined' && window.__FIREBASE_CONFIG__) {
            return window.__FIREBASE_CONFIG__;
        }

        // Check for Netlify environment variables (via injected script)
        if (typeof window !== 'undefined' && window.netlify && window.netlify.env) {
            const env = window.netlify.env;
            if (env.FIREBASE_API_KEY) {
                return {
                    apiKey: env.FIREBASE_API_KEY,
                    authDomain: env.FIREBASE_AUTH_DOMAIN,
                    projectId: env.FIREBASE_PROJECT_ID,
                    storageBucket: env.FIREBASE_STORAGE_BUCKET,
                    messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
                    appId: env.FIREBASE_APP_ID
                };
            }
        }

        // Check if local config exists (from firebase-config.local.js)
        if (typeof window !== 'undefined' && window.__FIREBASE_LOCAL_CONFIG__) {
            return window.__FIREBASE_LOCAL_CONFIG__;
        }

        // For Netlify/production: detect Netlify domain and use credentials
        // This is safe because Firebase API keys are public by design
        if (typeof window !== 'undefined' && window.location.hostname.includes('netlify.app')) {
            return {
                apiKey: "AIzaSyBuzlggCmuCkOgorMnLFw6aAmgh25b8FIs",
                authDomain: "promptgames-65e49.firebaseapp.com",
                projectId: "promptgames-65e49",
                storageBucket: "promptgames-65e49.firebasestorage.app",
                messagingSenderId: "617690670802",
                appId: "1:617690670802:web:3c5be7009be9af5238ef0b"
            };
        }

        // Local/fallback configuration - use placeholders
        // Real credentials should be in firebase-config.local.js (not committed)
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "promptgames-65e49.firebaseapp.com",
            projectId: "promptgames-65e49",
            storageBucket: "promptgames-65e49.firebasestorage.app",
            messagingSenderId: "YOUR_SENDER_ID",
            appId: "YOUR_APP_ID"
        };

        return firebaseConfig;
    }

    setupAuthStateListener() {
        if (!this.firebaseEnabled || !this.auth) return;
        
        this.auth.onAuthStateChanged(async (user) => {
            if (user) {
                this.currentUser = user;
                await this.onUserLoggedIn(user);
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
        // Only show login screen if NOT in guest mode
        const isGuestMode = localStorage.getItem('guestMode') === 'true';
        if (!isGuestMode) {
            this.showLoginScreen();
        } else {
            // In guest mode, keep the game visible
            this.showMainGame();
        }
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
        if (!this.firebaseEnabled) {
            this.showNotification('Firebase not configured. Running in local-only mode.', 'error');
            throw new Error('Firebase not enabled');
        }

        try {
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            
            // Update profile
            await user.updateProfile({ displayName });
            
            // Create user document in Firestore with student tracking
            await this.createUserDocument(user.uid, {
                email,
                displayName,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                role: 'student',
                stats: {
                    totalPrompts: 0,
                    successRate: 0,
                    achievements: 0,
                    gamesPlayed: 0,
                    totalPoints: 0,
                    level: 1,
                    streak: 0,
                    bestStreak: 0,
                    averageScore: 0,
                    totalChallengesCompleted: 0
                },
                progress: {
                    completedChallenges: [],
                    challengeScores: {},
                    unlockedLevels: [1],
                    lastChallengeCompleted: null,
                    sessionHistory: []
                },
                analytics: {
                    totalSessions: 1,
                    totalTimeSpent: 0,
                    firstSession: firebase.firestore.FieldValue.serverTimestamp(),
                    lastSession: firebase.firestore.FieldValue.serverTimestamp()
                }
            });
            
            // Send verification email
            await user.sendEmailVerification();
            
            this.showNotification('Account created! Please check your email to verify your account.', 'success');
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
        if (!this.firebaseEnabled) {
            this.showNotification('Firebase not configured. Running in local-only mode.', 'error');
            throw new Error('Firebase not enabled');
        }

        try {
            await this.auth.sendPasswordResetEmail(email);
            this.showNotification('Password reset email sent! Please check your inbox.', 'success');
        } catch (error) {
            console.error('Password reset error:', error);
            this.showNotification(this.getErrorMessage(error.code), 'error');
            throw error;
        }
    }

    // Google Sign-In
    async loginWithGoogle() {
        if (!this.firebaseEnabled) {
            this.showNotification('Firebase not configured. Running in local-only mode.', 'error');
            throw new Error('Firebase not enabled');
        }

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
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                    role: 'student',
                    stats: {
                        totalPrompts: 0,
                        successRate: 0,
                        achievements: 0,
                        gamesPlayed: 0,
                        totalPoints: 0,
                        level: 1,
                        streak: 0,
                        bestStreak: 0,
                        averageScore: 0,
                        totalChallengesCompleted: 0
                    },
                    progress: {
                        completedChallenges: [],
                        challengeScores: {},
                        unlockedLevels: [1],
                        lastChallengeCompleted: null,
                        sessionHistory: []
                    },
                    analytics: {
                        totalSessions: 1,
                        totalTimeSpent: 0,
                        firstSession: firebase.firestore.FieldValue.serverTimestamp(),
                        lastSession: firebase.firestore.FieldValue.serverTimestamp()
                    }
                });
            } else {
                // Update last login time
                await this.db.collection('users').doc(result.user.uid).update({
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                    'analytics.lastSession': firebase.firestore.FieldValue.serverTimestamp()
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
                bestStreak: parseInt(localStorage.getItem('bestStreak') || '0'),
                averageScore: this.calculateAverageScore(progress),
                totalChallengesCompleted: progress.completedChallenges?.length || 0
            };

            // Update analytics
            const analytics = {
                lastSession: firebase.firestore.FieldValue.serverTimestamp()
            };

            await this.db.collection('users').doc(this.currentUser.uid).update({
                progress,
                stats,
                analytics,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            });

            console.log('Progress synced to cloud');
        } catch (error) {
            console.error('Error syncing progress:', error);
        }
    }

    calculateAverageScore(progress) {
        if (!progress.challengeScores || Object.keys(progress.challengeScores).length === 0) {
            return 0;
        }
        const scores = Object.values(progress.challengeScores);
        const sum = scores.reduce((acc, score) => acc + score, 0);
        return Math.round(sum / scores.length);
    }

    // Real-time progress tracking for students
    async trackChallengeCompletion(challengeId, score, prompt, evaluation) {
        if (!this.currentUser) return;

        try {
            // Save submission
            await this.savePromptSubmission(challengeId, prompt, score, evaluation);
            
            // Update progress
            const progress = JSON.parse(localStorage.getItem('userProgress') || '{}');
            if (!progress.completedChallenges) {
                progress.completedChallenges = [];
            }
            if (!progress.completedChallenges.includes(challengeId)) {
                progress.completedChallenges.push(challengeId);
            }
            if (!progress.challengeScores) {
                progress.challengeScores = {};
            }
            progress.challengeScores[challengeId] = score;
            progress.lastChallengeCompleted = {
                challengeId,
                score,
                timestamp: new Date().toISOString()
            };

            localStorage.setItem('userProgress', JSON.stringify(progress));

            // Sync to cloud
            await this.syncProgressToCloud();

            // Update session history
            await this.addSessionActivity('challenge_completed', {
                challengeId,
                score,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        } catch (error) {
            console.error('Error tracking challenge completion:', error);
        }
    }

    async addSessionActivity(activityType, data) {
        if (!this.currentUser) return;

        try {
            await this.db.collection('users').doc(this.currentUser.uid).update({
                'progress.sessionHistory': firebase.firestore.FieldValue.arrayUnion({
                    type: activityType,
                    ...data,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
            });
        } catch (error) {
            console.error('Error adding session activity:', error);
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
                '✓ Track your learning journey\n' +
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
                displayName: this.currentUser.displayName,
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
        if (!this.firebaseEnabled) return [];

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

    // Get student progress for teacher/admin views
    async getStudentProgress(studentId) {
        if (!this.firebaseEnabled) return null;

        try {
            const doc = await this.db.collection('users').doc(studentId).get();
            if (doc.exists) {
                return doc.data();
            }
            return null;
        } catch (error) {
            console.error('Error getting student progress:', error);
            return null;
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
                        Sign Out
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
            'auth/email-already-in-use': 'This email is already registered. Please sign in instead.',
            'auth/invalid-email': 'Invalid email address format. Please check and try again.',
            'auth/operation-not-allowed': 'Email/Password authentication is not enabled. Please contact support.',
            'auth/weak-password': 'Password is too weak (minimum 6 characters required)',
            'auth/user-disabled': 'This account has been disabled. Please contact support.',
            'auth/user-not-found': 'No account found with this email. Please create an account first.',
            'auth/wrong-password': 'Incorrect password. Please try again.',
            'auth/invalid-credential': 'Invalid email or password. If you don\'t have an account, please create one first.',
            'auth/too-many-requests': 'Too many attempts. Please try again later.',
            'auth/network-request-failed': 'Network error. Please check your connection and try again.',
            'auth/popup-closed-by-user': 'Sign-in popup was closed',
            'auth/cancelled-popup-request': 'Only one popup request is allowed at a time',
            'auth/unauthorized-domain': 'This domain is not authorized. Please contact support.'
        };
        return messages[errorCode] || `An error occurred: ${errorCode}. Please try again.`;
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
