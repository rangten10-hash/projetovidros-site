import { useEffect } from "react";

const SITE_URL = "https://www.projetovidros.com.br";

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const JSONLD_ID = "route-jsonld";

export function useSeo({ title, description, path, image, jsonLd }: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    upsertMeta("name", "description", description);
    upsertLink("canonical", url);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", path === "/" ? "website" : "article");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    if (image) {
      upsertMeta("property", "og:image", image);
      upsertMeta("name", "twitter:image", image);
    }

    // Remove any previous route JSON-LD
    document.querySelectorAll(`script[data-id="${JSONLD_ID}"]`).forEach((n) => n.remove());
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((data) => {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.dataset.id = JSONLD_ID;
        s.text = JSON.stringify(data);
        document.head.appendChild(s);
      });
    }

    return () => {
      document.querySelectorAll(`script[data-id="${JSONLD_ID}"]`).forEach((n) => n.remove());
    };
  }, [title, description, path, image, JSON.stringify(jsonLd)]);
}

export { SITE_URL };
