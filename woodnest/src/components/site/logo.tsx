import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
        W
      </span>
      <span className="font-display text-xl font-semibold tracking-tight">WoodNest</span>
    </Link>
  );
}
