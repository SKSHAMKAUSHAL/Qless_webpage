"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Cloud positions - SLOWER animations
  const clouds = [
    { top: "15%", left: "-20%", scale: 1.1, duration: 45, delay: 0 },
    { top: "35%", left: "-30%", scale: 0.9, duration: 55, delay: 2 },
    { top: "50%", left: "-15%", scale: 1.3, duration: 50, delay: 1 },
    { top: "65%", left: "-40%", scale: 0.8, duration: 60, delay: 3 },
    { top: "80%", left: "-25%", scale: 1, duration: 52, delay: 1.5 },
  ];

// Rain drops coming from above
  const rainDrops = Array.from({ length: 40 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    duration: 1 + Math.random() * 2,
    delay: Math.random() * 5,
    scale: 0.3 + Math.random() * 0.7,
  }));

  const RainDropSVG = () => (
    <svg viewBox="0 0 24 24" fill="var(--color-ink)" width="100%" height="100%" opacity="0.4">
      <path d="M12 2c0 0-5 8-5 13a5 5 0 0 0 10 0c0-5-5-13-5-13z"/>
    </svg>
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[var(--background)]">
      {/* Clouds */}
      {clouds.map((cloud, i) => (
        <motion.div
          key={`cloud-${i}`}
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

{/* Rain drops falling down */}
      {rainDrops.map((drop, i) => (
        <motion.div
          key={`drop-${i}`}
          className="absolute z-[2] w-2 h-2"
          style={{
            left: drop.left,
            scale: drop.scale,
          }}
          initial={{ y: "-10vh", opacity: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            ease: "linear",
            delay: drop.delay,
          }}
        >
          <RainDropSVG />
        </motion.div>
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
