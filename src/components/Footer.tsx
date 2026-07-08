import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-pucc-finance.png";

const footerLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Projetos", href: "#projetos" },
  { name: "Equipe", href: "#equipe" },
  { name: "Parceiros", href: "#parceiros" },
  { name: "Eventos", href: "#eventos" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Marca */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <a href="#inicio">
              <img
                src={logo}
                alt="PUCC Finance ÔÇö Liga de Mercado Financeiro"
                className="h-40 w-auto transition-transform duration-500 ease-out hover:scale-105"
              />
            </a>
          </div>

          {/* Navega├º├úo */}
          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Redes */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/puccfinance?igsh=bnk2bDJ6cXU1eGx3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <Instagram className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/company/puccfinance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-7 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PUCC Finance. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

