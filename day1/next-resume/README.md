📄 Next.js Resume Project
This project is a personal resume website built using Next.js, React, and Tailwind CSS. It includes a main resume page and a separate Instagram-style gallery page.

📁 File Structure
css
Copy
Edit
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── instagram/
│       └── page.js
📄 Description of Files
globals.css
Imports Tailwind CSS.

Defines light and dark theme variables using :root.

Applies background and foreground colors based on system theme.

Sets default font to Arial, Helvetica, sans-serif.

layout.js
Loads Google Fonts: Geist and Geist_Mono.

Applies the fonts as CSS variables.

Wraps children inside a basic HTML layout using these fonts and antialiased styling.

page.js (Main Resume Page)
Displays a personal resume with the following sections:

Profile: Image, name, email, phone, location.

Education: Bachelor of Engineering – Computer Science.

Experience: Frontend Developer (React.js, JavaScript).

Skills: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Git.

Projects: E-commerce Web App (product catalog, cart, payment integration).

Contact: LinkedIn and GitHub links.

instagram/page.js
Displays a 3-column grid of 9 images (/1.jpeg repeated).

Uses Tailwind CSS for responsive grid layout and spacing.

🖼️ Assets
Image used: /1.jpeg (used as profile and gallery image)
