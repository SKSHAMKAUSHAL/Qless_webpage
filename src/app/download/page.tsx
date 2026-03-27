"use client";

import { motion } from "framer-motion";
import { Download, Apple, Monitor, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DownloadPage() {
  const [appLink, setAppLink] = useState("");

  useEffect(() => {
    // Falls back to a default if the env is not loaded properly in some environments
    setAppLink(process.env.NEXT_PUBLIC_APP_LINK || "#");
  }, []);

  const platforms = [
    { name: "Android", icon: <Download size={40} />, color: "var(--color-primary)" },
    { name: "iOS", icon: <Apple size={40} />, color: "var(--color-ink)" },
    { name: "Windows", icon: <Monitor size={40} />, color: "var(--color-secondary)" },
    { name: "Web / PWA", icon: <Globe size={40} />, color: "var(--color-accent)" },
  ];

  return (
    <div className="flex flex-col items-center gap-12 mt-12 mb-24 max-w-4xl mx-auto w-full px-4 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h1 className="text-5xl sm:text-7xl font-bold mb-4">
          Get <span className="text-[var(--color-primary)]">Qless.</span>
        </h1>
        <p className="text-2xl mt-4 opacity-80">Available on almost every platform you can think of.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-8"
      >
        {platforms.map((plat, idx) => (
          <Link href={appLink} key={plat.name} target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotate: idx % 2 === 0 ? 1 : -1,
                backgroundColor: plat.color,
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
              className="sketch-border flex flex-col items-center justify-center p-10 gap-4 bg-white transition-colors duration-300"
            >
              <div className="p-4 sketch-border rounded-full bg-white text-[var(--color-ink)]">
                {plat.icon}
              </div>
              <span className="text-3xl font-bold">{plat.name}</span>
            </motion.div>
          </Link>
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-col items-center gap-4"
      >
        <p className="text-xl">Just want the direct APK?</p>
        <a href={appLink} className="sketch-btn font-bold text-2xl flex items-center gap-2">
          <Download /> Direct Download
        </a>
      </motion.div>
    </div>
  );
}
