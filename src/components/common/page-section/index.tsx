import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

export default function PageSection({ children, asPage }: PageSectionProps) {
  return (
    <section
      className={cn({
        "mt-10": asPage,
        "mt-20": !asPage,
      })}
    >
      {children}
    </section>
  );
}

type PageSectionProps = PropsWithChildren<{
  asPage?: boolean;
}>;
