export default function Modules() {
  const weeks = [
    { title: "Week 1", lessons: ["Lesson 1: Intro", "Lesson 2: Setup"] },
    { title: "Week 2", lessons: ["Lesson 1: HTML", "Lesson 2: CSS"] },
  ];
  return (
    <div id="wd-modules" className="space-y-4">
      {weeks.map((w) => (
        <div key={w.title} className="border rounded-lg shadow-sm">
          <div className="bg-gray-200 font-semibold p-2">{w.title}</div>
          <ul className="divide-y">
            {w.lessons.map((l) => (
              <li key={l} className="p-2 hover:bg-gray-50">{l}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}