# Language Dude (ことば先生)

A responsive web application for learning Japanese through conversational AI. This application provides a user-friendly interface to practice Japanese language skills with an AI assistant that responds in both Japanese and English.

![Language Dude Screenshot](https://via.placeholder.com/800x450)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Usage](#usage)
  - [Creating a New Conversation](#creating-a-new-conversation)
  - [Managing Conversations](#managing-conversations)
  - [Interacting with the AI](#interacting-with-the-ai)
  - [Exporting Conversations](#exporting-conversations)
- [Responsive Design](#responsive-design)
- [API Integration](#api-integration)
- [Local Storage](#local-storage)
- [Project Structure](#project-structure)

## Overview

Language Dude (ことば先生) is an interactive language learning application that leverages Google's Gemini AI to help users practice Japanese. The application provides a chat interface where users can send messages in English and receive responses in both Japanese and English, allowing for efficient language learning through conversational practice.

## Features

- **Conversational AI Interface**: Chat with an AI Japanese language teacher
- **Bilingual Responses**: Receive responses in both Japanese and English
- **Conversation Management**: Create, name, save, and delete conversations
- **Typing Animation**: Realistic typing effect for AI responses
- **Export Functionality**: Export conversations as text files
- **Persistent Storage**: Conversations are saved in local storage
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Real-time Interaction**: Immediate AI responses with typing animation

## Technologies Used

- **React.js**: Frontend framework
- **Next.js**: React framework for production
- **Google Gemini API**: AI conversational model
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework
- **Local Storage API**: Client-side data persistence
- **Fetch API**: For handling HTTP requests

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/language-dude.git
   cd language-dude
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory:
   ```bash
   touch .env.local
   ```

### Environment Setup

Add your Google Gemini API key to the `.env.local` file:

```
NEXT_PUBLIC_GOOGLE_API_KEY=your_gemini_api_key_here
```

To obtain a Google Gemini API key:

1. Visit [Google AI Studio](https://ai.google.dev/)
2. Create an account or sign in
3. Navigate to the API section and generate a new API key

## Usage

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Creating a New Conversation

1. Click the pencil icon (✏️) in the top navigation bar
2. A new conversation will be created and you'll be prompted to name it
3. Enter a name for your conversation and click "Save"

### Managing Conversations

1. Click the file icon (📄) to view your saved conversations
2. Select any conversation to continue where you left off
3. Delete conversations by clicking the trash icon (🗑️)
4. Rename conversations by clicking the save icon (💾)

### Interacting with the AI

1. Type your message in English in the input field at the bottom
2. Press "Send" or hit Enter
3. The AI will respond with Japanese text followed by an English translation
4. Continue the conversation to practice your Japanese skills

### Exporting Conversations

1. Open the conversation you want to export
2. Click the download icon (⬇️) in the top navigation bar
3. A text file containing the entire conversation will be downloaded

## Responsive Design

Language Dude is designed to work on all device sizes:

- **Mobile**: Optimized layout with appropriately sized controls and simplified UI
- **Tablet**: Balanced design that takes advantage of additional screen space
- **Desktop**: Full-featured interface with optimal spacing and readability

The application adapts dynamically to different screen sizes using Tailwind CSS's responsive design utilities.

## API Integration

The application integrates with Google's Gemini AI model to provide Japanese language responses. When a user sends a message, the application:

1. Sends the message to the Gemini API with instructions to respond as a Japanese language teacher
2. Receives the AI's response
3. Displays the response with a typing animation effect
4. Saves the exchange to the current conversation

## Local Storage

All conversations are saved to the browser's local storage, allowing users to:

- Return to previous conversations even after closing the browser
- Maintain a history of their language learning progress
- Access their conversations offline after initial loading

## Project Structure

```
language-dude/
├── app/
│   └── page.js       # Application entry point
├── components/
│   └── Chat.js       # Main chat component
├── public/
│   └── assets/       # Static assets like images
├── styles/
│   └── globals.css   # Global styles including Tailwind
├── .env.local        # Environment variables (not committed)
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Created with ❤️ for language learners everywhere.
