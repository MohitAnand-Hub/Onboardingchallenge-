export default function StatsCard({
  title,
  value,
  description,
  color,
}: {
  title: string;
  value: string;
  description: string;
  color: string;
}) {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className={`text-2xl font-bold ${color}`}>{value}</h2>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
}
