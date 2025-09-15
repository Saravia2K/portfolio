import { Project } from "@/lib/types";

import globalVillageBanner from "@/assets/images/projects/global_village.webp";
import sistecBanner from "@/assets/images/projects/sistec.webp";
import animalHostelBanner from "@/assets/images/projects/animal-hostel.webp";
import weddingInvitationBanner from "@/assets/images/projects/wedding_invitation.webp";
import TECHS from "./techs";

const PROJECTS: Project[] = [
  {
    name: "Global Village",
    description:
      "Sitio web con panel de administrador para promocionar clases de idiomas online de una empresa local.",
    techs: [TECHS.REACT, TECHS.NEXTJS, TECHS.POSTGRESQL, TECHS.DOCKER],
    banner: globalVillageBanner,
  },
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
    name: "Animal Hostel",
    description:
      "Sistema de administración de un hostal de animales donde se ofrecen diferentes servicios de cuidado de la higiene de perros. Este sistema lleva un historial de servicios hechos, inscripción de perros, dueños y encargados, así como fichas de ingresos de perros, recordatorios de citas diarias e información del animal, información necesaria para el servicio, etc.",
    techs: [
      TECHS.REACT,
      TECHS.NEXTJS,
      TECHS.POSTGRESQL,
      TECHS.DOCKER,
      TECHS.MATERIALUI,
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
    ],
    banner: weddingInvitationBanner,
  },
];

export default PROJECTS;
