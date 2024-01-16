import '@/app/styles/work.css'
import Header from '@/app/components/Header/Header';
import Menu from "../../components/Menu/Menu/Menu"
import MemorizePosition from '@/app/components/Work/MemorizePosition';
import Gallery from '@/app/components/Work/Gallery/Gallery';
import { fetchDocs } from '@/app/service/fetchDocs';
import WorkHeader from '@/app/components/Header/WorkHeader';

export const revalidate = 0

export default async function Analog() {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/gallery/analog`;
  const docs = await fetchDocs(ref)

  return(
    <MemorizePosition>
      <WorkHeader />
      <Gallery docs={docs}/>
      <Menu />
    </MemorizePosition>
  )
}