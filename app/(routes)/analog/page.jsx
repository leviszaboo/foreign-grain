import "@/app/styles/work.css";
import Menu from "../../components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import Gallery from "@/app/components/Work/Gallery/Gallery";
import { fetchDocs } from "@/app/service/fetchDocs";
import SmallHeader from "@/app/components/Header/SmallHeader";

export const revalidate = 0;

export default async function Analog() {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/gallery/analog`;
  const docs = await fetchDocs(ref);

  return (
    <MemorizePosition>
      <SmallHeader showSwitcher={true} />
      <Gallery docs={docs} />
      <Menu />
    </MemorizePosition>
  );
}
