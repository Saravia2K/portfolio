import type { DetailedHTMLProps, LabelHTMLAttributes } from "react";

export default function Label(props: LabelProps) {
  return (
    <label
      className="mb-2 block text-sm font-medium text-white"
      {...props}
    ></label>
  );
}

type LabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;
