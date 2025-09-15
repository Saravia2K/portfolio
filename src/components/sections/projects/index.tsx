"use client";

import Image from "next/image";
import SectionTitle from "@/components/common/section-title";
import IncompleteList from "@/components/common/incomplete-list";
import PageSection from "@/components/common/page-section";
import TechItem from "@/components/common/tech-item";
import type { AsPage } from "@/lib/types";

import PROJECTS from "@/assets/json/projects";

export default function Projects({ asPage }: AsPage) {
  return (
    <PageSection asPage={asPage}>
      <SectionTitle>Proyectos</SectionTitle>
      <IncompleteList
        href="/proyectos"
        full={asPage}
        list={PROJECTS}
        render={({ name, description, techs, banner }, i) => (
          <div key={i} className="project-item not-last-of-type:pb-10">
            <h2 className="mb-4 text-2xl font-bold text-(--chart-4)">{name}</h2>
            <p className="mb-4 text-(--ring)">{description}</p>
            <div className="mb-4 flex gap-3 text-2xl">
              {techs.map((tech, i) => (
                <TechItem key={i} tech={tech} />
              ))}
            </div>
            <Image src={banner} alt={`${name} main page`} className="rounded" />
          </div>
        )}
      />
    </PageSection>
  );
}
