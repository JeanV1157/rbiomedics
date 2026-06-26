"use client";

import { useState } from "react";
import { AlertCircle, Clock3, ShieldCheck, Send } from "lucide-react";

export default function ComplaintBookSection() {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dni: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setOpenModal(false);

    // VALIDACIÓN
    if (
      !form.firstName ||
      !form.lastName ||
      !form.dni ||
      !form.phone ||
      !form.email ||
      !form.reason ||
      !form.message
    ) {
      setError("Completa todos los campos.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/libro-reclamaciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);

        setError(data?.message || "Error al enviar el formulario.");
        return;
      }

      setOpenModal(true);
      setError("");

      setForm({
        firstName: "",
        lastName: "",
        dni: "",
        phone: "",
        email: "",
        reason: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setError("Ocurrió un error de red. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[var(--surface)] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)]">
            Libro de Reclamaciones
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-[var(--muted)]">
            Si tienes alguna queja o reclamo respecto a nuestros productos o
            servicios, completa el siguiente formulario. Atenderemos tu
            solicitud conforme a la normativa vigente.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* FORMULARIO */}
          <div className="lg:col-span-2 rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)]">
                Describa su inquietud
              </h3>

              <p className="mt-2 text-[var(--muted)]">
                Complete la siguiente información para registrar su solicitud.
              </p>

              <h4 className="mt-8 mb-5 text-lg font-semibold text-[var(--primary-dark)]">
                Datos personales
              </h4>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="firstName"
                  type="text"
                  placeholder="Nombre(s)"
                  value={form.firstName}
                  onChange={handleChange}
                  className="rounded-xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                />

                <input
                  name="lastName"
                  type="text"
                  placeholder="Apellidos"
                  value={form.lastName}
                  onChange={handleChange}
                  className="rounded-xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                />

                <input
                  name="dni"
                  type="text"
                  placeholder="DNI"
                  maxLength={8}
                  value={form.dni}
                  onChange={handleChange}
                  className="rounded-xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Teléfono"
                  value={form.phone}
                  onChange={handleChange}
                  className="rounded-xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  value={form.email}
                  onChange={handleChange}
                  className="md:col-span-2 rounded-xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                />

                <select
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  className="md:col-span-2 rounded-xl border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                >
                  <option value="">Seleccione el motivo</option>
                  <option value="Reclamo">Reclamo</option>
                  <option value="Queja">Queja</option>
                  <option value="Consulta">Consulta</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={7}
                placeholder="Describa detalladamente su reclamo o queja..."
                value={form.message}
                onChange={handleChange}
                className="mt-5 w-full rounded-xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--primary)]"
              />
              {error && (
                <div className="mb-4 rounded-xl px-4 py-3 text-red-700 ">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--primary-dark)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={18} />

                {loading ? "Enviando..." : "Enviar Reclamo"}
              </button>
            </form>
          </div>

          {/* INFORMACIÓN */}
          <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-[var(--primary-dark)]">
              Información Importante
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <AlertCircle className="mt-1 text-[var(--primary)]" />

                <div>
                  <p className="font-semibold">¿Qué es un Reclamo?</p>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Es la manifestación de una disconformidad relacionada con un
                    producto o servicio recibido.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertCircle className="mt-1 text-[var(--primary)]" />

                <div>
                  <p className="font-semibold">¿Qué es una Queja?</p>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Es una disconformidad relacionada con la atención recibida o
                    con el trato brindado por nuestro personal.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3 className="mt-1 text-[var(--primary)]" />

                <div>
                  <p className="font-semibold">Tiempo de respuesta</p>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Atenderemos tu solicitud dentro de los plazos establecidos
                    por la normativa vigente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="mt-1 text-[var(--primary)]" />

                <div>
                  <p className="font-semibold">Confidencialidad</p>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Toda la información proporcionada será tratada de forma
                    confidencial y utilizada únicamente para atender tu
                    solicitud.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-[var(--surface)] p-5">
              <p className="font-semibold text-[var(--primary-dark)]">
                Importante
              </p>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Al enviar este formulario declaras que la información
                proporcionada es verdadera y autorizas su tratamiento para la
                gestión de tu reclamo o queja.
              </p>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="w-[90%] max-w-md rounded-2xl bg-white p-6 text-center">
            <h2 className="text-xl font-bold text-green-600">
              ✔ Reclamo enviado
            </h2>

            <p className="mt-2 text-gray-600">
              Hemos recibido tu solicitud correctamente.
            </p>

            <button
              onClick={() => setOpenModal(false)}
              className="mt-4 rounded-lg bg-[var(--primary)] px-4 py-2 text-white"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
