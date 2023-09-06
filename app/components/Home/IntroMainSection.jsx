import FadeIn from "../Work/rows/FadeIn"
import { useInView } from "react-intersection-observer";

import Gallery2 from "../Work/Gallery2"
import { useEffect } from "react";

export default function IntroMainSection() {
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log(inView)
    console.log(ref.current)
    if (inView && ref.current) {
      ref.current.scrollIntoView({
        behaviour: "smooth",
        block: "end"
      })
    }
  }, [inView, ref.current])

  return (
    <>
      <div ref={ref}>
      <div className="div1">
        <Gallery2 />
      </div>
      <div className="div2">
        <div className="text-wrapper">
          <FadeIn>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo.
            </p>
            </FadeIn>
            <FadeIn>
          <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <FadeIn>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur?
          </p>
          </FadeIn>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          </FadeIn>
        </div>
      </div>
      </div>
   </>
  )
}
