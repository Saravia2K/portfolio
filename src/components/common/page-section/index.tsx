import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export default function PageSection({ children, asPage }: PageSectionProps) {
  return <section className={cn(`mt-${asPage ? 10 : 20}`)}>{children}</section>;
}

type PageSectionProps = PropsWithChildren<{
  asPage?: boolean;
}>;
