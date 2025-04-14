"use client";

import Link from "next/link";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-brand-yellow">
      <div className="w-full max-w-[1152px] mx-auto">
        <h1 className="text-5xl md:text-[150px] font-bebas m-4 uppercase tracking-tight lg:mx-auto">
          <span className="block text-white">
            <AnimatedText initialText="Our" finalText="Your" />
          </span>
          <span className="block text-black">Experience Matters</span>
        </h1>
        <Link
          href="/showreel"
          className="relative inline-block px-6 py-2 text-white overflow-hidden group"
        >
          <span className="relative z-10">Play Showreel</span>
          <span className="absolute inset-0 bg-gray-800/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        </Link>
      </div>
    </section>
  );
}
