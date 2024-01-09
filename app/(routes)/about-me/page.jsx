import AboutMePage from "@/app/components/AboutMe/AboutMePage"
import Menu from "@/app/components/Menu/Menu/Menu"
import MemorizePosition from "@/app/components/Work/MemorizePosition"
import { fetchDocs } from "@/app/service/fetchDocs";

export const revalidate = 0

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
  const paragraphs = await fetchDocs(ref);

  return (
    <>
      <MemorizePosition>
        <Menu/>
        <AboutMePage paragraphs={paragraphs.reverse()} sources={sources}/>
      </MemorizePosition>
    </>
  )
}
