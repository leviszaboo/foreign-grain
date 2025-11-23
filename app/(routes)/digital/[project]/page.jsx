import Carousel from "@/app/components/Work/Carousel/Carousel";
import { fetchDoc } from "@/app/service/fetchDocs";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import Menu from "@/app/components/Menu/Menu/Menu";
import { fetchBlurDataUrls } from "@/app/utils/getBase64";

export const revalidate = 0;

export default async function ProjectPage({ params }) {
  const { project } = await params;
  const ref = `${process.env.NEXT_PUBLIC_USER_UID}/gallery/digital/${project}`;
  const doc = await fetchDoc(ref);

  const urls = await fetchBlurDataUrls(doc);

  doc.base64 = urls;

  return (
    <MemorizePosition>
      <Carousel post={doc} />
      <Menu />
    </MemorizePosition>
  );
}
