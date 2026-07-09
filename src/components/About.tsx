import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const aboutText = [
  "A PUCC Finance foi fundada em janeiro de 2026 por Gabriel Zanini, Luis Fernando e Vinícius Torricelli, diante da inexistência de uma liga voltada ao mercado financeiro na PUC-Campinas. Unidos pelo propósito de preencher essa lacuna, os três estudantes de Ciências Econômicas criaram uma entidade dedicada à formação e ao desenvolvimento dos alunos interessados no setor.",
  "Inspirada nas principais ligas do país, a PUCC Finance tem como missão identificar talentos, conectá-los às melhores oportunidades e aproximar a universidade do mercado financeiro por meio de cursos, eventos, competições, visitas técnicas e networking. Nosso objetivo é formar uma comunidade de excelência e preparar os alunos da PUC-Campinas para carreiras de destaque no mercado financeiro.",
];

export function About() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-14 lg:gap-20 items-start">
          {/* Coluna esquerda: título e introdução */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 28 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <span className="section-label">Sobre</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-display font-bold leading-[1.12] tracking-tight text-foreground">
              Sobre a Liga
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-md">
              Somos uma entidade estudantil comprometida com a formação de
              profissionais preparados para o mercado financeiro.
            </p>
            <div className="mt-8 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
          </motion.div>

          {/* Coluna direita: bloco único de texto sobre a liga */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card glass-card-hover rounded-2xl p-7 sm:p-8 lg:p-10"
          >
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              {aboutText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

