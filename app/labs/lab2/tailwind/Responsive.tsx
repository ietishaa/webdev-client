export default function Responsive() {
  return (
    <div>
      <div className="bg-red-300 md:bg-blue-300 p-2">Breakpoint color change</div>
      <div className="hidden md:block p-2 bg-yellow-200">Visible on md+</div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="bg-gray-300 p-2">A</div>
        <div className="bg-gray-300 p-2">B</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="bg-purple-200 p-2">1</div>
        <div className="bg-purple-200 p-2">2</div>
        <div className="bg-purple-200 p-2">3</div>
      </div>
      <p className="text-sm md:text-lg p-1 md:p-4">Responsive spacing & text size</p>
    </div>
  );
}