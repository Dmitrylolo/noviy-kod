import { ui } from '@/lib/content'
import type { Lang } from '@/lib/types'
import Link from 'next/link'

interface FooterProps {
  lang: Lang
}

const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@novykod',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.2c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.3.7 11.6v2.2c0 2.2.3 4.4.3 4.4s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 22.4 12 22.4 12 22.4s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.2.3-4.4v-2.2C23.3 9.3 23 7 23 7zm-13.5 9V8.5l8 3.8-8 3.7z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/novykod',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.2 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1C3.9 21.6 2.4 20 2.3 16.8 2.2 15.5 2.2 15.2 2.2 12s0-3.6.1-4.9C2.4 3.9 4 2.4 7.1 2.3c1.3-.1 1.6-.1 4.9-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.3 2.7 23.7 7.1 23.9 8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4A6.2 6.2 0 0012 5.8zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@novykod',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.6 6.7A4.8 4.8 0 0116 2h-3.4v13.7a2.9 2.9 0 01-2.9 2.5 2.9 2.9 0 01-2.9-2.9 2.9 2.9 0 012.9-2.9c.3 0 .6 0 .8.1V9.1A6.3 6.3 0 009.7 9a6.3 6.3 0 00-6.3 6.3 6.3 6.3 0 006.3 6.3 6.3 6.3 0 006.3-6.3V8.7a8.2 8.2 0 004.8 1.5V6.8a4.8 4.8 0 01-1-.1z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/novykod',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3H15.8c-1.5 0-2 .9-2 1.9v2.2h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18.1 24 12.1z" />
      </svg>
    ),
  },
]

export default function Footer({ lang }: FooterProps) {
  const t = ui[lang]
  const otherHref = lang === 'ua' ? '/en' : '/'
  const otherLabel = lang === 'ua' ? 'EN' : 'UA'

  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="font-display text-white text-sm tracking-widest" style={{ textTransform: 'none' }}>
            Новий kod<span className="text-[#E8A030]">_</span>
          </a>

          {/* Copyright */}
          <p className="text-white/30 text-xs text-center">
            © 2024–{new Date().getFullYear()} {t.footer.rights}
          </p>

          {/* Social + lang */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/30 hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
            <span className="text-white/20 mx-1">|</span>
            <Link href={otherHref} className="text-white/30 hover:text-white text-xs font-display transition-colors">
              {otherLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
