import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <h3>Assignments</h3>
      <ul>
        <li><Link href="/courses/1234/assignments/a1">A1 — HTML user interfaces</Link></li>
        <li><Link href="/courses/1234/assignments/a2">A2 — CSS styling</Link></li>
      </ul>
    </div>
  );
}