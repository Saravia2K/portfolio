import { PropsWithChildren } from "react";

export default function PageSection({ children, asPage }: PageSectionProps) {
  return <section className={`mt-${asPage ? 10 : 30}`}>{children}</section>;
}

type PageSectionProps = PropsWithChildren<{
  asPage?: boolean;
}>;
