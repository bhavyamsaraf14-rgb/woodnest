import { Link } from "@tanstack/react-router";
import { navLinks } from "./nav-links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-walnut text-walnut-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">WoodNest</p>
          <p className="mt-3 max-w-xs text-sm opacity-80">
            Modern, affordable wooden furniture crafted to make every home feel warm.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-70">Quick links</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="opacity-90 transition-opacity hover:opacity-100 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold uppercase tracking-wider opacity-70">Visit us</p>
          <p className="mt-4 opacity-90">Bengaluru, India</p>
          <p className="opacity-90">hello@woodnest.in</p>
        </div>
      </div>
      <div className="border-t border-walnut-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs opacity-70 sm:px-6">
          © {year} WoodNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
