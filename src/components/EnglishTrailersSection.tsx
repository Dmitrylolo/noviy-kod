import { englishTrailers, englishTrailersPlaylistUrl, getYoutubeWatchUrl } from '@/lib/content'
import Image from 'next/image'

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <polygon points="4,1 19,10 4,19" fill="#E8A030" />
    </svg>
  )
}

// English-only block: rendered from src/app/en/page.tsx right after the featured trailer.
export default function EnglishTrailersSection() {
  const t = englishTrailers

  return (
    <section id="trailers" aria-labelledby="trailers-title" className="pb-16 lg:pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8 pt-8 border-t border-white/10">
          <h2 id="trailers-title" className="section-title text-2xl lg:text-3xl text-white">
            {t.title}
          </h2>
          <a
            href={englishTrailersPlaylistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8A030] font-display text-sm tracking-widest uppercase hidden sm:block"
          >
            {t.playlistLabel}
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {t.items.map((trailer) =>
            trailer.youtubeId ? (
              <a
                key={trailer.id}
                href={getYoutubeWatchUrl(trailer.youtubeId)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${trailer.label}: ${trailer.title} — ${t.watchLabel} (${t.badge})`}
                className="group block bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                  <Image
                    src={`https://i.ytimg.com/vi/${trailer.youtubeId}/maxresdefault.jpg`}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-[#E8A030] bg-black/40 backdrop-blur-sm w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <PlayIcon />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-[#E8A030] text-black text-xs font-display px-2 py-0.5 uppercase tracking-widest">
                    {t.badge}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-[#E8A030] font-display text-xs tracking-widest uppercase mb-1">
                    {trailer.label}
                  </div>
                  <h3 className="font-display text-white text-lg uppercase">{trailer.title}</h3>
                  <span className="mt-3 inline-block text-white/60 font-display text-xs tracking-widest uppercase group-hover:text-[#E8A030] transition-colors">
                    {t.watchLabel} →
                  </span>
                </div>
              </a>
            ) : (
              <div key={trailer.id} className="bg-white/5">
                <div className="relative aspect-video bg-zinc-900 flex items-center justify-center">
                  <span className="font-display text-[#E8A030] text-xs tracking-widest uppercase">
                    {t.comingSoonLabel}
                  </span>
                  <span className="absolute top-3 left-3 bg-[#E8A030] text-black text-xs font-display px-2 py-0.5 uppercase tracking-widest">
                    {t.badge}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-[#E8A030] font-display text-xs tracking-widest uppercase mb-1">
                    {trailer.label}
                  </div>
                  <h3 className="font-display text-white text-lg uppercase">{trailer.title}</h3>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href={englishTrailersPlaylistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8A030] font-display text-sm tracking-widest uppercase"
          >
            {t.playlistLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
