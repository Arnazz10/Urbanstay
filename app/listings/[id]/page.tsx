import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { notFound } from "next/navigation";

// In a real app, fetch data from Supabase by ID
const mockListing = {
  id: "1",
  title: "Premium Co-Living",
  description:
    "Spacious rooms with Wi-Fi, meals, housekeeping, study zones, and community events.",
  price: 14500,
  location: "Koramangala, Bengaluru",
  amenities: ["Wi-Fi", "Meals", "Parking", "Housekeeping"],
  verified: true
};

export default function ListingDetail({
  params
}: {
  params: { id: string };
}) {
  if (!params.id) return notFound();

  const listing = mockListing;

  return (
    <div className="max-container space-y-8 py-10">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h1 className="text-3xl font-bold">{listing.title}</h1>
                <p className="text-slate-600">{listing.location}</p>
              </div>
              {listing.verified && (
                <Badge className="bg-green-100 text-green-700">Verified</Badge>
              )}
            </div>
            <p className="mt-4 text-slate-700">{listing.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {listing.amenities.map(item => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
          <div className="card h-72 bg-slate-100 p-6">
            <div className="text-sm text-slate-500">Map placeholder (Google/Mapbox)</div>
          </div>
        </div>
        <div className="card h-fit p-6 space-y-4">
          <div className="text-2xl font-bold">₹{listing.price.toLocaleString("en-IN")}/mo</div>
          <Button className="w-full">Reveal contact</Button>
          <Button className="w-full" variant="secondary">
            Save listing
          </Button>
          <div className="text-sm text-slate-600">
            Free users: 3 contact reveals/day. Upgrade to Premium for unlimited.
          </div>
        </div>
      </div>
    </div>
  );
}

