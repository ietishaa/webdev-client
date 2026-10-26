import enrollmentsData from "@/app/database/enrollments.json";
import usersData from "@/app/database/users.json";

export default async function PeopleTable({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const enrolledIds = enrollmentsData.filter((e) => e.course === cid).map((e) => e.user);
  const people = usersData.filter((u) => enrolledIds.includes(u._id));
  return (
    <div id="wd-people">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p._id} className="hover:bg-gray-50">
              <td className="p-2 border">{p.firstName} {p.lastName}</td>
              <td className="p-2 border">{p.email}</td>
              <td className="p-2 border">{p.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}