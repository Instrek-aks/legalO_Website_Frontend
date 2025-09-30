import { useEffect } from "react";
import { seoConfig, structuredData } from "../config/seoConfig";

const SEOHead = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  page = "default",
  includeStructuredData = true,
}) => {
  // Use page-specific config or fallback to provided values
  const pageConfig = seoConfig[page] || seoConfig.default;

  const finalTitle = title || pageConfig.title;
  const finalDescription = description || pageConfig.description;
  const finalKeywords = keywords || pageConfig.keywords;
  const finalImage = image || pageConfig.image;
  const finalUrl = url || pageConfig.url;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);

      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    // Update primary meta tags
    updateMetaTag("title", finalTitle);
    updateMetaTag("description", finalDescription);
    updateMetaTag("keywords", finalKeywords);
    updateMetaTag("author", "Legal Olympiad");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("language", "English");
    updateMetaTag("revisit-after", "7 days");

    // Update Open Graph tags
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", finalUrl, true);
    updateMetaTag("og:title", finalTitle, true);
    updateMetaTag("og:description", finalDescription, true);
    updateMetaTag("og:image", finalImage, true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:site_name", "Legal Olympiad", true);
    updateMetaTag("og:locale", "en_IN", true);

    // Update Twitter tags
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:url", finalUrl, true);
    updateMetaTag("twitter:title", finalTitle, true);
    updateMetaTag("twitter:description", finalDescription, true);
    updateMetaTag("twitter:image", finalImage, true);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", finalUrl);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", finalUrl);
      document.head.appendChild(canonical);
    }

    // Add structured data
    if (includeStructuredData) {
      let structuredDataScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (structuredDataScript) {
        structuredDataScript.textContent = JSON.stringify(
          structuredData.organization
        );
      } else {
        structuredDataScript = document.createElement("script");
        structuredDataScript.setAttribute("type", "application/ld+json");
        structuredDataScript.textContent = JSON.stringify(
          structuredData.organization
        );
        document.head.appendChild(structuredDataScript);
      }
    }
  }, [
    finalTitle,
    finalDescription,
    finalKeywords,
    finalImage,
    finalUrl,
    type,
    includeStructuredData,
  ]);

  return null;
};

export default SEOHead;
