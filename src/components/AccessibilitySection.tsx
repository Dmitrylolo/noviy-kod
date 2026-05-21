import { ui } from '@/lib/content'
import type { Lang } from '@/lib/types'

interface AccessibilitySectionProps {
  lang: Lang
}

export default function AccessibilitySection({ lang }: AccessibilitySectionProps) {
  const t = ui[lang].accessibility

  return (
    <section id="accessibility" className="py-16 lg:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">{t.title}</p>
        <h2 className="section-title text-4xl lg:text-5xl text-white mb-12">
          {t.title}
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-16 mb-10">
          {/* Audio description */}
          <div className="border border-white/10 p-6 lg:p-8">
            <div className="text-4xl mb-4">🎧</div>
            <h3 className="font-display text-xl text-white uppercase mb-4">
              {t.audioDescTitle}
            </h3>
            <ul className="space-y-2">
              {t.audioDescItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/60 text-sm">
                  <span className="w-1 h-1 rounded-full bg-[#E8A030]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* English version */}
          <div className="border border-white/10 p-6 lg:p-8">
            <div className="text-4xl mb-4">🇬🇧</div>
            <h3 className="font-display text-xl text-white uppercase mb-4">
              {t.enTitle}
            </h3>
            <ul className="space-y-2">
              {t.enItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/60 text-sm">
                  <span className="w-1 h-1 rounded-full bg-[#E8A030]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={lang === 'ua' ? '/en' : '/'}
          className="btn-outline"
        >
          {t.watchBtn}
        </a>
      </div>
    </section>
  )
}
