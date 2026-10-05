import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rahulnimbalkar.dev";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/skills",
    "/experience",
    "/projects",
    "/certificates",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
