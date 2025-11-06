import "@/app/styles/mainpage.css";
import "@/app/styles/work.css";
import Menu from "../components/Menu/Menu/Menu.jsx";
import Slideshow from "../components/Home/Slideshow/Slideshow.jsx";
import Startbutton from "../components/Home/StartButton/StartButton.jsx";
import Intro from "../components/Home/Intro/Intro.jsx";
import HomeFlowers from "../components/Home/Flowers/HomeFlowers.jsx";
import ShowSlideshow from "../components/ShowSlideshow.jsx";
import { fetchDocs, fetchUrls } from "../service/fetchDocs.js";
import { fetchFeaturedBlurDataUrls } from "../utils/getBase64.js";

export const revalidate = 0;

export default async function Home() {
  const verticalRef = `${process.env.NEXT_PUBLIC_USER_UID}/featured/vertical`;
  const horizontalRef = `${process.env.NEXT_PUBLIC_USER_UID}/featured/horizontal`;
  const introRef = `${process.env.NEXT_PUBLIC_USER_UID}/featured/intro`;

  const verticalUrls = await fetchUrls(verticalRef);
  const horizontalUrls = await fetchUrls(horizontalRef);
  const introDocs = await fetchDocs(introRef);

  const docs = introDocs.slice(-5) || introDocs;

  const blurData = await fetchFeaturedBlurDataUrls(docs);

  docs.forEach((doc, i) => (doc.base64 = blurData[i]));

  return (
    <>
      <Menu />
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
