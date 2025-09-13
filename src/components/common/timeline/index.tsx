import { ReactElement } from "react";
import TimelineItem, { TimelineItemProps } from "./item";

export default function Timeline({ children }: TimelineProps) {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {children}
    </ol>
  );
}

Timeline.Item = TimelineItem;

type TimelineItemChild = ReactElement<TimelineItemProps>;

type TimelineProps = {
  children: TimelineItemChild | Array<TimelineItemChild>;
};
