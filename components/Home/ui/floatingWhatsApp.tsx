import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/51961446461?text=Hola,RBIOMEDICS."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5
        right-1
        z-50

        flex items-center justify-center

        w-14 h-14
        md:w-16 md:h-16

        rounded-full
        bg-green-500/50
        text-white

        shadow-lg shadow-green-500/30

        transition-all duration-300 ease-out
        hover:right-5
        hover:scale-105
        hover:bg-green-600

        data-[menu-open=true]:opacity-0
        data-[menu-open=true]:pointer-events-none
      "
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
    </Link>
  );
}
