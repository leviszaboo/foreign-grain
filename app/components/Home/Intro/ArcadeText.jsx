import BlinkingArrows from "./BlinkingArrows"

export default function ArcadeText({ text, className }) {
  return (
    <>
      <h2 className={`start-scroll ${className}`}>
        <BlinkingArrows count={2} down={false} left={false}/>
          &nbsp;{text}&nbsp;
        <BlinkingArrows count={2} down={false} left={true}/>
      </h2>
    </>
  )
}
