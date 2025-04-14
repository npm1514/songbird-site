"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface AnimatedTextProps {
  initialText: string;
  finalText: string;
  className?: string;
}

export default function AnimatedText({
  initialText,
  finalText,
  className = "",
}: AnimatedTextProps) {
  const [currentText, setCurrentText] = useState(initialText);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      let iterations = 0;
      const maxIterations = 20; // Number of times to cycle through letters

      const interval = setInterval(() => {
        const newText =
          letters[Math.floor(Math.random() * letters.length)] + currentText;
        setCurrentText(newText);
        iterations++;

        if (iterations >= maxIterations) {
          clearInterval(interval);
          setCurrentText(finalText); // Will set to "Your"
          setIsAnimating(false);
        }
      }, 100); // Speed of letter changes

      return () => clearInterval(interval);
    };

    const timeout = setTimeout(startAnimation, 1000); // Start after 1 second

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
    </motion.span>
  );
}
