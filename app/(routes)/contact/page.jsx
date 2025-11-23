import ContactPage from "@/app/components/Contact/ContactPage";
import Menu from "@/app/components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import { fetchDoc } from "@/app/service/fetchDocs";

export const revalidate = 0;

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Luigi Simiani for photography inquiries, collaborations, or bookings. Based in Amsterdam and available for projects worldwide.",
  openGraph: {
    title: "Contact Luigi Simiani | Photography Inquiries",
    description:
      "Get in touch with Luigi Simiani for photography inquiries and collaborations.",
    url: "https://luigisimiani.com/contact",
  },
};

export default async function Contact() {
  const ref = `${process.env.NEXT_PUBLIC_USER_UID}/contact-info`;
  const contactInfo = await fetchDoc(ref);

  return (
    <>
      <Menu />
      <MemorizePosition>
        <ContactPage contactInfo={contactInfo} />
      </MemorizePosition>
    </>
  );
}
