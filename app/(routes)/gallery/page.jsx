import "@/app/styles/work.css";
import Menu from "../../components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import Gallery from "@/app/components/Work/Gallery/Gallery";
import { fetchDocs } from "@/app/service/fetchDocs";
import { fetchBlurDataUrls } from "@/app/utils/getBase64";

export const revalidate = 0;

export default async function Analog() {
  const ref = `${process.env.NEXT_PUBLIC_USER_UID}/gallery/analog`;
  const docs = await fetchDocs(ref);

  const blurDataUrls = await Promise.all(
    docs.map(async (doc) => {
      return await fetchBlurDataUrls(doc);
    }),
  );

  blurDataUrls.forEach((base64, index) => {
    docs[index].base64 = base64;
  });

  return (
    <MemorizePosition>
      <Gallery docs={docs} />
      <Menu />
    </MemorizePosition>
  );
}
