import Nav from '@/components/Nav'
import HeroGeometric from '@/components/ui/shape-landing-hero'

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: '#0a0a0a',
    }}>
      <Nav dark />
      <HeroGeometric />
    </main>
  )
}
