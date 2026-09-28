export default function ListTags() {
  return (
    <div>
      <h4>Pancake recipe</h4>
      <ol>
        <li>Mix flour, milk, and eggs</li>
        <li>Heat the pan</li>
        <li>Pour batter and flip</li>
      </ol>

      <h4>Sample list</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <h4>My favorite recipe</h4>
      <ol id="wd-your-favorite-recipe">
        <li>Boil pasta until al dente</li>
        <li>Sauté garlic in olive oil</li>
        <li>Toss pasta with sauce and serve</li>
      </ol>

      <h4>My favorite books</h4>
      <ul id="wd-your-books">
        <li>Atomic Habits</li>
        <li>The Pragmatic Programmer</li>
        <li>Sapiens</li>
      </ul>

      <h4>HTML tags used in this chapter</h4>
      <ul id="wd-ai-html-tags">
        <li>h1–h6</li>
        <li>p</li>
        <li>ol / ul / li</li>
        <li>table</li>
        <li>img</li>
      </ul>
    </div>
  );
}