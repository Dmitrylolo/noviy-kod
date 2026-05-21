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
  title: 'Новий код — Документальний проєкт',
  description:
    'Документальний проєкт про українських військових з творчим минулим, які під час війни продовжують творити і змінюють культурний код країни.',
  openGraph: {
    locale: 'uk_UA',
    url: 'https://novykod.com',
  },
  alternates: {
    canonical: 'https://novykod.com',
    languages: { en: 'https://novykod.com/en' },
  },
}

export default function HomePage() {
  return (
    <main>
      <Header lang="ua" />
      <HeroSection lang="ua" />
      <LiveSection lang="ua" />
      <SeriesSection lang="ua" />
      <AboutSection lang="ua" />
      <HeroesSection lang="ua" />
      <ProductionSection lang="ua" />
      <TeamSection lang="ua" />
      <AccessibilitySection lang="ua" />
      <PressSection lang="ua" />
      <ScreeningsSection lang="ua" />
      <ContactSection lang="ua" />
      <Footer lang="ua" />
    </main>
  )
}
