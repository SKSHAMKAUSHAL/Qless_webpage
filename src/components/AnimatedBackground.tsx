"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Cloud positions heavily focused towards the middle section
  const clouds = [
    { top: "15%", left: "-20%", scale: 1.1, duration: 35, delay: 0 },
    { top: "35%", left: "-30%", scale: 0.9, duration: 45, delay: 5 },
    { top: "50%", left: "-15%", scale: 1.3, duration: 38, delay: 2 },
    { top: "65%", left: "-40%", scale: 0.8, duration: 50, delay: 8 },
    { top: "80%", left: "-25%", scale: 1, duration: 42, delay: 15 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[var(--background)]">
      {clouds.map((cloud, i) => (
        <motion.div
          key={i}
          className="sketch-cloud absolute"
          style={{
            top: cloud.top,
            scale: cloud.scale,
          }}
          initial={{ x: "-100vw", opacity: 0.6 }}
          animate={{ x: "120vw" }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: cloud.delay,
          }}
        />
      ))}

      {/* Grid pattern faintly simulating a sketchbook */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
