# Campus Hub 🎓

The ultimate university social and utility app, built as a high-performance Progressive Web App (PWA).

![Campus Hub Logo](public/pwa-512x512.png)

## Features

- **🚀 Real-time Feed**: Stay updated with campus announcements.
- **🕵️ Anonymous Posting**: Share thoughts or tips without revealing your identity.
- **📚 Note Sharing**: Upload and download course materials easily.
- **⚖️ Marketplace**: Buy and sell items within the university community.
- **📍 Campus Life**: Find study rooms, events, and lost & found items.
- **📅 Timetable Planner**: Keep track of your weekly classes with smart alerts.
- **📱 PWA Ready**: Install on your Android or iOS device for a native-like experience.

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Premium Vanilla CSS (Glassmorphism)
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Backend**: Supabase (Real-time DB & Auth)
- **Deployment**: GitHub Actions + GitHub Pages

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A Supabase project (see [SUPABASE_GUIDE.md](./SUPABASE_GUIDE.md)).

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

The project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

1. Set your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as GitHub Repository Secrets.
2. Push to `main`.
3. Go to **Settings > Pages** and set the branch to `gh-pages`.

## License

MIT
