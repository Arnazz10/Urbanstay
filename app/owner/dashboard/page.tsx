import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function HostDashboard() {
  return (
    <div className="max-container space-y-8 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Host Dashboard</h1>
          <p className="text-slate-600">Manage listings, inquiries, and analytics.</p>
        </div>
        <Button>Add new listing</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {["Active listings", "Inquiries", "Monthly views"].map((label, idx) => (
          <Card key={label}>
            <CardHeader className="text-sm text-slate-600">{label}</CardHeader>
            <CardContent className="text-2xl font-bold">{(idx + 1) * 3}</CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader className="text-lg font-semibold">Recent inquiries</CardHeader>
        <CardContent className="text-sm text-slate-600">
          Connect Supabase to display inquiries here.
        </CardContent>
      </Card>
    </div>
  );
}

