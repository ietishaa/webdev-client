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
      <div
        id="wd-courses-navigation"
        className="hidden md:block fixed w-[140px] bg-white border-r"
      >
        <ul className="list-none p-0 m-0">
          {links.map(([href, label]) => (
            <li key={href} className="border-b">
              <Link
                href={`/courses/${cid}/${href}`}
                className="block px-4 py-3 text-sm text-black no-underline hover:bg-gray-100 border-l-4 border-l-transparent hover:border-l-red-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 md:ml-[140px] p-4">{children}</div>
    </div>
  );
}