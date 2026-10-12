import Link from "next/link";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div id="wd-account-navigation" className="flex flex-col w-36 bg-gray-100 border-r p-3 gap-2 text-sm">
        <Link href="/account/signin" className="hover:text-blue-600 hover:underline">Sign in</Link>
        <Link href="/account/signup" className="hover:text-blue-600 hover:underline">Sign up</Link>
        <Link href="/account/profile" className="hover:text-blue-600 hover:underline">Profile</Link>
      </div>
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}