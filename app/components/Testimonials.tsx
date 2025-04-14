"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Liat Peled",
    title: "VP Product",
    quote:
      "Thank you for raising to the challenge and helping us transform our strategy and vision into a beautiful and unique app! Thank you for constantly pushing our limits to provide our customers with the best user experience!",
  },
  {
    name: "Ido Fridman",
    title: "VP Marketing and Biz Dev",
    quote:
      "Here's my number: +972-52-4576588. I guess this says it all about my level of satisfaction with UXPERT's work and character.",
  },
  {
    name: "Tal Lupo",
    title: "UX Manager",
    quote:
      "Thank you for your uncompromising professionalism and innovative work, unique and creative design and for your brilliant animation. And to top it all – thank you for your outstanding cooperation and caring.",
  },
  {
    name: "Amichai Ziv",
    title: "CEO",
    quote:
      "It's been an amazing experience and a great honor working with you. You are top class experts. Quick to learn, sharp-minded and full of creativity backed by years of experience.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 750 : -750,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 750 : -750,
      opacity: 0
    })
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div className="border-[2px] border-brand-yellow w-[60px] mb-6" />
            <h2 className="text-6xl font-bold mb-6 flex-1 font-bebas uppercase text-left">What<br />They Say</h2>
          </div>
          <div className="flex-1">
            <p className="text-xl italic">We swear we didn&apos;t force them to</p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.1 }
              }}
              className="text-center"
            >
              <blockquote className="text-xl mb-8">
                &quot;{testimonials[currentIndex].quote}&quot;
              </blockquote>
              <div className="font-bold text-lg">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-600">
                {testimonials[currentIndex].title}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
