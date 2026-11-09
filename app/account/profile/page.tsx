"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext } from "@/app/AccountContext";

export default function Profile() {
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.replace("/account/signin");
    }
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.replace("/account/signin");
  };

  if (!currentUser) return null;

  return (
    <div id="wd-profile-screen" className="max-w-sm space-y-3">
      <h3 className="text-xl font-bold">Profile</h3>
      <input id="wd-username" className="border rounded w-full p-2" defaultValue={currentUser.username} />
      <input id="wd-password" type="password" className="border rounded w-full p-2" defaultValue={currentUser.password} />
      <input id="wd-first-name" className="border rounded w-full p-2" defaultValue={currentUser.firstName} />
      <input id="wd-last-name" className="border rounded w-full p-2" defaultValue={currentUser.lastName} />
      <input id="wd-email" className="border rounded w-full p-2" defaultValue={currentUser.email} />
      <select id="wd-role" className="border rounded w-full p-2" defaultValue={currentUser.role}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button type="button" onClick={signout} id="wd-signout-btn" className="w-full bg-gray-600 text-white rounded p-2 hover:bg-gray-700">
        Sign out
      </button>
    </div>
  );
}