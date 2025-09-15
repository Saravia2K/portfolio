import type { WithContext, Person } from "schema-dts";
import Script from "next/script";

import EXPERIENCE from "@/assets/json/experience";

export default function JSONLD() {
  const LdJSON: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Diego Saravia",
    hasOccupation: {
      "@type": "Role",
      "@id": new Date().getDate().toString(),
      roleName: "Senior Frontend Developer",
      startDate: "2024-03-01",
    },
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
