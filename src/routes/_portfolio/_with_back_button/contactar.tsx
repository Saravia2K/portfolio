import { createFileRoute } from "@tanstack/react-router"
import Contact from "#/components/sections/contact"

export const Route = createFileRoute("/_portfolio/_with_back_button/contactar")(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <Contact asPage />
}
