"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, Music2 } from "lucide-react";
import { IconFacebook } from "../icons/iconFacebook";
import { IconInstagram } from "../icons/iconInstagram";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div>
            <Image
              src="/images/RBIOMEDICS_footer1.png"
              alt="RBIOMEDICS"
              width={220}
              height={80}
              className="h-16 w-auto object-contain"
            />

            <p className="mt-5 text-sm leading-relaxed text-white/80">
              Soluciones integrales en equipos médicos, laboratorio,
              mantenimiento, soporte técnico y asesoría biomédica para el sector
              salud, educativo y científico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--accent)]">
              Enlaces Rápidos
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--accent)] transition"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  href="/servicios"
                  className="hover:text-[var(--accent)] transition"
                >
                  Servicios
                </Link>
              </li>

              <li>
                <Link
                  href="/productos"
                  className="hover:text-[var(--accent)] transition"
                >
                  Productos
                </Link>
              </li>

              <li>
                <Link
                  href="/nosotros"
                  className="hover:text-[var(--accent)] transition"
                >
                  Nosotros
                </Link>
              </li>

              <li>
                <Link
                  href="/contactanos"
                  className="hover:text-[var(--accent)] transition"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--accent)]">
              Servicios
            </h3>

            <ul className="space-y-3 text-sm text-white/80">
              <li>Equipos Médicos</li>
              <li>Equipos de Laboratorio</li>
              <li>Mantenimiento Técnico</li>
            </ul>

            {/* Legal */}
            <h3 className="mt-8 mb-5 text-lg font-semibold text-[var(--accent)]">
              Legal
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[var(--accent)] transition"
                >
                  Política de Privacidad
                </Link>
              </li>

              <li>
                <Link
                  href="/libro"
                  className="hover:text-[var(--accent)] transition"
                >
                  Libro de Reclamaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--accent)]">
              Contacto
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-[var(--secondary)] flex-shrink-0"
                />
                <span>+51 961 446 461</span>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp
                  size={18}
                  className="text-[var(--secondary)] flex-shrink-0"
                />
                <span>961 446 461</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-[var(--secondary)] flex-shrink-0"
                />
                <span>ventas@rbiomedics.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-[var(--secondary)] flex-shrink-0"
                />
                <span>gerencia@rbiomedics.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/share/18Yq5ZutaG/"
                className="rounded-xl bg-[var(--secondary)] p-2 hover:bg-[var(--primary)] transition"
              >
                <IconFacebook />
              </a>

              <a
                href="https://www.instagram.com/corp.rbiomedics?igsh=MTEwdGp6eTkyc3dlbQ=="
                className="rounded-xl bg-[var(--accent)] p-2 hover:bg-[var(--primary)] transition"
              >
                <IconInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@corporacin.rbiome?_r=1&_t=ZS-96o1TyR1COi"
                className="rounded-xl bg-white/10 p-2 hover:bg-[var(--primary)] transition"
              >
                <Music2 size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} RBIOMEDICS S.A.C. Todos los derechos
            reservados.
          </p>

          <p>
            Diseñado y desarrollado por{" "}
            <span className="font-semibold text-[var(--accent)]">
              VillaScriipt
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
