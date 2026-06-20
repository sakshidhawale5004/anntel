import { Link } from "@tanstack/react-router";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img
        src="/logo.jpeg"
        alt="Anntel"
        className={`${className} rounded-md transition-transform group-hover:scale-105`}
      />
      <span className="font-semibold text-xl tracking-tight hidden sm:block">anntel</span>
    </Link>
  );
}
