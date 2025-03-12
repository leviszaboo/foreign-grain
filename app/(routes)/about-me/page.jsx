import AboutMePage from "@/app/components/AboutMe/AboutMePage";
import SmallHeader from "@/app/components/Header/SmallHeader";
import Menu from "@/app/components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import { fetchDocs } from "@/app/service/fetchDocs";
import { fetchBlurDataUrls } from "@/app/utils/getBase64";

export const revalidate = 0;

export default async function AboutMe() {
  const paragraphRef = `${process.env.NEXT_PUBLIC_USER_EMAIL}/about-me/paragraphs`;
  const sourcesRef = `${process.env.NEXT_PUBLIC_USER_EMAIL}/featured/about-me`;
  const paragraphs = await fetchDocs(paragraphRef);
  const sources = await fetchDocs(sourcesRef);

  const blurData = await fetchBlurDataUrls(sources, true);

  sources.forEach((source, i) => (source.base64 = blurData[i]));

  return (
    <>
      <MemorizePosition>
        <SmallHeader />
        <Menu />
        <AboutMePage paragraphs={paragraphs.reverse()} sources={sources} />
      </MemorizePosition>
    </>
  );
}
