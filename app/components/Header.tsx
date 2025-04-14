"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full bg-white z-50">
      <nav className="sm:mx-12 move-smooth">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              Songbird
            </Link>
          </div>

          {/* Hamburger Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <div className="w-6 h-6 flex flex-col justify-around">
              <span
                className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40"
          >
            <div className="p-4 h-full">
            <Link href="/" className="text-2xl font-bold block text-center">
              Songbird
            </Link>
              <div className="flex flex-col space-y-6 justify-center items-center h-full pb-8">
                <Link
                  href="/"
                  className="text-xl hover:text-gray-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/#about"
                  className="text-xl hover:text-gray-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/#portfolio"
                  className="text-xl hover:text-gray-600 transition-colors"
                >
                  Works
                </Link>
                <Link
                  href="/contact"
                  className="text-xl bg-brand-yellow text-white px-6 py-2 rounded-md hover:bg-brand-yellow/90 transition-colors"
                >
                  JOIN
                </Link>
                <Link
                  href="/contact"
                  className="text-xl hover:text-gray-600 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
