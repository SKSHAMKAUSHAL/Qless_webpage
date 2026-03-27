"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Home() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[80vh] gap-12 relative px-4 text-center mt-8">
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-3xl flex flex-col items-center gap-8 z-10"
      >
        <motion.div variants={itemVars} className="relative inline-block">
          <h1 className="text-7xl sm:text-9xl font-bold text-[var(--color-primary)]">Qless.</h1>
          <motion.div 
            className="absolute -bottom-4 left-0 w-full h-4 bg-[var(--color-accent)] opacity-50 z-[-1]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ borderRadius: "20px", transformOrigin: "left" }}
          />
        </motion.div>

        <motion.p variants={itemVars} className="text-2xl sm:text-3xl text-[var(--color-ink)] max-w-2xl leading-relaxed">
          The ultimate food management app with <span className="text-[var(--color-secondary)] font-bold">persistent login</span> sessions and multi-role access.
        </motion.p>

        <motion.div variants={itemVars} className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <Link href="/download" className="sketch-btn flex items-center gap-2 text-xl">
            <Download size={24} /> Get The App
          </Link>
          <Link href="/features" className="sketch-btn secondary flex items-center gap-2 text-xl">
            See Features
          </Link>
        </motion.div>

        {/* Floating elements */}
        <motion.div 
          variants={itemVars}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full text-left"
        >
          {[
            { title: "User Roles", icon: "👤", desc: "Admin, Vendor & User profiles" },
            { title: "Real-time", icon: "⚡", desc: "Powered by Cloud Firestore" },
            { title: "Smart Login", icon: "🔑", desc: "Persistent sessions via Firebase" }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5, rotate: i % 2 === 0 ? 2 : -2 }}
              className="sketch-border p-6 flex flex-col gap-2 bg-white"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-lg opacity-80">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
