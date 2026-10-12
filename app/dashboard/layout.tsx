import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav
        id="wd-kambaz-navigation"
        className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
      >
        <a
          href="https://www.northeastern.edu/"
          id="wd-neu-link"
          target="_blank"
          rel="noreferrer"
          className="block bg-black py-3 text-center text-white text-xs"
        >
          NEU
        </a>
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
        <Link
          href="/labs"
          id="wd-labs-link"
          className="block bg-black py-3 text-center text-sm text-white no-underline"
        >
          <LiaCogSolid className="inline-block text-3xl text-red-600" />
          <br />
          Labs
        </Link>
      </nav>
      <div className="md:ml-[120px] p-3">{children}</div>
    </div>
  );
}