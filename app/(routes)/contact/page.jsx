import ContactPage from "@/app/components/Contact/ContactPage";
import Menu from "@/app/components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";

export default function Contact() {
  return (
    <>
      <Menu />
      <MemorizePosition>
        <ContactPage />
      </MemorizePosition>
    </>
  )
}
