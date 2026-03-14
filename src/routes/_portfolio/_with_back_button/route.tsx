import { Button } from "#/components/ui/button"
import { createFileRoute, Outlet, useRouter } from "@tanstack/react-router"
import { ArrowLeft } from "lucide-react"

export const Route = createFileRoute("/_portfolio/_with_back_button")({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()

  return (
    <div className="h-full w-full">
      <Button onClick={() => router.history.back()}>
        <ArrowLeft />
      </Button>
      <Outlet />
    </div>
  )
}
