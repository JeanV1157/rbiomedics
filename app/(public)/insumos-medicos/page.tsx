export const metadata = {
  title: "Insumos médicos en Perú",
  description:
    "RBIOMEDICS ofrece soluciones biomédicas para hospitales y clínicas en Perú con equipos certificados, soporte técnico y asesoría especializada.",

  alternates: {
    canonical: "https://rbiomedics.com/insumos-medicos",
  },
};

export default function InsumosMedicosPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-3xl font-bold">Insumos Médicos en Perú</h1>

      <p>
        RBIOMEDICS distribuye insumos médicos para clínicas, hospitales y
        laboratorios en todo el Perú con garantía y abastecimiento continuo.
      </p>

      <h2 className="text-xl font-semibold">Productos principales</h2>

      <ul className="list-disc pl-5 mt-3 space-y-2">
        <li>Guantes médicos</li>
        <li>Mascarillas quirúrgicas</li>
        <li>Jeringas y agujas</li>
        <li>Material descartable</li>
        <li>Insumos para laboratorio</li>
      </ul>

      <h2 className="text-xl font-semibold">Atención a instituciones</h2>

      <p>
        Atendemos pedidos corporativos para clínicas, hospitales y centros de
        salud en todo el Perú.
      </p>
    </main>
  );
}
