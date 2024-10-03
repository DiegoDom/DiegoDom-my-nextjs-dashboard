export async function GET(request: Request) {
  console.log({ method: request.method });
  return Response.json({
    count: 100,
  });
}
