import Image from "next/image";
import SectionTitle from "@/components/common/section-title";

import PROJECTS from "@/assets/json/projects";
import TechItem from "@/components/common/tech-item";

export default function Projects() {
  return (
    <section className="mt-30">
      <SectionTitle>Proyectos</SectionTitle>
      {PROJECTS.map(({ name, description, techs, banner }, i) => (
        <div key={i} className="[&:not(:last-child)]:pb-10">
          <h2 className="mb-4 text-2xl font-bold text-(--chart-4)">{name}</h2>
          <p className="mb-4 text-(--ring)">{description}</p>
          <div className="mb-4 flex gap-3 text-2xl">
            {techs.map((tech, i) => (
              <TechItem key={i} tech={tech} />
            ))}
          </div>
          <Image src={banner} alt={`${name} main page`} className="rounded" />
        </div>
      ))}
    </section>
  );
}
