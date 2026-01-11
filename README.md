# Safe Shield | Thermo-Retractable Containment

**Developed for LABIRINTOFLORESCENTE, UNIPESSOAL LDA**

Safe Shield is a specialized web application showcasing expertise in thermo-retractable containment, asbestos decontamination, and industrial safety netting. The application includes a multi-language interface (EN/FR/PT) and an AI-powered visualization tool for containment simulations.

## Project Overview

- **Company**: LABIRINTOFLORESCENTE, UNIPESSOAL LDA
- **Specialization**: Specialized construction activities, Industrial Containment, Asbestos Mitigation.
- **Tech Stack**: React, TypeScript, Tailwind CSS, Google Gemini API.

## Features

- **Multi-language Support**: Seamless switching between English, French, and Portuguese.
- **AI Simulator**: Upload site photos to visualize thermo-retractable wrapping using Google Gemini Vision.
- **Service Portfolio**: Detailed breakdown of services including under-roof containment and safety nets.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project is configured for deployment on standard static hosting providers like **Vercel**, **Netlify**, or **Cloudflare Pages**.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist` folder.

### Environment Variables

To enable the AI features in production, you must set the API Key in your hosting provider's environment variables settings.

- `VITE_API_KEY`: Your Google Gemini API Key.

*(Note: The current application architecture also supports runtime injection via `process.env` depending on the platform configuration).*

## License

All rights reserved © 2024 Safe Shield / LABIRINTOFLORESCENTE.
