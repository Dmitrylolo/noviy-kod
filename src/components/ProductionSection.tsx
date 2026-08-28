'use client'

import { useState } from 'react'
import { ui } from '@/lib/content'
import type { Lang } from '@/lib/types'

interface ProductionSectionProps {
  lang: Lang
}

// Season 1 gallery
const s1Gallery = [
  { src: '/production-1.jpg', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
  { src: '/production-2.webp', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
  { src: '/production-3.webp', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
  { src: '/production-4.webp', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
  { src: '/production-5.webp', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
  { src: '/production-6.webp', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
]

// Season 2 BTS gallery — «Між сценою і фронтом»
const s2Gallery = [
  { src: '/production-s2-01.webp', alt: { ua: 'За лаштунками — між сценою і фронтом', en: 'Behind the scenes — between stage and frontline' } },
  { src: '/production-s2-02.webp', alt: { ua: 'За лаштунками — між репетицією та бойовим виходом', en: 'Behind the scenes — between rehearsal and combat' } },
  { src: '/production-s2-03.webp', alt: { ua: 'За лаштунками — між камерою і реальним життям', en: 'Behind the scenes — between camera and real life' } },
  { src: '/production-s2-04.webp', alt: { ua: 'Зйомки. Харків', en: 'Filming. Kharkiv' } },
  { src: '/production-s2-05.webp', alt: { ua: 'Зйомки. Київ', en: 'Filming. Kyiv' } },
  { src: '/production-s2-06.webp', alt: { ua: 'Зйомки. Львів', en: 'Filming. Lviv' } },
  { src: '/production-s2-07.webp', alt: { ua: 'Зйомки. Іванo-Франківськ', en: 'Filming. Ivano-Frankivsk' } },
  { src: '/production-s2-08.webp', alt: { ua: 'Зйомки, сезон 2', en: 'Production, season 2' } },
  { src: '/production-s2-09.webp', alt: { ua: 'Зйомки, сезон 2', en: 'Production, season 2' } },
  { src: '/production-s2-10.webp', alt: { ua: 'Зйомки, сезон 2', en: 'Production, season 2' } },
]

export default function ProductionSection({ lang }: ProductionSectionProps) {
  const t = ui[lang]
  const production = (t as typeof t & { production?: { blocks: { label: string; text: string }[] } }).production
  const blocks = production?.blocks ?? []
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="production" className="py-16 lg:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="section-label">{t.sections.production}</p>
          <h2 className="section-title text-4xl lg:text-5xl text-white">
            {t.sections.production}
          </h2>
        </div>

        {/* Text blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blocks.map((item) => (
            <div key={item.label} className="border-t border-white/20 pt-4">
              <div className="text-[#E8A030] font-display text-xs tracking-widest uppercase mb-2">
                {item.label}
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Season 1 gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10">
          {s1Gallery.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox({ src: item.src, alt: item.alt[lang] })}
              className="aspect-[4/3] bg-zinc-800 overflow-hidden group relative cursor-zoom-in"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt[lang]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>

        {/* Season 2 BTS label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display text-[#E8A030] text-xs tracking-widest uppercase">
            {t.sections.s2BehindScenes}
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <p className="text-white/40 text-xs mb-4 italic">
          {(t as typeof t & { production?: { s2Description?: string } }).production?.s2Description}
        </p>

        {/* Season 2 gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {s2Gallery.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox({ src: item.src, alt: item.alt[lang] })}
              className="aspect-[4/3] bg-zinc-800 overflow-hidden group relative cursor-zoom-in"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt[lang]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl leading-none"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
