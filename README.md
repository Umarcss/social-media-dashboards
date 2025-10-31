# Social Media Dashboard

A beautiful, responsive social media dashboard with dark mode support. This project is a solution to the [Social Media Dashboard with Theme Switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H).

![Preview](./preview.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Design Specifications](#design-specifications)
- [Challenges Faced](#challenges-faced)
- [Future Improvements](#future-improvements)
- [Credits](#credits)

## Overview

This social media dashboard displays follower statistics and engagement metrics across multiple social media platforms (Facebook, Twitter, Instagram, and YouTube). The dashboard features a clean, modern interface with support for both light and dark themes, complete with smooth transitions and hover effects.

### Key Highlights

- 📊 Real-time follower statistics
- 📈 Engagement metrics overview
- 🌓 Dark/Light mode toggle with persistent theme preference
- 📱 Fully responsive design (mobile-first approach)
- 🎨 Modern, accessible UI with smooth animations
- ♿ WCAG compliant accessibility features

## Features

### Theme Switching
- Toggle between light and dark themes
- Theme preference saved in localStorage
- Smooth transitions between themes
- Accessible toggle button with ARIA labels

### Dashboard Cards
- Main dashboard cards showing total followers for each platform
- Color-coded top borders for each social media platform:
  - Facebook: Blue
  - Twitter: Light Blue
  - Instagram: Gradient (Orange to Pink)
  - YouTube: Red
- Today's follower change indicators (up/down arrows)

### Overview Section
- Detailed metrics for each platform:
  - Page Views, Likes, Profile Views
  - Retweets, Total Views
- Percentage change indicators
- Hover effects on desktop

### Responsive Design
- Mobile: Single column layout (375px+)
- Tablet: 2-column grid layout (576px+)
- Desktop: 4-column grid layout (992px+)
- Fluid typography using clamp() for scalable text

### Interactive Elements
- Hover animations on cards
- Animated arrow icons on hover
- Smooth transitions throughout

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS features including:
  - CSS Custom Properties (Variables)
  - Flexbox & Grid layouts
  - CSS Animations
  - Responsive design with media queries
  - Clamp() for fluid typography
- **SASS/SCSS**: Preprocessor for organized, maintainable styles
- **JavaScript (Vanilla)**: 
  - Theme switching functionality
  - LocalStorage for theme persistence
  - DOM manipulation
- **Google Fonts**: Inter font family (400, 700)

## Project Structure

```
social-media-dashboards-frontend-mentor-challenge-main/
├── css/
│   ├── style.css          # Compiled CSS
│   └── style.css.map      # Source map
├── sass/
│   └── style.scss         # SASS source file
├── js/
│   └── script.js           # Theme toggle functionality
├── images/
│   ├── favicon-32x32.png
│   ├── icon-facebook.svg
│   ├── icon-instagram.svg
│   ├── icon-twitter.svg
│   ├── icon-youtube.svg
│   ├── icon-up.svg
│   └── icon-down.svg
├── design/
│   ├── desktop-design-dark.jpg
│   ├── desktop-design-light.jpg
│   ├── mobile-design-dark.jpg
│   ├── mobile-design-light.jpg
│   ├── active-states-dark.jpg
│   └── active-states-light.jpg
├── index.html              # Main HTML file
├── preview.jpg             # Project preview image
└── README.md               # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)
- SASS compiler (if you want to modify the SCSS files)

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd social-media-dashboards-frontend-mentor-challenge-main
   ```

2. **Option 1: Direct Browser Opening**
   - Simply open `index.html` in your web browser
   - Note: Some features may be limited without a local server

3. **Option 2: Using a Local Server (Recommended)**
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server -p 8000
   ```
   
   Then open `http://localhost:8000` in your browser.

### Compiling SASS (Optional)

If you want to modify the SASS files, you'll need a SASS compiler:

**Using Node.js (sass):**
```bash
npm install -g sass
sass sass/style.scss css/style.css --watch
```

**Using npm scripts:**
```bash
npm install
npm run sass:watch
```

## Usage

### Theme Toggle

- Click the toggle button in the header to switch between light and dark themes
- Your preference is automatically saved and will persist across page reloads
- The toggle includes an accessible ARIA label for screen readers

### Viewing Statistics

- **Main Dashboard Cards**: Display total followers/subscribers for each platform
- **Overview Section**: Shows detailed metrics with percentage changes
- **Color Coding**: 
  - Green arrows/percentages indicate increases
  - Red arrows/percentages indicate decreases

### Responsive Behavior

- **Mobile (< 576px)**: Single column, optimized for touch
- **Tablet (576px - 991px)**: 2-column grid for dashboard, 2-column for overview
- **Desktop (992px+)**: 4-column grid for both sections
- All text and spacing scales fluidly using clamp() functions

## Design Specifications

### Layout

- **Mobile**: 375px width
- **Desktop**: 1440px width
- Fully responsive between these breakpoints

### Color Palette

#### Primary Colors
- **Green (Increase)**: `hsl(163, 72%, 41%)`
- **Red (Decrease)**: `hsl(356, 69%, 56%)`

#### Social Media Brand Colors
- **Facebook**: `hsl(208, 92%, 53%)`
- **Twitter**: `hsl(203, 89%, 53%)`
- **Instagram**: Gradient from `hsl(37, 97%, 70%)` → `hsl(5, 77%, 71%)` → `hsl(329, 70%, 58%)`
- **YouTube**: `hsl(348, 97%, 39%)`

#### Light Theme
- **Background**: `hsl(0, 100%, 100%)`
- **Top Pattern Background**: `hsl(225, 100%, 98%)`
- **Card Background**: `hsl(227, 47%, 96%)`
- **Primary Text**: `hsl(230, 17%, 14%)`
- **Secondary Text**: `hsl(228, 12%, 44%)`
- **Toggle**: `hsl(230, 22%, 74%)`

#### Dark Theme
- **Background**: `hsl(230, 17%, 14%)`
- **Top Pattern Background**: `hsl(232, 19%, 15%)`
- **Card Background**: `hsl(228, 28%, 20%)`
- **Primary Text**: `hsl(0, 100%, 100%)`
- **Secondary Text**: `hsl(230, 22%, 74%)`
- **Toggle**: Gradient from `hsl(210, 79%, 56%)` → `hsl(146, 68%, 55%)`

### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400 (Regular), 700 (Bold)
- **Overview Card Headings**: 14px
- **Body Text**: Responsive using clamp()
- **Main Numbers**: Large, bold display numbers using clamp()

### Breakpoints

- **Small (Mobile)**: `576px`
- **Medium (Tablet)**: `768px`
- **Large (Desktop)**: `992px`
- **Extra Large**: `1100px`


## License

This project is open source and available for personal and commercial use as part of the Frontend Mentor challenge submission.

---

**Note**: This is a static front-end project. No backend server or API is required to run this application.

