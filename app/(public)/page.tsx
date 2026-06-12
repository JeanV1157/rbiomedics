import BrandsCarousel from "@/components/Home/brandsCarousel";
import ClientsCarousel from "@/components/Home/clientsUs";
import FeaturedProducts from "@/components/Home/featuredProducts";
import HeroBanner from "@/components/Home/herobanner";
import NewsCarousel from "@/components/Home/newsCarousel";
import ServicesSection from "@/components/Home/servicesSection";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    image: "/images/products/microscopio.jpg",
    title: "Probetas",
    description: "B-292PLI OPTIKA",
    buttonText: "Leer más",
  },
  {
    id: 2,
    image: "/images/products/microscopio.jpg",
    title: "Microscopio Binocular",
    description: "B-150D-BRPL OPTIKA",
    price: "120",
    buttonText: "Leer más",
  },
  {
    id: 3,
    image: "/images/products/microscopio.jpg",
    title: "Centrifuga",
    description: "B-159 OPTIKA",
    price: "120",
    buttonText: "Leer más",
  },
  {
    id: 4,
    image: "/images/products/microscopio.jpg",
    title: "Jean",
    description: "B-159 OPTIKA",

    buttonText: "Leer más",
  },
  {
    id: 5,
    image: "/images/products/microscopio.jpg",
    title: "Frank",
    description: "B-159 OPTIKA",
    price: "120",
    buttonText: "Leer más",
  },
];

const BANNER_DATA = {
  image: "",
  title: "OPTIKA\nMICROSCOPES\nITALY",
  subtitle: "Representantes en Perú",
  buttonText: "VER MÁS",
};

const BRANDS = [
  {
    id: 1,
    image: "/images/brands/contec.jpg",
    name: "CONTEC",
  },
  {
    id: 2,
    image: "/images/brands/edan.jpg",
    name: "EDAN",
  },
  {
    id: 3,
    image: "/images/brands/fujifilm.png",
    name: "FujiFilm",
  },
  {
    id: 4,
    image: "/images/brands/hannaInstruments.png",
    name: "Hanna Intruments",
  },
  {
    id: 5,
    image: "/images/brands/lovibond.jpeg",
    name: "Brand 5",
  },
  {
    id: 6,
    image: "/images/brands/mindray.png",
    name: "Mindray",
  },
  {
    id: 7,
    image: "/images/brands/nipro.webp",
    name: "Brand 7",
  },
  {
    id: 8,
    image: "/images/brands/ohaus.png",
    name: "Brand 8",
  },
  {
    id: 9,
    image: "/images/brands/Philips.png",
    name: "Philips",
  },
  {
    id: 10,
    image: "/images/brands/Dlap.jpg",
    name: "Dlap",
  },
];

const news = [
  {
    id: 1,
    image: "/images/news/novedad1.jpeg",
  },
  {
    id: 2,
    image: "/images/news/novedad2.jpeg",
  },
  {
    id: 3,
    image: "/images/news/novedad3.jpeg",
  },
];

const CLIENTS = [
  {
    id: 1,
    image: "/images/clients/essalud1.png",
    name: "Essalud",
  },
  {
    id: 2,
    image: "/images/clients/gorehco.jpeg",
    name: "Gobierno Regional Huánuco",
  },
  {
    id: 3,
    image: "/images/clients/molina.png",
    name: "Universidad Nacional Agraria La Molina",
  },
  {
    id: 4,
    image: "/images/clients/redsaluddosdemayo.jpeg",
    name: "Red de salud Dos de Mayo",
  },
  {
    id: 5,
    image: "/images/clients/redsaludpachitea.jpeg",
    name: "Red de Salud Pachitea",
  },
  {
    id: 6,
    image: "/images/clients/unheval.jpeg",
    name: "UNHEVAL",
  },
  {
    id: 7,
    image: "/images/clients/uni.png",
    name: "Universidad",
  },
];

export default function Home() {
  return (
    <>
      <HeroBanner />

      <ServicesSection />

      <FeaturedProducts
        sectionTitle="Productos Destacados"
        products={FEATURED_PRODUCTS}
        bannerImage={BANNER_DATA.image}
        bannerTitle={BANNER_DATA.title}
        bannerSubtitle={BANNER_DATA.subtitle}
        bannerButtonText={BANNER_DATA.buttonText}
      />
      <BrandsCarousel title="Nuestros Socios Tecnológicos" brands={BRANDS} />

      <NewsCarousel title="Novedades" items={news} />

      <ClientsCarousel title="Nuestros Clientes" brands={CLIENTS} />
    </>
  );
}
