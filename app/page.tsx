import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Carga dinámica de componentes con suspense
const Hero = dynamic(() => import('@/components/main/Hero'), {
  loading: () => <div className="min-h-[80vh]" />,
  ssr: true
})

const Skills = dynamic(() => import('@/components/main/Skills'), {
  loading: () => <div className="min-h-[50vh]" />,
  ssr: true
})

const Encryption = dynamic(() => import('@/components/main/Encryption'), {
  loading: () => <div className="min-h-[70vh]" />,
  ssr: true
})

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col gap-20">
        <Suspense fallback={<div className="min-h-[80vh]" />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[70vh]" />}>
          <Encryption />
        </Suspense>
      </div>
    </main>
  )
}