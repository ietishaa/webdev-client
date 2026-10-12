export default function GridSpan() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-2 bg-indigo-300 p-2">Spans 2</div>
      <div className="bg-indigo-300 p-2">1</div>
      <div className="bg-indigo-300 p-2">1</div>
    </div>
  );
}