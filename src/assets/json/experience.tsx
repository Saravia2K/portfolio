import type { ExperienceItem, Multilangual } from "@/lib/types";
import TECHS from "./techs";
import List from "@/components/common/list";

type Experience = Array<ExperienceItem & { description: React.ReactNode }>;
const EXPERIENCE: Multilangual<Experience> = {
  en: [
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
            "WordPress management and development of new functionalities",
            "Implementation of Firebase in all websites",
            "Development of new website made with Laravel, React and MySQL",
            "Deployment of Laravel/React application with FTP server",
            "SEO implementation improving website traffic by 150%",
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
            "Creation and maintenance of API with NodeJS/Express.js with database connection using Prisma.io",
            "Connection with AWS S3 bucket for image storage",
            "Connection with AWS Rekognition to analyze and filter images",
            "Development of administration panel with Next.js to synchronize data used in mobile application developed with React Native",
            "Creation of Docker containers for development and production",
            "Database modeling and creation using PostgreSQL",
            "Use of Redis to store current user locations",
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
            "Use of Angularjs and Angular2+ to create the front-end of a large system for call centers that uses metrics",
            "Use of C# NET MVC to create API and web methods to fill the front-end with data and process incoming data",
            "Management of SQL Server making high-performance queries to create and/or retrieve data",
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
            "Design and implementation of dynamic and scalable user interfaces using Angular 14, ensuring optimal performance and a fluid user experience for a banking company",
            "Connection and consumption of RESTful APIs to ensure the correct communication and functionality of the system, optimizing the interaction between frontend and backend services",
          ]}
        />
      ),
    },
  ],
  es: [
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
  ],
};

export default EXPERIENCE;
