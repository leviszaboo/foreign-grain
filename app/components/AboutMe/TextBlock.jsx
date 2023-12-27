import Paragraph from "./Paragraph"

export default function TextBlock({ paragraphs }) {
  return (
    <div className="aboutme-text-wrapper">
      {paragraphs.map((paragraph, i) => {
        return (
          <Paragraph text={paragraph} key={i} paragraphNumber={i}/>
        )
      })}
    </div>
  )
}
