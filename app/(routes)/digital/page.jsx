import '@/app/styles/work.css'
import Header from '@/app/components/Header/Header';
import Menu from "../../components/Menu/Menu/Menu"
import MemorizePosition from '@/app/components/Work/MemorizePosition';

import { getDocs, query, collection, orderBy, doc } from "firebase/firestore";
import { cache } from "react";
import { db } from "@/app/firebase/config";
import Carousel from '@/app/components/Work/Carousel/Carousel';
import WorkHeader from '@/app/components/Header/WorkHeader';

export const revalidate = 0

const fetchDocs = cache(async (ref) => {
  try {
    const querySnapshot = await getDocs(query(collection(db, ref), orderBy("createdAt", "desc")));
    
    const docs = querySnapshot.docs.map((doc) => {
      const { createdAt, ...data } = doc.data();

      return data
    });
    
    return docs;
  } catch (error) {
    return []; 
  }
})

export default async function Digital() {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/gallery/digital`;
  const docs = await fetchDocs(ref)
  const pictures = docs.map(doc => doc.imageUrls[0])
  return(
    <MemorizePosition>
      <WorkHeader />
      <Carousel posts={docs} />
      <Menu />
    </MemorizePosition>
  )
}