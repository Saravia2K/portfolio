import type { ExperienceItem } from "@/lib/types";
import TECHS from "./techs";

const EXPERIENCE: ExperienceItem[] = [
  {
    jobTitle: { en: "Webmaster", es: "Webmaster" },
    location: "Colombia, Bogotá",
    company: {
      en: "Ciprés Educational Marketing",
      es: "Ciprés Mercadeo Educativo",
    },
    dates: {
      from: "2020-08-01",
      to: "2022-04-01",
    },
    techs: [
      TECHS.WORDPRESS,
      TECHS.FIREBASE,
      TECHS.LARAVEL,
      TECHS.REACT,
      TECHS.MYSQL,
    ],
    tasks: {
      en: [
        "Built a new corporate website using Laravel, React, and MySQL, combining robust backend with dynamic frontend.",
        "Administered WordPress sites with custom features and integrated Firebase for real-time capabilities.",
        "Implemented SEO optimizations that drove a 150% increase in organic traffic.",
      ],
      es: [
        "Construí un nuevo sitio web corporativo utilizando Laravel, React y MySQL, combinando un backend robusto con un frontend dinámico.",
        "Administré sitios de WordPress con funciones personalizadas e integré Firebase para capacidades en tiempo real.",
        "Implementé optimizaciones SEO que generaron un aumento del 150% en el tráfico orgánico.",
      ],
    },
  },
  {
    jobTitle: {
      en: "Junior Fullstack JavaScript Developer",
      es: "Desarrollador Fullstack JavaScript Junior",
    },
    location: "San Salvador, El Salvador",
    company: { en: "ITO Focus", es: "Focus ITO" },
    dates: {
      from: "2022-04-01",
      to: "2023-08-01",
    },
    techs: [
      TECHS.NODEJS,
      TECHS.EXPRESSJS,
      TECHS.REACT,
      TECHS.NEXTJS,
      TECHS.MONGODB,
      TECHS.DOCKER,
      TECHS.POSTGRESQL,
      TECHS.REDIS,
      TECHS.AWS,
    ],
    tasks: {
      en: [
        "I designed a web-based administrative panel using Next.js with Typescript for a client who had a mobile app for mental health care, where their patients/clients could view all information, blog posts, and event calendars in different time zones. This panel allowed them to edit information, create posts, add blog entries, and create new events with different time zones that synchronized to display the time in the selected country.",
        "I participated in a team as a backend developer to create a whole backend system with Express.js, PostgreSQL, MongoDB and Redis responsible for user registration, profile management, validation of images of real people, tracking and control of the real-time location of connected users and calculation of coordinates to not show exact locations but rather heat maps of concentrations of connected users.",
        "I participated in various SCRUM workflows as QA for mobile and web applications, developing end-to-end tests and conducting personal tests to detect differences with designs.",
      ],
      es: [
        "Diseñé un panel administrativo web utilizando Next.js con TypeScript para un cliente que tenía una aplicación móvil sobre cuidado de la salud mental, donde sus pacientes/clientes podían ver toda información, blogs, posts y calendario de eventos en diferentes zonas horarios. En este panel se podía cambiar toda información, crear posts, añadir entradas al blog y crear nuevos eventos con distintas zonas horarias que se sincronizaban entre sí para mostrar la hora en el país seleccionado.",
        "Participé en un equipo como desarrollador backend para crear todo un sístema backend con Express.js, PostgreSQL, MongoDB y Redis encargada de el registro de usuarios, manejo de perfiles, validación de imagenes de personas reales, rastreo y control de la ubicación en tiempo real de los usuarios conectados y cálculo de coordenadas para no mostrar ubicaciones exactas pero sí mapas de calor de concentraciones de usuarios conectados.",
        "Participé en diversos flujos SCRUM como QA para aplicaciones móviles y aplicaciones web, desarrollando tests end-to-end y llevando a cabo tests personales para detectar diferencias con diseños.",
      ],
    },
  },
  {
    jobTitle: {
      en: "Software Developer for Projects | Fullstack developer",
      es: "Software Developer for Projects | Fullstack developer",
    },
    location: "San Salvador, El Salvador",
    company: { en: "ClearView El Salvador", es: "ClearView El Salvador" },
    dates: {
      from: "2023-08-01",
      to: "2024-03-01",
    },
    techs: [TECHS.ANGULAR, TECHS.DOTNET, TECHS.SQLSERVER],
    tasks: {
      en: [
        "Maintenance and development of new functionalities in a complex system, made in Angular 14 with Typescript, for managing updatable metrics in real time for a call center.",
        "Migration of legacy features built in Angular.js to a system in Angular 14, ensuring good development practices and excellent performance.",
        "Management and maintenance of the backend system built in ASP.Net along with the management of the database in SQL Server.",
      ],
      es: [
        "Mantenimiento y desarrollo de nuevas funcionalidades en un sistema complejo, construido en Angular 14 con TypeScript, para la gestión de métricas actualizables en tiempo real para un call center.",
        "Migración de funcionalidades legacy construidas en Angular.js a un sistema en Angular 14, asegurando buenas prácticas de desarrollo y excelente rendimiento.",
        "Gestión y mantenimiento del sistema backend construido en ASP.Net junto con la gestión de la base de datos en SQL Server.",
      ],
    },
  },
  {
    jobTitle: {
      en: "Senior Frontend Developer",
      es: "Senior Frontend Developer",
    },
    location: "San Salvador, El Salvador",
    company: { en: "Byte", es: "Byte" },
    dates: {
      from: "2024-03-01",
      to: "2026-02-13",
    },
    techs: [TECHS.ANGULAR, TECHS.RXJS, TECHS.POSTMAN],
    tasks: {
      en: [
        "Design, implementation and maintenance of a banking system, where users can check balances, cards, loans, carry out their own and third-party transactions, etc.",
        "Integration of third-party scripts for handling metrics for internal use by directives, such as Glia, Google Analytics, etc.",
        "Review, correction and planning of new functionalities within the system together with a team of designers, PO, PM and different technical leaders to solve technical requirements.",
      ],
      es: [
        "Diseño, implementación y mantenimiento de un sistema bancario, donde los usuarios pueden consultar saldos, tarjetas, préstamos, realizar transacciones propias y de terceros, etc.",
        "Integración de scripts de terceros para el manejo de métricas para uso interno de directivas, tales como Glia, Google Analytics, etc.",
        "Revisión, corrección y planificación de nuevas funcionalidades dentro del sistema junto a un equipo de diseñadores, PO, PM y distintos líderes técnicos para dar solución a requerimientos técnicos.",
      ],
    },
  },
];

export default EXPERIENCE;
