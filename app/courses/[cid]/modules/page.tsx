export default function Modules() {
  const weeks = [
    { title: "Week 1", lessons: ["Lesson 1: Intro", "Lesson 2: Setup"] },
    { title: "Week 2", lessons: ["Lesson 1: HTML", "Lesson 2: CSS"] },
  ];
  return (
    <div id="wd-modules">
      <div id="wd-modules-controls" className="flex gap-2 mb-3">
        <button className="border px-3 py-1 rounded text-sm">Collapse All</button>
        <button className="border px-3 py-1 rounded text-sm">View Progress</button>
        <button className="bg-red-700 text-white px-3 py-1 rounded text-sm ml-auto">+ Module</button>
      </div>
      <ul className="list-none p-0 m-0 space-y-4">
        {weeks.map((w) => (
          <li key={w.title} className="border border-gray-300 rounded">
            <div className="bg-gray-200 font-semibold p-3 border-l-4 border-l-green-600">
              {w.title}
            </div>
            <ul className="list-none p-0 m-0 divide-y">
              {w.lessons.map((l) => (
                <li key={l} className="p-3 border-l-4 border-l-green-500">{l}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}