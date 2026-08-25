import { screenings, ui } from '@/lib/content'
import type { Lang } from '@/lib/types'

interface ScreeningsSectionProps {
  lang: Lang
}

export default function ScreeningsSection({ lang }: ScreeningsSectionProps) {
  const t = ui[lang]
  const list = screenings[lang]

  return (
    <section id="screenings" className="py-16 lg:py-20 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-label">{t.sections.screenings}</p>
            <h2 className="section-title text-3xl lg:text-4xl text-white">
              {t.sections.screenings}
            </h2>
          </div>
          <div className="text-white/30 font-display text-xs tracking-widest uppercase border border-white/20 px-4 py-2">
            {t.sections.screeningsUpdate}
          </div>
        </div>

        {/* Description */}
        <p className="text-white/50 text-sm mt-4 mb-2 max-w-xl">
          {(t.sections as typeof t.sections & { screeningsDescription?: string }).screeningsDescription}
        </p>
        <a href="#contacts" className="btn-outline text-xs mb-8 inline-flex">
          {lang === 'ua' ? 'Запросити проєкт' : 'Invite the project'}
        </a>

        {list.length > 0 && (
          <div className="mt-8 space-y-3">
            {list.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-white/10 pb-3"
              >
                <div>
                  <div className="text-white font-display text-sm uppercase">{item.title}</div>
                  <div className="text-white/40 text-xs">{item.location}</div>
                </div>
                <div className="text-[#E8A030] font-display text-xs tracking-widest">{item.date}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
