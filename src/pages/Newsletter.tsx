import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NEWSLETTER_FORM_ID = "99cfce7e-34b0-4083-8495-93138ec9d590";

const Newsletter = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!formRef.current) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.dataset.beehiivForm = NEWSLETTER_FORM_ID;
    formRef.current.appendChild(script);

    return () => {
      if (formRef.current?.contains(script)) {
        formRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/80">Newsletter</p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">Assine nossa newsletter</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
              Notícias semanalmente, te atualizando sobre o Mercado Financeiro, conjuntura econômica global e o mundo dos negócios.
            </p>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-background/80 p-4 sm:p-6" ref={formRef} />

          <div className="mt-10 flex flex-col items-center gap-4">
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
