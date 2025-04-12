export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (email === "admin@example.com" && password === "password") {
      return new Response(JSON.stringify({ message: "Login successful" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
