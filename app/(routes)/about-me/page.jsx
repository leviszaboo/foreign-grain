import AboutMePage from "@/app/components/AboutMe/AboutMePage";
import Header from "@/app/components/Header/Header";
import SmallHeader from "@/app/components/Header/SmallHeader";
import Menu from "@/app/components/Menu/Menu/Menu"
import MemorizePosition from "@/app/components/Work/MemorizePosition"
import { fetchDocs } from "@/app/service/fetchDocs";

export const revalidate = 0

export default async function AboutMe() {
  const paragraphRef = `${process.env.NEXT_PUBLIC_USER_EMAIL}/about-me/paragraphs`;
  const sourcesRef = `${process.env.NEXT_PUBLIC_USER_EMAIL}/featured/about-me`;
  const paragraphs = await fetchDocs(paragraphRef);
  const sources = await fetchDocs(sourcesRef);

  return (
    <>
      <MemorizePosition>
        <SmallHeader />
        <Menu/>
        <AboutMePage paragraphs={paragraphs.reverse()} sources={sources}/>
      </MemorizePosition>
    </>
  )
}
