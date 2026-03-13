import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input(props: InputProps) {
  return (
    <input
      className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-white focus:ring-blue-500"
      {...props}
    />
  );
}

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
