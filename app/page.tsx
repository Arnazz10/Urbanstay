import SearchBar from "@/components/search-bar";
import ListingCard from "@/components/listing-card";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { CATEGORIES, BRAND } from "@/lib/constants";
import { Listing } from "@/lib/types";

const sampleListings: Listing[] = [
  {
    id: "1",
    owner_id: "owner-1",
    title: "Premium Co-Living near Koramangala",
    description: "Furnished rooms with Wi-Fi, meals, housekeeping and 24x7 security.",
    type: "pg",
    price: 14500,
    location: "Koramangala, Bengaluru",
    lat: 0,
    lng: 0,
    amenities: ["Wi-Fi", "Meals", "Parking"],
    images: [],
    verified: true,
    created_at: new Date().toISOString()
  },
  {
    id: "2",
    owner_id: "owner-2",
    title: "2 BHK for Professionals",
    description: "Spacious flat with modular kitchen, balcony, and covered parking.",
    type: "flat",
    price: 32000,
    location: "Powai, Mumbai",
    lat: 0,
    lng: 0,
    amenities: ["Parking", "AC", "Wi-Fi"],
    images: [],
    verified: true,
    created_at: new Date().toISOString()
  }
];

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <section className="max-container grid gap-10 pt-14 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge className="bg-brand-blue/10 text-brand-blue">Verified & Trusted</Badge>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {BRAND.name}: <span className="gradient-text">{BRAND.tagline}</span>
          </h1>
          <p className="text-lg text-slate-600">
            Search PGs, hostels, flats, and dormitories across India. Get AI-powered
            recommendations, verified listings, and direct owner contacts.
          </p>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(cat => (
              <Badge key={cat.key}>{cat.label}</Badge>
            ))}
          </div>
          <div className="max-w-2xl">
            <SearchBar />
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Verified badge on 3k+ properties
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              AI Assistant for personalized picks
            </div>
          </div>
          <div className="flex gap-3">
            <Button>Start Exploring</Button>
            <Button variant="secondary">Talk to Assistant</Button>
          </div>
        </div>
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gradient opacity-10" />
          <div className="relative p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand-gradient text-white flex items-center justify-center font-semibold">
                US
              </div>
              <div>
                <div className="text-lg font-semibold">UrbanStay Premium</div>
                <div className="text-sm text-slate-600">Unlimited contacts & saves</div>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>• Unlimited owner/broker contacts</li>
              <li>• Priority support & verified badge</li>
              <li>• AI chatbot with unlimited queries</li>
              <li>• Advanced filters & saved searches</li>
            </ul>
            <Button>Upgrade for ₹149/mo</Button>
          </div>
        </div>
      </section>

      <section className="max-container space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Popular near you</h2>
          <Button variant="ghost" size="sm">
            See all
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {sampleListings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      <section className="max-container grid gap-8 rounded-3xl bg-white p-8 shadow-card lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-bold">Why UrbanStay?</h3>
          <p className="mt-2 text-slate-600">
            Built for students, professionals, families, and seniors to find a safe and
            comfortable home in cities.
          </p>
        </div>
        <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Verified Listings", desc: "Owner verification & quality checks." },
            { title: "Direct Contacts", desc: "No middlemen. Connect instantly." },
            { title: "AI Assistant", desc: "Personalized picks based on your needs." },
            { title: "Flexible Plans", desc: "Free tier plus affordable premium." }
          ].map(feature => (
            <div key={feature.title} className="card p-4">
              <div className="text-lg font-semibold">{feature.title}</div>
              <p className="mt-2 text-sm text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

