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

  // Birds coming from both sides - SLOWER animations
  const birds = [
    { top: "18%", duration: 40, delay: 0, scale: 0.8, dir: "right" },
    { top: "42%", duration: 45, delay: 5, scale: 0.6, dir: "left" },
    { top: "68%", duration: 35, delay: 2, scale: 0.9, dir: "right" },
    { top: "85%", duration: 50, delay: 8, scale: 0.5, dir: "left" },
  ];

  // SVG graphic representing a flying bird (so it works without actual PNGs)
  // If you drop actual PNGs into /public, you can replace the SVG below with <img src="/bird.png" />
  const BirdSVG = () => (
    <svg viewBox="0 0 512 512" fill="var(--color-ink)" width="100%" height="100%">
      <path d="M495 191.9c-8.9-5-18.7-8-28.7-9.5-21-6.4-43.2-6.5-64.2-1-18.7 5-36 14.5-50.6 27.5-6.8 6.1-12.7 13.1-17.7 20.8-19.1-39.7-47-74.8-81.5-102.3-33-26.2-71.5-45.1-112.5-55.5-5.5-1.4-11-.3-15.5 3.1-4.5 3.4-7.2 8.5-7.6 14.2-.8 11.2-.5 22.4.9 33.6 4.4 34.6 16.4 67.5 35 96.6 15 23.4 33.5 44 54.8 61 7 5.6 14.3 10.9 21.9 15.6-21.7 5.5-44 8.7-66.5 9.7-27.4 1.2-54.8-1.5-81.6-8.1-5.1-1.3-10.4-1-15.3 1-4.8 2-8.5 6.2-10 11.3-4.1 13.6-6 27.8-5.6 41.9.4 15.2 2.6 30.2 6.6 44.9 1.4 5.3 5 9.9 9.8 12.6 4.8 2.8 10.6 3.4 15.8 1.8 35.8-11.5 73.1-18 111-19.4 20.4-.7 40.8-.2 61.2 1.6 10.8.9 21.6 2.3 32.3 4.2-8.1 42.6-29 80.9-60 110.3-4.1 3.9-6.4 9.6-6.1 15.3.3 5.7 3.2 10.9 7.8 14.3 12.3 9 26.6 13.9 41.3 14.1 17.6.2 34.7-4.6 49.6-13.8 29.5-18.3 53.6-43.9 69.8-74.2 11.3-21.2 18.9-44 22.5-67.6 1-6.5 2.1-13 3.3-19.4 3.7-20.2 11.3-39.6 22.3-57 8-12.7 17.5-24.3 28.1-34.7 13.8-13.6 29.8-25.2 47.3-34.4 7.2-3.8 14.8-7 22.6-9.6 4.9-1.6 8.9-5.3 11.1-9.9 2.2-4.6 2.4-10 .6-14.8l-1.9-5z"/>
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

      {/* Birds coming from both sides */}
      {birds.map((bird, i) => {
        // If bird goes left->right, it starts off left (-20vw) and animates to right (120vw)
        // If bird goes right->left, it starts off right (120vw) and animates to left (-20vw)
        const isRight = bird.dir === "right";
        const initialX = isRight ? "-20vw" : "120vw";
        const animateX = isRight ? "120vw" : "-20vw";
        
        // Default SVG faces Right. So if it's meant to fly Left, we flip it horizontally
        const scaleX = isRight ? 1 : -1;

        return (
          <motion.div
            key={`bird-${i}`}
            className="absolute z-[2] w-12 h-12"
            style={{
              top: bird.top,
              scale: bird.scale,
            }}
            initial={{ x: initialX, opacity: 0, scaleX: scaleX }}
            animate={{ 
              x: animateX, 
              opacity: [0, 1, 1, 0] // Fade in, hold, fade out
            }}
            transition={{
              duration: bird.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: bird.delay,
            }}
          >
            {/* Soft bouncy flying animation */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <BirdSVG />
            </motion.div>
          </motion.div>
        );
      })}

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
