import assignmentsData from "@/app/database/assignments.json";

export default async function AssignmentEditor({
  params,
}: { params: Promise<{ cid: string; aid: string }> }) {
  const { aid } = await params;
  const assignment = assignmentsData.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="max-w-xl space-y-4">
      <h3 className="text-xl font-bold">Assignment Editor</h3>
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input id="wd-name" defaultValue={assignment?.title ?? ""} className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Points</label>
        <input type="number" defaultValue={assignment?.points ?? 100} className="border rounded w-32 p-2" />
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Save</button>
        <button className="bg-gray-200 rounded px-4 py-2 hover:bg-gray-300">Cancel</button>
      </div>
    </div>
  );
}