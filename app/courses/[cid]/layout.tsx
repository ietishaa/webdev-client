import Link from "next/link";

export default async function CourseLayout({
  children,
  params,
}: { children: React.ReactNode; params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const links = [
    ["home", "Home"], ["modules", "Modules"], ["piazza", "Piazza"],
    ["zoom", "Zoom"], ["quizzes", "Quizzes"], ["assignments", "Assignments"],
    ["grades", "Grades"], ["people", "People"],
  ];
  return (
    <div className="flex">
      <div id="wd-courses-navigation" className="flex flex-col w-32 bg-gray-100 border-r p-3 gap-2 text-sm">
        {links.map(([href, label]) => (
          <Link key={href} href={`/courses/${cid}/${href}`} className="hover:text-blue-600 hover:underline">
            {label}
          </Link>
        ))}
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}