import "./index.css";
import ReactIconsSampler from "./ReactIconsSampler";
import MarginsPadding from "./tailwind/MarginsPadding";
import FontSizeWeight from "./tailwind/FontSizeWeight";
import BackgroundColors from "./tailwind/BackgroundColors";
import Responsive from "./tailwind/Responsive";
import ResponsiveCard from "./tailwind/ResponsiveCard";
import Blurs from "./tailwind/Blurs";
import GridSpan from "./tailwind/GridSpan";

export default function Lab2() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Lab 2 — CSS & Tailwind</h2>

      <h4 style={{ color: "purple" }}>Inline style attribute practice</h4>
      <p style={{ color: "purple", fontWeight: "bold" }}>Styled with the style attribute</p>

      <div id="wd-id-demo">ID selector demo</div>
      <p className="wd-class-demo">Class selector demo</p>
      <div className="wd-structure-demo"><p>Structural selector demo</p></div>

      <div className="wd-color-demo">Color & background demo</div>
      <div className="wd-border-demo">Border & corners demo</div>
      <div className="wd-box-model-demo">Box model demo</div>

      <div className="wd-position-demo">Position demo</div>
      <div className="wd-float-demo">Float demo</div>
      <div className="wd-flex-demo"><div>A</div><div>B</div><div>C</div></div>
      <div className="wd-grid-demo"><div>1</div><div>2</div><div>3</div></div>
      <div className="wd-media-demo">Media query demo — resize window</div>
      <div className="wd-bg-colors-demo">Background colors sample</div>
      <div className="wd-absolute-demo">Absolute position demo</div>
      <div className="wd-fixed-demo">Fixed position demo</div>
      <div className="wd-bg-colors-demo">
        <div style={{ backgroundColor: "coral", padding: 10 }}>Coral</div>
        <div style={{ backgroundColor: "teal", padding: 10, color: "white" }}>Teal</div>
        <div style={{ backgroundColor: "gold", padding: 10 }}>Gold</div>
      </div>

      <h4>React Icons</h4>
      <ReactIconsSampler />

      <h4>Tailwind samples</h4>
      <MarginsPadding />
      <FontSizeWeight />
      <BackgroundColors />
      <Responsive />
      <ResponsiveCard />
      <Blurs />
      <GridSpan />
    </div>
  );
}