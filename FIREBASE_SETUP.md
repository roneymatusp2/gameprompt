# Firebase Setup Guide for Prompt Quest

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Name it "promtgames" (or your preferred name)
4. Disable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Authentication

1. In Firebase Console, go to **Build** > **Authentication**
2. Click "Get started"
3. Enable **Email/Password** sign-in method
4. Enable **Google** sign-in method
   - Add your project support email
   - Save

## 3. Create Firestore Database

1. Go to **Build** > **Firestore Database**
2. Click "Create database"
3. Start in **production mode**
4. Choose a location (closest to your users)
5. Click "Enable"

## 4. Set Firestore Security Rules

Go to **Firestore Database** > **Rules** and paste:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Anyone can read leaderboard
    match /users/{userId} {
      allow read: if request.auth != null;
    }
    
    // Prompt submissions
    match /promptSubmissions/{submissionId} {
      allow create: if request.auth != null;
      allow read: if request.auth != null && 
                     (resource.data.userId == request.auth.uid || 
                      request.auth.token.admin == true);
    }
  }
}
```

Click "Publish"

## 5. Get Firebase Configuration

1. Go to **Project Settings** (gear icon) > **General**
2. Scroll to "Your apps"
3. Click the **Web** icon (</>)
4. Register app with nickname "Prompt Quest Web"
5. Copy the `firebaseConfig` object

## 6. Configure Your Project

### For Local Development:

1. Copy `.env.example` to `.env`
2. Fill in your Firebase config values:

```env
FIREBASE_API_KEY=AIzaSy...
FIREBASE_AUTH_DOMAIN=promtgames.firebaseapp.com
FIREBASE_PROJECT_ID=promtgames
FIREBASE_STORAGE_BUCKET=promtgames.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abc123
```

3. Update `js/firebase-config.js` to use environment variables (if using a build tool)

### For Netlify Deployment:

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Build & deploy** > **Environment**
3. Click "Add variable" and add each Firebase config value:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`

4. Update `js/firebase-config.js` to read from `process.env` or use Netlify's build plugin

## 7. Add Authorized Domains

1. In Firebase Console, go to **Authentication** > **Settings** > **Authorized domains**
2. Add your domains:
   - `localhost` (for local development)
   - `your-site.netlify.app` (your Netlify domain)
   - Your custom domain (if you have one)

## 8. Test Authentication

1. Open `auth.html` in your browser
2. Try creating an account
3. Check Firebase Console > **Authentication** > **Users** to see the new user
4. Try logging in
5. Check browser console for any errors

## 9. Database Structure

Your Firestore will have this structure:

```
users/
  {userId}/
    email: string
    displayName: string
    photoURL: string (optional)
    createdAt: timestamp
    lastUpdated: timestamp
    stats: {
      totalPrompts: number
      successRate: number
      achievements: number
      gamesPlayed: number
      totalPoints: number
      level: number
      streak: number
      bestStreak: number
    }
    progress: {
      completedChallenges: array
      challengeScores: object
      unlockedLevels: array
    }

promptSubmissions/
  {submissionId}/
    userId: string
    userEmail: string
    challengeId: number
    prompt: string
    score: number
    evaluation: object
    timestamp: timestamp
```

## 10. Features Enabled

With this setup, you get:

✅ User registration and login
✅ Google Sign-In
✅ Password reset
✅ Email verification
✅ Cloud-synced progress
✅ Leaderboards
✅ Prompt history
✅ Multi-device support
✅ Secure data storage

## Troubleshooting

### "auth/network-request-failed"
- Check your internet connection
- Verify Firebase config is correct
- Check browser console for CORS errors

### "auth/unauthorized-domain"
- Add your domain to Authorized domains in Firebase Console

### "Missing or insufficient permissions"
- Check Firestore security rules
- Verify user is authenticated

### Users not appearing in Firestore
- Check browser console for errors
- Verify Firestore is enabled
- Check security rules allow writes

## Security Best Practices

1. ✅ Never commit `.env` file
2. ✅ Use Firestore security rules
3. ✅ Enable email verification
4. ✅ Use HTTPS only (Netlify provides this)
5. ✅ Regularly review Firebase Console > Authentication > Users
6. ✅ Monitor Firestore usage in Firebase Console > Usage

## Next Steps

- Set up email templates in Firebase Console > Authentication > Templates
- Add custom claims for admin users
- Set up Firebase Cloud Functions for advanced features
- Add analytics with Firebase Analytics
- Set up monitoring with Firebase Performance

## Support

If you encounter issues:
1. Check browser console for errors
2. Check Firebase Console > Authentication > Users
3. Check Firestore Console for data
4. Review security rules
5. Check Netlify deploy logs

For more help, see:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Authentication Guide](https://firebase.google.com/docs/auth/web/start)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
