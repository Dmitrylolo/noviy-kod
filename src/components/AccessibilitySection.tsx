import { playlists, seasons, ui } from '@/lib/content'
import type { Lang } from '@/lib/types'
import { ExternalLink, Languages } from 'lucide-react'
import { SignLanguageIcon } from './icons'

interface AccessibilitySectionProps {
  lang: Lang
}

export default function AccessibilitySection({ lang }: AccessibilitySectionProps) {
  const t = ui[lang].accessibility
  const season2Episodes = seasons[lang].find((season) => season.id === 'season2')?.episodes ?? []
  const signVersions = season2Episodes.filter((ep) => ep.signLanguageUrl)
  const hasPendingSignVersions = signVersions.length < season2Episodes.length
  // Two different destinations: Season 1 dubbing is on the English channel, Season 2 on the Ukrainian one
  const englishVersions = [
    { label: t.enSeason1, href: playlists.season1EnglishDubbed },
    { label: t.enSeason2, href: playlists.season2Ukrainian },
  ]

  return (
    <section id="accessibility" className="py-16 lg:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">{t.title}</p>
        <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
          {t.title}
        </h2>
        <p className="text-white/50 text-sm max-w-xl mb-10">{t.description}</p>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-16 mb-10">
          {/* Ukrainian Sign Language */}
          <div className="border border-white/10 p-6 lg:p-8 flex flex-col">
            <SignLanguageIcon size={40} className="text-[#E8A030] mb-4" />
            <h3 className="font-display text-xl text-white uppercase mb-4">
              {t.signTitle}
            </h3>
            <ul className="space-y-2">
              {t.signItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="w-1 h-1 mt-2 rounded-full bg-[#E8A030] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {signVersions.length > 0 && (
              <div className="mt-6">
                <p className="text-white/40 text-xs font-display tracking-widest uppercase mb-2">
                  {t.signLinksLabel}
                </p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {signVersions.map((ep) => (
                    <li key={ep.id}>
                      <a
                        href={ep.signLanguageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#E8A030] font-display text-xs tracking-widest uppercase underline-offset-4 hover:underline"
                      >
                        <SignLanguageIcon size={14} />
                        {ep.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {hasPendingSignVersions && (
              <p className="mt-6 text-white/40 text-xs">{t.signPending}</p>
            )}
          </div>

          {/* English version */}
          <div className="border border-white/10 p-6 lg:p-8 flex flex-col">
            <Languages size={40} strokeWidth={1.75} aria-hidden="true" className="text-[#E8A030] mb-4" />
            <h3 className="font-display text-xl text-white uppercase mb-4">
              {t.enTitle}
            </h3>
            <ul className="space-y-3">
              {englishVersions.map((item) => (
                <li key={item.href} className="flex items-start gap-2 text-sm">
                  <span className="w-1 h-1 mt-2 rounded-full bg-[#E8A030] flex-shrink-0" />
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1.5 text-white/70 hover:text-[#E8A030] underline decoration-white/20 underline-offset-4 hover:decoration-[#E8A030] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A030]"
                  >
                    {item.label}
                    <ExternalLink size={13} aria-hidden="true" className="mt-1 flex-shrink-0 opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href="#series" className="btn-outline">
          {t.watchBtn}
        </a>
      </div>
    </section>
  )
}
