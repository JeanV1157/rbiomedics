// components/Header.tsx
"use client";

import Link from "next/link";
import { Music2, Menu, X } from "lucide-react";
import { IconFacebook } from "../icons/iconFacebook";
import { IconInstagram } from "../icons/iconInstagram";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full shadow-sm sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-white py-3 px-4 border-b border-[var(--border)] ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/RBIOMEDICS_header.png"
              alt="RBIOMEDICS"
              width={220}
              height={80}
              className="h-10 md:h-18 lg:h-18 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navbar */}
          <nav className="hidden lg:flex items-center gap-8 text-[var(--primary-dark)]">
            <Link
              href="/"
              className="font-semibold hover:text-[var(--primary)] transition"
            >
              INICIO
            </Link>

            <Link
              href="/services"
              className="font-semibold hover:text-[var(--primary)] transition"
            >
              SERVICIOS
            </Link>

            <Link
              href="/product"
              className="font-semibold hover:text-[var(--primary)] transition"
            >
              PRODUCTOS
            </Link>

            <Link
              href="/about"
              className="font-semibold hover:text-[var(--primary)] transition"
            >
              NOSOTROS
            </Link>

            <Link
              href="/contact"
              className="font-semibold hover:text-[var(--primary)] transition"
            >
              CONTACTO
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--primary-dark)]"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop Social Icons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/share/18Yq5ZutaG/"
              className="bg-[var(--secondary)] hover:bg-[var(--primary)] text-white p-2 rounded-lg transition"
            >
              <IconFacebook />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/corp.rbiomedics?igsh=MTEwdGp6eTkyc3dlbQ=="
              className="bg-[var(--accent)] hover:bg-[var(--primary)] text-white p-2 rounded-lg transition"
            >
              <IconInstagram />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@corporacin.rbiome?_r=1&_t=ZS-96o1TyR1COi"
              className="bg-[var(--primary-dark)] hover:bg-[var(--primary)] text-white p-2 rounded-lg transition"
            >
              <Music2 size={18} />
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-[var(--border)] lg:hidden">
          <nav className="flex flex-col py-2">
            <Link
              href="/"
              className="px-4 py-3 font-semibold hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              INICIO
            </Link>

            <Link
              href="/services"
              className="px-4 py-3 font-semibold hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICIOS
            </Link>

            <Link
              href="/product"
              className="px-4 py-3 font-semibold hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              PRODUCTOS
            </Link>

            <Link
              href="/about"
              className="px-4 py-3 font-semibold hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              NOSOTROS
            </Link>

            <Link
              href="/contact"
              className="px-4 py-3 font-semibold hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACTO
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
