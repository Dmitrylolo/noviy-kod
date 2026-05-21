'use client'

import { liveContent } from '@/lib/content'
import type { Lang } from '@/lib/types'
import { useState } from 'react'

interface LiveSectionProps {
  lang: Lang
}

function VideoFacade({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="yt-embed">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autoplay=1`}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="yt-embed w-full relative group overflow-hidden bg-zinc-900 cursor-pointer"
      aria-label={`Дивитися: ${title}`}
    >
      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
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
  )
}

export default function LiveSection({ lang }: LiveSectionProps) {
  const t = liveContent[lang]

  return (
    <section id="live" className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Video facade */}
          <VideoFacade youtubeId={t.youtubeId} title={t.title} />

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="section-label">{t.label}</p>
            <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
              {t.title}
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={t.watchUrl}
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
                href={t.watchUrl}
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
