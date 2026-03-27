"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Cloud positions - FASTER animations
  const clouds = [
    { top: "15%", left: "-20%", scale: 1.1, duration: 16, delay: 0 },
    { top: "35%", left: "-30%", scale: 0.9, duration: 20, delay: 2 },
    { top: "50%", left: "-15%", scale: 1.3, duration: 18, delay: 1 },
    { top: "65%", left: "-40%", scale: 0.8, duration: 22, delay: 3 },
    { top: "80%", left: "-25%", scale: 1, duration: 19, delay: 1.5 },
  ];

  // Flying birds
  const birds = [
    { top: "20%", duration: 18, delay: 0, size: 24 },
    { top: "45%", duration: 22, delay: 5, size: 20 },
    { top: "70%", duration: 20, delay: 3, size: 26 },
  ];

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

      {/* Flying Birds */}
      {birds.map((bird, i) => (
        <motion.div
          key={`bird-${i}`}
          className="absolute z-[2] select-none"
          style={{
            top: bird.top,
            fontSize: `${bird.size}px`,
          }}
          initial={{ x: "-50px", opacity: 0 }}
          animate={{ x: "calc(100vw + 50px)", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: bird.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: bird.delay,
          }}
        >
          🦅
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
