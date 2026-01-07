import { z } from "zod";

export const listingSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  type: z.enum(["pg", "hostel", "flat", "dormitory"]),
  price: z.number().positive(),
  location: z.string().min(2),
  lat: z.number().optional(),
  lng: z.number().optional(),
  amenities: z.array(z.string()).default([]),
  images: z.array(z.string()).default([])
});

export const reviewSchema = z.object({
  listing_id: z.string().uuid(),
  rating: z.number().min(1).max(5),
  comment: z.string().min(3)
});

export const inquirySchema = z.object({
  listing_id: z.string().uuid(),
  message: z.string().min(5)
});

