# Prompt Quest - AI Prompt Engineering Game

A gamified web application designed to teach students aged 13-18 how to write better AI prompts through interactive challenges and real-time feedback.

## 🚀 Quick Start

### Prerequisites
- Any modern web browser
- Python 3.x (for local development server)
- WebStorm or any code editor

### Local Development

1. **Clone or download the project files**
   ```bash
   # If you have the zip file, extract it to your desired location
   unzip prompt-quest.zip
   cd prompt-quest
   ```

2. **Start the development server**
   ```bash
   # Using Python (recommended)
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server -p 8000
   ```

3. **Open in your browser**
   - Navigate to `http://localhost:8000`
   - The game should load automatically

4. **For WebStorm users**
   - Open the project folder in WebStorm
   - Right-click on `index.html` → "Open in Browser" → Chrome/Firefox
   - Or use the built-in web server

## 📁 Project Structure

```
prompt-quest/
├── index.html              # Main game interface
├── progress.html           # Progress dashboard
├── tutorial.html           # Tutorial page
├── main.js                 # Core application logic
├── progress-system.js      # Gamification engine
├── gemini-integration.js   # AI evaluation system
├── challenge-data.js       # Challenge content
├── resources/
│   └── hero-bg.jpg         # Hero background image
├── package.json            # Project metadata
├── README.md               # This file
└── docs/                   # Documentation
    ├── interaction.md      # Interaction design
    ├── design.md           # Visual design specs
    └── outline.md          # Project outline
```

## 🎮 How to Play

1. **Start Your Quest**
   - Click "Start Your Quest" on the homepage
   - Complete the interactive challenges

2. **Complete Challenges**
   - Read the challenge description and requirements
   - Write your prompt in the text area
   - Submit for AI evaluation

3. **Get Feedback**
   - Receive detailed scoring (0-100 points)
   - See breakdown by criteria (clarity, specificity, context, structure, effectiveness)
   - Get improvement suggestions and examples

4. **Track Progress**
   - Earn XP points and unlock achievements
   - View your progress dashboard
   - Build your streak by completing challenges daily

## 🎯 Features

### Core Game Mechanics
- **Progressive Levels**: 2 levels with 5 total challenges
- **Real-time Evaluation**: AI-powered prompt assessment
- **Gamification**: XP system, badges, and streaks
- **Educational Content**: Comprehensive tutorial and examples

### Visual Design
- **Modern UI**: Clean, colorful, game-like interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Powered by Anime.js
- **Accessibility**: WCAG compliant with high contrast ratios

### Technical Features
- **localStorage**: Progress persistence without backend
- **Mock AI System**: Simulated Gemini API for demonstration
- **Modular Architecture**: Clean, maintainable code structure
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Development

### Adding New Challenges
1. Open `challenge-data.js`
2. Follow the existing structure to add new challenges
3. Include title, description, success criteria, hints, and example prompts

### Modifying the AI Evaluation
1. Open `gemini-integration.js`
2. Adjust scoring algorithms in `analyzePromptQuality()`
3. Modify feedback generation in `generateFeedback()`

### Customizing the UI
1. Edit styles in individual HTML files
2. Modify animations in `main.js`
3. Update color scheme in CSS custom properties

### Adding New Features
1. Follow the existing module pattern
2. Use the established event system
3. Maintain accessibility standards

## 📊 Analytics & Progress

The game tracks:
- Total XP earned
- Challenges completed
- Current streak
- Average scores
- Achievement badges unlocked
- Level progression

All data is stored locally in the browser's localStorage.

## 🎨 Design System

### Colors
- Primary: Deep Indigo (#4F46E5)
- Secondary: Emerald Green (#059669)
- Accent: Warm Amber (#F59E0B)
- Neutral: Slate Gray (#64748B)
- Background: Soft Cream (#FEFBF3)

### Typography
- Display: Poppins (headings)
- Body: Inter (content)
- Code: JetBrains Mono (prompts)

### Libraries Used
- Anime.js: Smooth animations
- Typed.js: Typewriter effects
- Splitting.js: Text animations
- ECharts.js: Data visualization
- Tailwind CSS: Utility-first styling

## 🔧 Troubleshooting

### Common Issues

1. **Game won't load**
   - Check that all files are in the same directory
   - Ensure you're using a local web server (not file://)
   - Check browser console for errors

2. **Progress not saving**
   - Verify localStorage is enabled in your browser
   - Check if you're in private/incognito mode
   - Try refreshing the page

3. **Animations not working**
   - Ensure JavaScript is enabled
   - Check for browser compatibility
   - Verify all script tags are loading correctly

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Mobile Optimization

The application is fully responsive and optimized for:
- Smartphones (320px+)
- Tablets (768px+)
- Desktop (1024px+)

Touch interactions are supported with appropriate sizing for mobile devices.

## 🎓 Educational Objectives

By completing Prompt Quest, students will learn:
- How to write clear and specific AI prompts
- The importance of context and audience
- How to structure effective instructions
- Common pitfalls and how to avoid them
- Advanced techniques like role-playing and constraints

## 🤝 Contributing

This is an educational project designed to demonstrate:
- Modern web development practices
- Gamification techniques
- AI education concepts
- User experience design

Feel free to fork and extend the project for your educational needs!

## 📄 License

MIT License - feel free to use this project for educational purposes.

---

**Happy prompting! 🚀**# gameprompt
