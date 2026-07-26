"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(pathname !== "/");
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
      return;
    }

    const sentinel = document.querySelector<HTMLElement>("[data-header-sentinel]");
    if (!sentinel) {
      setScrolled(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), { threshold: 0 });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const backgroundContent = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    document.body.style.overflow = "hidden";
    backgroundContent.forEach((element) => element.setAttribute("inert", ""));
    const focusable = () => Array.from(menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    window.requestAnimationFrame(() => focusable()[0]?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      backgroundContent.forEach((element) => element.removeAttribute("inert"));
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    function closeAtDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }
    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header ref={headerRef} className="site-header" data-scrolled={scrolled} data-open={open}>
      <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="ConsFlow, ir al inicio" className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand" onClick={closeMenu}>
          <BrandLogo priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-3 text-sm font-semibold text-steel transition-colors duration-150 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button-primary ml-3 min-h-11 px-5 py-2.5 text-sm">Solicitar una demo</Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open ? (
        <>
          <button type="button" className="fixed inset-x-0 bottom-0 top-[4.25rem] z-0 bg-navy/15 lg:hidden" aria-label="Cerrar menú" onClick={closeMenu} />
          <div id="menu-mobile" className="absolute inset-x-0 top-full z-10 border-b border-line bg-white shadow-menu lg:hidden">
            <nav ref={menuRef} className="mobile-menu-enter mx-auto flex max-h-[calc(100dvh-4.25rem)] max-w-7xl flex-col overflow-y-auto overscroll-contain px-4 py-5 sm:px-6" aria-label="Navegación mobile">
              {siteConfig.navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-menu-link flex min-h-12 items-center border-b border-line py-3 text-base font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                  style={{ "--menu-index": index } as CSSProperties}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mobile-menu-link mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-5 py-3 text-base font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                style={{ "--menu-index": siteConfig.navigation.length } as CSSProperties}
                onClick={closeMenu}
              >
                Solicitar una demo
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
