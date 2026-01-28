import Menu from "@/app/components/menu/Menu";
import HeroSlideshow from "@/app/components/home/HeroSlideshow";
import HomeFlowers from "@/app/components/home/HomeFlowers";
import FeaturedWork from "@/app/components/home/FeaturedWork";
import {
  fetchDoc,
  fetchGalleryById,
  fetchFeaturedGalleriesWithLayout,
} from "@/lib/content";

export const revalidate = 3600;

export default async function Home() {
  const featured = await fetchDoc("featured");
  const quotesData = await fetchDoc("quotes");
  const featuredGalleries = await fetchFeaturedGalleriesWithLayout();

  // Get hero images from gallery references
  const galleryIds = (featured.galleries as string[]) || [];
  const heroImages: { url: string }[] = [];

  for (const id of galleryIds) {
    const gallery = await fetchGalleryById(id);
    if (gallery) {
      const url = gallery.coverPhoto || gallery.imageUrls?.[0];
      if (url) {
        heroImages.push({ url });
      }
    }
  }

  // Get quotes
  const quotes = (quotesData.quotes as { text: string; author?: string }[]) || [];

  return (
    <>
      <Menu />
      <HeroSlideshow images={heroImages} />
      <HomeFlowers />
      <FeaturedWork galleries={featuredGalleries} quotes={quotes} />
    </>
  );
}
