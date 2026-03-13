import { PropsWithChildren } from "react";

export default function Error({ children }: PropsWithChildren) {
  return (
    <span className="mt-2 inline-block text-[0.8rem] text-red-400">
      {children}
    </span>
  );
}
