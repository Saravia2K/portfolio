import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Tech } from "@/lib/types";

export default function TechItem({ tech }: TechItemProps) {
  const { icon: I, text } = tech;
  return (
    <Tooltip>
      <TooltipTrigger>
        <I />
      </TooltipTrigger>
      <TooltipContent>{text}</TooltipContent>
    </Tooltip>
  );
}

type TechItemProps = {
  tech: Tech;
};
