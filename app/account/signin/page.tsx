import Link from "next/link";

export default function SignIn() {
  return (
    <div id="wd-signin-screen" className="max-w-sm space-y-3">
      <h3 className="text-xl font-bold">Sign in</h3>
      <input placeholder="username" className="border rounded w-full p-2" />
      <input placeholder="password" type="password" className="border rounded w-full p-2" />
      <Link href="/dashboard" id="wd-signin-btn" className="block text-center bg-blue-600 text-white rounded p-2 hover:bg-blue-700">
        Sign in
      </Link>
    </div>
  );
}