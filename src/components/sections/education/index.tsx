import SectionTitle from "@/components/common/section-title";
import type { EducationItem } from "@/lib/types";

import EDUCATION from "@/assets/json/education";

export default function Education() {
  return (
    <section className="mt-30">
      <SectionTitle>Educación</SectionTitle>
      {EDUCATION.map((item, i) => (
        <EducationItem key={i} item={item} />
      ))}
    </section>
  );
}

const EducationItem = ({ item }: { item: EducationItem }) => {
  return (
    <div className="border-b-2 pb-5 [&:not(:last-child)]:mb-5">
      <div className="flex justify-between text-[1.1rem] font-bold">
        <span>{item.institution}</span>
        <span>{item.location}</span>
      </div>
      <div className="flex justify-between text-[0.9rem]">
        <span>{item.career}</span>
        <span>
          {item.years.from} - {item.years.to}{" "}
          {!item.finished && "(Sin terminar)"}
        </span>
      </div>
    </div>
  );
};
