export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="max-w-xl space-y-4">
      <h3 className="text-xl font-bold">Assignment Editor</h3>
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input id="wd-name" defaultValue="A1 — HTML user interfaces" className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea defaultValue="Build the Labs HTML work and prototype Kambaz screens." className="border rounded w-full p-2 h-24" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Points</label>
        <input type="number" defaultValue={125} className="border rounded w-32 p-2" />
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">Save</button>
        <button className="bg-gray-200 rounded px-4 py-2 hover:bg-gray-300">Cancel</button>
      </div>
    </div>
  );
}