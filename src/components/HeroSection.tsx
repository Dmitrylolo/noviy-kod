import { ui } from '@/lib/content'
import type { Lang } from '@/lib/types'

interface HeroSectionProps {
  lang: Lang
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = ui[lang].hero

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.webp)', backgroundPosition: 'center top' }}
        aria-hidden="true"
      />

      {/* Spacer: fills space above content, min = header height */}
      <div className="flex-1 min-h-20" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 lg:pb-12">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl text-white mb-6 leading-none" style={{ textTransform: 'none' }}>
            {t.hero.brandPrefix} {t.hero.brandSuffix}<span className="text-[#E8A030]">_</span>
          </h1>

          {/* Description */}
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-4 whitespace-pre-line">
            {t.subtitle}
          </p>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            {t.note}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#series" className="inline-flex items-center gap-2 text-[#E8A030] font-display text-sm tracking-widest uppercase border-b border-[#E8A030]/50 hover:border-[#E8A030] pb-0.5 transition-colors">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <polygon points="1,0 10,5 1,10" />
              </svg>
              {t.watchSeries}
            </a>
            <a
              href={lang === 'ua' ? '/en' : '/'}
              className="btn-outline"
            >
              {t.watchEn}
            </a>
          </div>

          {/* Indicators */}
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="#accessibility" className="flex items-center gap-2 hover:text-white/90 transition-colors">
              🎧 {t.audioDesc}
            </a>
            <span className="text-white/30">|</span>
            <a href={lang === 'ua' ? '/en' : '/'} className="flex items-center gap-2 hover:text-white/90 transition-colors">
              🇬🇧 {t.enAvail}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — in normal flow, always below content */}
      <a href="#live" className="relative z-20 hidden sm:flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors pb-8">
        <span className="font-display text-xs tracking-widest uppercase">{t.scroll}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="animate-bounce">
          <path d="M8 12L2 6h12z" />
        </svg>
      </a>
    </section>
  )
}
