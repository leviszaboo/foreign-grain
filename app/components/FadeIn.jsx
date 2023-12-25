import { animated, useInView } from "@react-spring/web";

export default function FadeIn({ children, className }) {
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
      rootMargin: "-18% 0%"
    }
  )

  return (
    <animated.div ref={ref} style={springs} className={className}>
      {children}
    </animated.div>
  )
}