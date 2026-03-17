import type { EducationItem, Multilangual } from "@/lib/types";

const EDUCATION: Multilangual<EducationItem>[] = [
  {
    es: {
      institution: "Universidad ECCI",
      career: "Tecnología en Automatización y Robótica Industrial",
      location: "Bogotá, Colombia",
      years: {
        from: 2019,
        to: 2020,
      },
      finished: false,
    },
    en: {
      institution: "ECCI University",
      career: "Technology in Automation and Industrial Robotics",
      location: "Bogotá, Colombia",
      years: {
        from: 2019,
        to: 2020,
      },
      finished: false,
    },
  },
  {
    es: {
      institution: "UNICAES (Universidad Católica de El Salvador)",
      career: "Ingeniería en Desarrollo de Software",
      location: "Santa Ana, El Salvador",
      years: {
        from: 2021,
        to: 2025,
      },
      finished: true,
    },
    en: {
      institution: "UNICAES (Catholic University of El Salvador)",
      career: "Software Engineering",
      location: "Santa Ana, El Salvador",
      years: {
        from: 2021,
        to: 2025,
      },
      finished: true,
    },
  },
];

export default EDUCATION;
