import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";

const sketchFont = Kalam({
  variable: "--font-sketch",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qless | Persistent Login Session Handling",
  description: "A comprehensive Flutter application with persistent login sessions, vendor profiles, and food management using Firebase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sketchFont.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-[var(--color-accent)] selection:text-[var(--color-ink)]">
        <AnimatedBackground />
        <Navigation />
        <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-8 flex flex-col pt-12">
          {children}
        </main>
      </body>
    </html>
  );
}
