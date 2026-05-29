// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.heyden-antigua.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.heyden-antigua.com/","title_tag":"Sea view villa Antigua & Blue Waters property | Heyden","meta_description":"Antigua accommodation in a private villa at Blue Waters. Luxury home Antigua with pool, cottage, study office and stunning sea view, ideal tranquil living Antigua."},{"page_url":"https://www.heyden-antigua.com/accommodation-1","title_tag":"Luxury Antigua accommodation & vacation home | Heyden","meta_description":"Antigua accommodation in a luxury home Antigua with 2 ensuite bedrooms, sea breeze veranda and modern kitchen. Ideal vacation home Antigua for tranquil living."},{"page_url":"https://www.heyden-antigua.com/cottage-study-office","title_tag":"Cottage rental Antigua & study office Antigua | Heyden","meta_description":"Private cottage rental Antigua with 2 bedrooms and veranda plus modern study office Antigua that can be an extra bedroom. Enjoy tranquil living Antigua."},{"page_url":"https://www.heyden-antigua.com/pool","title_tag":"Private villa Antigua with pool & sea view | Heyden","meta_description":"Private villa Antigua with secluded heated pool and sun terrace near Blue Waters property. Perfect vacation home Antigua for relaxed, tranquil living Antigua."},{"page_url":"https://www.heyden-antigua.com/contact-us","title_tag":"Property for sale Antigua – Blue Waters villa | Heyden","meta_description":"Property for sale Antigua: Blue Waters property with pool, cottage and office, fully furnished. Enquire about this sea view villa Antigua and luxury home Antigua."}],"keywords":["Antigua accommodation","private villa Antigua","cottage rental Antigua","study office Antigua","property for sale Antigua","Blue Waters property","vacation home Antigua","sea view villa Antigua","tranquil living Antigua","luxury home Antigua"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.heyden-antigua.com/#product",
  "name": "Stunning Property with 4 bedrooms & pool - Antigua W.I.",
  "url": "https://www.heyden-antigua.com/",
  "description": "Private villa for sale at Blue Waters, Antigua W.I. Unique property in one of the best locations in Antigua with sea view over Prickly Pear Island, offering a main house, separate cottage, office, pool and modern amenities. Ideally located with easy access to St. John's, beaches and supermarkets.",
  "image": [
    "https://static.wixstatic.com/media/28d5fb_efe1e4d11544496b88c13c529b8da83d~mv2_d_2560_1509_s_2.jpg/v1/fill/w_980,h_235,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/28d5fb_efe1e4d11544496b88c13c529b8da83d~mv2_d_2560_1509_s_2.jpg",
    "https://static.wixstatic.com/media/28d5fb_75ac3e21126643c8ab14fa7d9cecb119~mv2_d_5472_3648_s_4_2.jpg/v1/crop/x_252,y_863,w_5220,h_2785/fill/w_436,h_232,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/28d5fb_75ac3e21126643c8ab14fa7d9cecb119~mv2_d_5472_3648_s_4_2.jpg",
    "https://static.wixstatic.com/media/28d5fb_dc9498ec3bd94eeaaa7b1c544c048fcc~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_434,h_291,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/28d5fb_dc9498ec3bd94eeaaa7b1c544c048fcc~mv2_d_5472_3648_s_4_2.jpg"
  ],
  "category": "Real Estate",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Location",
      "value": "Blue Waters, Antigua W.I. with sea view to Prickly Pear Island"
    },
    {
      "@type": "PropertyValue",
      "name": "Bedrooms",
      "value": "4"
    },
    {
      "@type": "PropertyValue",
      "name": "Bathrooms",
      "value": "3"
    },
    {
      "@type": "PropertyValue",
      "name": "Main house",
      "value": "2 bedrooms with ensuite bathrooms, large living room, open plan well equipped kitchen/diner, utility room with washing machine and dryer, half glass enclosed veranda"
    },
    {
      "@type": "PropertyValue",
      "name": "Cottage",
      "value": "2 double bedrooms with air conditioning and fan, bathroom with walk-in shower, vanitory unit and toilet, small coffee kitchen and veranda"
    },
    {
      "@type": "PropertyValue",
      "name": "Office",
      "value": "Separate modern office that can be used as an additional bedroom, with air conditioning and fan"
    },
    {
      "@type": "PropertyValue",
      "name": "Pool",
      "value": "Heated, secluded private pool (8x4 metres) with sun terrace"
    },
    {
      "@type": "PropertyValue",
      "name": "Security",
      "value": "Electric gates, fully alarmed plus camera surveillance"
    },
    {
      "@type": "PropertyValue",
      "name": "Generator",
      "value": "Perkins Diesel generator with automatic start"
    },
    {
      "@type": "PropertyValue",
      "name": "Parking",
      "value": "Car porch"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "1150000",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://www.heyden-antigua.com/",
    "description": "US$ 1,150,000 - Price includes all contents.",
    "itemCondition": "https://schema.org/UsedCondition"
  },
  "brand": {
    "@type": "Organization",
    "name": "Heyden Antigua Property",
    "url": "https://www.heyden-antigua.com/"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
