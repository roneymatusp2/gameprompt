# Setting Up Prompt Quest in WebStorm

This guide will help you set up the Prompt Quest project in WebStorm for local development.

## Prerequisites

- **WebStorm** (2020.3 or newer)
- **Python 3.x** (for local development server)
- **Git** (optional, for version control)

## Step 1: Project Setup

### Option A: Download ZIP Archive
1. Download the project files
2. Extract to your desired location (e.g., `~/Projects/prompt-quest`)
3. Open WebStorm
4. Click "Open" and select the extracted folder

### Option B: Clone from Git (if available)
1. Open WebStorm
2. Click "Get from VCS"
3. Enter the repository URL
4. Clone to your desired location

## Step 2: Configure WebStorm

### Project Structure
WebStorm should automatically detect the project structure. You should see:
```
prompt-quest/
├── index.html
├── progress.html
├── tutorial.html
├── main.js
├── progress-system.js
├── gemini-integration.js
├── challenge-data.js
├── resources/
│   └── hero-bg.jpg
├── package.json
├── README.md
└── development-server.py
```

### Configure JavaScript Language Version
1. Go to **File → Settings** (or **WebStorm → Preferences** on macOS)
2. Navigate to **Languages & Frameworks → JavaScript**
3. Set JavaScript language version to **ECMAScript 6+**

### Configure Code Style
1. Go to **File → Settings → Editor → Code Style**
2. Select **JavaScript**
3. Set **Tab size** and **Indent** to 2 spaces
4. Enable **Use tab character** (optional)

## Step 3: Start Development Server

### Method 1: Using Python (Recommended)
1. Right-click on `development-server.py`
2. Select **Run 'development-server'**
3. The server will start on `http://localhost:8000`
4. Your browser should open automatically

### Method 2: Using WebStorm Built-in Server
1. Right-click on `index.html`
2. Select **Open in Browser** → **Chrome** (or your preferred browser)
3. WebStorm will start its built-in server

### Method 3: Using Terminal
1. Open Terminal in WebStorm (Alt+F12)
2. Run: `python development-server.py`
3. Or run: `python -m http.server 8000`

## Step 4: Development Workflow

### Making Changes
1. Edit HTML, CSS, or JavaScript files
2. Save changes (Ctrl+S / Cmd+S)
3. Refresh your browser to see changes
4. The development server supports hot reloading

### Debugging
1. Open Developer Tools in your browser (F12)
2. Use the Console tab to see JavaScript errors
3. Use the Sources tab to set breakpoints
4. WebStorm's JavaScript debugger can also be used

### Testing Changes
1. Complete challenges to test game logic
2. Check progress tracking in the dashboard
3. Verify animations and interactions work correctly

## Step 5: Project Configuration

### JavaScript Libraries
The project uses CDN-hosted libraries:
- Anime.js (animations)
- Typed.js (typewriter effects)
- ECharts.js (data visualization)
- Tailwind CSS (styling)

No npm installation is required.

### File Watching
WebStorm automatically watches for file changes. When you save:
- HTML changes: Refresh browser to see updates
- CSS changes: Should apply immediately
- JavaScript changes: May require page refresh

## Step 6: Common Tasks

### Adding New Challenges
1. Open `challenge-data.js`
2. Add new challenge objects to the array
3. Follow the existing structure
4. Test by completing the new challenge

### Modifying Game Logic
1. Open `main.js` for core game functionality
2. Open `progress-system.js` for gamification features
3. Open `gemini-integration.js` for AI evaluation logic

### Styling Changes
1. Styles are embedded in HTML files using Tailwind CSS
2. Custom CSS is in `<style>` tags
3. Modify colors, fonts, or animations as needed

## Step 7: Troubleshooting

### Server Won't Start
- Check if port 8000 is already in use
- Try a different port: `python -m http.server 8001`
- Ensure Python is installed: `python --version`

### Changes Not Appearing
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Check if files are being served correctly
- Verify file paths in the browser console

### JavaScript Errors
- Check the browser console for error messages
- Verify all script files are loading correctly
- Ensure no syntax errors in your code

## Step 8: Production Build

### Preparing for Deployment
1. Test all functionality locally
2. Check responsive design on different screen sizes
3. Verify all animations work correctly

### Deployment Options
- Static hosting: GitHub Pages, Netlify, Vercel
- Web server: Apache, Nginx
- CDN: Upload files to any static hosting service

## Keyboard Shortcuts

### WebStorm
- **Ctrl+Space**: Auto-complete
- **Ctrl+/**: Toggle comment
- **Ctrl+Alt+L**: Format code
- **Shift+F6**: Rename variable
- **Ctrl+Click**: Go to definition

### Browser (during development)
- **F12**: Open Developer Tools
- **Ctrl+R**: Refresh page
- **Ctrl+Shift+R**: Hard refresh
- **Ctrl+Shift+I**: Inspect element

## Additional Resources

- [WebStorm Documentation](https://www.jetbrains.com/help/webstorm/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JavaScript MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Getting Help

If you encounter issues:
1. Check the browser console for error messages
2. Verify all files are in the correct location
3. Ensure the development server is running
4. Try clearing browser cache and localStorage

---

**Happy coding! 🚀**

You're now ready to develop and customize Prompt Quest in WebStorm!