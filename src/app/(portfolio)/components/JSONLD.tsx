import Script from "next/script";

import EXPERIENCE from "@/assets/json/experience";

export default function JSONLD() {
  const LdJSON = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Diego Saravia",
    hasOccupation: EXPERIENCE.map((e) => ({
      "@type": "Role",
      roleName: e.jobTitle,
      startDate: e.dates.from,
      endDate: e.current ? undefined : e.dates.to,
      memberOf: {
        "@type": "Organization",
        name: e.company,
      },
    })),
  };

  return (
    <Script
      id="json-ld-script"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(LdJSON).replace(/</g, "\\u003c"),
      }}
    />
  );
}
