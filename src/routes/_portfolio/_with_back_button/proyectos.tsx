import { createFileRoute } from "@tanstack/react-router"
import Projects from "#/components/sections/projects"

export const Route = createFileRoute("/_portfolio/_with_back_button/proyectos")(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <Projects asPage />
}
