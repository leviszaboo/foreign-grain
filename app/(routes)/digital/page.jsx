import "@/app/styles/work.css";
import Menu from "../../components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import { fetchDocs } from "@/app/service/fetchDocs";
import ProjectGrid from "@/app/components/Work/Grid/ProjectGrid";

export const revalidate = 0;
export const maxDuration = 60;

export const metadata = {
  title: "Digital Portfolio",
  description:
    "Browse Luigi Simiani's digital photography portfolio featuring fashion, editorial, and commercial photography projects.",
  openGraph: {
    title: "Digital Portfolio | Luigi Simiani Photography",
    description:
      "Browse Luigi Simiani's digital photography portfolio featuring fashion, editorial, and commercial work.",
    url: "https://luigisimiani.com/digital",
  },
};

export default async function Digital() {
  const ref = `${process.env.NEXT_PUBLIC_USER_UID}/gallery/digital`;
  const docs = await fetchDocs(ref);

  return (
    <MemorizePosition>
      <ProjectGrid docs={docs} />
      <Menu />
    </MemorizePosition>
  );
}
