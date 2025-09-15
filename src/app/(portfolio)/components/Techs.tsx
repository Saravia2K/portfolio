import { Layers } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import TECHS from "@/assets/json/techs";

export default function Techs() {
  return (
    <section className="mt-10 mb-30">
      <div className="flex gap-3 text-xl font-bold text-(--chart-2)">
        <Layers />
        <h3>Demás tecnologías</h3>
      </div>
      {Object.entries(CATEGORIES).map(([category_name, techs], i) => (
        <div key={i} className="mt-7 sm:grid sm:grid-cols-[40%_1fr]">
          <span className="mb-3 block text-xl capitalize">{category_name}</span>
          <div className="flex flex-wrap gap-7 text-4xl">
            {techs.map(({ icon: I, text }, j) => (
              <Tooltip key={j}>
                <TooltipTrigger>
                  <I />
                </TooltipTrigger>
                <TooltipContent>{text}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

const CATEGORIES = {
  frontend: [TECHS.ANGULAR, TECHS.ASTRO],
  backend: [
    TECHS.EXPRESSJS,
    TECHS.FASTAPI,
    TECHS.NODEJS,
    TECHS.SUPABASE,
    TECHS.BETTERAUTH,
  ],
  "bases de datos": [
    TECHS.SQLSERVER,
    TECHS.REDIS,
    TECHS.MYSQL,
    TECHS.MONGODB,
    TECHS.SQLITE,
  ],
  "fullstack frameworks": [TECHS.LARAVEL, TECHS.DJANGO, TECHS.DOTNET],
  UI: [TECHS.SHADCN, TECHS.TAILWINDCSS],
  librerias: [TECHS.REDUX, TECHS.RXJS, TECHS.SOCKETIO, TECHS.STYLED_COMPONENTS],
  cloud: [TECHS.AWS],
  herramientas: [
    TECHS.DOCKER,
    TECHS.ATLASSIAN,
    TECHS.POSTMAN,
    TECHS.SWAGGER,
    TECHS.TWILIO,
    TECHS.FIREBASE,
  ],
};
