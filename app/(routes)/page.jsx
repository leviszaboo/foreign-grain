
import "@/app/styles/mainpage.css";
import '@/app/styles/work.css'

import Menu from "../components/Menu/Menu/Menu.jsx";
import Slideshow from "../components/Home/Slideshow/Slideshow.jsx";
import Startbutton from "../components/Home/StartButton/StartButton.jsx";
import Tagline from "../components/Home/Tagline/Tagline.jsx";
import Footer from "../components/Footer.jsx";
import Intro from "../components/Home/Intro/Intro.jsx";
import HomeFlowers from "../components/Home/Flowers/HomeFlowers.jsx";
import ShowSlideshow from "../components/ShowSlideshow.jsx";
import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { cache } from "react";
import { db } from "@/app/firebase/config";

export const revalidate = 0;

const fetchImageUrls = cache(async (ref) => {
  try {
    const querySnapshot = await getDocs(query(collection(db, ref), orderBy("createdAt", "desc")));
    
    const urls = querySnapshot.docs.map((doc) => doc.data().url);
    
    return urls;
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    return []; 
  }
})

export default async function Home() {
  const verticalRef = `${process.env.NEXT_PUBLIC_USER_EMAIL}/featured/vertical`;
  const horizontalRef = `${process.env.NEXT_PUBLIC_USER_EMAIL}/featured/horizontal`;

  const verticalUrls = await fetchImageUrls(verticalRef);
  const horizontalUrls = await fetchImageUrls(horizontalRef); 

    return (
      <>
        <Menu />
        <ShowSlideshow>
          <Slideshow verticalUrls={verticalUrls} horizontalUrls={horizontalUrls}/>
          <Tagline />
          <Startbutton />
        </ShowSlideshow>
        <HomeFlowers />
        <Intro />
        <Footer />
      </>
    );
}