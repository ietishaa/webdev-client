import Link from "next/link";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 150, padding: 10 }}>
        <Link href="/account/signin">Sign in</Link><br />
        <Link href="/account/signup">Sign up</Link><br />
        <Link href="/account/profile">Profile</Link>
      </div>
      <div style={{ flex: 1, padding: 10 }}>{children}</div>
    </div>
  );
}