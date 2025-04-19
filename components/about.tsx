"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraph = `I'm a curious full-stack developer with a love for building impactful solutions and a drive to push the limits of what's possible.

From crafting intuitive frontends with React and Next.js, to engineering secure backends with Node.js, PHP, and Flutter, I thrive where tech meets purpose.

Always exploring, always improving — I’m on a mission to turn ideas into tools that solve real problems and spark meaningful change.`;

export default function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const words = paragraph.split(" ");

  return (
    <section ref={sectionRef} className="w-full px-4 py-20 flex justify-center">
      <div className="max-w-6xl text-4xl font-bold leading-snug text-center">
        {words.map((word, index) => {
          const wordStart = index * 0.008;
          const wordEnd = wordStart + 0.15;

          const opacity = useTransform(
            scrollYProgress,
            [wordStart, wordEnd],
            [0.2, 1]
          );

          return (
            <motion.span
              key={index}
              style={{ opacity }}
              className="inline-block transition-opacity duration-700"
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </div>
    </section>
  );
}
