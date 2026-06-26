import { ui } from '@/lib/content'
import type { Lang } from '@/lib/types'

interface ProductionSectionProps {
  lang: Lang
}

// Gallery using real production photos
const galleryItems = [
  { id: 0, src: '/production-1.jpg', alt: 'Production photo 1' },
  { id: 1, src: '/production-2.webp', alt: 'Production photo 2' },
  { id: 2, src: '/production-3.webp', alt: 'Production photo 3' },
  { id: 3, src: '/production-4.webp', alt: 'Production photo 4' },
  { id: 4, src: '/production-5.webp', alt: 'Production photo 5' },
  { id: 5, src: '/production-6.webp', alt: 'Production photo 6' },
]

export default function ProductionSection({ lang }: ProductionSectionProps) {
  const t = ui[lang]
  const production = (t as typeof t & { production?: { blocks: { label: string; text: string }[] } }).production
  const blocks = production?.blocks ?? []

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

        {/* Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="aspect-video bg-zinc-800 overflow-hidden group relative"
            >
              {item.id === 0 ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-display text-sm tracking-widest uppercase">
                  {lang === 'ua' ? 'Фото' : 'Photo'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
