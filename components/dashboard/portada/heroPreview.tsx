import Image from "next/image";

interface Props {
  image: string;
}

export default function HeroPreview({ image }: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-white
      "
    >
      <div className="p-6 border-b border-[var(--border)]">
        <h2 className="font-bold text-xl text-[var(--primary-dark)]">
          Vista previa
        </h2>
      </div>

      <div className="relative aspect-[21/8]">
        <Image src={image} alt="Preview" fill className="object-cover" />
      </div>
    </div>
  );
}
