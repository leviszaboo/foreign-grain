import AboutMePage from "@/app/components/AboutMe/AboutMePage";
import Menu from "@/app/components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import { fetchDocs } from "@/app/service/fetchDocs";
import { fetchFeaturedBlurDataUrls } from "@/app/utils/getBase64";

export const revalidate = 0;

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Luigi Simiani, a professional photographer based in Amsterdam. Discover my journey, approach, and passion for photography.",
  openGraph: {
    title: "About Luigi Simiani | Professional Photographer",
    description:
      "Learn more about Luigi Simiani, a professional photographer based in Amsterdam.",
    url: "https://luigisimiani.com/about-me",
  },
};

export default async function AboutMe() {
  const paragraphRef = `${process.env.NEXT_PUBLIC_USER_UID}/about-me/paragraphs`;
  const sourcesRef = `${process.env.NEXT_PUBLIC_USER_UID}/featured/about-me`;
  const paragraphs = await fetchDocs(paragraphRef);
  const sources = await fetchDocs(sourcesRef);

  const blurData = await fetchFeaturedBlurDataUrls(sources);

  sources.forEach((source, i) => (source.base64 = blurData[i]));

  return (
    <>
      <MemorizePosition>
        <Menu />
        <AboutMePage paragraphs={paragraphs.reverse()} sources={sources} />
      </MemorizePosition>
    </>
  );
}
