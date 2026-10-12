import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div id="wd-kambaz-navigation" className="flex flex-col w-24 bg-black text-white min-h-screen p-3 gap-4">
        <Link href="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        <Link href="/account/profile" className="hover:text-blue-300">Account</Link>
        <a href="https://github.com/ietishaa/webdev-client" target="_blank" rel="noreferrer" className="hover:text-blue-300">GitHub</a>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}