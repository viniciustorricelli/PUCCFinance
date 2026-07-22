import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-pucc-finance.png";

const SELECTION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeVGesuoRcEqueA2EwnyEEsJj78byWQLejT1q9Njb1p-mbhUw/viewform?usp=dialog";

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Projetos", href: "#projetos" },
  { name: "Equipe", href: "#equipe" },
  { name: "Parceiros", href: "#parceiros" },
  { name: "Nossas ações", href: "#acoes" },
  { name: "Eventos", href: "#eventos" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  // Ao tocar num link do menu mobile, fechamos o menu primeiro e só rolamos
  // depois que a animação de saída termina. Rolar enquanto o menu colapsa
  // cancela o smooth-scroll nativo (a mudança de layout interrompe a animação).
  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setPendingHash(href);
    }
    setIsMobileMenuOpen(false);
  };

  const handleMenuExitComplete = () => {
    if (!pendingHash) return;
    const target = document.querySelector(pendingHash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", pendingHash);
    }
    setPendingHash(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      {/* Faixa do Processo Seletivo — acima de todo o site */}
      <a
        href={SELECTION_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 bg-gradient-gold px-4 py-2 text-[13px] sm:text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-105"
      >
        <span className="tracking-wide">Processo Seletivo aberto — Inscreva-se</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20 lg:h-24">
          {/* Logo — escondida no topo (onde a logo central do Hero é o destaque)
              e revelada conforme o usuário rola a página para baixo. */}
          <a
            href="#inicio"
            className={`relative z-10 flex items-center gap-3 group transition-all duration-500 ease-out ${
              isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <img
              src={logo}
              alt="PUCC Finance — Liga de Mercado Financeiro"
              className="h-28 w-28 lg:h-36 lg:w-36 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </a>

          {/* Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground rounded-lg hover:bg-white/[0.04] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/puccfinance?igsh=bnk2bDJ6cXU1eGx3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground/50 hover:text-primary transition-colors duration-300"
              >
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/company/puccfinance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/50 hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <Button variant="gold" size="sm" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors duration-300"
            aria-label="Abrir menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence onExitComplete={handleMenuExitComplete}>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/70 hover:text-foreground hover:bg-white/[0.04] rounded-lg px-4 py-3 text-base font-medium transition-all duration-300"
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-5 px-4 pt-5 mt-3 border-t border-white/[0.06]">
                <a
                  href="https://www.instagram.com/puccfinance?igsh=bnk2bDJ6cXU1eGx3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-foreground/50 hover:text-primary transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/puccfinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-foreground/50 hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <Button variant="gold" className="mt-5 mx-4" asChild>
                <a href="#contato" onClick={(e) => handleMobileNavClick(e, "#contato")}>
                  Entre em Contato
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
