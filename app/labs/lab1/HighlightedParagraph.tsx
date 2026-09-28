export default function HighlightedParagraph({
  text,
  color = "yellow",
}: { text: string; color?: string }) {
  return <p style={{ backgroundColor: color, padding: 8 }}>{text}</p>;
}