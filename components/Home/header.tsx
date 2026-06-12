// components/Header.tsx
"use client";

import Link from "next/link";
import { Music2, Phone, MessageCircle, Mail } from "lucide-react";
import { IconFacebook } from "../icons/iconFacebook";
import { IconInstagram } from "../icons/iconInstagram";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[var(--primary-dark)] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={15} className="text-[var(--accent)]" />
            <span>+51 961446461</span>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle size={15} className="text-[var(--accent)]" />
            <span>961446461</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={15} className="text-[var(--accent)]" />
            <span>rbiomedics@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-3 px-4 border-b border-[var(--border)] ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo3.png"
              alt="RBIOMEDICS"
              width={220}
              height={80}
              className="h-14 md:h-18 lg:h-18 w-auto object-contain"
              priority
            />
          </div>

          {/* Navbar */}
          <nav className="hidden lg:flex items-center gap-8 text-[var(--primary-dark)]">
            <Link
              href="/"
              className="font-semibold hover:text-[var(--primary)] transition"
            >
              INICIO
            </Link>

            <a
              href="#services"
              className="font-semibold hover:text-[var(--primary)] transition"
            >
              SERVICIOS
            </a>

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

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="bg-[var(--secondary)] hover:bg-[var(--primary)] text-white p-2 rounded-lg transition"
            >
              <IconFacebook />
            </a>

            <a
              href="#"
              className="bg-[var(--accent)] hover:bg-[var(--primary)] text-white p-2 rounded-lg transition"
            >
              <IconInstagram />
            </a>

            <a
              href="#"
              className="bg-[var(--primary-dark)] hover:bg-[var(--primary)] text-white p-2 rounded-lg transition"
            >
              <Music2 size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
