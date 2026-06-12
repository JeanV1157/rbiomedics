import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: 1,

    title: "MICROSCOPIO OPTIKA B-382PHI-ALC",

    description:
      "Microscopio binocular de contraste de fase, campo claro y campo oscuro.",

    longDescription:
      "Microscopio binocular de contraste de fase, campo claro y campo oscuro, equipado con objetivos IOS W-PLAN corregidos al infinito, platina sin bastidor y tecnología X-LED3 con ALC (Automatic Light Control), ofreciendo imágenes nítidas y de alta calidad para aplicaciones profesionales.",

    image: "/images/products/microscopio.jpg",

    categoryId: 1,

    subcategoryId: 1,

    price: 2500,

    specifications: [
      {
        label: "Modelo",
        value: "B-382PHi-ALC",
      },
      {
        label: "Cabezal",
        value: "Ajustable de 48 a 75 mm",
      },
      {
        label: "Ajuste dióptrico",
        value: "En el tubo ocular izquierdo",
      },
      {
        label: "Oculares",
        value: "WF 10x / 20 mm",
      },
      {
        label: "Portaobjetivos",
        value: "Revólver quíntuple sobre rodamientos",
      },
    ],
  },

  {
    id: 2,

    title: "Concentrador de Oxígeno 5L",

    description: "Equipo de oxigenoterapia para uso clínico y hospitalario.",

    longDescription:
      "Concentrador de oxígeno diseñado para proporcionar un flujo constante y seguro de oxígeno de alta pureza.",

    image: "/images/products/microscopio.jpg",

    categoryId: 2,

    subcategoryId: 3,

    price: 3200,
  },

  {
    id: 3,

    title: "Concentrador de Oxígeno Portátil",

    description: "Equipo compacto para tratamientos respiratorios.",

    image: "/images/products/microscopio.jpg",

    categoryId: 2,

    subcategoryId: 3,

    price: 3800,
  },

  {
    id: 4,

    title: "Desfibrilador Automático",

    description: "Equipo de respuesta rápida para emergencias médicas.",

    image: "/images/products/microscopio.jpg",

    categoryId: 2,

    subcategoryId: 4,

    price: 9500,
  },

  {
    id: 5,

    title: "Mascarilla KN95",

    description: "Mascarilla de protección de alta eficiencia.",

    longDescription:
      "Mascarilla KN95 diseñada para ofrecer una excelente filtración y comodidad en entornos hospitalarios y de laboratorio.",

    image: "/images/products/microscopio.jpg",

    categoryId: 2,

    subcategoryId: 4,

    specifications: [
      {
        label: "Tipo",
        value: "KN95",
      },
      {
        label: "Estándar",
        value: "GB2626:2006",
      },
      {
        label: "Estilo",
        value: "Gancho para oreja",
      },
      {
        label: "Diseño",
        value: "3D con clip nasal",
      },
      {
        label: "Material",
        value: "Polipropileno no tejido 43%, termosellado 28%, algodón 28.5%",
      },
      {
        label: "Color",
        value: "Blanco",
      },
    ],
  },
];
