import ContactPage from "@/app/components/Contact/ContactPage";
import Header from "@/app/components/Header/Header";
import SmallHeader from "@/app/components/Header/SmallHeader";
import Menu from "@/app/components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import { fetchDoc } from "@/app/service/fetchDocs";

export const revalidate = 0;

export default async function Contact() {
  const ref = `${process.env.NEXT_PUBLIC_USER_UID}/contact-info`;
  const contactInfo = await fetchDoc(ref);

  return (
    <>
      <Menu />
      <SmallHeader />
      <MemorizePosition>
        <ContactPage contactInfo={contactInfo} />
      </MemorizePosition>
    </>
  );
}
