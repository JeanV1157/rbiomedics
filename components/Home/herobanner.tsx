import { getActiveHeroImagesCached } from "@/services/heroImage.service";
import HeroBannerClient from "./heroBannerClient";

export default async function HeroBanner() {
  const images = await getActiveHeroImagesCached();

  return <HeroBannerClient images={images.map((img) => img.image_url)} />;
}
