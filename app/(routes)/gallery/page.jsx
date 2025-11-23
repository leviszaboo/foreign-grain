import "@/app/styles/work.css";
import Menu from "../../components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import Gallery from "@/app/components/Work/Gallery/Gallery";
import { fetchDocs } from "@/app/service/fetchDocs";
import { fetchBlurDataUrls } from "@/app/utils/getBase64";

export const revalidate = 0;

export const metadata = {
  title: "Analog Photography Gallery",
  description:
    "Explore Luigi Simiani's analog photography gallery featuring stunning film photography, street photography, and editorial work shot on analog film.",
  openGraph: {
    title: "Analog Photography Gallery | Luigi Simiani",
    description:
      "Explore Luigi Simiani's analog photography gallery featuring stunning film photography.",
    url: "https://luigisimiani.com/gallery",
  },
};

export default async function Analog() {
  const ref = `${process.env.NEXT_PUBLIC_USER_UID}/gallery/analog`;
  const docs = await fetchDocs(ref);

  const blurDataUrls = await Promise.all(
    docs.map((doc) => fetchBlurDataUrls(doc)),
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
