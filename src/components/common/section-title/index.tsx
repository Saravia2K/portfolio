export default function SectionTitle({ children }: { children: string }) {
  return (
    <h3 className="mb-5 text-center text-3xl font-bold text-(--chart-1)">
      {children}
    </h3>
  );
}
