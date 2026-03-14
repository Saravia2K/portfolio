import type { Project } from "@/lib/types"

import globalVillageBanner from "@/assets/images/projects/global_village.webp"
import madBanner from "@/assets/images/projects/mad_udb_2025.webp"
import sistecBanner from "@/assets/images/projects/sistec.webp"
import universidadesyprofesionesBanner from "@/assets/images/projects/universidadesyprofesiones.webp"
import animalHostelBanner from "@/assets/images/projects/animal-hostel.webp"
import weddingInvitationBanner from "@/assets/images/projects/wedding_invitation.webp"
import TECHS from "./techs"

const PROJECTS: Project[] = [
  {
    name: "SISTEC",
    description:
      "Sistema de administración de tickets para técnicos de mantenimiento, con posibilidad de llevar stock y tracking de piezas utilizadas en cada mantenimiento, así como alertas cuando alguna pieza está en la zona baja de stock y dashboard para el seguimiento de tareas diarias y estadísticas.",
    techs: [
      TECHS.REACT,
      TECHS.NEXTJS,
      TECHS.POSTGRESQL,
      TECHS.DOCKER,
      TECHS.NESTJS,
      TECHS.MATERIALUI,
    ],
    banner: sistecBanner,
  },
  {
    name: "MAD 2025",
    description:
      "Sitio web oficial para el evento de MAD 2025 de los estudiantes de último ciclo de la carrera de Diseño Gráfico, donde se muestran los perfiles de todos los profesionales, sus trabajos y su información de contacto, además de información de los patrocinadores de este evento",
    techs: [TECHS.REACT, TECHS.REACT_ROUTER, TECHS.TAILWINDCSS, TECHS.SUPABASE],
    banner: madBanner,
    web: "https://madudb2025.com",
  },
  {
    name: "Global Village",
    description:
      "Sitio web con panel de administrador para promocionar clases de idiomas online de una empresa local.",
    techs: [
      TECHS.REACT,
      TECHS.NEXTJS,
      TECHS.POSTGRESQL,
      TECHS.DOCKER,
      TECHS.SASS,
    ],
    banner: globalVillageBanner,
    web: "https://globalvillagesv.com",
  },
  {
    name: "Universidades y Profesiones",
    description:
      "Página web hecha para una empresa de estadísticas de colegios en Colombia, con el propósito de incursionar en el mercado de las universidades, vender test de orientación vocacional y proporcionar información útil para aquellos que están a punto de entrar a la universidad y no saben qué carrera elegir y en qué universidad.",
    techs: [TECHS.LARAVEL, TECHS.MYSQL, TECHS.REACT, TECHS.FIREBASE],
    banner: universidadesyprofesionesBanner,
    web: "https://universidadesyprofesiones.com",
  },
  {
    name: "Animal Hostel",
    description:
      "Sistema de administración de un hostal de animales donde se ofrecen diferentes servicios de cuidado de la higiene de perros. Este sistema lleva un historial de servicios hechos, inscripción de perros, dueños y encargados, así como fichas de ingresos de perros, recordatorios de citas diarias e información del animal, información necesaria para el servicio, etc.",
    techs: [
      TECHS.REACT,
      TECHS.NEXTJS,
      TECHS.POSTGRESQL,
      TECHS.DOCKER,
      TECHS.MATERIALUI,
      TECHS.SASS,
    ],
    banner: animalHostelBanner,
  },
  {
    name: "Invitación de boda",
    description:
      "Invitación de boda para dispositivos celulares y tablets con programación de recordatorio de Google Calendar, mapas de Google Maps y Waze para poder llegar al lugar de boda, cuenta regresiva del día y hora de la boda y formulario de confirmación de asistencia.",
    techs: [
      TECHS.REACT,
      TECHS.NEXTJS,
      TECHS.POSTGRESQL,
      TECHS.DOCKER,
      TECHS.MATERIALUI,
      TECHS.SASS,
    ],
    banner: weddingInvitationBanner,
  },
]

export default PROJECTS
