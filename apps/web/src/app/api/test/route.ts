export async function GET() {
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));

  return Response.json({ message: "Hello, Next.js! handler" });
}
