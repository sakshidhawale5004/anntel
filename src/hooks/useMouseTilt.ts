import { useEffect, useRef } from "react";

export function useMouseTilt(maxTilt = 15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const xPct = x / (rect.width / 2);
      const yPct = y / (rect.height / 2);

      const rotateX = yPct * -maxTilt;
      const rotateY = xPct * maxTilt;

      el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      el.style.transition = "transform 0.5s ease-out";
      el.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
      
      setTimeout(() => {
        if (el) el.style.transition = "";
      }, 500);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt]);

  return ref;
}
