'use client'

import { ui } from '@/lib/content'
import type { Lang } from '@/lib/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface HeaderProps {
  lang: Lang
}

export default function Header({ lang }: HeaderProps) {
  const t = ui[lang]
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const otherLang = lang === 'ua' ? 'en' : 'ua'
  const otherHref = lang === 'ua' ? '/en' : '/'

  const navLinks = [
    { href: '#series', label: t.nav.series },
    { href: '#heroes', label: t.nav.heroes },
    { href: '#production', label: t.nav.production },
    { href: '#team', label: t.nav.team },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#top" className="flex-shrink-0">
            <span className="font-display text-white text-lg leading-none" style={{ textTransform: 'none' }}>
              {lang === 'ua' ? 'Новий' : 'New'}
              <br />
              kod<span className="text-[#E8A030]">_</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white font-display text-sm tracking-widest uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Lang switcher */}
            <div className="flex items-center gap-1 text-sm font-display tracking-widest">
              <span className="text-white">{lang.toUpperCase()}</span>
              <span className="text-white/30 mx-1">|</span>
              <Link
                href={otherHref}
                className="text-white/50 hover:text-white transition-colors"
              >
                {otherLang.toUpperCase()}
              </Link>
            </div>

            {/* Accessibility */}
            <a
              href="#accessibility"
              className="w-9 h-9 flex items-center justify-center border border-white/30 hover:border-white/70 transition-colors rounded-full text-white/70 hover:text-white"
              aria-label="Інклюзивність / Accessibility"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10" cy="4" r="2" fill="currentColor" />
                <path d="M10 6v7h7v5M15 18h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="19" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17" cy="20" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>

            {/* CTA */}
            <a href="#live" className="btn-primary">
              {t.nav.watch}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 px-4 py-6">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-display text-lg tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-sm font-display">
              <span className="text-white">{lang.toUpperCase()}</span>
              <span className="text-white/30">|</span>
              <Link href={otherHref} className="text-white/50">
                {otherLang.toUpperCase()}
              </Link>
            </div>
            <a href="#accessibility" onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white transition-colors" aria-label="Інклюзивність">
              <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10" cy="4" r="2" fill="currentColor" />
                <path d="M10 6v7h7v5M15 18h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="19" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17" cy="20" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a href="#live" onClick={() => setMenuOpen(false)} className="btn-primary ml-auto">
              {t.nav.watch}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
