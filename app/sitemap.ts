import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rbiomedics.com",
      lastModified: new Date(),
    },
    {
      url: "https://rbiomedics.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://rbiomedics.com/product",
      lastModified: new Date(),
    },
    {
      url: "https://rbiomedics.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://rbiomedics.com/contact",
      lastModified: new Date(),
    },
  ];
}
