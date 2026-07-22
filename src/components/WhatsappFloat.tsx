import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/FkKKKBVbfGF8OYRf84pmtX";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsappFloat() {
  // O rótulo se expande sozinho por alguns segundos ao abrir o site para
  // chamar atenção, depois recolhe — sem cobrir o conteúdo nem competir com
  // a faixa do processo seletivo. Ao passar o mouse, volta a expandir.
  const [labelOpen, setLabelOpen] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setLabelOpen(true), 1400);
    const hideTimer = setTimeout(() => setLabelOpen(false), 6400);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <motion.a
      href={WHATSAPP_COMMUNITY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entre na Comunidade PUCC Finance no WhatsApp"
      onMouseEnter={() => setLabelOpen(true)}
      onMouseLeave={() => setLabelOpen(false)}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-2.5 rounded-full bg-[#25D366] p-2.5 sm:py-3 sm:pl-3 sm:pr-3.5 text-white shadow-[0_4px_14px_-4px_rgba(37,211,102,0.4)] transition-all duration-300 hover:brightness-105"
    >
      {/* Anel pulsante bem sutil, só no desktop, para atrair o olhar sem incomodar no mobile */}
      <span className="pointer-events-none absolute inset-0 hidden sm:block rounded-full bg-[#25D366] opacity-20 animate-ping [animation-duration:3s]" />
      <WhatsappIcon className="relative h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
      <span
        className={`relative overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 ${
          labelOpen ? "max-w-[220px] opacity-100" : "max-w-0 opacity-0 group-hover:max-w-[220px] group-hover:opacity-100"
        }`}
      >
        Comunidade no WhatsApp
      </span>
    </motion.a>
  );
}
