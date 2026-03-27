"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Database, Smartphone, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Persistent Sessions",
      icon: <ShieldCheck size={32} className="text-[var(--color-primary)]" />,
      description: "Log in once, stay logged in. Firebase Authentication powers seamless re-entry across app restarts."
    },
    {
      title: "Multi-Role Access",
      icon: <Users size={32} className="text-[var(--color-secondary)]" />,
      description: "Dedicated profiles and permissions for Admins, Vendors, and normal Users."
    },
    {
      title: "Real-time sync",
      icon: <Zap size={32} className="text-[var(--color-accent)]" />,
      description: "Powered by Cloud Firestore. Menus and orders update live effortlessly."
    },
    {
      title: "Food Management",
      icon: <Database size={32} className="text-[var(--color-primary)]" />,
      description: "Vendors can seamlessly upload images through Firebase Storage and manage fast."
    },
    {
      title: "Cross Platform",
      icon: <Smartphone size={32} className="text-[var(--color-secondary)]" />,
      description: "Available on Android, iOS, Windows, macOS, Linux, and Web from a single codebase!"
    }
  ];

  return (
    <div className="flex flex-col gap-12 mt-12 mb-24 max-w-5xl mx-auto w-full px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl sm:text-7xl font-bold mb-4">Core <span className="text-[var(--color-secondary)] underline decoration-wavy underline-offset-8">Features</span></h1>
        <p className="text-2xl opacity-80">Everything you need to manage food & restaurants.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.02 }}
            className="sketch-border bg-white p-8 flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="flex items-center gap-4 border-b-2 border-dashed border-[var(--color-ink)] pb-4 mb-2">
              <div className="p-3 sketch-border rounded-full bg-[var(--background)]">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold">{feature.title}</h2>
            </div>
            <p className="text-xl leading-relaxed opacity-90">
              {feature.description}
            </p>
            
            {/* Background decorative blob */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--color-accent)] opacity-10 rounded-full sketch-border" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
