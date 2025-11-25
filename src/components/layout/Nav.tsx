"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current || prefersReducedMotion) {
      return;
    }

    const { gsap } = ensureGsap();

    const ctx = gsap.context(() => {
      gsap.from("[data-nav-link]", {
        opacity: 0,
        y: -10,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  return (
    <nav
      ref={navRef}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#141414]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="lg:hidden"
            onClick={closeNavbar}
            aria-label="Home"
          >
            <Image
              src="/assets/Logos/gglogo/Ginger Groove Logo_PNG.png"
              alt="Ginger Groove Studios Logo"
              width={48}
              height={48}
              priority
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left Links */}
            <ul className="flex items-center gap-6">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={pathname === link.href}
                    onClick={closeNavbar}
                  />
                </li>
              ))}
            </ul>

            {/* Centered Logo */}
            <Link
              href="/"
              onClick={closeNavbar}
              className="transition-transform duration-300 hover:scale-110"
              aria-label="Home"
            >
              <Image
                src="/assets/Logos/gglogo/Ginger Groove Logo_PNG.png"
                alt="Ginger Groove Studios Logo"
                width={64}
                height={64}
                priority
              />
            </Link>

            {/* Right Links */}
            <ul className="flex items-center gap-6">
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={
                      link.href === "/portfolio"
                        ? pathname.startsWith("/portfolio")
                        : pathname === link.href
                    }
                    onClick={closeNavbar}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleNavbar}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span
              className={clsx(
                "w-6 h-0.5 bg-[#ec2021] transition-all duration-300",
                isOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={clsx(
                "w-6 h-0.5 bg-[#ec2021] transition-all duration-300",
                isOpen && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "w-6 h-0.5 bg-[#ec2021] transition-all duration-300",
                isOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "lg:hidden fixed inset-0 top-20 bg-[#141414]/98 backdrop-blur-2xl border-t border-white/10 transition-transform duration-500 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col gap-2 p-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  label={link.label}
                  isActive={
                    link.href === "/portfolio"
                      ? pathname.startsWith("/portfolio")
                      : pathname === link.href
                  }
                  onClick={closeNavbar}
                  mobile
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  mobile?: boolean;
};

function NavLink({ href, label, isActive, onClick, mobile = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "relative inline-block font-[family-name:var(--font-bebas)] text-2xl tracking-wide transition-colors duration-300",
        isActive
          ? "text-[#ec2021]"
          : "text-[#f5f5dc] hover:text-[#83caaf]",
        mobile && "block py-4 px-4 rounded-2xl hover:bg-white/5"
      )}
      data-nav-link
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ec2021] to-[#83caaf] rounded-full" />
      )}
    </Link>
  );
}

