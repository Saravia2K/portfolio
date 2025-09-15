"use client";

import SectionTitle from "@/components/common/section-title";
import Timeline from "@/components/common/timeline";
import TimelineItem from "@/components/common/timeline/item";
import PageSection from "@/components/common/page-section";
import IncompleteList from "@/components/common/incomplete-list";
import type { AsPage } from "@/lib/types";

import EXPERIENCE from "@/assets/json/experience";

export default function Experience({ asPage }: AsPage) {
  return (
    <PageSection asPage={asPage}>
      <SectionTitle>Experiencia</SectionTitle>

      <IncompleteList
        containerComponent={Timeline}
        full={asPage}
        href="/experiencia"
        list={EXPERIENCE.slice().reverse()}
        render={({ description, ...e }, i) => (
          <TimelineItem key={i} {...e}>
            {description}
          </TimelineItem>
        )}
      />
    </PageSection>
  );
}
