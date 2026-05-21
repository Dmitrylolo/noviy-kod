import { ui } from '@/lib/content'
import type { Lang } from '@/lib/types'

interface AboutSectionProps {
  lang: Lang
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const t = ui[lang].about

  return (
    <section id="about" className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="section-label">{t.title}</p>
            <h2 className="section-title text-4xl lg:text-5xl text-white mb-6">
              {t.title}
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              {t.text}
            </p>
          </div>

          {/* Visual accent */}
          <div className="relative h-64 lg:h-80 bg-zinc-900 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[#E8A030]/5 font-display font-bold text-[12rem] leading-none select-none">
                NK
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8A030]" />
          </div>
        </div>
      </div>
    </section>
  )
}
