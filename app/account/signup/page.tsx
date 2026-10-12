export default function SignUp() {
  return (
    <div id="wd-signup-screen" className="max-w-sm space-y-3">
      <h3 className="text-xl font-bold">Sign up</h3>
      <input placeholder="username" className="border rounded w-full p-2" />
      <input placeholder="password" type="password" className="border rounded w-full p-2" />
      <button className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700">Sign up</button>
    </div>
  );
}