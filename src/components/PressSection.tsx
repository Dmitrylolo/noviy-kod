import { press, ui } from '@/lib/content'
import type { Lang } from '@/lib/types'

interface PressSectionProps {
  lang: Lang
}

export default function PressSection({ lang }: PressSectionProps) {
  const t = ui[lang]
  const items = press[lang]

  return (
    <section id="press" className="py-16 lg:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">{t.sections.press}</p>
        <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
          {t.sections.press}
        </h2>
        <p className="text-white/40 text-sm mb-10">
          {t.sections.pressSubtitle ?? (
            lang === 'ua'
              ? 'Проєкт представлений у міжнародних медіа та розвивається для фестивальної дистрибуції'
              : 'The project has been featured in international media and is developing for festival distribution'
          )}
        </p>

        {/* Press items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/10 p-5 hover:border-white/30 transition-colors"
            >
              <div className="text-[#E8A030] font-display text-xs tracking-widest uppercase mb-2">
                {item.outlet}
              </div>
              <div className="text-white font-medium text-sm mb-2 group-hover:text-white/80 transition-colors">
                {item.title}
              </div>
              <div className="text-white/30 text-xs font-display">{item.date}</div>
            </a>
          ))}
        </div>

        {/* Press kit */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <div className="text-white/60 text-sm mb-1">
              {t.sections.pressKitLabel}
            </div>
            <div className="text-white/40 text-xs">
              {t.sections.pressContact}
            </div>
          </div>
          <a href="/press-kit.pdf" className="btn-outline" download>
            📄 {t.sections.pressKit}
          </a>
        </div>
      </div>
    </section>
  )
}
