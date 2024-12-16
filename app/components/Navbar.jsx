"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">ITO</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-teal-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-teal-500">
            About
          </Link>
          <Link href="/progetti" className="hover:text-teal-500">
            Progetti
          </Link>
          <Link href="/contatti" className="hover:text-teal-500">
            Contatti
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-teal-500 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-2">
          <Link href="/" className="block py-1 hover:text-teal-500">
            Home
          </Link>
          <Link href="/about" className="block py-1 hover:text-teal-500">
            About
          </Link>
          <Link href="/progetti" className="block py-1 hover:text-teal-500">
            Progetti
          </Link>
          <Link href="/contatti" className="block py-1 hover:text-teal-500">
            Contatti
          </Link>
        </div>
      )}
    </nav>
  );
}
