import Hero from '../../components/Hero/Hero.jsx'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs.jsx'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties.jsx'
import Stats from '../../components/Stats/Stats.jsx'
import ClientLogos from '../../components/ClientLogos/ClientLogos.jsx'
import CTA from '../../components/CTA/CTA.jsx'

function Home() {
  return (
    <>
      <Hero />
      {/* <ClientLogos /> */}
      <WhyChooseUs />
      <FeaturedProperties />
      <Stats />
      <CTA
        sheet="A-05 · Next step"
        title="Ready to walk through a property in person?"
        description="Tell us what your business needs and we'll line up a visit to spaces that actually fit."
        primary={{ label: 'Schedule a visit', to: '/contact' }}
        secondary={{ label: 'Browse listings', to: '/services' }}
      />
    </>
  )
}

export default Home
