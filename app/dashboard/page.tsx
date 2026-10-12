import Link from "next/link";

export default function Dashboard() {
  const courses = [
    { id: "1234", name: "Web Development" },
    { id: "5678", name: "Algorithms" },
    { id: "9012", name: "Numerical Analysis" },
  ];
  return (
    <div id="wd-dashboard" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="flex flex-wrap gap-4">
        {courses.map((c) => (
          <Link key={c.id} href={`/courses/${c.id}/home`}>
            <div className="border rounded-lg shadow-sm p-4 w-48 h-32 flex items-center justify-center text-center hover:shadow-md hover:bg-gray-50 transition">
              {c.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}