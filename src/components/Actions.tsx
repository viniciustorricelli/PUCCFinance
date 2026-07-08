import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageIcon } from "lucide-react";

/**
 * "Nossas ações" — registro das visitas e eventos que a liga já realizou.
 *
 * COMO ADICIONAR UMA FOTO:
 * 1. Coloque a imagem em src/assets/ (ex.: src/assets/acao-visita-xp.jpg).
 * 2. Importe no topo deste arquivo:
 *      import acaoVisitaXp from "@/assets/acao-visita-xp.jpg";
 * 3. No item correspondente abaixo, preencha o campo `photo: acaoVisitaXp`.
 *
 * Enquanto `photo` estiver vazio, o cartão mostra um placeholder — assim a
 * seção já funciona antes de as fotos serem adicionadas.
 */

interface Action {
  title: string;
  date?: string;
  description: string;
  photo?: string;
  photoPosition?: string;
}

const actions: Action[] = [
  {
    title: "Título da ação",
    date: "Mês de 2026",
    description:
      "Descreva aqui a visita ou o evento: onde foi, o que os membros aprenderam e qual foi o resultado para a liga. Substitua este texto e adicione a foto.",
  },
  {
    title: "Título da ação",
    date: "Mês de 2026",
    description:
      "Descreva aqui a visita ou o evento: onde foi, o que os membros aprenderam e qual foi o resultado para a liga. Substitua este texto e adicione a foto.",
  },
  {
    title: "Título da ação",
    date: "Mês de 2026",
    description:
      "Descreva aqui a visita ou o evento: onde foi, o que os membros aprenderam e qual foi o resultado para a liga. Substitua este texto e adicione a foto.",
  },
  {
    title: "Título da ação",
    date: "Mês de 2026",
    description:
      "Descreva aqui a visita ou o evento: onde foi, o que os membros aprenderam e qual foi o resultado para a liga. Substitua este texto e adicione a foto.",
  },
];

function ActionCard({ action, index }: { action: Action; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glass-card-hover group flex flex-col overflow-hidden rounded-2xl"
    >
      {/* Área da foto (proporção 4:3) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/[0.04]">
        {action.photo ? (
          <img
            src={action.photo}
            alt={action.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            style={{ objectPosition: action.photoPosition || "center" }}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-foreground/25">
            <ImageIcon className="h-9 w-9" />
            <span className="text-xs font-medium uppercase tracking-wider">
              Foto em breve
            </span>
          </div>
        )}
      </div>

      {/* Texto */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {action.date && (
          <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/90">
            {action.date}
          </span>
        )}
        <h3 className="text-xl sm:text-2xl font-display font-semibold leading-snug text-foreground">
          {action.title}
        </h3>
        <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">
          {action.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Actions() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="acoes" className="relative py-28 sm:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label">Nossas ações</span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-[52px] font-display font-bold leading-[1.12] tracking-tight text-foreground">
            O que já realizamos
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Visitas técnicas, eventos e encontros que aproximaram nossos membros
            do mercado financeiro na prática.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {actions.map((action, index) => (
            <ActionCard key={index} action={action} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
