import SectionTitle from "@/components/common/section-title";
import Timeline from "@/components/common/timeline";
import TimelineItem from "@/components/common/timeline/item";

import EXPERIENCE from "@/assets/json/experience";

export default function Experience() {
  return (
    <section>
      <SectionTitle>Experiencia</SectionTitle>

      <Timeline>
        {EXPERIENCE.reverse().map(({ description, ...e }, i) => (
          <TimelineItem key={i} {...e}>
            {description}
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
