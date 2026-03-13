import type { EducationItem } from "@/lib/types";

const EDUCATION: EducationItem[] = [
  {
    institution: "Universidad ECCI",
    career: "Tecnología en Automatización y Robótica Industrial",
    location: "Bogotá, Colombia",
    years: {
      from: 2019,
      to: 2020,
    },
    finished: false,
  },
  {
    institution: "UNICAES (Universidad Católica de El Salvador)",
    career: "Ingeniería en Desarrollo de Software",
    location: "Santa Ana, El Salvador",
    years: {
      from: 2021,
      to: 2025,
    },
    finished: true,
  },
];

export default EDUCATION;
