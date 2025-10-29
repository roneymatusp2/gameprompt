// Firebase Configuration Example
// 
// INSTRUCTIONS:
// 1. Follow the setup guide in FIREBASE_SETUP.md
// 2. Copy this file to js/firebase-config.js (it's already there)
// 3. Replace the placeholder values below with your actual Firebase config
// 4. The config values can be found in Firebase Console > Project Settings > General > Your apps
//
// IMPORTANT: Never commit your actual Firebase config to a public repository!

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

        // ============================================
        // REPLACE THESE VALUES WITH YOUR FIREBASE CONFIG
        // ============================================
        const firebaseConfig = {
            apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",           // Your API Key
            authDomain: "your-project.firebaseapp.com",                  // Your Auth Domain
            projectId: "your-project-id",                                // Your Project ID
            storageBucket: "your-project.appspot.com",                   // Your Storage Bucket
            messagingSenderId: "123456789012",                           // Your Sender ID
            appId: "1:123456789012:web:abcdef1234567890"                // Your App ID
        };
        // ============================================

        // Check if config is set up
        if (firebaseConfig.apiKey.includes("XXXXX")) {
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
            console.log('✅ Firebase initialized successfully');
        } catch (error) {
            console.error('❌ Firebase initialization failed:', error);
            console.log('Running in local-only mode');
            this.firebaseEnabled = false;
        }
    }

    // ... rest of the class methods remain the same
}
