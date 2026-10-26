import TOC from "./TOC";

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 150, padding: 10 }}>
        <TOC />
      </div>
      <div style={{ flex: 1, padding: 10 }}>{children}</div>
    </div>
  );
}