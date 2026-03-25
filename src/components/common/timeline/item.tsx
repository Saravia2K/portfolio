import { type PropsWithChildren } from "react";
import dayjs from "dayjs";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";

import TechItem from "../tech-item";
import type { ExperienceItem } from "@/lib/types";

const locale = getLocale();
export default function TimelineItem(props: TimelineItemProps) {
  const { dates, jobTitle, company, location, current, children, techs } =
    props;

  const { from, to } = dates;

  const fromDayjs = dayjs(from);
  const toDayjs = dayjs(to);

  return (
    <li className="ms-4 not-last:mb-10">
      <div className="absolute -inset-s-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="mb-1 grid grid-cols-[60%_auto] text-sm leading-none font-normal text-gray-400 capitalize dark:text-gray-500">
        <div className="flex gap-2 sm:gap-4">
          <time dateTime={fromDayjs.format("YYYY-MM-DD")}>
            {fromDayjs.format("MMMM YYYY")}
          </time>
          <span>-</span>
          <time dateTime={current ? undefined : toDayjs.format("YYYY-MM-DD")}>
            {current ? m.currently() : toDayjs.format("MMMM YYYY")}
          </time>
        </div>
        <span className="text-end">{location}</span>
      </div>
      <h3 className="text-chart-4 flex justify-between text-lg font-semibold">
        <span>{jobTitle[locale]}</span>{" "}
        <span className="text-end">{company[locale]}</span>
      </h3>
      <div className="mt-4 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {children}
      </div>
      <div className="flex items-center gap-2 text-xl sm:gap-4">
        <span className="text-[1rem]">{m.used_techs()}:</span>
        {techs.map((tech, i) => (
          <TechItem key={i} tech={tech} />
        ))}
      </div>
    </li>
  );
}

export type TimelineItemProps = PropsWithChildren<ExperienceItem>;
