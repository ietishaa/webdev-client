import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="space-y-2">
      <h3 className="text-xl font-bold">Assignments</h3>
      <div className="border rounded-lg divide-y">
        <Link href="/courses/1234/assignments/a1" className="block p-3 hover:bg-gray-50">A1 — HTML user interfaces</Link>
        <Link href="/courses/1234/assignments/a2" className="block p-3 hover:bg-gray-50">A2 — CSS styling</Link>
      </div>
    </div>
  );
}