"use client";

import {
  Truck,
  PackageCheck,
  Stethoscope,
  MapPinned,
  CreditCard,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Entrega a domicilio",
    description:
      "Recibe tus productos de forma rápida y segura hasta la puerta de tu hogar o negocio.",
  },

  {
    icon: Stethoscope,
    title: "Diagnóstico técnico",
    description:
      "Asesoría especializada para ayudarte a elegir la mejor solución para tus necesidades.",
  },
  {
    icon: MapPinned,
    title: "Envíos a todo el Perú",
    description:
      "Cobertura nacional para clínicas, hospitales, laboratorios y profesionales.",
  },
  {
    icon: CreditCard,
    title: "Métodos de pago",
    description:
      "Aceptamos transferencia bancaria, Yape, Plin y otros medios seguros.",
  },
];

export default function CustomerService() {
  return (
    <section className="py-20 bg-[var(--surface-muted)]">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span
            className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              backgroundColor: "rgba(0,123,219,.10)",
              color: "var(--primary)",
            }}
          >
            Servicio al Cliente
          </span>

          <h2
            className="mt-5 text-3xl font-bold md:text-4xl"
            style={{ color: "var(--primary-dark)" }}
          >
            Compra con total confianza
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl text-base md:text-lg"
            style={{ color: "var(--muted)" }}
          >
            Nuestro compromiso es brindarte atención personalizada, envíos
            seguros y soporte especializado en cada etapa de tu compra.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
          group
          relative
          flex
          flex-col
          h-[220px]
          md:h-[250px]
          overflow-hidden
          rounded-[var(--radius-md)]
          bg-white
          p-4
          md:p-6
          transition-all
          duration-300
          hover:-translate-y-2
        "
                style={{
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                {/* Línea superior */}
                <div
                  className="
            absolute
            left-0
            top-0
            h-1
            w-full
            scale-x-0
            transition-transform
            duration-300
            group-hover:scale-x-100
          "
                  style={{
                    background:
                      "linear-gradient(to right,var(--primary),var(--accent))",
                    transformOrigin: "left",
                  }}
                />

                {/* Icon */}
                <div className="flex justify-center">
                  <div
                    className="
    flex
    h-12
    w-12
    md:h-16
    md:w-16
    items-center
    justify-center
    rounded-full
    transition-transform
    duration-300
    group-hover:scale-110
  "
                    style={{
                      background:
                        "linear-gradient(135deg,var(--primary),var(--secondary))",
                    }}
                  >
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
            mt-4
            text-center
            text-sm
            md:text-lg
            font-semibold
          "
                  style={{ color: "var(--primary-dark)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
            mt-2
            text-center
            text-xs
            md:text-sm
            leading-5
            md:leading-6
          "
                  style={{ color: "var(--muted)" }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
