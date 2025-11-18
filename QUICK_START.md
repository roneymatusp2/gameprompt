# Quick Start Guide - Prompt Quest

## 🚀 Running Locally (No Setup Required)

The game works perfectly without any configuration! Just open `index.html` in your browser.

**What works without setup:**
- ✅ All challenges and mini-games
- ✅ Local progress tracking (saved in browser)
- ✅ Achievements and statistics
- ✅ Full gameplay experience

**What requires Firebase setup:**
- ❌ User accounts (login/register)
- ❌ Cloud-synced progress
- ❌ Leaderboards
- ❌ Multi-device sync

## 🔧 Want Cloud Features?

Follow these steps to enable user accounts and cloud sync:

### 1. Create Firebase Project (5 minutes)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Name it (e.g., "prompt-quest")
4. Disable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Authentication

1. In Firebase Console → **Authentication** → "Get started"
2. Enable **Email/Password**
3. Enable **Google** (optional)

### 3. Enable Firestore Database

1. Go to **Firestore Database** → "Create database"
2. Start in **production mode**
3. Choose a location
4. Click "Enable"

### 4. Get Your Config

1. Go to **Project Settings** (⚙️ icon)
2. Scroll to "Your apps"
3. Click **Web** icon (</>)
4. Copy the `firebaseConfig` object

### 5. Update Your Code

Open `js/firebase-config.js` and replace lines 20-26:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",              // Paste your values here
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123"
};
```

### 6. Test It!

1. Open `auth.html` in your browser
2. Create an account
3. Check Firebase Console → Authentication → Users

That's it! 🎉

## 📝 Detailed Setup

For detailed instructions including security rules and Netlify deployment, see [FIREBASE_SETUP.md](FIREBASE_SETUP.md)

## 🐛 Troubleshooting

### "Firebase not configured" message
- This is normal! The game works fine without Firebase
- To enable cloud features, follow steps above

### Can't create account
- Check Firebase is configured in `js/firebase-config.js`
- Verify Authentication is enabled in Firebase Console
- Check browser console for errors

### Progress not saving across devices
- This requires Firebase to be configured
- Without Firebase, progress is saved locally only

## 💡 Tips

- **Local Mode**: Perfect for testing and development
- **Firebase Mode**: Required for production with multiple users
- **Netlify**: Add Firebase config as environment variables (see FIREBASE_SETUP.md)

## 🆘 Need Help?

1. Check browser console (F12) for errors
2. Review [FIREBASE_SETUP.md](FIREBASE_SETUP.md) for detailed guide
3. Verify Firebase config values are correct
4. Check Firebase Console for any issues

---

**Remember**: The game is fully functional without Firebase! Cloud features are optional.
