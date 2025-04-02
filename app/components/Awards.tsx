"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const awards = [
  { title: "Mobi/Webi Awards", count: 12 },
  { title: "IT Awards", count: 8 },
  { title: "Brand Awards", count: 15 },
  { title: "Best App Design", count: 10 },
  { title: "Best Mobile Awards", count: 7 },
  { title: "Other Awards", count: 5 },
];

export default function Awards() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(awards.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCounts(awards.map((award) => award.count));
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("awards-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="awards-section" className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Awards</h2>
          <p className="text-xl">
            We're proud to take part in our clients' success
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div className="text-5xl font-bold mb-2">
                {counts[index]}
              </motion.div>
              <h3 className="text-xl">{award.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
