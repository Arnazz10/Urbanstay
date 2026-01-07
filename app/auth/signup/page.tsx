import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="max-container flex items-center justify-center py-16">
      <div className="card w-full max-w-md p-8 space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-slate-600">
            Join UrbanStay to save properties and chat with our assistant.
          </p>
        </div>
        <form className="space-y-4">
          <Input type="text" placeholder="Full name" required />
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>
        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link className="text-brand-blue" href="/auth/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

