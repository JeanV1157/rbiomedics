import Image from "next/image";

const ISOS = [
  {
    name: "ISO 9001",
    image: "/images/ISO9001.jpeg",
  },
  {
    name: "ISO 37001",
    image: "/images/ISO37001.jpeg",
  },
  {
    name: "ISO 14001",
    image: "/images/ISO14001.jpeg",
  },
];

export default function IsoSection() {
  return (
    <section className="py-12 bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Certificaciones
          </span>

          <h2 className="mt-2 text-3xl font-bold text-[var(--primary-dark)]">
            Calidad y confianza certificadas
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[var(--muted)]">
            Trabajamos bajo estándares internacionales que respaldan nuestro
            compromiso con la calidad, la seguridad y la mejora continua.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
          {ISOS.map((iso) => (
            <div
              key={iso.name}
              className="
        flex
        flex-col
        items-center
        rounded-xl
        border
        border-[var(--border)]
        bg-white
        p-3
        sm:p-4
        lg:p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
            >
              <Image
                src={iso.image}
                alt={iso.name}
                width={120}
                height={120}
                className="
          h-14
          w-auto
          sm:h-16
          md:h-20
          lg:h-24
          object-contain
        "
              />

              <h3
                className="
          mt-3
          text-center
          text-[10px]
          sm:text-xs
          md:text-sm
          font-semibold
          text-[var(--primary-dark)]
        "
              >
                {iso.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
