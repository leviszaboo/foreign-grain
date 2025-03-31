import "@/app/styles/mainpage.css";
import "@/app/styles/work.css";
import Header from "../components/Header/Header.jsx";
import Menu from "../components/Menu/Menu/Menu.jsx";
import Slideshow from "../components/Home/Slideshow/Slideshow.jsx";
import Startbutton from "../components/Home/StartButton/StartButton.jsx";
import Intro from "../components/Home/Intro/Intro.jsx";
import HomeFlowers from "../components/Home/Flowers/HomeFlowers.jsx";
import ShowSlideshow from "../components/ShowSlideshow.jsx";
import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { cache } from "react";
import { db } from "@/app/firebase/config";
import { fetchDocs } from "../service/fetchDocs.js";
import { fetchBlurDataUrls } from "../utils/getBase64.js";

export const revalidate = 0;

const fetchImageUrls = cache(async (ref) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, ref), orderBy("createdAt", "desc")),
    );

    const urls = querySnapshot.docs.map((doc) => doc.data().url);

    return urls;
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    return [];
  }
});

export default async function Home() {
  const verticalRef = `${process.env.NEXT_PUBLIC_USER_UID}/featured/vertical`;
  const horizontalRef = `${process.env.NEXT_PUBLIC_USER_UID}/featured/horizontal`;
  const introRef = `${process.env.NEXT_PUBLIC_USER_UID}/featured/intro`;

  const verticalUrls = await fetchImageUrls(verticalRef);
  const horizontalUrls = await fetchImageUrls(horizontalRef);
  const introDocs = await fetchDocs(introRef);

  const docs = introDocs.slice(-5) || introDocs;

  const blurData = await fetchBlurDataUrls(docs, true);

  docs.forEach((doc, i) => (doc.base64 = blurData[i]));

  return (
    <>
      <Menu />
      <Header />
      <ShowSlideshow>
        <Slideshow
          verticalUrls={verticalUrls}
          horizontalUrls={horizontalUrls}
        />
        <Startbutton />
      </ShowSlideshow>
      <HomeFlowers />
      <Intro docs={docs} />
    </>
  );
}
