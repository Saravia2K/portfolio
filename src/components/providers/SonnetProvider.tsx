"use client";

import { type PropsWithChildren } from "react";
import { Toaster } from "sonner";

export default function SonnerProvider({ children }: PropsWithChildren) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
