import { createFileRoute, Outlet, useRouter } from "@tanstack/react-router";
import { m } from "#/paraglide/messages";

import ProfileCard from "@/components/react-bits/profile-card";

import profilePic from "@/assets/images/profile_pic.png";

export const Route = createFileRoute("/_portfolio")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();

  return (
    <section className="z-10 min-h-screen w-[90%] text-wrap text-white sm:w-[80%] xl:grid xl:w-[70%] xl:grid-cols-[auto_1fr] xl:gap-20">
      <aside className="m-auto mb-10 w-fit xl:sticky xl:top-40 xl:m-0 xl:h-fit xl:self-start">
        <ProfileCard
          avatarUrl={profilePic}
          name="Diego Saravia"
          title="Software Engineer"
          status="Online"
          contactText={m.contact()}
          handle="Fullstack web dev"
          onContactClick={() => router.navigate({ to: "/contactar" })}
        />
      </aside>
      <main className="z-10 w-full p-5 lg:p-0">
        <Outlet />
      </main>
    </section>
  );
}
