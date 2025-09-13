import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import TECHS from "@/assets/json/techs";
import SectionTitle from "@/components/common/section-title";

export default function MainStack() {
  return (
    <section className="mt-30">
      <SectionTitle>Stack principal</SectionTitle>
      <div className="flex justify-center gap-7 text-5xl">
        {MAIN_STACK.map(({ icon: I, text }, i) => (
          <Tooltip key={i}>
            <TooltipTrigger>
              <I />
            </TooltipTrigger>
            <TooltipContent>{text}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}

const MAIN_STACK = [
  TECHS.REACT,
  TECHS.NEXTJS,
  TECHS.NESTJS,
  TECHS.POSTGRESQL,
  TECHS.MATERIALUI,
  TECHS.TANSTACKQUERY,
];
