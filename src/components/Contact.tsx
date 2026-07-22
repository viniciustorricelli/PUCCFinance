import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, MapPin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-pucc-finance.png";

const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/FkKKKBVbfGF8OYRf84pmtX";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-justify">
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
            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover group flex items-center gap-5 rounded-2xl p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:bg-primary/15 group-hover:border-primary/40">
                <WhatsappIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-foreground">
                  Comunidade no WhatsApp
                </p>
                <p className="text-sm text-muted-foreground">
                  Entre e fique por dentro de tudo
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-foreground/25 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
            </a>

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
            <p className="mx-auto lg:mx-0 max-w-md leading-relaxed text-muted-foreground mb-8 sm:text-justify">
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
