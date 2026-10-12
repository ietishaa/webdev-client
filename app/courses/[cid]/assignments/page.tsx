import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Search for Assignments"
          className="border rounded px-3 py-2 flex-1 text-sm"
        />
        <button className="border px-3 py-2 rounded text-sm">+ Group</button>
        <button className="bg-red-700 text-white px-3 py-2 rounded text-sm">+ Assignment</button>
      </div>
      <div className="border rounded">
        <div className="bg-gray-100 font-semibold p-3">ASSIGNMENTS</div>
        <ul className="list-none p-0 m-0 divide-y">
          <li className="p-3 border-l-4 border-l-green-500">
            <Link href="/courses/1234/assignments/a1" className="font-medium no-underline text-black">
              A1 — HTML user interfaces
            </Link>
            <p className="text-xs text-gray-500 m-0">Multiple Modules | Not available until... | Due date</p>
          </li>
          <li className="p-3 border-l-4 border-l-green-500">
            <Link href="/courses/1234/assignments/a2" className="font-medium no-underline text-black">
              A2 — CSS styling
            </Link>
            <p className="text-xs text-gray-500 m-0">Multiple Modules | Not available until... | Due date</p>
          </li>
        </ul>
      </div>
    </div>
  );
}