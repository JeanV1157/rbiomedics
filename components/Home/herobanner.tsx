import Image from "next/image";

const HERO_IMAGE = "/images/portada.jpeg";

export default function HeroBanner() {
  return (
    <section className="w-full">
      <Image
        src={HERO_IMAGE}
        alt="Portada RBIOMEDICS"
        width={1920}
        height={800}
        priority
        className="w-full h-auto"
      />
    </section>
  );
}
