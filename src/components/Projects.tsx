import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, BarChart3, Award, Wrench, Users, BookOpen, Handshake } from "lucide-react";

const projects = [
  {
    icon: Users,
    title: "Impacto Social",
    description:
      "Visita às escolas de Campinas e região, ensinando economia básica e sistema financeiro nacional. Permite ao aluno desenvolver oratória e desenvoltura educacional.",
  },
  {
    icon: Wrench,
    title: "Ferramentas Profissionais",
    description:
      "Domínio das principais ferramentas utilizadas na prática profissional: Excel avançado, Bloomberg, e plataformas de análise.",
  },
  {
    icon: BookOpen,
    title: "Capacitação",
    description:
      "Capacitação em Finanças Corporativas, M&A, Equity Research e conteúdo obrigatório de introdução ao mercado financeiro para todos os membros. Participação em competições nacionais e internacionais.",
  },
  {
    icon: Handshake,
    title: "Networking",
    description:
      "Nossos alunos ganham contato com grandes empresas e outras ligas/empresas universitárias através de visitas e parcerias.",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glass-card-hover group rounded-2xl p-7 flex flex-col h-full"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:bg-primary/15 group-hover:border-primary/40">
        <project.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-2xl font-display font-semibold text-foreground mb-2.5 leading-snug">
        {project.title}
      </h3>
      <p className="text-lg leading-relaxed text-muted-foreground sm:text-justify">
        {project.description}
      </p>
    </motion.div>
  );
}

export function Projects() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="projetos" className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label">Projetos</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-display font-bold leading-[1.12] tracking-tight text-foreground">
            Nossas Atividades
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-justify">
            Atuamos na formação não só educacional do aluno, mas também na sua
            oratória, impacto social, competitividade e habilidade com
            ferramentas do mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
