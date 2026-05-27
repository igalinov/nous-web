import Nav from '@/components/Nav'
import HeroGeometric from '@/components/ui/shape-landing-hero'
import ManifestoSection from '@/components/ManifestoSection'
import AccesoSection from '@/components/AccesoSection'
import NeuralBackground from '@/components/NeuralBackground'

export default function Home() {
  return (
    <>
      {/* Fixed canvas — covers full viewport on all scroll positions */}
      <NeuralBackground />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Nav dark />

        <div id="hero" style={{ minHeight: 'calc(100vh - 65px)', display: 'flex', flexDirection: 'column' }}>
          <HeroGeometric />
        </div>

        <div id="manifiesto">
          <ManifestoSection />
        </div>

        <div id="acceso-anticipado">
          <AccesoSection />
        </div>
      </main>
    </>
  )
}
