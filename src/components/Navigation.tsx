"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="sticky top-4 z-50 w-[95%] max-w-4xl mx-auto sketch-border bg-[var(--background)] px-6 py-4 flex flex-wrap gap-4 items-center justify-between"
    >
      <Link href="/" className="text-3xl font-bold tracking-widest text-[var(--color-primary)]">
        Qless 🍔
      </Link>
      <div className="flex gap-4 sm:gap-6 items-center flex-wrap">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={`text-xl relative px-2 py-1 transition-colors hover:text-[var(--color-primary)] ${isActive ? "text-[var(--color-primary)] font-bold" : "text-[var(--color-ink)]"}`}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--color-primary)] sketch-border"
                  style={{ borderRadius: "5px", padding: 0 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
