import Hero from '@/components/home/Hero'
import Workflow from '@/components/home/Workflow'
import Philosophy from '@/components/home/Philosophy'
import Services from '@/components/home/Services'
import FeaturedWorks from '@/components/home/FeaturedWorks'
import ClientLogos from '@/components/home/ClientLogos'

export default function Home() {
  return (
    <>
      <Hero />
      <Workflow />
      <Services />
      <Philosophy />
      <FeaturedWorks />
      <ClientLogos />
    </>
  )
}
