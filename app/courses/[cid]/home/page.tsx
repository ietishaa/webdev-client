export default function Home() {
  return (
    <div id="wd-home" className="md:flex gap-4">
      <div className="hidden lg:block w-[200px] shrink-0">
        <div id="wd-course-status" className="border rounded p-3 mb-3">
          <h5 className="font-bold mb-2">Course Status</h5>
          <button className="block w-full bg-green-700 text-white text-sm py-1 rounded mb-1">
            Published
          </button>
          <button className="block w-full border text-sm py-1 rounded">
            Unpublish
          </button>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2">Modules</h3>
        <ul className="list-none p-0 m-0 space-y-2">
          <li className="border rounded p-3">
            <div className="font-semibold">Week 1</div>
            <ul className="list-none p-0 m-0 mt-1 text-sm text-gray-700">
              <li>Lesson 1 — Introduction</li>
              <li>Lesson 2 — Setup</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}