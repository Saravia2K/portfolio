import clsx from "clsx";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export default function Textarea(props: TextareaProps) {
  const { className, ..._props } = props;
  return (
    <textarea
      id="message"
      className={clsx(
        "block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500",
        className,
      )}
      {..._props}
    ></textarea>
  );
}

type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
