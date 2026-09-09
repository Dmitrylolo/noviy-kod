'use client'

import { getGalleryGridClass, productionGalleries, resolveLocalizedMedia, ui } from '@/lib/content'
import type { Lang } from '@/lib/types'
import { useState } from 'react'

interface ProductionSectionProps {
  lang: Lang
}

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

        {productionGalleries.map((gallery, index) => (
          <div key={gallery.id} className={index > 0 ? 'mt-10' : ''}>
            {gallery.title?.[lang] && (
              <>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-[#E8A030] text-xs tracking-widest uppercase">
                    {gallery.title[lang]}
                  </span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
                {gallery.description?.[lang] && (
                  <p className="text-white/40 text-xs mb-4 italic">{gallery.description[lang]}</p>
                )}
              </>
            )}

            <div className={getGalleryGridClass(gallery.columns)}>
              {gallery.items.map((item, i) => {
                const src = resolveLocalizedMedia(item.media, lang)
                return (
                  <button
                    key={`${gallery.id}-${i}`}
                    onClick={() => setLightbox({ src, alt: item.alt[lang] })}
                    className="aspect-[4/3] bg-zinc-800 overflow-hidden group relative cursor-zoom-in"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={item.alt[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                )
              })}
            </div>
          </div>
        ))}
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
