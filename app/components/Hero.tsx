"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-brand-yellow">
      <div>
        <h1 className="text-5xl md:text-8xl font-bebas m-4 uppercase tracking-tight max-w-[960px] lg:mx-auto">
          <span className="block text-white">Our</span>
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
