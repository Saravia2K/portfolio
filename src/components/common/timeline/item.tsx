import { type PropsWithChildren } from "react";
import moment from "moment";
import TechItem from "../tech-item";
import type { ExperienceItem } from "@/lib/types";

import "moment/locale/es";
moment.locale("es");

export default function TimelineItem(props: TimelineItemProps) {
  const { dates, jobTitle, company, location, current, children, techs } =
    props;

  const { from, to } = dates;

  const fromMoment = moment(from);
  const toMoment = moment(to);
  const toIsToday = toMoment.isSame(new Date(), "day");

  const ToDateContainer = toIsToday || current ? "div" : "time";
  return (
    <li className="ms-4 not-[:last-child]:mb-10">
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="mb-1 grid grid-cols-[60%_auto] text-sm leading-none font-normal text-gray-400 capitalize dark:text-gray-500">
        <div className="flex gap-2 sm:gap-4">
          <time dateTime={fromMoment.format("YYYY-MM-DD")}>
            {fromMoment.format("MMMM YYYY")}
          </time>
          <span>-</span>
          <ToDateContainer
            dateTime={!toIsToday ? toMoment.format("YYYY-MM-DD") : undefined}
          >
            {toIsToday ? "Actualmente" : toMoment.format("MMMM YYYY")}
          </ToDateContainer>
        </div>
        <span className="text-end">{location}</span>
      </div>
      <h3 className="flex justify-between text-lg font-semibold text-(--chart-4)">
        <span>{jobTitle}</span> <span className="text-end">{company}</span>
      </h3>
      <div className="mt-4 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {children}
      </div>
      <div className="flex items-center gap-2 text-xl sm:gap-4">
        <span className="text-[1rem]">Tecnologías usadas:</span>
        {techs.map((tech, i) => (
          <TechItem key={i} tech={tech} />
        ))}
      </div>
    </li>
  );
}

export type TimelineItemProps = PropsWithChildren<ExperienceItem>;
