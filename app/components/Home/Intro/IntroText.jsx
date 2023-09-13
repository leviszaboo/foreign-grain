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
    useRef(),
    useRef(),
  ];

  useEffect(() => {
    let animationTimeouts = []; 
    setButtonDisabled(true)

    if (isButtonClicked) {
      const animationTimings = [750, 1700, 2650, 3600, 4550]; 

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
            }, i > 1 ? 60 : 70);
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
        <span className="new-line" data-value="What?" ref={textRefs[0]}></span>
        <span className="new-line" data-value="Where?" ref={textRefs[1]}></span>
        <span className="new-line" data-value="Who the fuck is" ref={textRefs[2]}></span>
        <span className="new-line" data-value="Luigi Simiani?" ref={textRefs[3]}></span>
      </h1>
    </>
  );
}


