import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { m } from "@/paraglide/messages";
import SectionTitle from "@/components/common/section-title";
import PageSection from "@/components/common/page-section";

import TECHS from "@/assets/json/techs";

export default function MainStack() {
  return (
    <PageSection>
      <SectionTitle>{m.main_stack_title()}</SectionTitle>
      <div className="flex flex-wrap justify-center gap-7 text-5xl">
        {MAIN_STACK.map(({ icon: I, text }, i) => (
          <Tooltip key={i}>
            <TooltipTrigger>
              <I />
            </TooltipTrigger>
            <TooltipContent>{text}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </PageSection>
  );
}

const MAIN_STACK = [
  TECHS.REACT,
  TECHS.NODEJS,
  TECHS.POSTGRESQL,
  TECHS.MATERIALUI,
];
