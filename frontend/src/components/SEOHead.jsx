import { Helmet } from "react-helmet-async";
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
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="Legal Olympiad" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Legal Olympiad" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />

      {/* Structured Data */}
      {includeStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData.organization)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
