"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PropsWithChildren } from "react";

export default function WithBackButton({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <div className="h-full w-full">
      <Button onClick={() => router.back()}>
        <ArrowLeft />
      </Button>
      {children}
    </div>
  );
}
