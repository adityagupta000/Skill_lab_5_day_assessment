Next.js Resume Project
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

Sets default Arial, Helvetica, sans-serif font.

layout.js
Loads Google Fonts Geist and Geist_Mono.

Applies the fonts as CSS variables.

Wraps children inside a basic HTML layout with those fonts and antialiased styling.

page.js (Main Resume Page)
Displays a profile section with an image and basic info (name, email, phone, location).

Contains sections:

Education (Bachelor of Engineering – Computer Science)

Experience (Frontend Developer, using React.js and JavaScript)

Skills (HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Git)

Projects (E-commerce Web App with product catalog, cart, and payment integration)

Contact (LinkedIn and GitHub links)

instagram/page.js
Displays a 3-column grid of 9 images (/1.jpeg repeated).

Styled with Tailwind classes for spacing and layout.

🖼️ Assets
Image file used: /1.jpeg (profile and gallery images)

