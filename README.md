# AI-Powered CV Screening Tool

## Overview

This project is an advanced CV screening application that uses artificial intelligence to help recruiters and hiring managers efficiently evaluate job candidates. The system automates the initial screening process, matches candidates to job requirements, and helps reduce bias in hiring decisions.

## Features

- **Automated CV Screening**: Upload multiple CVs in various formats (PDF, DOCX) for quick analysis
- **Smart Matching**: AI-powered matching of candidate profiles to job requirements
- **Bias Reduction**: Focus on skills and experience for fair candidate evaluations
- **User-Friendly Dashboard**: Intuitive interface for managing the hiring process
- **Secure Authentication**: Protected user accounts with login and registration

## Tech Stack

- **Frontend**:
  - React 19
  - TypeScript
  - Tailwind CSS
  - Framer Motion (for animations)
  - React Router DOM (for navigation)
  - Vite (for development and building)

## Project Structure

```
frontend/
├── src/
│   ├── assets/      # Static assets like images
│   ├── components/  # Reusable UI components
│   ├── lib/         # Utility functions and shared code
│   ├── pages/       # Main application pages
│   ├── services/    # API services and data fetching
│   ├── App.tsx      # Main application component
│   └── main.tsx     # Application entry point
├── public/          # Public static files
└── package.json     # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone <repository-url>
   ```

2. Install dependencies

   ```
   cd frontend
   npm install
   ```

3. Start the development server

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage Guide

1. **Register/Login**: Create an account or log in to access the dashboard
2. **Upload CVs**: Upload candidate CVs in supported formats
3. **Define Criteria**: Set job requirements and essential skills
4. **Review Results**: Examine the ranked list of candidates with detailed insights

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
