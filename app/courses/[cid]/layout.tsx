import Link from "next/link";
import coursesData from "@/app/database/courses.json";
import KambazNavigation from "@/app/KambazNavigation";
import CourseBreadcrumb from "./CourseBreadcrumb";

export default async function CourseLayout({
  children,
  params,
}: { children: React.ReactNode; params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const course = coursesData.find((c) => c._id === cid);
  const links = [
    ["home", "Home"], ["modules", "Modules"], ["piazza", "Piazza"],
    ["zoom", "Zoom"], ["quizzes", "Quizzes"], ["assignments", "Assignments"],
    ["grades", "Grades"], ["people", "People"],
  ];
  return (
    <div>
      <KambazNavigation />
      <div
        id="wd-courses-navigation"
        className="hidden md:block fixed top-0 bottom-0 left-[120px] w-[140px] bg-white border-r"
      >
        <ul className="list-none p-0 m-0">
          {links.map(([href, label]) => (
            <li key={href} className="border-b">
              <Link
                href={`/courses/${cid}/${href}`}
                className="block px-4 py-3 text-sm text-black no-underline hover:bg-gray-100"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:ml-[260px] p-4">
        <CourseBreadcrumb courseName={course?.name ?? "Unknown Course"} />
        {children}
      </div>
    </div>
  );
}