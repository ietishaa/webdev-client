export default function Blurs() {
  return (
    <div className="relative w-40 h-20 bg-cover bg-center" style={{ backgroundImage: "url(/next.svg)" }}>
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />
    </div>
  );
}