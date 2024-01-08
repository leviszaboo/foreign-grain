import ContactPage from "@/app/components/Contact/ContactPage";
import Menu from "@/app/components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";

import { getDoc, doc } from "firebase/firestore";
import { cache } from "react";
import { db } from "@/app/firebase/config";

export const revalidate = 0;

const fetchContactData = cache(async (ref) => {
  try {
    const querySnapshot = await getDoc(doc(db, ref));
    
    if (querySnapshot.exists()) {
      const document = querySnapshot.data();
      return document;
    } else {
      return {}
    }
  } catch (error) {
    return {}; 
  }
})

export default async function Contact() {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/contact-info`;
  const contactInfo = await fetchContactData(ref);

  return (
    <>
      <Menu />
      <MemorizePosition>
        <ContactPage contactInfo={contactInfo} />
      </MemorizePosition>
    </>
  )
}
