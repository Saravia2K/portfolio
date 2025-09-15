import SectionTitle from "@/components/common/section-title";
import PageSection from "@/components/common/page-section";
import type { EducationItem } from "@/lib/types";

import EDUCATION from "@/assets/json/education";

export default function Education() {
  return (
    <PageSection>
      <SectionTitle>Educación</SectionTitle>
      {EDUCATION.map((item, i) => (
        <EducationItem key={i} item={item} />
      ))}
    </PageSection>
  );
}

const EducationItem = ({ item }: { item: EducationItem }) => {
  return (
    <div className="border-b-2 pb-5 not-[:last-child]:mb-5">
      <div className="grid grid-cols-2 text-[1.1rem] font-bold">
        <span>{item.institution}</span>
        <span className="text-end">{item.location}</span>
      </div>
      <div className="grid grid-cols-2 text-[0.9rem]">
        <span>{item.career}</span>
        <span className="text-end">
          {item.years.from} - {item.years.to}{" "}
          {!item.finished && "(Sin terminar)"}
        </span>
      </div>
    </div>
  );
};
