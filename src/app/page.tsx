"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Smartphone, Users, Lock, Zap, Database } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [appLink, setAppLink] = useState("");

  useEffect(() => {
    setAppLink(process.env.NEXT_PUBLIC_APP_LINK || "#");
  }, []);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <div className="flex-1 flex flex-col gap-20 relative px-4 text-center mt-8 mb-20">
      {/* Hero Section */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-4xl flex flex-col items-center gap-8 z-10 mx-auto w-full"
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

        <motion.p variants={itemVars} className="text-2xl sm:text-3xl text-[var(--color-ink)] max-w-2xl leading-relaxed font-bold">
          The ultimate food management app with <span className="text-[var(--color-secondary)] underline decoration-wavy">persistent login</span> sessions.
        </motion.p>

        <motion.div variants={itemVars} className="flex gap-4">
          <a 
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-btn flex items-center gap-2 text-xl hover:scale-105 transition-transform"
          >
            <Download size={26} /> Download Now
          </a>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring" as const, stiffness: 80 }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="sketch-border bg-white p-8 sm:p-12 flex flex-col gap-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)]">What is Qless?</h2>
          <p className="text-xl leading-relaxed opacity-90 text-left">
            <strong className="text-[var(--color-secondary)]">Qless</strong> is a revolutionary Flutter-based food management application built with <strong>Firebase</strong> at its core. It seamlessly integrates persistent user sessions, real-time database synchronization, and multi-role access control to create a powerful platform for restaurants, vendors, and food enthusiasts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <motion.div whileHover={{ y: -5 }} className="sketch-border p-4 bg-blue-50">
              <p className="text-left"><strong>📱 Cross-Platform:</strong> Android, iOS, Windows, macOS, Linux & Web from a single codebase</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="sketch-border p-4 bg-green-50">
              <p className="text-left"><strong>🔐 Secure Sessions:</strong> Never login twice. Your session persists across app restarts</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="sketch-border p-4 bg-yellow-50">
              <p className="text-left"><strong>⚡ Real-time Sync:</strong> Cloud Firestore keeps everything updated in real-time</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="sketch-border p-4 bg-red-50">
              <p className="text-left"><strong>👥 Multi-Role:</strong> Admin, Vendor & User profiles with role-based permissions</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Preview Cards */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.2 }}
        className="max-w-5xl mx-auto w-full"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-[var(--color-ink)]">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Persistent Login", icon: "🔑", color: "bg-blue-100", desc: "Stay logged in forever" },
            { title: "Food Management", icon: "🍔", color: "bg-orange-100", desc: "Manage menus easily" },
            { title: "Cloud Storage", icon: "☁️", color: "bg-sky-100", desc: "Images & data in cloud" },
            { title: "Real-time Updates", icon: "⚡", color: "bg-yellow-100", desc: "Live synchronization" },
            { title: "Multi-Role Access", icon: "👥", color: "bg-purple-100", desc: "Admin, Vendor, User" },
            { title: "Firebase Powered", icon: "🔥", color: "bg-red-100", desc: "Enterprise-grade" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" as const, stiffness: 100 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? 1 : -1 }}
              className={`sketch-border ${feature.color} p-6 flex flex-col gap-2 items-center`}
            >
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-lg opacity-70">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring" as const, stiffness: 80 }}
        className="max-w-3xl mx-auto w-full sketch-border bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white p-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Experience Qless?</h2>
        <p className="text-lg mb-6 opacity-90">Download now and join thousands of users managing their food experience smarter.</p>
        <a 
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="sketch-btn bg-white text-[var(--color-primary)] flex items-center gap-2 text-xl justify-center mx-auto font-bold hover:scale-105 transition-transform"
        >
          <Download size={26} /> Download on All Platforms
        </a>
      </motion.div>
    </div>
  );
}
