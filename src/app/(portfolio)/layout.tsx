import { type PropsWithChildren } from "react";
import ProfileCard from "./components/ProfileCard";
import JSONLD from "./components/JSONLD";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <section className="z-10 min-h-screen w-[90%] text-wrap text-white sm:w-[80%] xl:grid xl:w-[70%] xl:grid-cols-[auto_1fr] xl:gap-20">
      <JSONLD />
      <aside className="m-auto mb-10 w-fit xl:sticky xl:top-40 xl:m-0 xl:h-fit xl:self-start">
        <ProfileCard />
      </aside>
      <main className="z-10 w-full p-5 lg:p-0">{children}</main>
    </section>
  );
}
