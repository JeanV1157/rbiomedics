"use client";

import { useState } from "react";
import { Phone, Mail, Clock3, MessageCircle, Building2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleWhatsapp = () => {
    const text = `Hola RBIOMEDICS,

Nombre: ${form.name}
Institución / Empresa: ${form.company}
Teléfono: ${form.phone}
Correo: ${form.email}

Consulta:
${form.message}`;

    window.open(
      `https://wa.me/51961446461?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section className="bg-[var(--surface)] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--primary-dark)]">
            Solicita Información o Asesoría
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-[var(--muted)]">
            Nuestro equipo está listo para ayudarte con equipos médicos,
            laboratorio, mantenimiento y soporte técnico especializado.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Formulario */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-[var(--border)] shadow-sm">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nombre completo"
                className="rounded-xl border border-[var(--border)] px-4 py-3 outline-none focus:border-[var(--primary)]"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="text"
                placeholder="Empresa / Institución"
                className="rounded-xl border border-[var(--border)] px-4 py-3 outline-none focus:border-[var(--primary)]"
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />

              <input
                type="tel"
                placeholder="Teléfono"
                className="rounded-xl border border-[var(--border)] px-4 py-3 outline-none focus:border-[var(--primary)]"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="rounded-xl border border-[var(--border)] px-4 py-3 outline-none focus:border-[var(--primary)]"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <textarea
              rows={6}
              placeholder="Describe tu consulta..."
              className="mt-5 w-full rounded-xl border border-[var(--border)] px-4 py-3 outline-none focus:border-[var(--primary)]"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button
              onClick={handleWhatsapp}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[var(--primary)]
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-[var(--primary-dark)]
              "
            >
              <Mail size={20} />
              Enviar Correo
            </button>
          </div>

          {/* Información */}
          <div className="bg-white rounded-3xl p-8 border border-[var(--border)] shadow-sm">
            <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <FaWhatsapp className="text-[var(--primary)] h-7 w-7" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-[var(--muted)]">+51 961 446 461</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[var(--primary)]" />
                <div>
                  <p className="font-semibold">Correo</p>
                  <p className="text-[var(--muted)]">rbiomedics@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3 className="text-[var(--primary)]" />
                <div>
                  <p className="font-semibold">Horario de Atención</p>
                  <p className="text-[var(--muted)]">Lunes a Viernes</p>
                  <p className="text-[var(--muted)]">8:00 a.m. – 6:00 p.m.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Building2 className="text-[var(--primary)]" />
                <div>
                  <p className="font-semibold">Atención</p>
                  <p className="text-[var(--muted)]">
                    Atención virtual y coordinación personalizada.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-[var(--surface)] p-5">
              <p className="font-semibold text-[var(--primary-dark)]">
                Tiempo de respuesta
              </p>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Respondemos consultas comerciales y técnicas en el menor tiempo
                posible a través de WhatsApp y correo electrónico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
