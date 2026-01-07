import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Badge from "@/components/ui/badge";

export default function AdminPage() {
  return (
    <div className="max-container space-y-8 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Console</h1>
          <p className="text-slate-600">Verify listings and manage users.</p>
        </div>
        <Badge className="bg-slate-900 text-white">Admin</Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Listings pending verification", value: 4 },
          { label: "Reported listings", value: 1 },
          { label: "Active premium users", value: 24 }
        ].map(item => (
          <Card key={item.label}>
            <CardHeader className="text-sm text-slate-600">{item.label}</CardHeader>
            <CardContent className="text-2xl font-bold">{item.value}</CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader className="text-lg font-semibold">Moderation queue</CardHeader>
        <CardContent className="text-sm text-slate-600">
          Hook into Supabase admin tables to display pending items.
        </CardContent>
      </Card>
    </div>
  );
}

