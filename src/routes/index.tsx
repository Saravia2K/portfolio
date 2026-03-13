import { createFileRoute } from '@tanstack/react-router'

import avatar from "@/assets/images/profile_pic.png"

export const Route = createFileRoute('/')({ component: App, head: () => ({ links: [{ rel: "preload", href: avatar, as: "image" }] }) })

function App() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  )
}
