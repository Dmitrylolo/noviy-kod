'use client'

import { getYoutubeWatchUrl, videoContent } from '@/lib/content'
import type { Lang, LiveTrailer } from '@/lib/types'
import { useEffect, useState, type FocusEvent, type PointerEvent } from 'react'

interface LiveSectionProps {
  lang: Lang
}

const ROTATION_INTERVAL_MS = 7000

interface PauseHandlers {
  onPointerEnter: (e: PointerEvent<HTMLElement>) => void
  onPointerLeave: (e: PointerEvent<HTMLElement>) => void
  onFocus: (e: FocusEvent<HTMLElement>) => void
  onBlur: (e: FocusEvent<HTMLElement>) => void
}

function VideoFacade({
  trailers,
  activeIndex,
  onSelect,
  playing,
  onPlay,
  title,
  comingSoonLabel,
  playAriaPrefix,
  trailersGroupLabel,
  trailerLabel,
  pauseHandlers,
}: {
  trailers: LiveTrailer[]
  activeIndex: number
  onSelect: (index: number) => void
  playing: boolean
  onPlay: () => void
  title: string
  comingSoonLabel: string
  playAriaPrefix: string
  trailersGroupLabel: string
  trailerLabel: string
  pauseHandlers: PauseHandlers
}) {
  const active = trailers[activeIndex]
  const youtubeId = active?.youtubeId ?? ''
  const canRotate = trailers.length > 1

  // Coming soon — no video yet
  if (!youtubeId) {
    return (
      <div className="yt-embed relative overflow-hidden bg-zinc-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/production-1.jpg"
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-white/80 text-sm tracking-[0.3em] uppercase border border-white/20 px-6 py-3">
            {comingSoonLabel}
          </span>
        </div>
      </div>
    )
  }

  if (playing) {
    return (
      <div className="yt-embed">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autoplay=1`}
          title={active.title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="yt-embed relative group overflow-hidden bg-zinc-900" {...pauseHandlers}>
      <button
        onClick={onPlay}
        className="absolute inset-0 w-full h-full cursor-pointer"
        aria-label={`${playAriaPrefix}: ${active.title}`}
      >
        {/* Cover images are stacked and cross-faded; the active one always matches the URL played on click */}
        {trailers.map((trailer, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={trailer.id}
            src={`https://img.youtube.com/vi/${trailer.youtubeId}/maxresdefault.jpg`}
            alt=""
            aria-hidden="true"
            onError={(e) => { e.currentTarget.src = '/production-1.jpg' }}
            className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-500 motion-reduce:transition-none group-hover:scale-105 ${
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Gradient */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3 border border-white/60 group-hover:border-white px-6 py-3 transition-all group-hover:bg-white/10">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
              <polygon points="1,0 12,6 1,12" />
            </svg>
            <span className="font-display text-white text-sm tracking-widest uppercase">
              {title}
            </span>
          </div>
        </div>
      </button>

      {active.badge && (
        <span className="pointer-events-none absolute bottom-3 left-3 z-10 bg-[#E8A030] text-black text-[10px] font-display px-2 py-0.5 uppercase tracking-widest">
          {active.badge}
        </span>
      )}

      {canRotate && (
        <div
          role="group"
          aria-label={trailersGroupLabel}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 flex items-center"
        >
          {trailers.map((trailer, i) => (
            <button
              key={trailer.id}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`${trailerLabel} ${i + 1} / ${trailers.length}: ${trailer.title}`}
              aria-current={i === activeIndex ? 'true' : undefined}
              className="group/dot px-1.5 py-3"
            >
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-8 bg-[#E8A030]' : 'w-4 bg-white/40 group-hover/dot:bg-white/70'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function LiveSection({ lang }: LiveSectionProps) {
  const t = videoContent[lang].live
  const trailers = t.trailers
  const [activeIndex, setActiveIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [tabVisible, setTabVisible] = useState(true)

  const active = trailers[activeIndex]
  // Buttons on the right always point to the trailer whose cover is currently shown
  const watchUrl = active?.youtubeId ? getYoutubeWatchUrl(active.youtubeId) : videoContent[lang].channelUrl

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const update = () => setTabVisible(document.visibilityState === 'visible')
    update()
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [])

  const paused = playing || hovered || focused || reducedMotion || !tabVisible
  const canRotate = trailers.length > 1

  // One timeout per slide: any index change (manual or automatic) restarts the 7s countdown
  useEffect(() => {
    if (!canRotate || paused) return
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % trailers.length)
    }, ROTATION_INTERVAL_MS)
    return () => window.clearTimeout(timer)
  }, [canRotate, paused, activeIndex, trailers.length])

  const pauseHandlers: PauseHandlers = {
    // Mouse only: a tap on touch screens must not leave the carousel "hovered" forever
    onPointerEnter: (e) => { if (e.pointerType === 'mouse') setHovered(true) },
    onPointerLeave: (e) => { if (e.pointerType === 'mouse') setHovered(false) },
    onFocus: (e) => setFocused(e.target.matches(':focus-visible')),
    onBlur: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false)
    },
  }

  return (
    <section id="live" className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Video facade */}
          <VideoFacade
            trailers={trailers}
            activeIndex={activeIndex}
            onSelect={(index) => {
              setPlaying(false)
              setActiveIndex(index)
            }}
            playing={playing}
            onPlay={() => setPlaying(true)}
            title={t.title}
            comingSoonLabel={t.comingSoonLabel}
            playAriaPrefix={t.playAriaPrefix}
            trailersGroupLabel={t.trailersGroupLabel}
            trailerLabel={t.trailerLabel}
            pauseHandlers={pauseHandlers}
          />

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="section-label">{t.label}</p>
            <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
              {t.title}
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              {t.description}
            </p>

            {t.comingSoon ? (
              <div className="flex flex-wrap gap-3">
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  {t.ytLabel}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="ml-1">
                    <path d="M10 7v3H2V2h3V0H0v12h12V7z M7 0v2h1.59L4.29 6.29l1.42 1.42L10 3.41V5h2V0z" />
                  </svg>
                </a>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <polygon points="3,1 13,7 3,13" />
                  </svg>
                  {t.watchLabel}
                </a>
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  {t.ytLabel}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="ml-1">
                    <path d="M10 7v3H2V2h3V0H0v12h12V7z M7 0v2h1.59L4.29 6.29l1.42 1.42L10 3.41V5h2V0z" />
                  </svg>
                </a>
              </div>
            )}

            {/* Counter */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10 text-white/30 text-sm font-display tracking-widest">
              <span>01</span>
              <div className="flex-1 h-px bg-white/10" />
              <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
