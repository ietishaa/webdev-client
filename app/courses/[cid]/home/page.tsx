export default function Home() {
  return (
    <div id="wd-home" className="space-y-4">
      <div id="wd-course-status" className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold mb-1">Course Status</h3>
        <p className="text-green-700">Enrolled — In Progress</p>
      </div>
      <div className="border rounded-lg shadow-sm">
        <div className="bg-gray-200 font-semibold p-2">Week 1</div>
        <ul className="divide-y">
          <li className="p-2">Lesson 1 — Introduction</li>
          <li className="p-2">Lesson 2 — Setup</li>
        </ul>
      </div>
    </div>
  );
}