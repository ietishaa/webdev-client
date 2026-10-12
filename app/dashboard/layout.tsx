import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div id="wd-kambaz-navigation" className="flex flex-col items-center w-24 bg-black text-white min-h-screen p-3 gap-4 fixed">
        <Link href="/dashboard" className="w-16 h-16 flex items-center justify-center rounded bg-red-700 hover:bg-red-600 text-xs text-center">
          Dashboard
        </Link>
        <Link href="/account/profile" className="w-16 h-16 flex items-center justify-center rounded hover:bg-gray-700 text-xs text-center">
          Account
        </Link>
        <a href="https://github.com/ietishaa/webdev-client" target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center rounded hover:bg-gray-700 text-xs text-center">
          GitHub
        </a>
      </div>
      <div className="flex-1 ml-24">{children}</div>
    </div>
  );
}