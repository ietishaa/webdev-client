import fs from "fs";
import path from "path";

export default function ServerInfo() {
  let files: string[] = [];
  try {
    const dirPath = path.join(process.cwd(), "app", "labs", "lab3");
    files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".tsx")).slice(0, 5);
  } catch {
    files = ["page.tsx", "Pathname.tsx", "ServerInfo.tsx"];
  }
  return (
    <div>
      <h4>Server Component: Server Information</h4>
      <ul>
        {files.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <p>arch: {process.arch}</p>
      <p>platform: {process.platform}</p>
    </div>
  );
}