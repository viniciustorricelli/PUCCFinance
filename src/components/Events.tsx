import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, Mic2, Swords } from "lucide-react";

/**
 * PLACEHOLDER: substituir pelos eventos reais (título, data, local e link
 * de inscrição). As categorias abaixo derivam das frentes de atuação da liga.
 */
const events = [
  {
    icon: Mic2,
    tag: "Em preparação",
    title: "Semana do Mercado Financeiro",
    description:
      "Nos dias 19 e 20 de outubro, a PUCC Finance realizará dois dias de imersão no mercado financeiro com palestras, networking e grandes nomes do setor. Já estão confirmados Tallis Gomes e Luiz Barsi Neto, e novos convidados serão anunciados em breve.",
  },
  {
    icon: Swords,
    tag: "Em preparação",
    title: "Desafio Volare",
    description:
      "Entre setembro e novembro, realizaremos um desafio de investimentos na plataforma Investopedia em parceria com a Volare Investimentos | XP. Os participantes disputarão uma premiação de R$ 3.000, além de oportunidades de estágio e reconhecimento junto ao mercado financeiro.",
  },
  {
    icon: CalendarDays,
    tag: "Em preparação",
    title: "Visitas ao longo do semestre",
    description:
      "Ao longo do semestre, promoveremos visitas técnicas a instituições financeiras, gestoras, bancos e empresas de destaque. A iniciativa busca aproximar nossos membros do ambiente profissional, proporcionando contato direto com especialistas e a rotina do mercado.",
  },
];

function EventCard({ event, index }: { event: (typeof events)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glass-card-hover group rounded-2xl p-7 flex flex-col"
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:bg-primary/15 group-hover:border-primary/40">
          <event.icon className="h-5 w-5 text-primary" />
        </div>
        <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
          {event.tag}
        </span>
      </div>
      <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-2.5 leading-snug">
        {event.title}
      </h3>
      <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
        {event.description}
      </p>
    </motion.div>
  );
}

export function Events() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="eventos" className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label">Eventos</span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-[52px] font-display font-bold leading-[1.12] tracking-tight text-foreground">
            Agenda da Liga
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Acompanhe nossos canais para ficar por dentro das próximas
            palestras, workshops e competições.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
