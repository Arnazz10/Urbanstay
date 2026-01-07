import Link from "next/link";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { BRAND } from "@/lib/constants";

const navLinks = [
  { href: "/listings", label: "Browse" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/premium", label: "Premium" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="max-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white font-bold shadow">
            US
          </div>
          <div>
            <div className="text-lg font-bold">{BRAND.name}</div>
            <div className="text-xs text-slate-500">Find your perfect urban space</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Badge className="hidden sm:inline-flex bg-brand-blue/10 text-brand-blue">
            Verified Listings
          </Badge>
          <Link href="/auth/login">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

