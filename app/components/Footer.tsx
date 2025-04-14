"use client";

import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>© Copyright Songbird Strategies</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 md:mt-0 hover:text-gray-300 transition-colors"
        >
          Scroll To Top
        </button>

        <div className="mt-4 md:mt-0 flex items-center space-x-6">
          <span className="font-bebas">follow us</span>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-yellow transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-yellow transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-yellow transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-yellow transition-colors"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
