import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-pucc-finance.png";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Acelera levemente o vídeo para que o movimento seja percebido logo de cara
  // (o clipe original é lento). 1.4x mantém a fluidez sem parecer "acelerado".
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.4;
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 sm:pt-24"
    >
      {/* Vídeo de fundo: aérea da Ponte Estaiada e das torres corporativas da
          Faria Lima / Berrini — o polo financeiro de São Paulo (Pexels, uso livre).
          O poster (1º frame) aparece instantâneo enquanto o vídeo carrega. */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          className="h-full w-full object-cover opacity-[0.65]"
        >
          <source src="/videos/hero-faria-lima.mp4" type="video/mp4" />
        </video>
        {/* Overlays para legibilidade: escurecimento leve + fusão com o fundo nas bordas.
            Mantido suave para não escurecer demais o vídeo. */}
        <div className="absolute inset-0 bg-background/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-1 sm:mb-4 flex justify-center"
        >
          <img
            src={logo}
            alt="PUCC Finance — Liga de Mercado Financeiro"
            className="h-[clamp(12rem,calc(100dvh-28rem),18rem)] sm:h-80 md:h-96 w-auto drop-shadow-[0_0_60px_hsl(49,100%,51%,0.25)]"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-display font-bold leading-[1.08] tracking-tight text-foreground"
        >
          A Liga de{" "}
          <span className="text-gradient-gold">Mercado Financeiro</span>
          <br className="hidden sm:block" /> da PUC-Campinas
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-3 sm:mt-7 max-w-2xl text-base sm:text-xl font-light leading-relaxed text-foreground/60"
        >
          Formação prática e aproximação com o mercado financeiro para os
          alunos da PUC-Campinas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Button variant="hero" size="xl" className="w-full sm:w-64" asChild>
            <a href="#contato" className="group">
              Entre em Contato
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" className="w-full sm:w-64" asChild>
            <a href="#sobre">Conheça a Liga</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-primary transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </motion.a>

      {/* Linha divisória inferior com brilho central */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
