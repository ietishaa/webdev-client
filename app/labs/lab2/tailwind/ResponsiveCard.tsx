export default function ResponsiveCard() {
  return (
    <div className="max-w-sm md:max-w-md p-4 border rounded-lg shadow hover:shadow-lg transition">
      <h5 className="font-bold">Responsive Card</h5>
      <p className="text-sm text-gray-600">Resizes with breakpoints.</p>
    </div>
  );
}