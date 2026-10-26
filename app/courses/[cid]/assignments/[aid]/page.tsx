import Link from "next/link";
import coursesData from "../../../../database/courses.json";
import assignmentsData from "../../../../database/assignments.json";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = assignmentsData.find((a) => a._id === aid);

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue={assignment?.title ?? ""} /> <br /><br />
      <textarea
        id="wd-description"
        defaultValue={(assignment as { description?: string })?.description ?? ""}
        rows={8}
        className="w-full"
      /> <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={assignment?.points ?? 100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                defaultValue={(assignment as { due?: string })?.due}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                defaultValue={(assignment as { available?: string })?.available}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
        Cancel
      </Link>{" "}
      <Link href={`/courses/${cid}/assignments`} id="wd-save">
        Save
      </Link>
    </div>
  );
}