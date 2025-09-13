import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import TECHS from "@/assets/json/techs";

export default function MainStack() {
  return (
    <section className="mt-30">
      <h3 className="text-center text-3xl font-bold text-(--chart-1)">
        Stack principal
      </h3>
      <div className="mt-5 flex justify-center gap-7 text-5xl">
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
