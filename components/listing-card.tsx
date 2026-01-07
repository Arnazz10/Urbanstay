import { Listing } from "@/lib/types";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, MapPin, IndianRupee } from "lucide-react";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="card overflow-hidden">
      <div className="h-48 w-full bg-gradient-to-br from-brand-blue/10 to-brand-teal/10" />
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{listing.title}</h3>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4" />
              <span>{listing.location}</span>
            </div>
          </div>
          {listing.verified && (
            <Badge className="bg-green-100 text-green-700">
              <ShieldCheck className="mr-1 h-3 w-3" />
              Verified
            </Badge>
          )}
        </div>
        <p className="line-clamp-2 text-sm text-slate-600">{listing.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-lg font-bold">
            <IndianRupee className="h-5 w-5" />
            {listing.price.toLocaleString("en-IN")}
            <span className="text-sm font-medium text-slate-500">/mo</span>
          </div>
          <Link href={`/listings/${listing.id}`}>
            <Button size="sm">View details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

