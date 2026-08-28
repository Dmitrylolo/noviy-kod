'use client'

import { heroes, ui } from '@/lib/content'
import type { Hero, Lang } from '@/lib/types'
import { useRef, useState } from 'react'

interface HeroesSectionProps {
  lang: Lang
}

function HeroModal({
  hero,
  t,
  lang,
  onClose,
}: {
  hero: Hero
  t: (typeof ui)['ua']
  lang: Lang
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-zinc-950 border border-white/10 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <div className="flex justify-end p-4 border-b border-white/10">
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white font-display text-sm tracking-widest uppercase transition-colors"
          >
            {t.hero_modal.close} ×
          </button>
        </div>

        <div className="p-6 lg:p-8">
          {/* Video */}
          {hero.youtubeId ? (
            <div className="yt-embed mb-6">
              <iframe
                src={`https://www.youtube.com/embed/${hero.youtubeId}?rel=0&modestbranding=1`}
                title={hero.name}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="aspect-video bg-zinc-900 flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="font-display text-[#E8A030] text-xs tracking-widest uppercase mb-2">
                  {t.hero_modal.episodeComingSoon}
                </div>
                <div className="text-white/30 text-sm">—</div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="mb-2 text-[#E8A030] font-display text-xs tracking-widest uppercase">
            {hero.role}
          </div>
          <h2 className="font-display text-3xl text-white uppercase mb-4">{hero.name}</h2>
          <p className="text-white/60 leading-relaxed mb-6">{hero.description}</p>
          <blockquote className="border-l-2 border-[#E8A030] pl-4 text-white/80 italic mb-6">
            {hero.quote}
          </blockquote>

          {hero.episodeUrl ? (
            <a
              href={hero.episodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t.hero_modal.watchEpisode}
            </a>
          ) : (
            <div className="font-display text-[#E8A030] text-xs tracking-widest uppercase">
              {t.hero_modal.season2ComingSoon}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HeroesSection({ lang }: HeroesSectionProps) {
  const t = ui[lang]
  const heroList = heroes[lang]
  const [selected, setSelected] = useState<Hero | null>(null)
  const [activeHero, setActiveHero] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el || heroList.length === 0) return
    const cardWidth = el.scrollWidth / heroList.length
    setActiveHero(Math.min(Math.round(el.scrollLeft / cardWidth), heroList.length - 1))
  }

  const scrollToHero = (i: number) => {
    const el = scrollRef.current
    if (!el || heroList.length === 0) return
    const cardWidth = el.scrollWidth / heroList.length
    el.scrollTo({ left: cardWidth * i, behavior: 'smooth' })
  }

  return (
    <section id="heroes" className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <h2 className="section-title text-4xl lg:text-5xl text-white">
            {t.sections.heroes}
          </h2>
        </div>

        {/* Grid (desktop) / Carousel (mobile) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory sm:snap-none scrollbar-none"
        >
          {heroList.map((hero) => (
            <button
              key={hero.id}
              onClick={() => setSelected(hero)}
              className="group text-left relative overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition-colors flex-shrink-0 w-64 sm:w-auto snap-start"
            >
              <div className="aspect-[3/4] bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                {hero.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={hero.photo}
                    alt={hero.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-display">
                    {hero.name.charAt(0)}
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#E8A030]/10 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                {/* Season 2 badge */}
                {hero.season === 2 && (
                  <div className="absolute top-3 left-3 z-30 font-display text-[10px] tracking-widest uppercase bg-[#E8A030] text-black px-2 py-0.5">
                    {t.sections.season2}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <div className="text-[#E8A030] font-display text-xs tracking-widest uppercase mb-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  {hero.role}
                </div>
                <h3 className="font-display text-white text-lg uppercase">{hero.name}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* Carousel dots — mobile only */}
        <div className="flex items-center gap-2 mt-5 sm:hidden">
          {heroList.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToHero(i)}
              aria-label={`Герой ${i + 1}`}
              className={`h-0.5 rounded-full transition-all duration-300 ${i === activeHero ? 'w-8 bg-[#E8A030]' : 'w-4 bg-white/25'}`}
            />
          ))}
          <span className="ml-auto font-display text-xs text-white/40 tracking-widest">
            {String(activeHero + 1).padStart(2, '0')} — {String(heroList.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {selected && (
        <HeroModal hero={selected} t={t} lang={lang} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
