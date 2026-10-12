import Link from "next/link";

export default function Dashboard() {
  const courses = [
    { id: "1234", name: "Web Development" },
    { id: "5678", name: "Algorithms" },
    { id: "9012", name: "Numerical Analysis" },
  ];
  return (
    <div id="wd-dashboard" className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <hr />
      <h3 className="text-lg font-semibold my-3">Published Courses</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {courses.map((c) => (
          <Link key={c.id} href={`/courses/${c.id}/home`} className="no-underline text-black">
            <div className="border rounded-lg shadow-sm overflow-hidden h-full">
              <div className="h-32 bg-gray-300 flex items-center justify-center text-sm text-gray-600">
                Course image
              </div>
              <div className="p-3">
                <h5 className="font-bold truncate">{c.name}</h5>
                <p className="text-sm text-gray-500 line-clamp-2">
                  Learn the fundamentals and apply them in projects.
                </p>
                <button className="mt-2 bg-blue-600 text-white text-sm px-3 py-1 rounded">
                  Go
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}