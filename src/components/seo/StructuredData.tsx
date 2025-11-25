type StructuredDataProps = {
  pathname?: string;
};

export function StructuredData({ pathname = "/" }: StructuredDataProps) {
  const baseUrl = "https://gingergroovestudios.com";

  function getBreadcrumbs() {
    const breadcrumbs = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ];

    if (pathname === "/services") {
      breadcrumbs.push({
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services`,
      });
    } else if (pathname === "/contact-us") {
      breadcrumbs.push({
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: `${baseUrl}/contact-us`,
      });
    } else if (pathname.startsWith("/portfolio")) {
      breadcrumbs.push({
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${baseUrl}/portfolio`,
      });

      if (pathname === "/portfolio/artist-portfolio") {
        breadcrumbs.push({
          "@type": "ListItem",
          position: 3,
          name: "Artist Portfolio",
          item: `${baseUrl}/portfolio/artist-portfolio`,
        });
      } else if (pathname === "/portfolio/commercial-portfolio") {
        breadcrumbs.push({
          "@type": "ListItem",
          position: 3,
          name: "Commercial Portfolio",
          item: `${baseUrl}/portfolio/commercial-portfolio`,
        });
      }
    }

    return breadcrumbs;
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ginger Groove Studios",
    url: baseUrl,
    logo: `${baseUrl}/assets/Logos/gglogo/Ginger Groove Logo_PNG.png`,
    description:
      "Professional music production studio offering sound recording, mixing, mastering, and music production services.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917304008137",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61564266141026",
      "https://www.instagram.com/gingergroovestudios/",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#LocalBusiness`,
    name: "Ginger Groove Studios",
    image: `${baseUrl}/assets/Logos/gglogo/Ginger Groove Logo_PNG.png`,
    description:
      "Professional music production studio offering sound recording, mixing, mastering, and music production services. Where your sound takes center stage.",
    url: baseUrl,
    telephone: "+917304008137",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Music Production Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sound Recording",
            description: "Professional sound recording services",
            provider: {
              "@type": "LocalBusiness",
              name: "Ginger Groove Studios",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            serviceType: "Audio Recording",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Music Production",
            description: "Complete music production services",
            provider: {
              "@type": "LocalBusiness",
              name: "Ginger Groove Studios",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            serviceType: "Music Production",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mixing and Mastering",
            description: "Professional audio mixing and mastering services",
            provider: {
              "@type": "LocalBusiness",
              name: "Ginger Groove Studios",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            serviceType: "Audio Post-Production",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: getBreadcrumbs(),
  };

  const contactPageSchema =
    pathname === "/contact-us"
      ? {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Us",
          url: `${baseUrl}/contact-us`,
          description:
            "Get in touch with Ginger Groove Studios for professional music production services.",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "Ginger Groove Studios",
            telephone: "+917304008137",
            email: "contact@gingergroovestudios.com",
          },
        }
      : null;

  const collectionPageSchema = pathname.startsWith("/portfolio")
    ? {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name:
          pathname === "/portfolio/artist-portfolio"
            ? "Artist Portfolio"
            : pathname === "/portfolio/commercial-portfolio"
              ? "Commercial Portfolio"
              : "Portfolio",
        url: `${baseUrl}${pathname}`,
        description:
          pathname === "/portfolio/artist-portfolio"
            ? "Discover our artist portfolio featuring collaborations with talented musicians."
            : pathname === "/portfolio/commercial-portfolio"
              ? "View our commercial portfolio showcasing video production work for brands and businesses."
              : "Explore our portfolio featuring artist productions and commercial projects.",
        isPartOf: {
          "@type": "WebSite",
          name: "Ginger Groove Studios",
          url: baseUrl,
        },
      }
    : null;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${baseUrl}${pathname}`,
    name:
      pathname === "/"
        ? "Home"
        : pathname === "/services"
          ? "Studio Services"
          : pathname === "/contact-us"
            ? "Contact Us"
            : pathname.startsWith("/portfolio")
              ? "Portfolio"
              : "Ginger Groove Studios",
    isPartOf: {
      "@type": "WebSite",
      name: "Ginger Groove Studios",
      url: baseUrl,
    },
    about: {
      "@type": "LocalBusiness",
      name: "Ginger Groove Studios",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {contactPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
      )}
      {collectionPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
        />
      )}
    </>
  );
}

