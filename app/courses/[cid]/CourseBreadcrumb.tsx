"use client";
import { usePathname } from "next/navigation";

export default function CourseBreadcrumb({ courseName }: { courseName: string }) {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const raw = parts[3] || "home";
  const section = raw.charAt(0).toUpperCase() + raw.slice(1);
  return (
    <h2 id="wd-course-breadcrumb">
      {courseName} &gt; {section}
    </h2>
  );
}