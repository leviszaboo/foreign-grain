import AboutMePage from "@/app/components/AboutMe/AboutMePage"
import Menu from "@/app/components/Menu/Menu/Menu"
import MemorizePosition from "@/app/components/Work/MemorizePosition"

import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { cache } from "react";
import { db } from "@/app/firebase/config";

export const revalidate = 0

const fetchParagraphs = cache(async (ref) => {
  try {
    const querySnapshot = await getDocs(query(collection(db, ref), orderBy("createdAt", "desc")));
    
    const docs = querySnapshot.docs.map((doc) => doc.data());
    return docs;
  } catch (error) {
    return []; 
  }
})

const sources = [
  { source: '/Media/horizontal-final/patta-hor.jpeg', width: 74 },
  { source: '/Media/vertical-final/tno-vert.jpeg', width: 85 },
  { source: '/Media/vertical-final/patta-vert.jpeg', width: 71 },
  { source: '/Media/horizontal-final/pond.jpeg', width: 78 },
  { source: '/Media/vertical-final/mask.jpeg', width: 90 },
  { source: '/Media/gallery/blockparty.jpeg', width: 84 },
]

export default async function AboutMe() {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/about-me/paragraphs`;
  const paragraphs = await fetchParagraphs(ref);

  return (
    <>
      <MemorizePosition>
        <Menu/>
        <AboutMePage paragraphs={paragraphs} sources={sources}/>
      </MemorizePosition>
    </>
  )
}
