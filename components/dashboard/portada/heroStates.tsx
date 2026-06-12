interface Props {
  totalImages: number;
}

export default function HeroStats({ totalImages }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
        <p className="text-sm text-[var(--muted)]">Imágenes cargadas</p>

        <h3 className="mt-2 text-3xl font-bold text-[var(--primary-dark)]">
          {totalImages}/5
        </h3>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
        <p className="text-sm text-[var(--muted)]">Estado</p>

        <h3 className="mt-2 text-3xl font-bold text-green-600">Activo</h3>
      </div>
    </div>
  );
}
