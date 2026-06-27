export const metadata = {
  title: "Equipos Biomédicos en Perú",
  description:
    "RBIOMEDICS ofrece soluciones biomédicas para hospitales y clínicas en Perú con equipos certificados, soporte técnico y asesoría especializada.",

  alternates: {
    canonical: "https://rbiomedics.com/equipos-biomedicos",
  },
};

export default function EquiposBiomedicosPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-3xl font-bold">Equipos Biomédicos en Perú</h1>

      <p>
        En RBIOMEDICS somos especialistas en la venta de equipos biomédicos para
        hospitales, clínicas y centros de salud en todo el Perú. Ofrecemos
        tecnología confiable, certificada y con soporte técnico especializado.
      </p>

      <section>
        <h2 className="text-xl font-semibold">Tipos de equipos biomédicos</h2>

        <ul className="list-disc pl-5 mt-3 space-y-2">
          <li>Monitores multiparámetro</li>
          <li>Desfibriladores</li>
          <li>Autoclaves médicos</li>
          <li>Ecógrafos</li>
          <li>Equipos de diagnóstico clínico</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">¿Por qué elegir RBIOMEDICS?</h2>

        <ul className="list-disc pl-5 mt-3 space-y-2">
          <li>Equipos certificados y de alta calidad</li>
          <li>Soporte técnico especializado en Perú</li>
          <li>Asesoría para clínicas y hospitales</li>
          <li>Atención personalizada</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Solicita una cotización</h2>

        <p>
          Contáctanos por WhatsApp para recibir asesoría y precios
          personalizados según tu institución.
        </p>

        <a
          href="https://wa.me/51961446461?text=Hola%20quiero%20cotizar%20equipos%20biomédicos"
          className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Cotizar por WhatsApp
        </a>
      </section>
    </main>
  );
}
