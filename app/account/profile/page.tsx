export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-sm space-y-3">
      <h3 className="text-xl font-bold">Profile</h3>
      <input defaultValue="Ietisha Rathod" className="border rounded w-full p-2" />
      <button className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700">Update</button>
    </div>
  );
}