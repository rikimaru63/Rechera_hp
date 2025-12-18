"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-background" />

      {/* Blob SVG Animations */}
      <svg
        viewBox="0 0 1200 600"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
        </defs>

        {/* Blob 1: Pink */}
        <motion.path
          className="blob blob-1"
          d="M 300,300 Q 400,200 500,300 T 700,300 Q 600,400 500,500 T 300,300 Z"
          fill="#E8CCCC"
          opacity="0.4"
          filter="url(#blur)"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{
            scale: [1, 1.1, 0.95, 1.05, 1],
            x: [0, 20, -10, 30, 0],
            y: [0, -30, 20, 10, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        {/* Blob 2: Blue */}
        <motion.path
          className="blob blob-2"
          d="M 800,200 Q 900,150 1000,200 T 1100,300 Q 1000,400 900,450 T 800,400 Z"
          fill="#CAD9DA"
          opacity="0.35"
          filter="url(#blur)"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{
            scale: [1, 0.95, 1.1, 1, 1],
            x: [0, -15, 25, -5, 0],
            y: [0, 20, -20, 15, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 2,
          }}
        />

        {/* Blob 3: Beige */}
        <motion.path
          className="blob blob-3"
          d="M 100,400 Q 200,350 300,400 T 500,400 Q 400,500 300,550 T 100,400 Z"
          fill="#F4E7E7"
          opacity="0.5"
          filter="url(#blur)"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{
            scale: [1, 1.05, 0.9, 1.1, 1],
            x: [0, 30, -20, 10, 0],
            y: [0, -10, 30, -15, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 4,
          }}
        />
      </svg>
    </div>
  );
}
