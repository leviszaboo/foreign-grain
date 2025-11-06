import IntroPanel from "./IntroPanel";

export default function IntroMainSection() {
  return (
    <div className="mainsection-wrapper">
      <IntroPanel type="analog" />
      <IntroPanel type="digital" />
    </div>
  );
}
