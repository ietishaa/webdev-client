"use client";
const hello = () => { alert("Hello World!"); };
const helloMe = () => { alert("Hello Ietisha!"); };
export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button type="button" onClick={hello} id="wd-onclick-hello" className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white">Click Hello</button>
      <button type="button" onClick={helloMe} id="wd-onclick-hello-me" className="rounded bg-pink-600 px-3 py-1.5 text-sm font-medium text-white">Click Hello Ietisha</button>
      <hr />
    </div>
  );
}