import Link from "next/link";

export default function Labs() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Labs</h2>
      <ul>
        <li><Link href="/labs/lab1">Lab 1</Link></li>
        <li><Link href="/labs/lab2">Lab 2</Link></li>
        <li><Link href="/labs/lab3">Lab 3</Link></li>
        <li id="wd-lab4-link"><Link href="/labs/lab4">Lab 4</Link></li>
        <li><Link href="/labs/lab5">Lab 5</Link></li>
        <li><a href="https://github.com/ietishaa/webdev-client" target="_blank" rel="noreferrer">Kambaz GitHub repo</a></li>
      </ul>
    </div>
  );
}