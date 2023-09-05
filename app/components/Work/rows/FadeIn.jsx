import { animated, useInView } from "@react-spring/web";

export default function FadeIn({ children }) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    }),
    {
      rootMargin: "-6% 0%"
    }
  )

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  )
}