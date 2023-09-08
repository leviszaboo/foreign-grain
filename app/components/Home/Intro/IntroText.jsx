import { useEffect, useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";

import { useStartButtonStore } from "@/app/hooks/useStartButton";

export default function IntroText() {

  const { isButtonClicked } = useStartButtonStore();

  const textRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  for (let i = 0; i < textRefs.length; i++) {
    useEffect(() => {
      if (isButtonClicked && textRefs[i].current) {
        const ref = textRefs[i];
        let text = ref.current.getAttribute("data-value");
        let iterations = 0;

        setTimeout(() => {
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
        }, 750 + 950 * i);
      }
    }, [isButtonClicked]);
  }

  return (
    <>
      <h1 className="intro-text">
          <span className="new-line" ref={textRefs[0]} data-value="What?"></span>
          <span className="new-line" data-value="Where?" ref={textRefs[1]}></span>
          <span className="new-line" data-value="Who the fuck is" ref={textRefs[2]}></span>
          <span className="new-line" data-value="Luigi Simiani?" ref={textRefs[3]}></span>
      </h1>
    </>
  )
}
