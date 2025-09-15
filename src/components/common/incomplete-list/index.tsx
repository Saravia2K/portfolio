"use client";

import { Fragment, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function IncompleteList<T>(props: IncompleteListProps<T>) {
  const { list, render, href, full, containerComponent: C } = props;
  const router = useRouter();

  const processedList = full ? list : list.slice(0, 1);
  const Container = C || Fragment;
  return (
    <>
      <Container>{processedList.map(render)}</Container>
      {!full && (
        <Button className="mt-10" onClick={() => router.push(href)}>
          Ver más <ArrowRight />
        </Button>
      )}
    </>
  );
}

type IncompleteListProps<T> = {
  list: T[];
  render: (item: T, i: number) => ReactNode;
  href: string;
  full?: boolean;
  containerComponent?: React.ElementType;
};
