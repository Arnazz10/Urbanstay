import ListingCard from "@/components/listing-card";
import SearchBar from "@/components/search-bar";
import { Listing } from "@/lib/types";
import Badge from "@/components/ui/badge";

const mockListings: Listing[] = Array.from({ length: 4 }).map((_, idx) => ({
  id: `${idx}`,
  owner_id: "owner",
  title: `UrbanStay Sample Listing ${idx + 1}`,
  description: "Starter listing. Connect Supabase data to replace this mock.",
  type: "pg",
  price: 12000 + idx * 1000,
  location: "Bengaluru",
  lat: 0,
  lng: 0,
  amenities: [],
  images: [],
  verified: idx % 2 === 0,
  created_at: new Date().toISOString()
}));

export default function ListingsPage() {
  return (
    <div className="max-container space-y-8 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Browse Listings</h1>
          <p className="text-slate-600">Search and filter accommodations.</p>
        </div>
        <Badge className="bg-brand-blue/10 text-brand-blue">UrbanStay Assistant ready</Badge>
      </div>
      <SearchBar />
      <div className="grid gap-6 md:grid-cols-2">
        {mockListings.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}

