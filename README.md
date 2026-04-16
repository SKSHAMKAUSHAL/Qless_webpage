# Qless Website 🍔

**Qless** is the ultimate food management application. This repository contains the landing page website built to showcase its powerful features and provide download links. The Qless App itself is a cross-platform solution utilizing Firebase for a seamless, real-time ecosystem connecting Admins, Vendors, and Users.

---

## 🚀 Core Functionality

### Website Features
- **Modern Landing Page**: Highlights the Qless app with beautiful, snappy animations and clear call-to-actions.
- **Dynamic Features Showcase**: Interactive, animated grid displaying the main app capabilities like role management, storage, cross-platform support, and synchronization.
- **Responsive Design**: Flawless experience across desktop, tablet, and mobile devices using Tailwind CSS v4.
- **Download Integration**: Easy access to the main application via environment-configured download URLs (`NEXT_PUBLIC_APP_LINK`).

### App Capabilities Showcased
The website promotes the following features of the Qless App:
- **Persistent Sessions**: Seamless re-entry across app restarts via Firebase Authentication.
- **Multi-Role Access**: Dedicated portals and permissions for **Admins**, **Vendors**, and end **Users**.
- **Real-Time Sync**: Instant live updates across all platforms without polling (powered by Cloud Firestore).
- **Cloud Storage**: Seamless food image uploads, optimized and delivered instantly via Firebase Storage.
- **Cross-Platform**: Developed in Flutter, available on Android, iOS, Windows, macOS, Linux, and Web from a single codebase.
- **Comprehensive Food Management**: Complete inventory tracking, categories, and dynamic pricing.

---

## 🛠️ Tech Stack & Tools

### Frontend (Website)
- **[Next.js](https://nextjs.org/) (v16.2.1)**: React framework for server-side rendering and static site generation.
- **[React](https://react.dev/) (v19.2.4)**: Core library for building the UI components.
- **[TypeScript](https://www.typescriptlang.org/) (v5)**: Strongly typed programming language building on JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/) (v4)**: Utility-first CSS framework for rapid and responsive styling.
- **[Framer Motion](https://www.framer.com/motion/)**: Production-ready animation library for interactive and smooth screen transitions.
- **[GSAP](https://gsap.com/)**: Professional-grade animation library for rich web animations.
- **[Lucide React](https://lucide.dev/)**: Beautiful, crisp SVG icons.

### Application Backend (Promoted App Stack)
- **[Flutter](https://flutter.dev/)**: Single codebase for cross-platform app delivery.
- **[Firebase Authentication](https://firebase.google.com/docs/auth)**: Secure persistent user sessions.
- **[Cloud Firestore](https://firebase.google.com/docs/firestore)**: Real-time NoSQL database syncing data instantly.
- **[Firebase Storage](https://firebase.google.com/docs/storage)**: Robust cloud storage for food imagery.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm, yarn, pnpm, or bun

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd Qless_Website/qless-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup:**
   Create a `.env` or `.env.local` file at the root of `qless-website` and provide your app's download link:
   ```env
   NEXT_PUBLIC_APP_LINK=https://link-to-your-app-download.com
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application running locally.

---

## 🔧 Scripts
- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production deployment.
- `npm run start`: Starts a production-ready Next.js server.
- `npm run lint`: Runs ESLint to find and fix code style issues.

---

Built with ❤️ by the Qless Team.
