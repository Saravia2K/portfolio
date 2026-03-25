import type { JSX, SVGProps } from "react";

export type Multilangual<T> = {
  es: T;
  en: T;
};

export type Tech = {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
};

export type ExperienceItem = {
  dates: {
    from: string | Date;
    to: string | Date;
  };
  jobTitle: Multilangual<string>;
  company: Multilangual<string>;
  location: string;
  current?: boolean;
  techs: Tech[];
  tasks: Multilangual<string[]>;
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

export type Project = Multilangual<{
  name: string;
  description: string;
}> & {
  techs: Tech[];
  banner: string;
  web?: string;
};

export type AsPage<T = object> = {
  asPage?: boolean;
} & T;
