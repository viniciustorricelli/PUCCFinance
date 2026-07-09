import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, MapPin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-pucc-finance.png";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/puccfinance?igsh=bnk2bDJ6cXU1eGx3",
    username: "@puccfinance",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/puccfinance",
    username: "PUCC Finance",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label">Contato</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-display font-bold leading-[1.12] tracking-tight text-foreground">
            Entre em Contato
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Quer saber mais sobre a Liga ou participar do nosso processo
            seletivo? Fale conosco!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Canais */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover group flex items-center gap-5 rounded-2xl p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:bg-primary/15 group-hover:border-primary/40">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-display font-semibold text-foreground">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{link.username}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground/25 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
              </a>
            ))}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ligafinanceirapucc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover group flex items-center gap-5 rounded-2xl p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:bg-primary/15 group-hover:border-primary/40">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-foreground">
                  E-mail
                </p>
                <p className="text-sm text-muted-foreground">
                  ligafinanceirapucc@gmail.com
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-foreground/25 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+P%C3%BAblica%2C+286+-+Parque+dos+Jacarand%C3%A1s%2C+Campinas+-+SP%2C+13086-061"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover group flex items-center gap-5 rounded-2xl p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:bg-primary/15 group-hover:border-primary/40">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-foreground">
                  Localização
                </p>
                <p className="text-sm text-muted-foreground">
                  Av. Pública, 286 – Parque dos Jacarandás, Campinas - SP,
                  13086-061
                </p>
                <p className="text-sm text-muted-foreground">
                  Salinha do DAVM (H4)
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-foreground/25 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Chamada */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="mx-auto lg:mx-0 mb-8 h-44 w-auto opacity-90 drop-shadow-[0_0_40px_hsl(49,100%,51%,0.2)]"
            />
            <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground mb-4">
              Faça Parte da Liga
            </h3>
            <p className="mx-auto lg:mx-0 max-w-md leading-relaxed text-muted-foreground mb-8">
              Junte-se a uma comunidade de estudantes apaixonados pelo mercado
              financeiro. Desenvolva suas habilidades e construa sua carreira
              desde a universidade.
            </p>
            <Button variant="gold" size="lg" asChild>
              <a
                href="https://www.instagram.com/puccfinance?igsh=bnk2bDJ6cXU1eGx3"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                Acompanhe no Instagram
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
