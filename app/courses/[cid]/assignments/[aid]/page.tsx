export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h3>Assignment Editor</h3>
      <label>Name: <input id="wd-name" defaultValue="A1 — HTML user interfaces" /></label><br /><br />
      <label>Description: <textarea defaultValue="Build the Labs HTML work and prototype Kambaz screens." /></label><br /><br />
      <label>Points: <input type="number" defaultValue={125} /></label><br /><br />
      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}