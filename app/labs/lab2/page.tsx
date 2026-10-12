import "./index.css";
import ReactIconsSampler from "./ReactIconsSampler";

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

     <div className="wd-bg-colors-demo">
        <div className="wd-bg-swatch-1">Named</div>
        <div className="wd-bg-swatch-2">Hex</div>
        <div className="wd-bg-swatch-3">RGB</div>
        <div className="wd-bg-swatch-4">RGBA</div>
     </div>

      <div className="wd-position-demo">Position demo</div>
      <div className="wd-absolute-demo">Absolute position demo</div>
      <div className="wd-fixed-demo">Fixed position demo</div>
      <div className="wd-float-demo">Float demo</div>
      <div className="wd-flex-demo"><div>A</div><div>B</div><div>C</div></div>
      <div className="wd-grid-demo"><div>1</div><div>2</div><div>3</div></div>
      <div className="wd-media-demo">Media query demo — resize window</div>

      <h4>React Icons</h4>
      <ReactIconsSampler />
    </div>
  );
}