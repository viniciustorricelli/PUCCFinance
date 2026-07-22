import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Trophy, Gift, Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import volareLogo from "@/assets/partners/volare.png";

const VOLARE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5KVLsWhQbddGpcZa3_fY8iI8FzEP3fp_rZmjgoIbjGMsS7w/viewform?usp=publish-editor";

const prizes = [
  {
    icon: Trophy,
    title: "R$ 3.000 em premiação",
    description: "Recompensa em dinheiro para os melhores portfólios.",
    color: "text-amber-300",
    ring: "border-amber-400/30 bg-amber-400/10",
  },
  {
    icon: Gift,
    title: "Itens exclusivos",
    description: "Brindes e itens exclusivos da Volare | XP.",
    color: "text-emerald-300",
    ring: "border-emerald-400/30 bg-emerald-400/10",
  },
  {
    icon: Award,
    title: "Reconhecimento no mercado",
    description: "Destaque junto à Volare e oportunidades de networking.",
    color: "text-sky-300",
    ring: "border-sky-400/30 bg-sky-400/10",
  },
];

function ChallengeCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glass-card-hover rounded-3xl p-6 sm:p-9 lg:p-11 overflow-hidden relative"
    >
      {/* brilho decorativo */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(49_100%_51%/0.16)_0%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          {/* Logo Volare em destaque + status */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-16 sm:h-20 items-center rounded-2xl border border-primary/40 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-6 sm:px-9 shadow-[0_0_50px_-10px_hsl(49_100%_51%/0.4)]">
              <img
                src={volareLogo}
                alt="Volare Investimentos | XP"
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
              Em preparação
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[44px] font-display font-bold leading-[1.12] tracking-tight text-foreground">
            Desafio Volare
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-primary/80">
            Desafio de estrutura de portfólio
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-justify">
            Monte e defenda a carteira de investimentos mais consistente com
            base em risco, diversificação e estratégia. Coloque em prática o que
            aprende sobre o mercado e dispute prêmios ao lado da Volare
            Investimentos | XP.
          </p>

          <div className="mt-7">
            <Button variant="hero" size="xl" asChild>
              <a
                href={VOLARE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                Inscreva-se no desafio
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Premiação */}
        <div className="grid w-full gap-4 sm:grid-cols-3 lg:w-auto lg:max-w-xs lg:grid-cols-1">
          {prizes.map((prize) => (
            <div
              key={prize.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl border ${prize.ring}`}
              >
                <prize.icon className={`h-6 w-6 ${prize.color}`} />
              </div>
              <p className="mt-4 font-display font-semibold text-foreground leading-snug">
                {prize.title}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {prize.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const Challenges = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main className="pt-28 pb-16 sm:pt-32 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, y: 28 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mb-8 sm:mb-10"
            >
              <span className="section-label">Desafios</span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[52px] font-display font-bold leading-[1.12] tracking-tight text-foreground">
                Desafios da Liga
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-justify">
                Competições práticas, em parceria com o mercado financeiro, para
                testar suas habilidades e ganhar prêmios.
              </p>
            </motion.div>

            <ChallengeCard />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Challenges;
