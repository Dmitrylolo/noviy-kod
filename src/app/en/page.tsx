import AboutSection from '@/components/AboutSection'
import AccessibilitySection from '@/components/AccessibilitySection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroesSection from '@/components/HeroesSection'
import HeroSection from '@/components/HeroSection'
import LiveSection from '@/components/LiveSection'
import PressSection from '@/components/PressSection'
import ProductionSection from '@/components/ProductionSection'
import ScreeningsSection from '@/components/ScreeningsSection'
import SeriesSection from '@/components/SeriesSection'
import TeamSection from '@/components/TeamSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Code — Documentary Project',
  description:
    'A documentary project about Ukrainian servicemen with creative pasts who continue to create and reshape the cultural code of their country.',
  openGraph: {
    locale: 'en_US',
    url: 'https://novykod.com/en',
  },
  alternates: {
    canonical: 'https://novykod.com/en',
    languages: { uk: 'https://novykod.com' },
  },
}

export default function EnPage() {
  return (
    <main>
      <Header lang="en" />
      <HeroSection lang="en" />
      <LiveSection lang="en" />
      <SeriesSection lang="en" />
      <AboutSection lang="en" />
      <HeroesSection lang="en" />
      <ProductionSection lang="en" />
      <TeamSection lang="en" />
      <AccessibilitySection lang="en" />
      <PressSection lang="en" />
      <ScreeningsSection lang="en" />
      <ContactSection lang="en" />
      <Footer lang="en" />
    </main>
  )
}
