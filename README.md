# Tech Quiz Web Application

A modern, interactive quiz and trivia web application built with vanilla HTML, CSS, and JavaScript. Test your tech knowledge with engaging quizzes and trivia challenges!

## 🎨 Design Features

- **Modern Tech Theme**: Dark blue/purple gradients with neon accents (cyan, purple)
- **Glassmorphism Effects**: Frosted glass cards with subtle shadows
- **Smooth Animations**: Engaging transitions and hover effects
- **Responsive Design**: Mobile-first approach, works on all devices
- **Interactive UI**: Progress bars, streak counters, and instant feedback

## 📁 Project Structure

```
my-quiz-web/
├── index.html          # Homepage
├── login.html          # Login page
├── quiz.html           # Quiz page
├── trivia.html         # Trivia page
├── styles/
│   ├── main.css        # Design system & shared styles
│   ├── home.css        # Homepage styles
│   ├── login.css       # Login page styles
│   ├── quiz.css        # Quiz page styles
│   └── trivia.css      # Trivia page styles
├── js/
│   ├── login.js        # Login functionality
│   ├── quiz.js         # Quiz functionality
│   └── trivia.js       # Trivia functionality
└── README.md           # This file
```

## 🚀 Features

### Quiz Mode

- 10 structured questions per quiz
- Progress tracking with visual progress bar
- Question navigation (Previous/Next)
- Instant feedback on answers
- Final score display with statistics

### Trivia Mode

- Random tech questions
- Streak counter (build your streak!)
- Score tracking
- Instant feedback with animations
- Endless gameplay

### Login System

- Modern login form with validation
- "Remember me" functionality
- Social login option (Google - UI only)
- Form validation and error handling

## 🎯 Design System

The application uses a comprehensive CSS design system with:

- **Color Palette**: Dark tech theme with neon accents
- **CSS Variables**: Custom properties for easy theming
- **Consistent Spacing**: Standardized spacing scale
- **Typography**: Modern, readable font stack
- **Components**: Reusable button, card, and form components

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with variables, animations, and gradients
- **Vanilla JavaScript**: No frameworks, pure JavaScript
- **LocalStorage**: For basic state management

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎮 How to Use

1. **Homepage**: Navigate to `index.html` to see the landing page
2. **Login**: Click "Login" to access the login page (demo mode)
3. **Quiz**: Click "Take Quiz" to start a structured quiz
4. **Trivia**: Click "Play Trivia" for random trivia questions

## 🔧 Customization

### Adding Questions

Edit the question arrays in:

- `js/quiz.js` - For quiz questions
- `js/trivia.js` - For trivia questions

### Changing Colors

Modify CSS variables in `styles/main.css`:

```css
:root {
  --accent-cyan: #00f5ff;
  --accent-purple: #a855f7;
  /* ... more variables */
}
```

### Styling

All styles are modular and organized by page. Edit the respective CSS files to customize appearance.

## 📝 Notes

- The login system is currently a demo (no backend)
- Questions are stored in JavaScript arrays (can be replaced with API calls)
- LocalStorage is used for basic state management
- All animations and interactions are CSS/JS based

## 🎨 Design Inspiration

Based on modern web design trends:

- Clean, minimalist interfaces
- Glassmorphism and gradient effects
- Smooth animations and transitions
- Engaging user feedback
- Mobile-first responsive design

## 📄 License

© 2025 Tech Quiz. All rights reserved.

---

Built with ❤️ for tech enthusiasts!
