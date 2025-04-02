"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

const placeholderImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiS0hHSUZJPVBQUFBQUFBQUFBQUH/2wBDAR0XFyAeIBogHh4gIiAoJCAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

const projects: Project[] = [
  {
    title: "Pizza App & Site",
    subtitle: "Food. Fast. Fun!",
    image: placeholderImage,
  },
  {
    title: "Mobility Payments",
    subtitle: "The easy way!",
    image: placeholderImage,
  },
  {
    title: "Train Scheduling",
    subtitle: "Plan your ride",
    image: placeholderImage,
  },
  {
    title: "Pension Clearinghouse",
    subtitle: "Caring about your future",
    image: placeholderImage,
  },
];

export default function Portfolio() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Our Work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle"
            >
              <span className="font-bold">We love our work</span>
              <br />
              <span className="italic text-gray-600">and it shows</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              With hundreds of projects completed for industry-leading clients,
              we've done almost every type of project. Many of which became
              award winners and made us proud parents.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="relative h-[500px] overflow-hidden rounded-lg group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                  <h4 className="text-3xl font-bold mb-2 uppercase">
                    {project.title}
                  </h4>
                  <p className="text-xl text-gray-200 uppercase">
                    {project.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Suspense>
  );
}
