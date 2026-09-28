export default function ParagraphTag() {
  return (
    <div>
      <p>This is a sample paragraph. Wrapping text in a p tag gives it vertical spacing above and below.</p>
      <p>This is a second sample paragraph, showing that each p tag starts on its own line with space around it.</p>

      <p id="wd-p-your-1">I'm a university student studying algorithms and numerical analysis this term.</p>
      <p id="wd-p-your-2">This is my first Kambaz assignment for Web Development, built with Next.js.</p>

      <p id="wd-ai-p">
        Wrapping text in a p element creates vertical spacing because browsers apply default
        top and bottom margins to paragraph elements, visually separating blocks of text.
      </p>
    </div>
  );
}