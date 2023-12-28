import IntroAnalogPanel from "./IntroAnalogPanel";
import IntroDigitalPanel from "./IntroDigitalPanel";


export default function IntroMainSection() {

  return (
    <>
      <div className="mainsection-wrapper">
        <IntroAnalogPanel />
        <IntroDigitalPanel />
      </div>
   </>
  )
}
