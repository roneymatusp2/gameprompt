# Prompt Quest - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html                 # Main game interface
├── progress.html              # Progress dashboard and achievements  
├── tutorial.html              # Tutorial and help page
├── main.js                    # Core application logic
├── challenge-data.js          # Challenge content and structure
├── gemini-integration.js      # AI evaluation system
├── progress-system.js         # Gamification and tracking
├── resources/                 # Static assets
│   ├── hero-bg.jpg           # Hero background image
│   ├── achievement-badges/    # Badge icons and graphics
│   └── ui-elements/           # Interface graphics
├── interaction.md             # Interaction design document
├── design.md                  # Visual design specifications
└── outline.md                 # This project outline
```

## Page Structure & Components

### 1. index.html - Main Game Interface
**Purpose**: Primary game experience with challenge cards and prompt input
**Sections**:
- Navigation header with progress indicators
- Hero section with game introduction and current level
- Challenge card grid with interactive elements
- Prompt input area with real-time feedback
- AI evaluation results panel
- Achievement notifications and celebrations

**Key Components**:
- ChallengeCard: Interactive cards showing task details
- PromptInput: Large text area with character counter
- FeedbackPanel: AI evaluation results and suggestions
- ProgressBar: Visual level progression
- AchievementPopup: Badge unlock animations

### 2. progress.html - Progress Dashboard
**Purpose**: Track learning progress, view achievements, and access statistics
**Sections**:
- Progress overview with level progression
- Achievement badge collection display
- Performance analytics and improvement trends
- Challenge completion history
- Personal statistics and milestones

**Key Components**:
- LevelIndicator: Visual representation of current level
- BadgeCollection: Grid of earned and locked achievements
- StatsChart: Performance visualization using ECharts
- ChallengeHistory: Completed challenges with scores
- MilestoneTracker: Progress toward next achievements

### 3. tutorial.html - Tutorial & Help
**Purpose**: Onboarding and educational content about prompt engineering
**Sections**:
- Interactive tutorial with guided examples
- Best practices guide with visual examples
- Common mistakes and how to avoid them
- Glossary of prompt engineering terms
- Tips for improving prompt quality

**Key Components**:
- TutorialStep: Guided interactive lessons
- ExampleGallery: Before/after prompt examples
- MistakeHighlighter: Common errors with corrections
- TermGlossary: Searchable definitions
- TipCarousel: Rotating helpful suggestions

## Core JavaScript Modules

### main.js - Application Controller
**Responsibilities**:
- Initialize game state and user interface
- Handle navigation between sections
- Manage challenge selection and progression
- Coordinate between different system modules
- Handle user interactions and animations

**Key Functions**:
- `initializeGame()`: Setup initial state and UI
- `loadChallenge(challengeId)`: Display specific challenge
- `submitPrompt(promptText)`: Process user input
- `showFeedback(results)`: Display AI evaluation
- `updateProgress(score)`: Update user progress

### gemini-integration.js - AI Evaluation System
**Responsibilities**:
- Interface with Google Gemini API for prompt evaluation
- Implement scoring algorithms based on criteria
- Generate constructive feedback and suggestions
- Handle API responses and error conditions
- Provide mock evaluation for development/testing

**Key Functions**:
- `evaluatePrompt(prompt, challenge)`: Send to Gemini for analysis
- `calculateScore(evaluation)`: Convert AI response to numerical score
- `generateFeedback(results)`: Create user-friendly feedback
- `suggestImprovements(prompt, evaluation)`: Provide specific suggestions

### progress-system.js - Gamification Engine
**Responsibilities**:
- Track user progress and achievements
- Manage XP, levels, and badge system
- Handle localStorage persistence
- Calculate streaks and bonus rewards
- Generate achievement notifications

**Key Functions**:
- `awardPoints(points, challengeId)`: Add points to user total
- `checkAchievements()`: Evaluate badge unlock conditions
- `saveProgress()`: Persist data to localStorage
- `loadProgress()`: Restore user state from storage
- `updateStreak()`: Manage daily challenge streaks

## Data Structures

### Challenge Object
```javascript
{
  id: number,
  title: string,
  description: string,
  task: string,
  difficulty: string,
  points: number,
  successCriteria: string[],
  hints: string[],
  examplePrompt: string,
  commonMistakes: string[]
}
```

### User Progress Object
```javascript
{
  userId: string,
  totalXP: number,
  currentLevel: number,
  completedChallenges: number[],
  earnedBadges: string[],
  currentStreak: number,
  bestStreak: number,
  lastActiveDate: string,
  challengeScores: object
}
```

### Evaluation Result Object
```javascript
{
  overallScore: number,
  criteriaScores: {
    clarity: number,
    specificity: number,
    context: number,
    structure: number,
    effectiveness: number
  },
  feedback: string[],
  suggestions: string[],
  exampleImprovement: string
}
```

## Technical Implementation

### Libraries Integration
- **Anime.js**: Smooth animations for UI transitions and feedback
- **Splitting.js**: Text effects for challenge descriptions
- **Typed.js**: Typewriter effects for welcome messages
- **ECharts.js**: Data visualization for progress tracking
- **p5.js**: Particle effects for celebrations

### Responsive Design
- Mobile-first approach with progressive enhancement
- Flexible grid system for challenge cards
- Touch-optimized input areas and buttons
- Adaptive typography and spacing

### Accessibility Features
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color schemes
- Reduced motion preferences

### Performance Optimization
- Lazy loading of challenge content
- Efficient localStorage usage
- Optimized image assets
- Minimal JavaScript bundle size
- Progressive web app features

## Development Phases

### Phase 1: Core MVP
- Basic challenge structure and navigation
- Prompt input and submission system
- Mock AI evaluation for testing
- Simple progress tracking

### Phase 2: Enhanced Features
- Real Gemini API integration
- Advanced gamification system
- Achievement badges and notifications
- Improved visual effects

### Phase 3: Polish & Scale
- Comprehensive tutorial system
- Advanced analytics and insights
- Social features and sharing
- Performance optimization

This structure provides a solid foundation for building an engaging, educational, and scalable prompt engineering game that motivates students to improve their AI communication skills.