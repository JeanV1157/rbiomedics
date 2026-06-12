import { Category } from "@/types/category";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Óptica",

    subcategories: [
      {
        id: 1,
        name: "Microscopios",
      },
      {
        id: 2,
        name: "Lupas",
      },
    ],
  },

  {
    id: 2,
    name: "Equipos Médicos",

    subcategories: [
      {
        id: 3,
        name: "Concentradores",
      },
      {
        id: 4,
        name: "Desfibriladores",
      },
    ],
  },
];
