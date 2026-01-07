import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validators";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.parse(body);
    const { data, error } = await supabase
      .from("inquiries")
      .insert({ ...parsed, created_at: new Date().toISOString() })
      .select()
      .single();
    if (error) throw error;
    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to submit inquiry" },
      { status: 400 }
    );
  }
}

