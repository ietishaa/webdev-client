export default async function Lab5() {
  const server = process.env.NEXT_PUBLIC_HTTP_SERVER;

  const welcome = await fetch(`${server}/lab5/welcome`).then((r) => r.text());
  const add = await fetch(`${server}/lab5/add/12/30`).then((r) => r.json());
  const subtract = await fetch(`${server}/lab5/subtract/30/12`).then((r) => r.json());
  const multiply = await fetch(`${server}/lab5/multiply/4/5`).then((r) => r.json());
  const divide = await fetch(`${server}/lab5/divide/20/4`).then((r) => r.json());
  const calcAdd = await fetch(`${server}/lab5/calculator?operation=add&a=7&b=8`).then((r) => r.json());
  const calcSubtract = await fetch(`${server}/lab5/calculator?operation=subtract&a=10&b=3`).then((r) => r.json());
  const calcMultiply = await fetch(`${server}/lab5/calculator?operation=multiply&a=6&b=6`).then((r) => r.json());
  const calcDivide = await fetch(`${server}/lab5/calculator?operation=divide&a=100&b=5`).then((r) => r.json());
  const assignment = await fetch(`${server}/lab5/assignment`).then((r) => r.json());
  const assignmentTitle = await fetch(`${server}/lab5/assignment/title`).then((r) => r.text());
  const moduleObj = await fetch(`${server}/lab5/module`).then((r) => r.json());
  const moduleName = await fetch(`${server}/lab5/module/name`).then((r) => r.text());
  const todos = await fetch(`${server}/lab5/todos`).then((r) => r.json());
  const oneTodo = await fetch(`${server}/lab5/todos/1`).then((r) => r.json());
  const completedTodos = await fetch(`${server}/lab5/todos?completed=true`).then((r) => r.json());

  return (
    <div style={{ padding: 20 }}>
      <h2>Lab 5 - HTTP Servers</h2>

      <h3>Welcome</h3>
      <a href={`${server}/lab5/welcome`} target="_blank" rel="noreferrer">{`${server}/lab5/welcome`}</a>
      <p>{welcome}</p>

      <h3>Add via path parameters</h3>
      <a href={`${server}/lab5/add/12/30`} target="_blank" rel="noreferrer">{`${server}/lab5/add/12/30`}</a>
      <p>12 + 30 = {add.result}</p>

      <h3>Subtract via path parameters</h3>
      <a href={`${server}/lab5/subtract/30/12`} target="_blank" rel="noreferrer">{`${server}/lab5/subtract/30/12`}</a>
      <p>30 - 12 = {subtract.result}</p>

      <h3>Multiply via path parameters</h3>
      <a href={`${server}/lab5/multiply/4/5`} target="_blank" rel="noreferrer">{`${server}/lab5/multiply/4/5`}</a>
      <p>4 x 5 = {multiply.result}</p>

      <h3>Divide via path parameters</h3>
      <a href={`${server}/lab5/divide/20/4`} target="_blank" rel="noreferrer">{`${server}/lab5/divide/20/4`}</a>
      <p>20 / 4 = {divide.result}</p>

      <h3>Calculator - add (query parameters)</h3>
      <a href={`${server}/lab5/calculator?operation=add&a=7&b=8`} target="_blank" rel="noreferrer">{`${server}/lab5/calculator?operation=add&a=7&b=8`}</a>
      <p>7 + 8 = {calcAdd.result}</p>

      <h3>Calculator - subtract (query parameters)</h3>
      <a href={`${server}/lab5/calculator?operation=subtract&a=10&b=3`} target="_blank" rel="noreferrer">{`${server}/lab5/calculator?operation=subtract&a=10&b=3`}</a>
      <p>10 - 3 = {calcSubtract.result}</p>

      <h3>Calculator - multiply (query parameters)</h3>
      <a href={`${server}/lab5/calculator?operation=multiply&a=6&b=6`} target="_blank" rel="noreferrer">{`${server}/lab5/calculator?operation=multiply&a=6&b=6`}</a>
      <p>6 x 6 = {calcMultiply.result}</p>

      <h3>Calculator - divide (query parameters)</h3>
      <a href={`${server}/lab5/calculator?operation=divide&a=100&b=5`} target="_blank" rel="noreferrer">{`${server}/lab5/calculator?operation=divide&a=100&b=5`}</a>
      <p>100 / 5 = {calcDivide.result}</p>

      <h3>Remote Assignment Object</h3>
      <a href={`${server}/lab5/assignment`} target="_blank" rel="noreferrer">{`${server}/lab5/assignment`}</a>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>

      <h3>Remote Assignment Title</h3>
      <a href={`${server}/lab5/assignment/title`} target="_blank" rel="noreferrer">{`${server}/lab5/assignment/title`}</a>
      <p>{assignmentTitle}</p>

      <h3>Remote Module Object</h3>
      <a href={`${server}/lab5/module`} target="_blank" rel="noreferrer">{`${server}/lab5/module`}</a>
      <pre>{JSON.stringify(moduleObj, null, 2)}</pre>

      <h3>Remote Module Name</h3>
      <a href={`${server}/lab5/module/name`} target="_blank" rel="noreferrer">{`${server}/lab5/module/name`}</a>
      <p>{moduleName}</p>

      <h3>Remote Todos Array</h3>
      <a href={`${server}/lab5/todos`} target="_blank" rel="noreferrer">{`${server}/lab5/todos`}</a>
      <ul>
        {todos.map((t: { _id: string; title: string; completed: boolean }) => (
          <li key={t._id}>{t.title} - {t.completed ? "done" : "not done"}</li>
        ))}
      </ul>

      <h3>One Todo by ID</h3>
      <a href={`${server}/lab5/todos/1`} target="_blank" rel="noreferrer">{`${server}/lab5/todos/1`}</a>
      <p>{oneTodo.title}</p>

      <h3>Completed Todos</h3>
      <a href={`${server}/lab5/todos?completed=true`} target="_blank" rel="noreferrer">{`${server}/lab5/todos?completed=true`}</a>
      <ul>
        {completedTodos.map((t: { _id: string; title: string }) => (
          <li key={t._id}>{t.title}</li>
        ))}
      </ul>

      <h3>Next.js Route Handler - Hello</h3>
      <a href="/api/lab5/hello" target="_blank" rel="noreferrer">/api/lab5/hello</a>

      <h3>Next.js Route Handler - Calculator</h3>
      <a href="/api/lab5/calculator?a=5&b=10&operation=add" target="_blank" rel="noreferrer">/api/lab5/calculator?a=5&b=10&operation=add</a>
    </div>
  );
}