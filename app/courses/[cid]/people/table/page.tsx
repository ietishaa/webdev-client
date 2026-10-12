export default function PeopleTable() {
  const people = [
    { name: "Ietisha Rathod", role: "Student" },
    { name: "Prof. Example", role: "Instructor" },
  ];
  return (
    <div id="wd-people">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Role</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.name} className="hover:bg-gray-50">
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}