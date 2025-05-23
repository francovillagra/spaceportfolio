import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills"; // 🔧 Faltaba esta línea

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
      </div>
    </main>
  );
}
