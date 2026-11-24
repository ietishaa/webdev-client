import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const a = Number(searchParams.get("a"));
  const b = Number(searchParams.get("b"));
  const operation = searchParams.get("operation");

  let result;
  if (operation === "add") result = a + b;
  else if (operation === "subtract") result = a - b;
  else if (operation === "multiply") result = a * b;
  else if (operation === "divide") result = a / b;

  return NextResponse.json({ result });
}