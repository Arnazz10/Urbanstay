import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";

export default function PremiumPage() {
  return (
    <div className="max-container space-y-8 py-12">
      <div className="max-w-2xl space-y-3">
        <Badge className="bg-brand-blue/10 text-brand-blue">UrbanStay Premium</Badge>
        <h1 className="text-4xl font-bold">Unlimited contacts. AI on demand.</h1>
        <p className="text-lg text-slate-600">
          Upgrade for ₹149/month to unlock unlimited contact reveals, unlimited saves, and priority support.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6 space-y-3">
          <div className="text-3xl font-bold">₹149<span className="text-sm text-slate-600">/month</span></div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Unlimited owner/broker contacts</li>
            <li>• Unlimited saved properties</li>
            <li>• AI chatbot with no limits</li>
            <li>• Advanced filters & priority support</li>
            <li>• Verified badge on your profile</li>
          </ul>
          <Button className="w-full">Start Premium</Button>
        </div>
        <div className="card p-6 space-y-3">
          <div className="text-lg font-semibold">How it works</div>
          <ol className="space-y-2 text-sm text-slate-700">
            <li>1. Click "Start Premium" to create a Razorpay order.</li>
            <li>2. Complete payment securely.</li>
            <li>3. Unlock unlimited contacts and AI instantly.</li>
          </ol>
          <div className="text-xs text-slate-500">
            Razorpay integration stubbed. Wire the order API route with your live/test keys.
          </div>
        </div>
      </div>
    </div>
  );
}

