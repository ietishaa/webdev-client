import YourForm from "./form-fields/YourForm";

export default function Forms() {
  return (
    <div id="wd-forms">
      <input id="wd-text-fields-username" placeholder="username" /><br />
      <textarea id="wd-textarea" placeholder="bio" /><br />
      <label><input id="wd-radio-comedy" type="radio" name="genre" /> Comedy</label><br />
      <select id="wd-select-one-genre"><option>Comedy</option><option>Drama</option></select>
      <YourForm />
    </div>
  );
}