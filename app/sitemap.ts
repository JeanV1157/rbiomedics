import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.rbiomedics.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.rbiomedics.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.rbiomedics.com/product",
      lastModified: new Date(),
    },
    {
      url: "https://www.rbiomedics.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.rbiomedics.com/contact",
      lastModified: new Date(),
    },
  ];
}
