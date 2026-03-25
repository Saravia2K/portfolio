import { m } from "@/paraglide/messages";
import { getLocale } from "@/paraglide/runtime";

import SectionTitle from "@/components/common/section-title";
import Timeline from "@/components/common/timeline";
import TimelineItem from "@/components/common/timeline/item";
import PageSection from "@/components/common/page-section";
import IncompleteList from "@/components/common/incomplete-list";
import List from "@/components/common/list";
import type { AsPage } from "@/lib/types";

import EXPERIENCE from "@/assets/json/experience";

const locale = getLocale();
export default function Experience({ asPage }: AsPage) {
  const experience = [...EXPERIENCE];
  return (
    <PageSection asPage={asPage}>
      <SectionTitle>{m.experience_title()}</SectionTitle>

      <IncompleteList
        containerComponent={Timeline}
        full={asPage}
        href="/experiencia"
        list={experience.slice().reverse()}
        render={(e, i) => (
          <TimelineItem key={i} {...e}>
            <List list={e.tasks[locale]} />
          </TimelineItem>
        )}
      />
    </PageSection>
  );
}
