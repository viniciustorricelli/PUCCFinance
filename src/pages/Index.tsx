import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Partners } from "@/components/Partners";
import { Actions } from "@/components/Actions";
import { Events } from "@/components/Events";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  // Ao chegar de outra página com um hash na URL (ex.: vindo de /desafios
  // para /#sobre), o navegador tenta rolar antes do React montar as seções.
  // Refazemos a rolagem depois que o conteúdo já está na tela.
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView();
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Team />
          <Partners />
          <Actions />
          <Events />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
