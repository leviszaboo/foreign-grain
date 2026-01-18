import Menu from "@/app/components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import { fetchGalleries } from "@/app/lib/content";
import GalleryGrid from "@/app/components/Gallery/GalleryGrid";

export const revalidate = 3600;

export const metadata = {
  title: "Work | Luigi Simiani",
  description: "Explore Luigi Simiani's photography portfolio featuring analog and digital work.",
  openGraph: {
    title: "Work | Luigi Simiani Photography",
    description: "Explore Luigi Simiani's photography portfolio.",
    url: "https://luigisimiani.com/gallery",
  },
};

export default async function GalleryPage() {
  const galleries = await fetchGalleries();

  return (
    <MemorizePosition>
      <GalleryGrid galleries={galleries} />
      <Menu />
    </MemorizePosition>
  );
}
