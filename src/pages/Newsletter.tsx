import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const NEWSLETTER_FORM_ID = "99cfce7e-34b0-4083-8495-93138ec9d590";

const Newsletter = () => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  useEffect(() => {
    if (!formRef.current) return;

    const container = formRef.current;
    container.innerHTML = "";
    setIsFormLoaded(false);

    // Esconde o loader assim que o beehiiv injeta o iframe do formulário.
    const observer = new MutationObserver(() => {
      if (container.querySelector("iframe")) {
        setIsFormLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    // Segurança: some com o loader mesmo se a detecção falhar.
    const fallback = window.setTimeout(() => setIsFormLoaded(true), 10000);

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.dataset.beehiivForm = NEWSLETTER_FORM_ID;
    container.appendChild(script);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      if (container.contains(script)) {
        container.removeChild(script);
      }
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-2 py-16 sm:px-4 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl sm:rounded-[2rem] sm:p-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/80">Newsletter</p>
            <h1 className="mt-4 text-2xl font-semibold sm:text-5xl">Assine nossa newsletter</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-foreground/70 sm:text-lg sm:leading-7">
              Notícias semanalmente, te atualizando sobre o Mercado Financeiro, conjuntura econômica global e o mundo dos negócios.
            </p>
          </div>

          <div className="relative mt-8 sm:mt-10">
            <div
              className="rounded-2xl border border-white/10 bg-background/80 p-0 min-h-[520px] sm:rounded-[1.5rem] sm:p-8"
              ref={formRef}
            />

            {!isFormLoaded && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-foreground/60">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <span className="text-sm">Carregando formulário…</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
            <Button asChild variant="gold" size="lg" className="w-full max-w-lg">
              <Link to="/">Voltar para a página inicial</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
