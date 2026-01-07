import { NextResponse } from "next/server";
import { listingSchema } from "@/lib/validators";
import { supabase } from "@/lib/supabaseClient";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const parsed = listingSchema.partial().parse(body);
    const { data, error } = await supabase
      .from("listings")
      .update(parsed)
      .eq("id", params.id)
      .select()
      .single();
    if (error) throw error;
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to update listing" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { error } = await supabase.from("listings").delete().eq("id", params.id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json({ success: true });
}

