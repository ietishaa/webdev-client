export default async function AddPage({
  params,
}: {
  params: Promise<{ a: string; b: string }>;
}) {
  const { a, b } = await params;
  const numA = Number(a);
  const numB = Number(b);
  return (
    <div style={{ padding: 20 }}>
      <h2>Add</h2>
      <p>
        {a} + {b} = {numA + numB}
      </p>
    </div>
  );
}