import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/FkKKKBVbfGF8OYRf84pmtX";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsappFloat() {
  const [heroInView, setHeroInView] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [ready, setReady] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => setReady(true), []);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Sempre visível (inclusive na primeira tela do celular).
  const visible = ready;
  // O rótulo só expande no desktop (na tela inicial ou no hover); no celular
  // fica apenas o ícone pequeno no canto, para sobrepor o mínimo do conteúdo.
  const expanded = !isMobile && (heroInView || hovered);

  return (
    <a
      href={WHATSAPP_COMMUNITY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entre na Comunidade PUCC Finance no WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center rounded-full bg-[#25D366] text-white shadow-[0_5px_18px_-4px_rgba(37,211,102,0.45)] transition-all duration-500 ease-out hover:brightness-105 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } ${expanded ? "gap-2.5 py-3 pl-4 pr-5" : "gap-0 p-2.5 sm:p-3"}`}
    >
      {/* Anel pulsante bem sutil, só no desktop, para atrair o olhar sem incomodar no mobile */}
      <span className="pointer-events-none absolute inset-0 hidden sm:block rounded-full bg-[#25D366] opacity-20 animate-ping [animation-duration:3s]" />
      <WhatsappIcon
        className={`relative shrink-0 transition-all duration-300 ${
          expanded ? "h-6 w-6 sm:h-7 sm:w-7" : "h-5 w-5 sm:h-6 sm:w-6"
        }`}
      />
      <span
        className={`relative overflow-hidden whitespace-nowrap font-semibold transition-all duration-300 ${
          expanded ? "max-w-[240px] opacity-100 text-[15px] sm:text-base" : "max-w-0 opacity-0"
        }`}
      >
        Comunidade no WhatsApp
      </span>
    </a>
  );
}
