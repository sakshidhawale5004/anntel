import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Logo({
  className = "h-10",
  isDark = true,
}: {
  className?: string;
  isDark?: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      {!imgError ? (
        <img
          src="/logo.jpeg"
          alt="Anntel"
          className={`${className} rounded-md transition-transform group-hover:scale-105 object-contain`}
          onError={() => setImgError(true)}
        />
      ) : (
        /* Fallback: show styled text logo if image fails */
        <div className="h-10 w-10 rounded-md bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-lg shadow-md">
          A
        </div>
      )}
      <span
        className={`font-semibold text-xl tracking-tight hidden sm:block transition-colors ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        anntel
      </span>
    </Link>
  );
}
