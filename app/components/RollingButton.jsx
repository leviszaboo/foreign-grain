"use client"

import { useState } from "react";

export default function RollingButton({ text, handleClick, className, type, disabled }) {
  const [buttonText, setButtonText] = useState(text);
  const [animationStarted, setAnimationStarted] = useState(false);

  const chars = "<>/?;\\[{}]+_ABEGHPTYWOERSQ";

  function handleMouseEnter() {
    if (animationStarted) return;
    setAnimationStarted(true);
    let iterations = 0;

    const interval = setInterval(() => {
      setButtonText(
        buttonText
        .split("")
        .map((letter, index) => {
          if (index + 1 < iterations) {
          return letter;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iterations > buttonText.length + 1) {
        clearInterval(interval);
        setAnimationStarted(false);
    }
      iterations += 1/2;
    }, 50);
  }

  return (
    <button className={className} onClick={handleClick || null} onMouseEnter={handleMouseEnter} type={type || null} disabled={disabled || null}>
      <h2 className="start-h2">{buttonText}</h2>
    </button>
  )
}
