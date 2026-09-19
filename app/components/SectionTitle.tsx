export default function SectionTitle({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const line = tone === "dark" ? "bg-white/25" : "bg-black/20";
  return (
    <div className="flex items-center gap-6 mb-12">
      <span className={`h-px flex-1 ${line}`} />
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">{children}</h2>
      <span className={`h-px flex-1 ${line}`} />
    </div>
  );
}
