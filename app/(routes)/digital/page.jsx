import "@/app/styles/work.css";
import Menu from "../../components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import { fetchDocs } from "@/app/service/fetchDocs";
import SmallHeader from "@/app/components/Header/SmallHeader";
import ProjectGrid from "@/app/components/Work/Grid/ProjectGrid";

export const revalidate = 0;

export default async function Digital() {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/gallery/digital`;
  const docs = await fetchDocs(ref);

  return (
    <MemorizePosition>
      <SmallHeader showSwitcher={true} />
      <ProjectGrid docs={docs} />
      <Menu />
    </MemorizePosition>
  );
}
