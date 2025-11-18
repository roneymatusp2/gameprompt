# Firebase Configuration for Netlify Deployment

## Quick Setup Instructions

### 1. Configure Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/u/0/project/promptgames-65e49/settings/general)
2. Under "Your apps", click the **Web** icon (</>)
3. Register your app (if not already registered)
4. Copy your Firebase configuration values

### 2. Set Netlify Environment Variables

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Environment variables**
3. Add the following variables:

```
FIREBASE_API_KEY=your_api_key_here
FIREBASE_AUTH_DOMAIN=promptgames-65e49.firebaseapp.com
FIREBASE_PROJECT_ID=promptgames-65e49
FIREBASE_STORAGE_BUCKET=promptgames-65e49.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
FIREBASE_APP_ID=your_app_id_here
```

### 3. Enable Firebase Authentication

1. Go to Firebase Console > **Authentication** > **Sign-in method**
2. Enable **Email/Password**
3. Enable **Google** (optional but recommended)
4. Add your project support email

### 4. Deploy Firestore Security Rules

1. Go to Firebase Console > **Firestore Database** > **Rules**
2. Copy the contents of `firestore.rules`
3. Paste and click **Publish**

### 5. For Local Development

Update `js/firebase-config.js` with your actual Firebase config values (lines 21-27):

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "promptgames-65e49.firebaseapp.com",
    projectId: "promptgames-65e49",
    storageBucket: "promptgames-65e49.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

⚠️ **Important**: Never commit actual Firebase credentials to GitHub! Use environment variables in Netlify.

### 6. Testing

1. Deploy to Netlify
2. Visit your site
3. Try creating an account
4. Check Firebase Console > **Authentication** > **Users** to see the new user
5. Check **Firestore Database** to see user data being created

