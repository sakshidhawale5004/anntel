import logo from "@/assets/anntel-logo.png.asset.json";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img
        src={logo.url}
        alt="Anntel"
        className={`${className} drop-shadow-[0_6px_14px_oklch(0.5_0.22_25/0.45)] transition-transform group-hover:scale-105`}
      />
      <span className="font-semibold text-lg tracking-tight">anntel</span>
    </Link>
  );
}
