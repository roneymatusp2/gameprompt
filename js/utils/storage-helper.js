class StorageManager {
    constructor() {
        this.storage = null;
        this.init();
    }

    init() {
        if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
            this.storage = firebase.storage();
        } else {
            console.warn('Firebase Storage not ready');
        }
    }

    /**
     * Uploads a profile picture for the current user
     * @param {File} file - The image file object from an input[type="file"]
     * @returns {Promise<string>} - The download URL of the uploaded image
     */
    async uploadProfilePicture(file) {
        // Lazy init
        if (!this.storage && typeof firebase !== 'undefined') {
            this.storage = firebase.storage();
        }
        
        if (!this.storage) throw new Error("Storage could not be initialized. Firebase might not be ready.");
        
        const user = firebase.auth().currentUser;
        if (!user) throw new Error("User not logged in");

        // Validation
        if (!file.type.startsWith('image/')) throw new Error("File must be an image");
        if (file.size > 5 * 1024 * 1024) throw new Error("File too large (max 5MB)");

        const ref = this.storage.ref().child(`users/${user.uid}/profile_pic.jpg`);
        
        // Upload
        const snapshot = await ref.put(file);
        
        // Get URL
        const url = await snapshot.ref.getDownloadURL();
        
        // Update Auth Profile
        await user.updateProfile({ photoURL: url });
        
        // Update Firestore User Doc (if you keep user data there)
        const db = firebase.firestore();
        await db.collection('users').doc(user.uid).update({ photoURL: url });

        return url;
    }
}

window.storageManager = new StorageManager();
