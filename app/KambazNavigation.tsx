"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";
  const isCourse = pathname.startsWith("/courses/");

  const tile = (active: boolean) =>
    `block py-3 text-center text-sm no-underline ${active ? "bg-white text-red-600" : "bg-black text-white"}`;

  return (
    <nav id="wd-kambaz-navigation" className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block">
      <a href="https://www.northeastern.edu/" target="_blank" rel="noreferrer" className="block bg-black py-3 text-center text-white text-xs">
        NEU
      </a>
      <Link href="/account/profile" id="wd-account-link" className="block bg-black py-3 text-center text-sm text-white no-underline">
        <FaRegCircleUser className="inline-block text-3xl text-white" /><br />Account
      </Link>
      <Link href="/dashboard" id="wd-dashboard-link" className={tile(isDashboard)}>
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" /><br />Dashboard
      </Link>
      <Link href="/courses/1234/home" id="wd-courses-link" className={tile(isCourse)}>
        <LiaBookSolid className="inline-block text-3xl text-red-600" /><br />Courses
      </Link>
      <a href="https://github.com/ietishaa/webdev-client" target="_blank" rel="noreferrer" className="block bg-black py-3 text-center text-sm text-white no-underline">
        <LiaBookSolid className="inline-block text-3xl text-red-600" /><br />GitHub
      </a>
      <Link href="/labs" id="wd-labs-link" className="block bg-black py-3 text-center text-sm text-white no-underline">
        <LiaCogSolid className="inline-block text-3xl text-red-600" /><br />Labs
      </Link>
    </nav>
  );
}