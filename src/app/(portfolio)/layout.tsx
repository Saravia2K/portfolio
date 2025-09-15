import { type PropsWithChildren } from "react";
import ProfileCard from "./components/ProfileCard";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <section className="m-auto flex min-h-screen w-[60%] gap-20 text-white">
      <aside className="sticky top-40 h-fit self-start">
        <ProfileCard />
      </aside>
      <main className="z-10 w-full">{children}</main>
    </section>
  );
}
