import Link from "next/link";

export default function Dashboard() {
  const courses = [
    { id: "1234", name: "Web Development" },
    { id: "5678", name: "Algorithms" },
    { id: "9012", name: "Numerical Analysis" },
  ];
  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", gap: 15 }}>
        {courses.map((c) => (
          <Link key={c.id} href={`/courses/${c.id}/home`}>
            <div style={{ border: "1px solid black", padding: 15, width: 150 }}>
              {c.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
