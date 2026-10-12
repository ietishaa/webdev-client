import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <nav
        id="wd-kambaz-navigation"
        className="fixed bottom-0 top-0 z-20 w-[120px] bg-black"
      >
        <Link
          href="/account/profile"
          id="wd-account-link"
          className="block bg-black py-3 text-center text-sm text-white no-underline"
        >
          <FaRegCircleUser className="inline-block text-3xl text-white" />
          <br />
          Account
        </Link>
        <Link
          href="/dashboard"
          id="wd-dashboard-link"
          className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
        >
          <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
          <br />
          Dashboard
        </Link>
        <a
          href="https://github.com/ietishaa/webdev-client"
          target="_blank"
          rel="noreferrer"
          id="wd-github-link"
          className="block bg-black py-3 text-center text-sm text-white no-underline"
        >
          <LiaBookSolid className="inline-block text-3xl text-red-600" />
          <br />
          GitHub
        </a>
      </nav>
      <div className="flex-1 ml-[120px] p-3">{children}</div>
    </div>
  );
}