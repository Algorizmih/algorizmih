"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { hero, navItems } from "@/lib/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".dropdown") || event.target.closest("#mobile-menu") || event.target.closest("[data-menu-button]")) {
        return;
      }
      setDropdownOpen(false);
    };
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setIsOpen(false);
      }
    };
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-5 lg:px-8">
        <Link href="/" className="inline-flex min-w-0 items-center" onClick={closeMenus}>
          <Image
            src="/images/logo.png"
            alt="Algorizmi Health"
            width={1972}
            height={506}
            priority
            className="h-auto max-h-9 w-auto max-w-[56vw] object-contain sm:max-h-11 sm:max-w-none"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) =>
            item.subMenu ? (
              <div key={item.name} className="relative dropdown">
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-controls="about-menu"
                  onClick={() => setDropdownOpen((open) => !open)}
                  className="inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-space transition duration-200 hover:bg-ice"
                >
                  {item.name}
                  <ChevronDown
                    aria-hidden="true"
                    size={16}
                    className={`ml-1 transition ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdownOpen ? (
                  <ul
                    id="about-menu"
                    className="absolute left-0 top-full z-20 mt-2 w-52 rounded-2xl border border-line bg-white p-2 shadow-card"
                  >
                    <li>
                      <Link href={item.href} onClick={closeMenus} className="block rounded-xl px-3 py-2 text-sm text-space transition duration-200 hover:bg-ice">
                        {item.name}
                      </Link>
                    </li>
                    {item.subMenu.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.href}
                          onClick={closeMenus}
                          className="block rounded-xl px-3 py-2 text-sm text-space transition duration-200 hover:bg-ice"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-space transition duration-200 hover:bg-ice"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-navy px-4 py-2.5 text-sm font-medium text-white sm:inline-flex"
          >
            {hero.demoCta}
          </Link>
          <button
            type="button"
            data-menu-button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-space xl:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open main menu"}</span>
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav id="mobile-menu" aria-label="Mobile" className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-line bg-white xl:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-5">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.subMenu ? (
                  <div>
                    <button
                      type="button"
                      className="flex min-h-11 w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-space transition duration-200 hover:bg-ice"
                      aria-expanded={dropdownOpen}
                      onClick={() => setDropdownOpen((open) => !open)}
                    >
                      {item.name}
                      <ChevronDown size={16} className={dropdownOpen ? "rotate-180" : ""} />
                    </button>
                    {dropdownOpen ? (
                      <ul className="pb-2 pl-3">
                        <li>
                          <Link href={item.href} onClick={closeMenus} className="block rounded-xl px-3 py-2 text-sm text-body transition duration-200 hover:bg-ice">
                            {item.name}
                          </Link>
                        </li>
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.name}>
                            <Link href={subItem.href} onClick={closeMenus} className="block rounded-xl px-3 py-2 text-sm text-body transition duration-200 hover:bg-ice">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className="block min-h-11 rounded-xl px-3 py-3 text-base font-medium text-space transition duration-200 hover:bg-ice"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <Link href="/#contact" onClick={closeMenus} className="inline-flex rounded-full bg-navy px-4 py-2 text-sm font-medium text-white">
                {hero.demoCta}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
