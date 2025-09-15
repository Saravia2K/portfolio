import type { WithContext, Person } from "schema-dts";
import Script from "next/script";

import EXPERIENCE from "@/assets/json/experience";

export default function JSONLD() {
  const LdJSON: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Diego Saravia",
    hasOccupation: EXPERIENCE.map((e) => ({
      "@type": "Role",
      "@id": new Date().getDate().toString(),
      roleName: e.jobTitle,
      startDate: `${e.dates.from}`,
      endDate: e.current ? undefined : `${e.dates.to}`,
    })),
    worksFor: EXPERIENCE.filter((e) => e.current).map((e) => ({
      "@type": "Organization",
      name: e.company,
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
