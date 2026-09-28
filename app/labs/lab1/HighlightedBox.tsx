export default function HighlightedBox({
  color = "lightblue",
  children,
}: { color?: string; children: React.ReactNode }) {
  return <div style={{ border: `2px solid ${color}`, padding: 10 }}>{children}</div>;
}