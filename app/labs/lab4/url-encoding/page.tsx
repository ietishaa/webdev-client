export default async function QueryParamsPage({
  searchParams,
}: { searchParams: Promise<{ a?: string; b?: string }> }) {
  const { a, b } = await searchParams;
  const numA = Number(a ?? 0);
  const numB = Number(b ?? 0);
  return (
    <div style={{ padding: 20 }}>
      <h2>Query Params</h2>
      <p>{a} + {b} = {numA + numB}</p>
    </div>
  );
}