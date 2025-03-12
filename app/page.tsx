import Hero from "@/components/main/Hero";
import TestComponent from "@/components/main/TestComponent";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='flex flex-col gap-20'>
        <h1>Pagina de prueba</h1>
        <Hero />
        <TestComponent />
      </div>
    </main>
  );
}
