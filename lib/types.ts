export type UserType = "user" | "owner" | "admin";

export type ListingType = "pg" | "hostel" | "flat" | "dormitory";

export interface Listing {
  id: string;
  owner_id: string;
  title: string;
  description: string;
  type: ListingType;
  price: number;
  location: string;
  lat?: number;
  lng?: number;
  amenities: string[];
  images: string[];
  verified: boolean;
  created_at: string;
}

export interface Review {
  id: string;
  user_id: string;
  listing_id: string;
  rating: number;
  comment?: string;
  created_at: string;
}

export interface Inquiry {
  id: string;
  user_id: string;
  listing_id: string;
  message: string;
  created_at: string;
}

