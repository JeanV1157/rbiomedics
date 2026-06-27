"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, TruckElectricIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--surface)] px-4 py-8">
      <div className="w-full max-w-md">
        <div
          className="
            rounded-3xl
            border
            border-[var(--border)]
            bg-white
            p-6
            shadow-xl
            md:p-8
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-[var(--muted)]
                transition
                hover:text-[var(--primary)]
              "
            >
              <ArrowLeft size={16} />
              Volver
            </Link>

            <Image
              src="/images/logo3.png"
              alt="RBIOMEDICS"
              width={140}
              height={50}
              className="h-10 w-auto object-contain md:h-12"
              priority
            />
          </div>

          {/* Título */}
          <div className="mt-8 text-center">
            <h1 className="text-2xl font-bold text-[var(--primary-dark)] md:text-3xl">
              Iniciar Sesión
            </h1>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Accede al panel administrativo de RBIOMEDICS
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full
                rounded-xl
                border
                border-[var(--border)]
                px-4
                py-3
                outline-none
                transition
                focus:border-[var(--primary)]
                focus:ring-2
                focus:ring-[var(--primary)]/10
              "
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                w-full
                rounded-xl
                border
                border-[var(--border)]
                px-4
                py-3
                outline-none
                transition
                focus:border-[var(--primary)]
                focus:ring-2
                focus:ring-[var(--primary)]/10
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-xl
                bg-[var(--primary)]
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[var(--primary-dark)]
                hover:shadow-lg
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? "Ingresando..." : "Ingresar"}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-[var(--muted)]">
            Acceso restringido para personal autorizado.
          </p>
        </div>
      </div>
    </main>
  );
}
