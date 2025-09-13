import { JSX, SVGProps } from "react";

export type Tech = {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
};

export type ExperienceItem = {
  dates: {
    from: string | Date;
    to: string | Date;
  };
  jobTitle: string;
  company: string;
  location: string;
  current?: boolean;
  techs: Tech[];
};

export type EducationItem = {
  institution: string;
  career: string;
  location: string;
  years: {
    from: number;
    to: number;
  };
  finished: boolean;
};
