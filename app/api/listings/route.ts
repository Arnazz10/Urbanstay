import { NextResponse } from "next/server";
import { listingSchema } from "@/lib/validators";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  // Replace with Supabase query
  return NextResponse.json({
    data: [],
    message: "Wire to Supabase listings table."
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = listingSchema.parse(body);

    const { data, error } = await supabase.from("listings").insert(parsed).select().single();
    if (error) throw error;

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create listing" },
      { status: 400 }
    );
  }
}

