import Razorpay from "razorpay";

export function getRazorpayClient() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    console.warn("Razorpay keys missing. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.");
  }

  return new Razorpay({
    key_id: keyId || "rzp_test_key",
    key_secret: keySecret || "rzp_test_secret"
  });
}

export function buildPremiumOrder(amountInr = 149) {
  return {
    amount: amountInr * 100,
    currency: "INR",
    receipt: `urbanstay-premium-${Date.now()}`,
    notes: { plan: "premium", period: "monthly" }
  };
}

