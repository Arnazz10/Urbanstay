import { NextResponse } from "next/server";
import { getClaudeClient, assistantSystemPrompt } from "@/lib/claude";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const client = getClaudeClient();
    const completion = await client.messages.create({
      model: "claude-3-sonnet-20240229",
      max_tokens: 200,
      system: assistantSystemPrompt,
      messages: [{ role: "user", content: message }]
    });

    return NextResponse.json({ reply: completion.content[0].text });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Chatbot error" },
      { status: 500 }
    );
  }
}

