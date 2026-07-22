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
    description: "Recompensa em dinheiro para os melhores portfólios estruturados.",
  },
  {
    icon: Gift,
    title: "Itens exclusivos",
    description: "Brindes e itens exclusivos da Volare Investimentos | XP.",
  },
  {
    icon: Award,
    title: "Reconhecimento no mercado",
    description: "Destaque junto à Volare Investimentos e oportunidades de networking.",
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
      className="glass-card glass-card-hover rounded-3xl p-7 sm:p-10 lg:p-12 overflow-hidden relative"
    >
      {/* brilho decorativo */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(49_100%_51%/0.14)_0%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2.5">
              <img
                src={volareLogo}
                alt="Volare Investimentos | XP"
                className="max-h-full w-auto object-contain"
              />
            </div>
            <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              Em preparação
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[44px] font-display font-bold leading-[1.12] tracking-tight text-foreground">
            Desafio Volare
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-primary/80">
            Em parceria com Volare Investimentos | XP
          </p>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-justify">
            Um desafio de estruturação de portfólio, no qual os participantes
            deverão montar e defender a carteira de investimentos mais
            consistente com base em critérios de risco, diversificação e
            estratégia. Uma oportunidade de colocar em prática o que se
            aprende sobre o mercado financeiro e se destacar junto a uma das
            principais gestoras parceiras da Liga.
          </p>

          <div className="mt-8">
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
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <prize.icon className="h-5 w-5 text-primary" />
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
        <main className="pt-40 pb-16 sm:pt-48 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, y: 28 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mb-12 sm:mb-16"
            >
              <span className="section-label">Desafios</span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[52px] font-display font-bold leading-[1.12] tracking-tight text-foreground">
                Desafios da Liga
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground sm:text-justify">
                Competições práticas, em parceria com empresas do mercado
                financeiro, para você testar suas habilidades e ganhar
                reconhecimento e premiações.
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
