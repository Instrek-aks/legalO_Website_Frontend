// SEO Configuration for Legal Olympiad
export const seoConfig = {
  default: {
    title: "Legal Olympiad - India's Premier Legal Career Development Platform",
    description:
      "Join India's most comprehensive legal career development platform. Expert mentorship, AI-powered tools, podcasts, and career guidance for aspiring lawyers and legal professionals.",
    keywords:
      "legal olympiad, legal career, law students, legal education, legal mentorship, law career guidance, legal professionals, legal olympiad india, legal career development, law olympiad",
    image: "https://legalolympiad.com/logopng.png",
    url: "https://legalolympiad.com",
    type: "website",
  },
  about: {
    title: "About Legal Olympiad - India's Leading Legal Education Platform",
    description:
      "Learn about Legal Olympiad's mission to transform legal education in India. Discover our comprehensive platform for law students and legal professionals.",
    keywords:
      "about legal olympiad, legal education platform, law students india, legal career development, legal mentorship program",
    url: "https://legalolympiad.com/about",
  },
  courses: {
    title: "Legal Courses & Education - Legal Olympiad",
    description:
      "Explore comprehensive legal courses and educational programs designed for aspiring lawyers and legal professionals in India.",
    keywords:
      "legal courses, law education, legal training, law courses india, legal olympiad courses",
    url: "https://legalolympiad.com/courses",
  },
  events: {
    title: "Legal Events & Competitions - Legal Olympiad",
    description:
      "Participate in India's premier legal events, competitions, and workshops designed for law students and legal professionals.",
    keywords:
      "legal events, law competitions, legal workshops, legal olympiad events, law student events",
    url: "https://legalolympiad.com/events",
  },
  blog: {
    title: "Legal Blog & Articles - Legal Olympiad",
    description:
      "Read expert legal articles, insights, and career guidance from India's top legal professionals and educators.",
    keywords:
      "legal blog, law articles, legal insights, legal career advice, law student resources",
    url: "https://legalolympiad.com/blog",
  },
  podcasts: {
    title: "Legal Podcasts - Legal Olympiad",
    description:
      "Listen to insightful legal podcasts featuring discussions with top lawyers, judges, and legal professionals in India.",
    keywords:
      "legal podcasts, law podcasts, legal discussions, legal olympiad podcasts, law student podcasts",
    url: "https://legalolympiad.com/podcasts",
  },
  contact: {
    title: "Contact Legal Olympiad - Get in Touch",
    description:
      "Get in touch with Legal Olympiad team. Contact us for queries about legal education, mentorship, and career guidance.",
    keywords:
      "contact legal olympiad, legal education support, law student help, legal career guidance contact",
    url: "https://legalolympiad.com/contact",
  },
  register: {
    title: "Register for Legal Olympiad - Join Now",
    description:
      "Register for Legal Olympiad and join India's premier legal career development platform. Start your legal journey today.",
    keywords:
      "register legal olympiad, join legal olympiad, legal olympiad registration, law student registration",
    url: "https://legalolympiad.com/register",
  },
};

// Structured Data for different page types
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Legal Olympiad",
    alternateName: "LegalO",
    url: "https://legalolympiad.com",
    logo: "https://legalolympiad.com/logopng.png",
    description:
      "India's premier legal career development platform providing mentorship, AI-powered tools, and comprehensive guidance for aspiring lawyers and legal professionals.",
    foundingDate: "2024",
    founder: [
      {
        "@type": "Person",
        name: "Vineet Sharma",
      },
      {
        "@type": "Person",
        name: "Sanjana Wadhwa",
      },
      {
        "@type": "Person",
        name: "Praveen Sharma",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@legalolympiad.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/legal-olympiad",
      "https://www.facebook.com/legalolympiad",
      "https://www.instagram.com/legalolympiad",
      "https://twitter.com/legalolympiad",
    ],
    offers: {
      "@type": "Offer",
      description:
        "Legal career development programs, mentorship, and educational resources",
      category: "Legal Education",
    },
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Legal Olympiad",
    url: "https://legalolympiad.com",
    description: "India's premier legal career development platform",
    publisher: {
      "@type": "Organization",
      name: "Legal Olympiad",
    },
  },
};
