import { team, ui } from '@/lib/content'
import type { Lang } from '@/lib/types'

interface TeamSectionProps {
  lang: Lang
}

const partners = [
  { name: 'Український культурний фонд', abbr: 'УКФ' },
  { name: 'Partner 2', abbr: 'P2' },
  { name: 'Partner 3', abbr: 'P3' },
]

export default function TeamSection({ lang }: TeamSectionProps) {
  const t = ui[lang]
  const data = team[lang]

  return (
    <section id="team" className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">{t.sections.team}</p>
        <h2 className="section-title text-4xl lg:text-5xl text-white mb-12">
          {t.sections.team}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Director */}
          <div>
            <div className="flex gap-6 mb-6">
              {/* Director photo */}
              <div className="w-20 h-20 bg-zinc-800 flex-shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/director-chankova.png"
                  alt={data.director.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-[#E8A030] font-display text-xs tracking-widest uppercase mb-1">
                  {data.director.name}
                </div>
                <p className="text-white/60 text-sm">{data.director.bio}</p>
              </div>
            </div>
            <div className="space-y-4">
              {data.director.statement.map((para, i) => (
                <p key={i} className="text-white/70 text-sm leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Team members */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {data.members.map((member) => (
                <div key={member.role} className="border-t border-white/10 pt-3">
                  <div className="text-[#E8A030] font-display text-xs tracking-widest uppercase mb-1">
                    {member.role}
                  </div>
                  <div className="text-white/80 text-sm">{member.name}</div>
                </div>
              ))}
            </div>

            {/* Partners */}
            <div>
              <div className="text-white/30 font-display text-xs tracking-widest uppercase mb-4">
                {t.sections.partners}
              </div>
              <div className="flex flex-wrap gap-4">
                {partners.map((p) => (
                  <div
                    key={p.abbr}
                    className="px-4 py-2 border border-white/20 text-white/40 font-display text-xs tracking-widest uppercase"
                  >
                    {p.abbr}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
