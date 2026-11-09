"use client";
import { useState, use } from "react";
import modulesData from "@/app/database/modules.json";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = use(params);
  const [modules, setModules] = useState(modulesData.filter((m) => m.course === cid));
  const [moduleName, setModuleName] = useState("");

  const addModule = () => {
    setModules([...modules, { _id: `m${Date.now()}`, name: moduleName, course: cid, lessons: [] }]);
    setModuleName("");
  };
  const deleteModule = (id: string) => setModules(modules.filter((m) => m._id !== id));
  const editModule = (id: string) => {
    const newName = prompt("Edit module name:");
    if (newName) setModules(modules.map((m) => (m._id === id ? { ...m, name: newName } : m)));
  };

  return (
    <div id="wd-modules">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
      <ul className="list-none p-0 m-0 space-y-4">
        {modules.map((m) => (
          <li key={m._id} className="border border-gray-300 rounded">
            <div className="bg-gray-200 font-semibold p-3 border-l-4 border-l-green-600 flex justify-between items-center">
              {m.name}
              <ModuleControlButtons moduleId={m._id} deleteModule={deleteModule} editModule={editModule} />
            </div>
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