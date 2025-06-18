import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import StarBackground from "@/components/main/StarBackground";

export default function Home() {
  return (
    <>
      {/* Fondo estelar */}
      <StarBackground />

      <main className="relative min-h-screen w-full z-10">
        <div className="flex flex-col gap-20">
          <Hero />
          <Skills />
          <Encryption />
          <Projects />
        </div>
      </main>
    </>
  );
}
