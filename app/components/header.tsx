"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/library", label: "Library" },
];

export function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("wells-house-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = stored ? stored === "dark" : prefersDark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("wells-house-theme", next ? "dark" : "light");
  }

  return (
    <header className="relative z-20 border-b border-line/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[#2C2623]/25 font-serif text-[13px] font-semibold tracking-[0.12em] text-foreground dark:border-white/25">
            WH
          </span>
          <span className="font-serif text-lg tracking-tight text-foreground sm:text-xl">
            Wells House
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm tracking-wide transition-colors hover:text-foreground ${
                item.label === "Home"
                  ? "text-foreground"
                  : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-black/5 dark:hover:bg-white/10 sm:inline-flex"
            aria-label="Profile"
          >
            <ProfileIcon />
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-black/5 dark:hover:bg-white/10"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link
            href="/membership"
            className="hidden items-center rounded-full border border-[#2C2623]/20 px-4 py-2 text-sm text-foreground transition hover:bg-[#2C2623] hover:text-[#FAF8F5] dark:border-white/20 dark:hover:bg-[#F3ECE6] dark:hover:text-[#1C1816] sm:inline-flex"
          >
            Membership →
          </Link>
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2C2623] text-[11px] font-medium tracking-wider text-[#FAF8F5] dark:bg-[#F3ECE6] dark:text-[#1C1816]"
            aria-label="Signed in as AR"
          >
            AR
          </span>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-line px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/membership"
              className="pt-1 text-base text-muted sm:hidden"
              onClick={() => setOpen(false)}
            >
              Membership →
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function ProfileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 19.2c.9-3.2 3.5-5.2 6.5-5.2s5.6 2 6.5 5.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.5 13.5A7 7 0 0 1 10.2 4.2 7.5 7.5 0 1 0 19.8 13.8 7 7 0 0 1 16.5 13.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3.5v1.8M12 18.7v1.8M4.9 4.9l1.3 1.3M17.8 17.8l1.3 1.3M3.5 12h1.8M18.7 12h1.8M4.9 19.1l1.3-1.3M17.8 6.2l1.3-1.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
