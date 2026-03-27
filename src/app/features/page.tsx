"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Database, Smartphone, Users, Cloud, Lock, FileText } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "🔐 Persistent Sessions",
      icon: <Lock size={40} className="text-[var(--color-primary)]" />,
      description: "Log in once, stay logged in. Firebase Authentication powers seamless re-entry across app restarts. Your session never expires.",
      badges: ["Firebase Auth", "Cloud Firestore", "Secure"]
    },
    {
      title: "👥 Multi-Role Access",
      icon: <Users size={40} className="text-[var(--color-secondary)]" />,
      description: "Dedicated profiles and permissions for Admins who manage everything, Vendors who sell food, and Users who order.",
      badges: ["Admin Panel", "Vendor Portal", "User App"]
    },
    {
      title: "⚡ Real-time Sync",
      icon: <Zap size={40} className="text-[var(--color-accent)]" />,
      description: "Powered by Cloud Firestore. Menus, orders, and user data update live across all platforms instantly.",
      badges: ["Live Updates", "No Polling", "Instant Sync"]
    },
    {
      title: "☁️ Cloud Storage",
      icon: <Cloud size={40} className="text-[var(--color-secondary)]" />,
      description: "Vendors can seamlessly upload food images through Firebase Storage. Images are optimized and delivered instantly.",
      badges: ["Firebase Storage", "CDN Ready", "Scalable"]
    },
    {
      title: "📱 Cross Platform",
      icon: <Smartphone size={40} className="text-[var(--color-primary)]" />,
      description: "Available on Android, iOS, Windows, macOS, Linux, and Web from a single Flutter codebase. Write once, run everywhere!",
      badges: ["Flutter", "One Codebase", "All Devices"]
    },
    {
      title: "🍔 Food Management",
      icon: <FileText size={40} className="text-[var(--color-accent)]" />,
      description: "Complete food item management with categories, pricing, descriptions, and real-time inventory tracking.",
      badges: ["Inventory", "Categories", "Pricing"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 12 }
    }
  };

  return (
    <div className="flex flex-col gap-16 mt-12 mb-24 max-w-6xl mx-auto w-full px-4">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h1 
          className="text-5xl sm:text-7xl font-bold mb-4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Packed with <span className="text-[var(--color-secondary)] underline decoration-wavy">Amazing</span> Features
        </motion.h1>
        <motion.p 
          className="text-2xl opacity-80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Everything you need to manage food, restaurants, and vendors in one powerful app.
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotate: idx % 2 === 0 ? 1 : -1,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            className="sketch-border bg-gradient-to-br from-white to-gray-50 p-8 flex flex-col gap-4 relative overflow-hidden group cursor-pointer min-h-[380px] transition-all duration-300"
          >
            {/* Animated background gradient on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] opacity-0"
              whileHover={{ opacity: 0.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Icon with animation */}
            <motion.div 
              className="p-4 sketch-border rounded-full bg-white w-fit relative z-10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {feature.icon}
            </motion.div>

            {/* Title */}
            <h2 className="text-2xl font-bold relative z-10">{feature.title}</h2>

            {/* Description */}
            <p className="text-lg leading-relaxed opacity-80 relative z-10 flex-1">
              {feature.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-4 relative z-10">
              {feature.badges.map((badge, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="px-3 py-1 sketch-border rounded-full bg-[var(--color-accent)] text-sm font-semibold opacity-70 text-[var(--color-ink)]"
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            {/* Decorative blob that appears on hover */}
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-accent)] opacity-0 rounded-full sketch-border"
              whileHover={{ opacity: 0.1, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* TechStack Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="sketch-border bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] p-12 text-white text-center relative overflow-hidden"
      >
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 border-2 border-white opacity-10 rounded-full"
              animate={{ 
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Built with Modern Tech</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Powered by Flutter, Firebase, and cutting-edge web technologies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-bold">
            {["Flutter", "Firebase", "Firestore", "Storage", "Authentication", "Cloud Functions", "Realtime DB", "Analytics"].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="sketch-border bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
      >
        {[
          { number: "6+", label: "Supported Platforms", emoji: "📱" },
          { number: "0", label: "Database Migrations", emoji: "⚡" },
          { number: "∞", label: "Scalability", emoji: "🚀" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            className="sketch-border bg-white p-8 flex flex-col gap-4 items-center"
          >
            <div className="text-6xl">{stat.emoji}</div>
            <motion.div 
              className="text-5xl font-bold text-[var(--color-primary)]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {stat.number}
            </motion.div>
            <p className="text-xl font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
