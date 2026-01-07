import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AssistantWidget from "@/components/assistant-widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UrbanStay | Your Urban Home, Just a Click Away",
  description:
    "Find PGs, hostels, flats, and dormitories with AI assistance and verified listings."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <Navbar />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
          <AssistantWidget />
        </div>
      </body>
    </html>
  );
}

