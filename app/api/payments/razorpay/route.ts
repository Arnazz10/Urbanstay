import { NextResponse } from "next/server";
import { getRazorpayClient, buildPremiumOrder } from "@/lib/payment";

export async function POST() {
  try {
    const razorpay = getRazorpayClient();
    const orderPayload = buildPremiumOrder();
    const order = await razorpay.orders.create(orderPayload);
    return NextResponse.json({ order });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create order" },
      { status: 500 }
    );
  }
}

