import Carousel from "@/app/components/Work/Carousel/Carousel";
import { fetchDoc } from "@/app/service/fetchDocs";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import Menu from "@/app/components/Menu/Menu/Menu";
import SmallHeader from "@/app/components/Header/SmallHeader";
import { getBase64 } from "@/app/utils/getBase64";

export const revalidate = 0;

export default async function ProjectPage({ params }) {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/gallery/digital/${params.project}`;
  const doc = await fetchDoc(ref);

  for (let i = 0; i < doc.imageUrls.length; i++) {
    doc.base64 = doc.base64 || [];
    const placeholderSrc = `${doc.imageUrls[i].split("?")[0]}?tr=h-100,w-100`;
    const base64 = await getBase64(placeholderSrc);
    doc.base64.push(base64);
  }

  return (
    <MemorizePosition>
      <SmallHeader showSwitcher={false} useMenuButtonAsNavigator={true} />
      <Carousel post={doc} />
      <Menu />
    </MemorizePosition>
  );
}
