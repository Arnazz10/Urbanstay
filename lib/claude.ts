import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { CATEGORIES } from "./constants";

export const preferenceSchema = z.object({
  location: z.string().optional(),
  budget: z.number().optional(),
  type: z.enum(["pg", "hostel", "flat", "dormitory"]).optional(),
  amenities: z.array(z.string()).optional()
});

export function getClaudeClient() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.warn("ANTHROPIC_API_KEY is not set. Chatbot calls will fail.");
  }
  return new Anthropic({ apiKey: apiKey || "missing-key" });
}

export const assistantSystemPrompt = `
You are UrbanStay Assistant, a friendly expert that helps users find PGs, hostels, flats, and dormitories in Indian cities. 
- Always stay concise and actionable.
- Confirm key preferences: city/area, budget, accommodation type (${CATEGORIES.map(c => c.label).join(", ")}), move-in date, and must-have amenities.
- When suggesting properties, include 2-3 concise reasons (location fit, budget fit, amenity match).
- If data is unavailable, say you will forward the inquiry and ask for contact permission. 
`;

