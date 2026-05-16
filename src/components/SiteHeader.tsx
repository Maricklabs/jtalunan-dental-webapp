"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/location" },
  { label: "Make an Appointment", href: "/book" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 border-b border-sand/80 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-base font-medium text-ink lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-[#a07840] ${
                isActive(link.href) ? "text-[#a07840]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Burger Button */}
        <button
          className="flex flex-col gap-1.5 lg:hidden ml-auto"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="border-t border-sand/60 bg-cream/95 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4 text-base font-medium text-ink">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition hover:text-[#a07840] ${
                    isActive(link.href) ? "text-[#a07840]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}