import KambazNavigation from "../KambazNavigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <KambazNavigation />
      <div className="md:ml-[120px] p-3">{children}</div>
    </div>
  );
}