"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import usersData from "@/app/database/users.json";
import { useAccountContext } from "@/app/AccountContext";

export default function SignIn() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signin = () => {
    const user = usersData.find(
      (u) => u.username === credentials.username && u.password === credentials.password
    );
    if (!user) return;
    setCurrentUser(user as any);
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="max-w-sm space-y-3">
      <h3 className="text-xl font-bold">Sign in</h3>
      <input
        placeholder="username"
        id="wd-username"
        className="border rounded w-full p-2"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className="border rounded w-full p-2"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="button" onClick={signin} id="wd-signin-btn" className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700">
        Sign in
      </button>
      <Link href="/account/signup" id="wd-signup-link" className="block text-center text-blue-600 hover:underline">
        Sign up
      </Link>
    </div>
  );
}