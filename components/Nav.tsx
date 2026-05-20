"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/frankenstein", label: "Frankenstein" },
  { href: "/hamlet", label: "Hamlet" },
  { href: "/macbeth", label: "Macbeth" },
  { href: "/synthesis", label: "Synthesis" },
  { href: "/reflection", label: "Reflection" },
  { href: "/disclosure", label: "Disclosure" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-canvas/85 backdrop-blur-xl border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-[15px] md:text-[17px] italic tracking-wide text-cream hover:text-gold transition-colors whitespace-nowrap"
        >
          Obsession <span className="text-crimson not-italic">·</span> An Essay
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-sans text-[11px] tracking-[0.18em] uppercase pb-1 border-b transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-gold border-crimson"
                    : "text-cream-dim border-transparent hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-1 bg-canvas/95 backdrop-blur-xl border-b border-rule">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-3 font-sans text-[13px] tracking-[0.18em] uppercase border-b border-rule/40 transition-colors ${
                  isActive(link.href)
                    ? "text-gold"
                    : "text-cream-dim hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
