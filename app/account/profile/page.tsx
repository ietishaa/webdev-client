"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "@/app/AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;

  return (
    <div id="wd-profile-screen" className="max-w-sm space-y-3">
      <h3 className="text-xl font-bold">Profile</h3>
      <input id="wd-username" className="border rounded w-full p-2" value={profile.username} onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
      <input id="wd-password" type="password" className="border rounded w-full p-2" value={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
      <input id="wd-first-name" className="border rounded w-full p-2" value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
      <input id="wd-last-name" className="border rounded w-full p-2" value={profile.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
      <input id="wd-email" className="border rounded w-full p-2" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
      <select id="wd-role" className="border rounded w-full p-2" value={profile.role} onChange={(e) => setProfile({ ...profile, role: e.target.value as User["role"] })}>
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