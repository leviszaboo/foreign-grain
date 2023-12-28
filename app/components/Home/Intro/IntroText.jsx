import { useEffect, useState } from "react";
import { useStartButtonStore } from "@/app/hooks/useStartButtonStore";
import { useMenuStore } from "@/app/hooks/useMenuStore";

export default function IntroText() {
  const { isButtonClicked } = useStartButtonStore();
  const { setButtonDisabled } = useMenuStore();

  const texts = ["Real People,", "Raw Emotions,", "Rare Moments."];
  const [animatedTexts, setAnimatedTexts] = useState(Array(texts.length).fill(""));

  useEffect(() => {
    let animationTimeouts = [];
    setButtonDisabled(true);

    if (isButtonClicked) {
      const animationTimings = [750, 1900, 3050];

      texts.forEach((text, i) => {
        const timeoutId = setTimeout(() => {
          let iterations = 0;

          const interval = setInterval(() => {
            setAnimatedTexts((prevTexts) =>
              prevTexts.map((prevText, index) =>
                index === i ? text.slice(0, iterations) : prevText
              )
            );

            iterations++;

            if (iterations > text.length) {
              clearInterval(interval);
            }
          }, i > 1 ? 70 : 80);

          animationTimeouts.push(timeoutId);
        }, animationTimings[i]);
      });
    }

    setButtonDisabled(false);

    return () => {
      animationTimeouts.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
    };
  }, [isButtonClicked]);

  return (
    <>
      <h1 className="intro-text">
        {animatedTexts.map((animatedText, index) => (
          <span key={index} className="new-line">
            {animatedText}
          </span>
        ))}
      </h1>
    </>
  );
}



