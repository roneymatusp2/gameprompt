# Authentication and Student Tracking System

## Overview

This Firebase authentication system provides complete user management and student progress tracking for Prompt Quest. All text is in British English.

## Features

### Student Authentication
- ✅ Email/Password registration and login
- ✅ Google Sign-In
- ✅ Password reset functionality
- ✅ Email verification
- ✅ Guest mode support

### Student Progress Tracking
- ✅ Real-time progress sync to Firestore
- ✅ Challenge completion tracking
- ✅ Score tracking per challenge
- ✅ Achievements tracking
- ✅ Session history
- ✅ Learning analytics

## Data Structure

**Users Collection** (`/users/{userId}`):
- Email, display name, profile photo
- Role (student)
- Statistics (points, achievements, streaks, etc.)
- Progress (completed challenges, scores, unlocked levels)
- Analytics (sessions, time spent)

**Prompt Submissions Collection** (`/promptSubmissions/{submissionId}`):
- User information
- Challenge ID and prompt
- Score and evaluation
- Timestamp

## Usage

### For Students

1. **Sign Up**: Create an account via `auth.html`
2. **Sign In**: Login with email/password or Google
3. **Play**: Progress is automatically tracked and synced
4. **View Progress**: Check your stats and achievements

### For Teachers/Administrators

Access student progress via Firebase Console:
- **Authentication** > **Users**: View all registered students
- **Firestore Database** > **users**: View detailed progress and analytics
- **Firestore Database** > **promptSubmissions**: View all challenge submissions

## API Methods

### Authentication
- `firebaseAuth.login(email, password)` - Sign in
- `firebaseAuth.register(email, password, displayName)` - Create account
- `firebaseAuth.logout()` - Sign out
- `firebaseAuth.loginWithGoogle()` - Google Sign-In
- `firebaseAuth.resetPassword(email)` - Reset password

### Progress Tracking
- `firebaseAuth.trackChallengeCompletion(challengeId, score, prompt, evaluation)` - Track challenge
- `firebaseAuth.syncProgressToCloud()` - Sync local progress
- `firebaseAuth.updateUserStats(stats)` - Update stats

### Data Retrieval
- `firebaseAuth.getLeaderboard(limit)` - Get leaderboard
- `firebaseAuth.getStudentProgress(studentId)` - Get student data

## Security

- All routes require authentication
- Users can only access their own data
- Firestore security rules enforce data protection
- Passwords are encrypted by Firebase
- Email verification available

## British English Standards

All user-facing text uses British English:
- "Sign In" instead of "Login"
- "Create Account" instead of "Register"
- Proper British spelling throughout

## Monitoring

Monitor student engagement via:
- Firebase Console > **Firestore Database** > **Usage**
- Firebase Console > **Authentication** > **Users**
- Firebase Console > **Analytics** (if enabled)

