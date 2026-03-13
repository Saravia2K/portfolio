export default function List({ list }: ListProps) {
  return (
    <ul className="w-full list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
      {list.map((l) => (
        <li key={l}>{l}</li>
      ))}
    </ul>
  );
}

type ListProps = {
  list: string[];
};
