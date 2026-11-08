import Link from "next/link";

export default function QueryPathParams() {
  return (
    <div>
      <h4>Query and Path Parameters</h4>
      <Link href="/labs/lab4/url-encoding?a=5&b=10">Query params (?a=5&b=10)</Link><br />
      <Link href="/labs/lab4/url-encoding/path-params/5/10">Path params (/5/10)</Link>
    </div>
  );
}