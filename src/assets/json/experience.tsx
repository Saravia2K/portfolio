import { ExperienceItem } from "@/lib/types";
import TECHS from "./techs";
import List from "@/components/common/list";

const EXPERIENCE: Array<ExperienceItem & { description: React.ReactNode }> = [
  {
    jobTitle: "Webmaster",
    location: "Colombia, Bogotá",
    company: "Ciprés Mercadeo Educativo",
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
    description: (
      <List
        list={[
          "Gestión de WordPress y desarrollo de nuevas funcionalidades",
          "Implementación de Firebase en todos los sitios web",
          "Desarrollo de nuevo sitio web hecho con Laravel, React y MySQL",
          "Despliegue de aplicación Laravel/React con servidor FTP",
          "Implementación de SEO mejorando el tráfico del sitio web en un 150%",
        ]}
      />
    ),
  },
  {
    jobTitle: "Fullstack JavaScript Developer",
    location: "San Salvador, El Salvador",
    company: "Focus ITO",
    dates: {
      from: "2022-04-01",
      to: "2023-08-01",
    },
    techs: [
      TECHS.NODEJS,
      TECHS.EXPRESSJS,
      TECHS.REACT,
      TECHS.NEXTJS,
      TECHS.DOCKER,
      TECHS.POSTGRESQL,
      TECHS.REDIS,
      TECHS.AWS,
    ],
    description: (
      <List
        list={[
          "Creación y mantenimiento de API con NodeJS/Express.js con conexión a base de datos usando Prisma.io",
          "Conexión con bucket AWS S3 para almacenamiento de imágenes",
          "Conexión con AWS Rekognition para analizar y filtrar imágenes",
          "Desarrollo de panel de administración con Next.js para sincronizar datos usados en aplicación móvil desarrollada con React Native",
          "Creación de contenedores Docker para desarrollo y producción",
          "Modelado y creación de base de datos usando PostgreSQL",
          "Uso de Redis para almacenar ubicaciones de usuarios actuales",
        ]}
      />
    ),
  },
  {
    jobTitle: "Software Developer for Projects | Fullstack developer",
    location: "San Salvador, El Salvador",
    company: "ClearView El Salvador",
    dates: {
      from: "2023-08-01",
      to: "2024-03-01",
    },
    techs: [TECHS.ANGULAR, TECHS.DOTNET, TECHS.SQLSERVER],
    description: (
      <List
        list={[
          "Uso de Angularjs y Angular2+ para crear el front-end de un sistema grande para centros de llamadas que utiliza métricas",
          "Uso de C# NET MVC para crear API y métodos web para llenar el front-end con datos y procesar datos entrantes",
          "Gestión de SQL Server haciendo consultas de alto rendimiento para crear y/o recuperar datos",
        ]}
      />
    ),
  },
  {
    jobTitle: "Senior Frontend Developer",
    location: "San Salvador, El Salvador",
    company: "Byte",
    dates: {
      from: "2024-03-01",
      to: new Date(),
    },
    current: true,
    techs: [TECHS.ANGULAR, TECHS.RXJS, TECHS.POSTMAN],
    description: (
      <List
        list={[
          "Diseño e implementación de interfaces de usuario dinámicas y escalables utilizando Angular 14, garantizando un rendimiento óptimo y una experiencia de usuario fluida para una empresa bancaria",
          "Conexión y consumo de APIs RESTful para garantizar la correcta comunicación y funcionalidad del sistema, optimizando la interacción entre los servicios frontend y backend",
        ]}
      />
    ),
  },
];

export default EXPERIENCE;
