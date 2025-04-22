# Next.js Resume Project

A personal resume website built with Next.js, React, and Tailwind CSS featuring a main resume page and an Instagram-style gallery.

## File Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── instagram/
│       └── page.js
```

## Description

### `globals.css`
- Imports Tailwind CSS
- Defines light and dark theme variables
- Applies theme-based background and foreground colors
- Sets default font to Arial, Helvetica, sans-serif

### `layout.js`
- Loads Google Fonts: Geist and Geist_Mono
- Applies fonts as CSS variables
- Provides basic HTML layout with antialiased styling

### `page.js` (Main Resume Page)
Contains personal resume sections:
- Profile: Image, name, contact information
- Education: Bachelor of Engineering – Computer Science
- Experience: Frontend Developer skills
- Skills: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Git
- Projects: E-commerce Web App
- Contact: LinkedIn and GitHub links

### `instagram/page.js`
- Displays a responsive 3-column grid of images
- Uses Tailwind CSS for layout and spacing

## Assets
- `/1.jpeg`: Used as profile picture and gallery images
