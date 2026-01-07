import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";

export default function UserDashboard() {
  return (
    <div className="max-container space-y-8 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-slate-600">Track saved properties and contact limits.</p>
        </div>
        <Badge className="bg-brand-blue/10 text-brand-blue">Free Plan</Badge>
      </div>
      <Tabs
        tabs={[
          {
            key: "saved",
            label: "Saved properties",
            content: <div className="text-sm text-slate-600">No saved properties yet.</div>
          },
          {
            key: "history",
            label: "Search history",
            content: <div className="text-sm text-slate-600">Your recent searches will appear here.</div>
          },
          {
            key: "limits",
            label: "Contact limits",
            content: (
              <div className="space-y-3">
                <div className="card p-4">
                  <div className="text-sm text-slate-600">Daily contact reveals used</div>
                  <div className="text-2xl font-bold">1 / 3</div>
                </div>
                <Button>Upgrade to Premium</Button>
              </div>
            )
          }
        ]}
      />
    </div>
  );
}

