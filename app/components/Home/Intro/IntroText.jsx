import { useEffect, useRef } from "react";
import { useStartButtonStore } from "@/app/hooks/useStartButtonStore";
import { useMenuStore } from "@/app/hooks/useMenuStore";

export default function IntroText() {
  const { isButtonClicked } = useStartButtonStore();
  const { setButtonDisabled } = useMenuStore();

  const textRefs = [
    useRef(),
    useRef(),
    useRef(),
  ];

  useEffect(() => {
    let animationTimeouts = []; 
    setButtonDisabled(true)

    if (isButtonClicked) {
      const animationTimings = [750, 1900, 3050]; 

      textRefs.forEach((ref, i) => {
        if (ref.current) {
          const text = ref.current.getAttribute("data-value");
          let iterations = 0;

          const timeoutId = setTimeout(() => {
            let interval = setInterval(() => {
              ref.current.innerText = text
                .split("")
                .map((letter, index) => {
                  if (index < iterations) {
                    return letter;
                  } else {
                    return " ";
                  }
                })
                .join("");

              iterations++;

              if (iterations > text.length) {
                clearInterval(interval);
              }
            }, i > 1 ? 70 : 80);
          }, animationTimings[i]);

          animationTimeouts.push(timeoutId); 
        }
      });
    }
    setButtonDisabled(false)

    return () => {
      animationTimeouts.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
    };
  }, [isButtonClicked]);

  return (
    <>
      <h1 className="intro-text">
        <span className="new-line" data-value="Real People," ref={textRefs[0]}></span>
        <span className="new-line" data-value="Raw Emotions," ref={textRefs[1]}></span>
        <span className="new-line" data-value="Rare Moments." ref={textRefs[2]}></span>
      </h1>
    </>
  );
}


