'use client'

import { seasons, ui } from '@/lib/content'
import type { Episode, Lang } from '@/lib/types'
import Image from 'next/image'
import { useState } from 'react'

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
          src={`https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`}
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

  const currentSeason = allSeasons[activeTab]

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
        {currentSeason.episodes.length > 0 ? (
          <div className="flex overflow-x-auto gap-4 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory sm:snap-none">
            {currentSeason.episodes.map((ep) => (
              <EpisodeCard key={ep.id} ep={ep} t={t.episode} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-white/30 font-display tracking-widest uppercase">
            {lang === 'ua' ? 'Незабаром' : 'Coming Soon'}
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
