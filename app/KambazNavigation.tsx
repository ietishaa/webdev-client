"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";

const links = [
  { label: "Account", href: "/account/profile", icon: FaRegCircleUser, id: "wd-account-link", iconColor: "text-white" },
  { label: "Dashboard", href: "/dashboard", icon: AiOutlineDashboard, id: "wd-dashboard-link", match: "/dashboard" },
  { label: "Courses", href: "/courses/1234/home", icon: LiaBookSolid, id: "wd-courses-link", match: "/courses" },
  { label: "Labs", href: "/labs", icon: LiaCogSolid, id: "wd-labs-link" },
];

export default function KambazNavigation() {
  const pathname = usePathname();

  return (
    <nav id="wd-kambaz-navigation" className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block">
      <a href="https://www.northeastern.edu/" target="_blank" rel="noreferrer" className="block bg-black py-3 text-center text-white text-xs">
        NEU
      </a>
      {links.map((link) => {
        const isActive = link.match ? pathname.startsWith(link.match) : false;
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            id={link.id}
            className={`block py-3 text-center text-sm no-underline ${
              isActive ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className={`inline-block text-3xl ${link.iconColor ?? (isActive ? "text-red-600" : "text-red-600")}`} />
            <br />
            {link.label}
          </Link>
        );
      })}
      <a href="https://github.com/ietishaa/webdev-client" target="_blank" rel="noreferrer" className="block bg-black py-3 text-center text-sm text-white no-underline">
        <LiaBookSolid className="inline-block text-3xl text-red-600" />
        <br />
        GitHub
      </a>
    </nav>
  );
}