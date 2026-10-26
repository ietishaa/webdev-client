import modulesData from "@/app/database/modules.json";

export default async function Modules({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const modules = modulesData.filter((m) => m.course === cid);
  return (
    <div id="wd-modules">
      <ul className="list-none p-0 m-0 space-y-4">
        {modules.map((m) => (
          <li key={m._id} className="border border-gray-300 rounded">
            <div className="bg-gray-200 font-semibold p-3 border-l-4 border-l-green-600">{m.name}</div>
            <ul className="list-none p-0 m-0 divide-y">
              {m.lessons.map((l) => (
                <li key={l} className="p-3 border-l-4 border-l-green-500">{l}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}