import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 120, padding: 10, background: "#eee" }}>
        <Link href="/dashboard">Dashboard</Link><br />
        <Link href="/account/profile">Account</Link><br />
        <a href="https://github.com/ietishaa/webdev-client" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}