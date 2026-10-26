import Link from "next/link";
import assignmentsData from "@/app/database/assignments.json";

export default async function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const assignments = assignmentsData.filter((a) => a.course === cid);
  return (
    <div id="wd-assignments">
      <div className="border rounded">
        <div className="bg-gray-100 font-semibold p-3">ASSIGNMENTS</div>
        <ul className="list-none p-0 m-0 divide-y">
          {assignments.map((a) => (
            <li key={a._id} className="p-3 border-l-4 border-l-green-500">
              <Link href={`/courses/${cid}/assignments/${a._id}`} className="font-medium no-underline text-black">
                {a.title}
              </Link>
              <p className="text-xs text-gray-500 m-0">{a.points} pts</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}