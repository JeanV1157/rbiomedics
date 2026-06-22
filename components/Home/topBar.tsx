"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldHide = window.scrollY > 50;
      setHidden((prev) => (prev !== shouldHide ? shouldHide : prev));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`overflow-hidden transition-all duration-300 bg-[var(--primary-dark)] text-white lg:block hidden ${
        hidden ? "max-h-0 py-0" : "max-h-20 py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 md:gap-6 text-xs sm:text-sm whitespace-nowrap">
        <div className="flex items-center gap-1 md:gap-2">
          <Phone size={14} className="text-[var(--accent)] shrink-0" />
          <span>+51 961446461</span>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <MessageCircle size={14} className="text-[var(--accent)] shrink-0" />
          <span>961446461</span>
        </div>

        <div className="flex items-center gap-1 md:gap-2 min-w-0">
          <Mail size={14} className="text-[var(--accent)] shrink-0" />
          <span className="truncate">rbiomedics@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
