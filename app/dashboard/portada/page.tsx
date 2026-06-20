import { getHeroImages } from "@/services/hero.service";
import HeroClient from "./heroClient";

export default async function Page() {
  const heroImages = await getHeroImages();

  return <HeroClient initialData={heroImages} />;
}
