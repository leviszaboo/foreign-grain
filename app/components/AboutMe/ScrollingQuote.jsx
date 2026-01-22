"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function QuoteWord({ children, range, progress, highlight }) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      className={`inline-block mr-3 ${highlight ? "text-white" : "text-neutral-500"}`}
      style={{ opacity }}
    >
      {children}
    </motion.span>
  );
}

function QuoteParagraph({ text, highlightWords = [] }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.95", "start 0.1"],
  });

  const words = text.split(" ");

  return (
    <p ref={element} className="flex flex-wrap text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-32 lg:mb-[50vh]">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const isHighlighted = highlightWords.length === 0 || highlightWords.some((hw) => word.includes(hw));

        return (
          <QuoteWord key={i} range={[start, end]} progress={scrollYProgress} highlight={isHighlighted}>
            {word}
          </QuoteWord>
        );
      })}
    </p>
  );
}

export default function ScrollingQuote({ paragraphs }) {
  return (
    <section className="min-h-screen px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 py-32">
      <div className="max-w-4xl">
        {paragraphs.map((paragraph, index) => (
          <QuoteParagraph
            key={index}
            text={paragraph.value}
            highlightWords={paragraph.highlightWords || []}
          />
        ))}
      </div>
    </section>
  );
}
