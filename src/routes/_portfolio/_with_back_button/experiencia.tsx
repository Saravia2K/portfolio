import { createFileRoute } from "@tanstack/react-router"

import Experience from "#/components/sections/experience"

export const Route = createFileRoute("/_portfolio/_with_back_button/experiencia")({
  component: RouteComponent,
})

function RouteComponent() {
  return <Experience asPage />
}
