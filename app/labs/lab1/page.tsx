import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import AnchorTag from "./AnchorTag";
import Images from "./Images";
import Forms from "./Forms";
import HighlightedParagraph from "./HighlightedParagraph";
import HighlightedBox from "./HighlightedBox";

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
      <hr />
      <Images />
      <hr />
      <Forms />
      <hr />
      <div id="wd-highlighted-paragraph">
        <HighlightedParagraph text="Sample highlighted text" color="yellow" />
      </div>
      <HighlightedParagraph text="My own highlighted sentence" color="lightgreen" />
      <div id="wd-highlighted-box">
        <HighlightedBox color="orange"><p>My goals: finish A1, learn Next.js</p></HighlightedBox>
      </div>
      <HighlightedBox color="purple"><p>Sample nested box</p><span>with nested tags</span></HighlightedBox>
    </div>
  );
}