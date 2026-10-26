"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();
  const links = [
    { href: "/labs/lab1", label: "Lab 1" },
    { href: "/labs/lab2", label: "Lab 2" },
    { href: "/labs/lab3", label: "Lab 3" },
  ];
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {links.map((l) => {
        const active = pathname === l.href;
        return (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={active ? "page" : undefined}
              style={{
                fontWeight: active ? "bold" : "normal",
                color: active ? "red" : "black",
              }}
            >
              {l.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}