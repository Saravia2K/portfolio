import { getLocale } from "#/paraglide/runtime";
import { m } from "#/paraglide/messages";
import SectionTitle from "@/components/common/section-title";
import IncompleteList from "@/components/common/incomplete-list";
import PageSection from "@/components/common/page-section";
import TechItem from "@/components/common/tech-item";
import type { AsPage } from "@/lib/types";

import PROJECTS from "@/assets/json/projects";

const locale = getLocale();
export default function Projects({ asPage }: AsPage) {
  return (
    <PageSection asPage={asPage}>
      <SectionTitle>{m.projects_title()}</SectionTitle>
      <IncompleteList
        href="/proyectos"
        full={asPage}
        list={PROJECTS}
        render={({ techs, banner, web, ...rest }, i) => {
          const { name, description } = rest[locale];
          return (
            <div key={i} className="project-item not-last-of-type:pb-10">
              <h2 className="text-chart-4 mb-4 text-2xl font-bold">{name}</h2>
              <p className="text-ring mb-4">{description}</p>
              {web && (
                <a
                  href={web}
                  target="_blank"
                  className="mb-4 inline-block border-b border-b-blue-400 text-blue-400!"
                >
                  {m.click_to_see_website()}
                </a>
              )}
              <div className="mb-4 flex gap-3 text-2xl">
                {techs.map((tech, i) => (
                  <TechItem key={i} tech={tech} />
                ))}
              </div>
              <img src={banner} alt={`${name} main page`} className="rounded" />
            </div>
          );
        }}
      />
    </PageSection>
  );
}
