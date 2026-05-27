import Nav from '@/components/Nav'
import HeroGeometric from '@/components/ui/shape-landing-hero'
import ManifestoSection from '@/components/ManifestoSection'
import AccesoSection from '@/components/AccesoSection'

export default function Home() {
  return (
    <main style={{ background: '#0a0a0a' }}>
      <Nav dark />

      {/* Hero — full viewport */}
      <div id="hero" style={{ minHeight: 'calc(100vh - 65px)', display: 'flex', flexDirection: 'column' }}>
        <HeroGeometric />
      </div>

      {/* Manifesto */}
      <div id="manifiesto">
        <ManifestoSection />
      </div>

      {/* Acceso anticipado */}
      <div id="acceso-anticipado">
        <AccesoSection />
      </div>
    </main>
  )
}
