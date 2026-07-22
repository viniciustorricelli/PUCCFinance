import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserRound } from "lucide-react";
import gabrielZanini from "@/assets/team-gabriel-zanini.jpg";
import viniciusTorricelli from "@/assets/vini2.jpeg";
import luisKukolj from "@/assets/4.png";
import giovannaCamacho from "@/assets/WhatsApp Image 2026-07-06 at 22.09.59.jpeg";
import carlosEduardo from "@/assets/carl.png";

interface Member {
  name?: string;
  role: string;
  nucleo?: string;
  photo?: string;
  photoPosition?: string;
  photoFit?: string;
  photoScale?: number;
}

const members: Member[] = [
  {
    name: "Gabriel Zanini",
    role: "Presidente / Cofundador",
    nucleo: "Líder do núcleo de Equity Research",
    photo: gabrielZanini,
  },
  {
    name: "Vinícius Torricelli",
    role: "Diretor de Marketing / Cofundador",
    nucleo: "Líder do núcleo de Corporate Finance",
    photo: viniciusTorricelli,
    photoFit: "cover",
    photoPosition: "center",
  },
  {
    name: "Luis Fernando Stange Kukolj",
    role: "Diretor de Relações Externas / Cofundador",
    nucleo: "Líder do núcleo de Mergers & Acquisitions",
    photo: luisKukolj,
    photoFit: "cover",
    photoPosition: "center",
  },
  {
    name: "Giovanna Camacho",
    role: "Diretora de Planejamento",
    photo: giovannaCamacho,
    photoFit: "cover",
    photoPosition: "center",
  },
  {
    name: "Carlos Eduardo",
    role: "Diretor Social",
    photo: carlosEduardo,
    photoFit: "cover",
    photoPosition: "center",
  },
  { role: "Secretaria Presidencial" },
];

function MemberCard({ member, index }: { member: Member; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glass-card-hover group rounded-2xl p-6 text-center"
    >
      <div className="mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:border-primary/40">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="h-full w-full"
            style={{
              objectFit: member.photoFit || "cover",
              objectPosition: member.photoPosition || "center",
              transform: `scale(${member.photoScale || 1})`,
              transformOrigin: "center",
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <UserRound className="h-10 w-10 text-foreground/30" />
          </div>
        )}
      </div>

      {member.name ? (
        <>
          <p className="font-display font-semibold text-foreground">{member.name}</p>
          <p className="mt-1 text-sm text-primary/90">{member.role}</p>
          {member.nucleo && (
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{member.nucleo}</p>
          )}
        </>
      ) : (
        <>
          <p className="font-display font-semibold text-foreground">{member.role}</p>
          <p className="mt-1 text-sm text-muted-foreground/70">Vaga aberta</p>
        </>
      )}
    </motion.div>
  );
}

export function Team() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="equipe" className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label">Equipe</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-display font-bold leading-[1.12] tracking-tight text-foreground">
            Quem faz acontecer
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-justify">
            Alunos da PUC-Campinas dedicados a construir uma comunidade de
            excelência em finanças.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {members.map((member, index) => (
            <MemberCard key={member.role} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
