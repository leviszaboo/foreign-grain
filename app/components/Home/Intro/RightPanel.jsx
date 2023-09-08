import { useRef, useEffect } from "react"
import { useInView } from "framer-motion";

import FadeIn from "../../Work/rows/FadeIn"
import ArcadeText from "./ArcadeText";


export default function RightPanel() {

  const ref = useRef(null)
  const inView = useInView(ref);

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      })
    }
  }, [inView, ref.current])

  return (
    <div className="div2">
      <div className="text-wrapper">
        <FadeIn>
          <p ref={ref}>
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
        </FadeIn>
      </div>
      <ArcadeText text={"contact me"} />
    </div>
  )
}

