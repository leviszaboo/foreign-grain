import "@/app/styles/work.css";
import Menu from "../../components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import Gallery from "@/app/components/Work/Gallery/Gallery";
import { fetchDocs } from "@/app/service/fetchDocs";
import SmallHeader from "@/app/components/Header/SmallHeader";
import { getBase64 } from "@/app/utils/getBase64";

export const revalidate = 0;

export default async function Analog() {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/gallery/analog`;
  const docs = await fetchDocs(ref);

  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i];
    const placeholderSrc = `${doc.imageUrls[0].split("?")[0]}?tr=h-100,w-100`;
    const base64_1 = await getBase64(placeholderSrc);
    doc.base64_1 = base64_1;
    if (doc.imageUrls[1]) {
      const placeholderSrc_2 = `${doc.imageUrls[1].split("?")[0]}?tr=h-100,w-100`;
      const base64_2 = await getBase64(placeholderSrc_2);
      doc.base64_2 = base64_2;
    }
  }

  return (
    <MemorizePosition>
      <SmallHeader showSwitcher={true} />
      <Gallery docs={docs} />
      <Menu />
    </MemorizePosition>
  );
}
