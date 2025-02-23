import Carousel from "@/app/components/Work/Carousel/Carousel";
import { fetchDoc } from "@/app/service/fetchDocs";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import Menu from "@/app/components/Menu/Menu/Menu";
import SmallHeader from "@/app/components/Header/SmallHeader";

export const revalidate = 0;

export default async function ProjectPage({ params }) {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/gallery/digital/${params.project}`;
  const doc = await fetchDoc(ref);

  return (
    <MemorizePosition>
      <SmallHeader showSwitcher={false} useMenuButtonAsNavigator={true} />
      <Carousel post={doc} />
      <Menu />
    </MemorizePosition>
  );
}
