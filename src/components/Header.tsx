"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-sm border-b border-amber-200">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-amber-900">
              Blind Owl Flavour Co.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-amber-800 hover:text-amber-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-amber-800 hover:text-amber-900 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-amber-800 hover:text-amber-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-amber-800 hover:text-amber-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/shop" className="btn btn-primary">
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-amber-800 hover:text-amber-900 hover:bg-amber-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-amber-800 hover:text-amber-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-amber-800 hover:text-amber-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-amber-800 hover:text-amber-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-amber-800 hover:text-amber-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  href="/shop"
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
