import { ui } from '@/lib/content'
import type { Lang } from '@/lib/types'

interface AboutSectionProps {
  lang: Lang
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const t = ui[lang].about as {
    title: string
    text: string
    manifesto?: string
    paragraphs?: string[]
    importance?: string
    importanceTitle?: string
  }

  return (
    <section id="about" className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Manifesto — full-width statement */}
        {t.manifesto && (
          <div className="mb-12 lg:mb-16 border-l-2 border-[#E8A030] pl-6 max-w-3xl">
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed font-display" style={{ textTransform: 'none', fontWeight: 400 }}>
              {t.manifesto}
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <p className="section-label">{t.title}</p>
            <h2 className="section-title text-4xl lg:text-5xl text-white mb-6">
              {t.title}
            </h2>

            {t.paragraphs ? (
              <div className="space-y-4">
                {t.paragraphs.map((p, i) => (
                  <p key={i} className="text-white/70 text-base leading-relaxed">{p}</p>
                ))}
              </div>
            ) : (
              <p className="text-white/70 text-base leading-relaxed">{t.text}</p>
            )}
          </div>

          {/* Importance block */}
          <div>
            {t.importance && (
              <div className="bg-zinc-900 p-6 lg:p-8 border-t border-[#E8A030]/30">
                <p className="text-[#E8A030] font-display text-xs tracking-widest uppercase mb-4">
                  {t.importanceTitle}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">{t.importance}</p>
              </div>
            )}
            <div className="relative h-32 bg-zinc-900 overflow-hidden mt-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#E8A030]/5 font-display font-bold text-[8rem] leading-none select-none">
                  NK
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8A030]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
