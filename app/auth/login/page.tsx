import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-container flex items-center justify-center py-16">
      <div className="card w-full max-w-md p-8">
        <h1 className="text-2xl font-bold">Log in to UrbanStay</h1>
        <p className="text-sm text-slate-600">Access your dashboard and saved homes.</p>
        <form className="mt-6 space-y-4">
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-600">
          No account?{" "}
          <Link className="text-brand-blue" href="/auth/signup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

