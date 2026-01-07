import { NextResponse } from "next/server";
import { reviewSchema } from "@/lib/validators";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = reviewSchema.parse(body);
    const { data, error } = await supabase.from("reviews").insert(parsed).select().single();
    if (error) throw error;
    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create review" },
      { status: 400 }
    );
  }
}

