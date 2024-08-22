export default function HeaderCard({ title }: { title: string }) {
  return (
    <div className="flex h-20 items-center justify-center rounded-md bg-neutral-200 align-middle">
      <h2 className="text-2xl font-semibold text-indigo-950">{title}</h2>
    </div>
  );
}
