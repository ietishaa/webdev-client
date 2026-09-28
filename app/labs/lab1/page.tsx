import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import AnchorTag from "./AnchorTag";

export default function Lab1() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Lab 1</h2>
      <HeadingTags />
      <hr />
      <ParagraphTag />
      <hr />
      <ListTags />
      <hr />
      <Tables />
      <hr />
      <AnchorTag />
    </div>
  );
}