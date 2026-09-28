export default function YourForm() {
  return (
    <form id="wd-your-form">
      <label>Name: <input type="text" name="name" defaultValue="Ietisha" /></label><br />
      <label>Bio: <textarea name="bio" defaultValue="University student" /></label><br />
      <label>Year:
        <select name="year" defaultValue="Sophomore">
          <option>Freshman</option>
          <option>Sophomore</option>
          <option>Junior</option>
          <option>Senior</option>
        </select>
      </label><br />
      <label><input type="radio" name="mode" defaultChecked /> Full-time</label>
      <label><input type="radio" name="mode" /> Part-time</label><br />
      <label><input type="checkbox" name="subscribe" /> Subscribe</label><br />
      <button type="button">Save</button>
      <button type="button">Cancel</button>
    </form>
  );
}