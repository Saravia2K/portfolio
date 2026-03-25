import { Layers } from "lucide-react";
import { m } from "@/paraglide/messages";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import TECHS from "@/assets/json/techs";

export default function Techs() {
  return (
    <section className="mt-10">
      <div className="text-chart-2 flex gap-3 text-xl font-bold">
        <Layers />
        <h3>{m.other_techs_title()}</h3>
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
  frontend: [
    TECHS.NEXTJS,
    TECHS.TANSTACK,
    TECHS.ANGULAR,
    TECHS.ASTRO,
    TECHS.REACT_ROUTER,
  ],
  backend: [TECHS.NESTJS, TECHS.EXPRESSJS, TECHS.FASTAPI, TECHS.SUPABASE],
  [m.databases()]: [
    TECHS.SQLSERVER,
    TECHS.REDIS,
    TECHS.MYSQL,
    TECHS.MONGODB,
    TECHS.SQLITE,
  ],
  "fullstack frameworks": [
    TECHS.LARAVEL,
    TECHS.DJANGO,
    TECHS.DOTNET,
    // TECHS.RUBY_ON_RAILS,
  ],
  UI: [TECHS.SHADCN, TECHS.TAILWINDCSS, TECHS.SASS],
  [m.libraries()]: [
    TECHS.TANSTACKQUERY,
    TECHS.REDUX,
    TECHS.RXJS,
    TECHS.BETTERAUTH,
    TECHS.SOCKETIO,
    TECHS.STYLED_COMPONENTS,
  ],
  cloud: [TECHS.AWS, TECHS.VERCEL],
  [m.tools()]: [
    TECHS.DOCKER,
    TECHS.ATLASSIAN,
    TECHS.POSTMAN,
    TECHS.SWAGGER,
    TECHS.TWILIO,
    TECHS.FIREBASE,
  ],
};
