import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import xpLogo from "@/assets/partners/xp.png";
import barsiLogo from "@/assets/partners/barsi.png";
import altoValorLogo from "@/assets/partners/altovalor.png";
import volareLogo from "@/assets/partners/volare.png";

const partners = [
  { name: "XP Investimentos", logo: xpLogo, href: "https://www.xpi.com.br/" },
  { name: "Luiz Barsi Investimentos", logo: barsiLogo, href: "https://www.grupobarsi.com/" },
  {
    name: "Alto Valor Investimentos",
    logo: altoValorLogo,
    href: "https://altovalorinvestimentos.com.br/",
  },
  {
    name: "Volare Investimentos",
    logo: volareLogo,
    href: "https://www.volareinvestimentos.com.br/",
  },
];

export function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="parceiros" className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-3xl px-7 py-14 sm:px-14 text-center overflow-hidden relative"
        >
          {/* brilho decorativo */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[36rem] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(49_100%_51%/0.12)_0%,transparent_70%)] blur-2xl"
            aria-hidden="true"
          />

          <span className="section-label justify-center">Parceiros</span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground">
            Construindo pontes com o mercado
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-justify">
            Estamos abrindo espaço para instituições e empresas que queiram se
            conectar com os futuros profissionais do mercado financeiro.
          </p>

          {/* Logos dos parceiros */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.name}
                className="flex h-20 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.04]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-9 w-auto max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              </a>
            ))}
          </div>

          <div className="mt-12">
            <Button variant="goldOutline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/company/puccfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                Torne-se um parceiro
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
