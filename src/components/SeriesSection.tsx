'use client'

import { seasons, ui } from '@/lib/content'
import type { Episode, Lang } from '@/lib/types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface SeriesSectionProps {
  lang: Lang
}

function EpisodeCard({ ep, t }: { ep: Episode; t: (typeof ui)['ua']['episode'] }) {
  return (
    <a
      href={ep.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white/5 hover:bg-white/10 transition-colors cursor-pointer relative flex-shrink-0 w-72 sm:w-auto snap-start ${ep.featured ? 'border-l-2 border-[#E8A030]' : ''
        }`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-zinc-900 overflow-hidden">
        <Image
          src={ep.thumbnail ?? `https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`}
          alt={ep.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

        {/* Featured badge */}
        {ep.featured && (
          <span className="absolute top-3 left-3 bg-[#E8A030] text-black text-xs font-display px-2 py-0.5 uppercase tracking-widest">
            {t.featured}
          </span>
        )}

        {/* Indicators */}
        <div className="absolute top-3 right-3 flex gap-1">
          {ep.hasAudioDesc && (
            <span className="bg-black/70 text-white text-xs px-1.5 py-0.5">🎧</span>
          )}
          {ep.hasEnglish && (
            <span className="bg-black/70 text-white text-xs px-1.5 py-0.5">🇬🇧</span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="text-white/30 font-display text-xs tracking-widest mb-1">
          {ep.number}.
        </div>
        <h3 className="font-display text-white text-lg uppercase mb-2">{ep.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{ep.synopsis}</p>
        <div className="mt-4 text-[#E8A030] font-display text-xs tracking-widest uppercase group-hover:underline">
          {t.watch} →
        </div>
      </div>
    </a>
  )
}

export default function SeriesSection({ lang }: SeriesSectionProps) {
  const t = ui[lang]
  const allSeasons = seasons[lang]
  const [activeTab, setActiveTab] = useState(0)
  const [activeEp, setActiveEp] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const currentSeason = allSeasons[activeTab]
  const total = currentSeason.episodes.length

  useEffect(() => {
    setActiveEp(0)
    if (scrollRef.current) scrollRef.current.scrollLeft = 0
  }, [activeTab])

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el || total === 0) return
    const cardWidth = el.scrollWidth / total
    setActiveEp(Math.min(Math.round(el.scrollLeft / cardWidth), total - 1))
  }

  const scrollToEp = (i: number) => {
    const el = scrollRef.current
    if (!el || total === 0) return
    const cardWidth = el.scrollWidth / total
    el.scrollTo({ left: cardWidth * i, behavior: 'smooth' })
  }

  return (
    <section id="series" className="py-16 lg:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <h2 className="section-title text-4xl lg:text-5xl text-white">
            {t.sections.series}
          </h2>
          <a
            href={`https://www.youtube.com/@novykod${lang === 'en' ? '-en' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8A030] font-display text-sm tracking-widest uppercase hidden sm:block"
          >
            {t.sections.allSeries}
          </a>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-0 mb-8 border-b border-white/10 overflow-x-auto">
          {allSeasons.map((season, i) => (
            <button
              key={season.id}
              onClick={() => setActiveTab(i)}
              className={`font-display text-sm tracking-widest uppercase px-5 py-3 whitespace-nowrap transition-colors border-b-2 -mb-px ${activeTab === i
                ? 'text-[#E8A030] border-[#E8A030]'
                : 'text-white/40 border-transparent hover:text-white/70'
                }`}
            >
              {season.label}
            </button>
          ))}
        </div>

        {/* Episodes grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory sm:snap-none scrollbar-none"
        >
          {currentSeason.episodes.length > 0 ? (
            currentSeason.episodes.map((ep) => (
              <EpisodeCard key={ep.id} ep={ep} t={t.episode} />
            ))
          ) : (
            // Skeleton placeholders — same grid layout keeps height stable
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-72 sm:w-auto bg-white/5 snap-start">
                <div className="aspect-video bg-zinc-900 flex items-center justify-center">
                  {i === 0 && (
                    <span className="font-display text-white/20 text-sm tracking-widest uppercase">
                      {lang === 'ua' ? 'Незабаром' : 'Coming Soon'}
                    </span>
                  )}
                </div>
                <div className="p-4 space-y-2">
                  <div className="h-3 w-4 bg-white/10 rounded" />
                  <div className="h-4 w-3/4 bg-white/10 rounded" />
                  <div className="h-3 w-full bg-white/5 rounded" />
                  <div className="h-3 w-2/3 bg-white/5 rounded" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Carousel dots + counter — mobile only, only when has content */}
        {currentSeason.episodes.length > 0 && total > 1 && (
          <div className="flex items-center gap-2 mt-5 sm:hidden">
            {currentSeason.episodes.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToEp(i)}
                aria-label={`Перейти до епізоду ${i + 1}`}
                className={`h-0.5 rounded-full transition-all duration-300 ${i === activeEp ? 'w-8 bg-[#E8A030]' : 'w-4 bg-white/25'}`}
              />
            ))}
            <span className="ml-auto font-display text-xs text-white/40 tracking-widest">
              {String(activeEp + 1).padStart(2, '0')} — {String(total).padStart(2, '0')}
            </span>
          </div>
        )}

        <div className="mt-6 sm:hidden">
          <a
            href={`https://www.youtube.com/@novykod${lang === 'en' ? '-en' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8A030] font-display text-sm tracking-widest uppercase"
          >
            {t.sections.allSeries}
          </a>
        </div>
      </div>
    </section>
  )
}
