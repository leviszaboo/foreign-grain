import '@/app/styles/work.css'

import Menu from "../../components/Menu/Menu/Menu"
import MemorizePosition from '@/app/components/Work/MemorizePosition';

import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { cache } from "react";
import { db } from "@/app/firebase/config";
import Gallery from '@/app/components/Work/Gallery/Gallery';

export const revalidate = 0

const fetchDocs = cache(async (ref) => {
  try {
    const querySnapshot = await getDocs(query(collection(db, ref), orderBy("createdAt", "desc")));
    
    const docs = querySnapshot.docs.map((doc) => doc.data());
    
    return docs;
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    return []; 
  }
})

export default async function Analog() {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/gallery/analog`;
  const docs = await fetchDocs(ref)

  return(
    <MemorizePosition>
      <Gallery docs={docs}/>
      <Menu />
    </MemorizePosition>
  )
}