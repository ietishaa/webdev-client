export default function Blurs() {
  return (
    <div className="flex gap-4">
      <div className="w-24 h-24 bg-blue-400 blur-sm" />
      <div className="w-24 h-24 bg-blue-400 blur-md" />
      <div className="w-24 h-24 bg-blue-400" />
    </div>
  );
}