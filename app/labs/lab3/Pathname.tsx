"use client";
import { usePathname } from "next/navigation";

export default function Pathname() {
  const pathname = usePathname();
  return (
    <div>
      <h4>Client Component: Pathname</h4>
      <p>Current pathname: {pathname}</p>
      <p>Pathname length: {pathname.length}</p>
    </div>
  );
}