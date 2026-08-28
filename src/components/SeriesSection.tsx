'use client'

import { seasons, ui, YOUTUBE_URL } from '@/lib/content'
import type { Episode, Lang } from '@/lib/types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface SeriesSectionProps {
  lang: Lang
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="4,1 19,10 4,19" fill="#E8A030" />
    </svg>
  )
}

function EpisodeCard({
  ep,
  t,
  tModal,
  lang,
  onOpen,
}: {
  ep: Episode
  t: (typeof ui)['ua']['episode']
  tModal: (typeof ui)['ua']['episode_modal']
  lang: Lang
  onOpen: () => void
}) {
  return (
    <div
      className={`relative flex-shrink-0 w-72 sm:w-auto bg-white/5 snap-start ${ep.featured ? 'border-l-2 border-[#E8A030]' : ''
        }`}
    >
      {/* Thumbnail → YouTube with play button on hover */}
      {ep.comingSoon ? (
        <div className="relative aspect-video bg-zinc-900 flex items-center justify-center">
          <div className="text-center">
            <div className="font-display text-[#E8A030] text-xs tracking-widest uppercase mb-1">
              {lang === 'ua' ? 'Скоро' : 'Coming soon'}
            </div>
            <div className="text-white/20 text-sm">— Сезон 2 —</div>
          </div>
        </div>
      ) : (
        <a
          href={ep.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/thumb block relative aspect-video bg-zinc-900 overflow-hidden"
          tabIndex={0}
          aria-label={`${ep.title} — ${tModal.watch}`}
        >
          <Image
            src={ep.thumbnail ?? `https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`}
            alt={ep.title}
            fill
            className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/50 transition-colors duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200">
            <div className="rounded-full border border-[#E8A030] bg-black/40 backdrop-blur-sm w-14 h-14 flex items-center justify-center group-hover/thumb:scale-110 transition-transform duration-200">
              <PlayIcon />
            </div>
          </div>

          {/* Featured badge */}
          {ep.featured && (
            <span className="absolute top-3 left-3 bg-[#E8A030] text-black text-xs font-display px-2 py-0.5 uppercase tracking-widest">
              {t.featured}
            </span>
          )}

          {/* Accessibility indicators */}
          <div className="absolute top-3 right-3 flex gap-1">
            {ep.hasAudioDesc && (
              <span className="bg-black/70 text-white text-xs px-1.5 py-0.5">🎧</span>
            )}
            {ep.hasEnglish && (
              <span className="bg-black/70 text-white text-xs px-1.5 py-0.5">🇬🇧</span>
            )}
          </div>
        </a>
      )}

      {/* Info — whole section opens modal */}
      <button
        onClick={onOpen}
        className="p-4 w-full text-left block hover:bg-white/10 transition-colors group/info"
      >
        <p className="text-white/50 text-sm leading-relaxed">{ep.synopsis}</p>
        <span className="mt-3 inline-block text-[#E8A030] font-display text-xs tracking-widest uppercase group-hover/info:underline">
          {t.details} →
        </span>
      </button>
    </div>
  )
}

function EpisodeModal({
  ep,
  t,
  tModal,
  lang,
  onClose,
}: {
  ep: Episode
  t: (typeof ui)['ua']['episode']
  tModal: (typeof ui)['ua']['episode_modal']
  lang: Lang
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-zinc-950 border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-end p-4 border-b border-white/10">
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white font-display text-xs tracking-widest uppercase transition-colors"
          >
            {tModal.close} ×
          </button>
        </div>

        <div className="p-6 lg:p-8">
          {/* YouTube embed */}
          <div className="relative aspect-video bg-zinc-900 mb-6 overflow-hidden">
            {ep.comingSoon || !ep.youtubeId ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-[#E8A030] text-sm tracking-widest uppercase mb-2">
                    {lang === 'ua' ? 'Серія вже скоро' : 'Episode coming soon'}
                  </div>
                  <div className="text-white/30 text-xs">{lang === 'ua' ? 'Сезон 2 — вересень 2026' : 'Season 2 — September 2026'}</div>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${ep.youtubeId}?rel=0&modestbranding=1`}
                title={ep.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>

          {/* Episode number + title */}
          <div className="text-white/30 font-display text-xs tracking-widest mb-1">{ep.number}.</div>
          <h2 className="font-display text-2xl lg:text-3xl text-white uppercase mb-4">{ep.title}</h2>

          {/* Accessibility indicators */}
          {(ep.hasAudioDesc || ep.hasEnglish || ep.hasSubtitles) && (
            <div className="flex flex-wrap gap-3 mb-5">
              {ep.hasAudioDesc && (
                <span className="text-white/50 text-xs font-display tracking-wide uppercase flex items-center gap-1">
                  🎧 {t.audioDesc}
                </span>
              )}
              {ep.hasEnglish && (
                <span className="text-white/50 text-xs font-display tracking-wide uppercase flex items-center gap-1">
                  🇬🇧 {t.english}
                </span>
              )}
              {ep.hasSubtitles && (
                <span className="text-white/50 text-xs font-display tracking-wide uppercase flex items-center gap-1">
                  CC {t.subtitles}
                </span>
              )}
            </div>
          )}

          {/* Synopsis */}
          <p className="text-white/80 text-base leading-relaxed mb-4">{ep.synopsis}</p>

          {/* Full description */}
          {ep.description && (
            <p className="text-white/55 text-sm leading-relaxed mb-8">{ep.description}</p>
          )}

          {/* Watch on YouTube */}
          {!ep.comingSoon && ep.youtubeUrl && (
            <a
              href={ep.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3"
            >
              <PlayIcon />
              {tModal.watch}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function SeriesSection({ lang }: SeriesSectionProps) {
  const t = ui[lang]
  const allSeasons = seasons[lang]
  const [activeTab, setActiveTab] = useState(0)
  const [activeEp, setActiveEp] = useState(0)
  const [selectedEp, setSelectedEp] = useState<Episode | null>(null)
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
    <>
      <section id="series" className="py-16 lg:py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <h2 className="section-title text-4xl lg:text-5xl text-white">
              {t.sections.series}
            </h2>
            <a
              href={YOUTUBE_URL}
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
                <EpisodeCard
                  key={ep.id}
                  ep={ep}
                  t={t.episode}
                  tModal={t.episode_modal}
                  lang={lang}
                  onOpen={() => setSelectedEp(ep)}
                />
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
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8A030] font-display text-sm tracking-widest uppercase"
            >
              {t.sections.allSeries}
            </a>
          </div>
        </div>
      </section>

      {/* Episode detail modal */}
      {selectedEp && (
        <EpisodeModal
          ep={selectedEp}
          t={t.episode}
          tModal={t.episode_modal}
          lang={lang}
          onClose={() => setSelectedEp(null)}
        />
      )}
    </>
  )
}
