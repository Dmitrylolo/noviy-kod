'use client'

import type { Lang } from '@/lib/types'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface WelcomeModalProps {
  lang: Lang
}

const copy = {
  ua: {
    tag: 'НОВІ СЕРІЇ',
    heading: 'Ми оновлюємо сайт',
    body: 'Йде підготовка нового матеріалу — новий сезон і оновлені герої вже скоро з\'являться тут. Поки що переглянути всі серії можна на нашому YouTube каналі.',
    cta: 'Перейти на YouTube',
    dismiss: 'Продовжити на сайті',
    close: 'Закрити',
    noShow: 'Більше не показувати',
  },
  en: {
    tag: 'NEW EPISODES',
    heading: 'We\'re updating the site',
    body: 'New material is on the way — a new season and updated cast profiles are coming soon. In the meantime, all episodes are available on our YouTube channel.',
    cta: 'Watch on YouTube',
    dismiss: 'Continue to site',
    close: 'Close',
    noShow: 'Don\'t show again',
  },
}

const SESSION_KEY = 'nk_welcome_dismissed'
const PERSIST_KEY = 'nk_welcome_hidden'
import { YOUTUBE_URL } from '@/lib/content'

export default function WelcomeModal({ lang }: WelcomeModalProps) {
  const [visible, setVisible] = useState(false)
  const [noShow, setNoShow] = useState(false)
  const t = copy[lang]

  useEffect(() => {
    if (!localStorage.getItem(PERSIST_KEY) && !sessionStorage.getItem(SESSION_KEY)) {
      // Small delay so the page content loads first
      const id = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(id)
    }
  }, [])

  function dismiss() {
    if (noShow) {
      localStorage.setItem(PERSIST_KEY, '1')
    } else {
      sessionStorage.setItem(SESSION_KEY, '1')
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-heading"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 p-8 sm:p-10 shadow-2xl">

        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label={t.close}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Accent tag */}
        <p className="font-display text-xs text-[#E8A030] tracking-widest mb-4">{t.tag}</p>

        {/* Heading */}
        <h2
          id="welcome-modal-heading"
          className="font-display text-2xl sm:text-3xl text-white leading-tight mb-4"
          style={{ textTransform: 'none', letterSpacing: '0.02em' }}
        >
          {t.heading}
          <span className="text-[#E8A030]">_</span>
        </h2>

        {/* Divider */}
        <div className="w-10 h-[2px] bg-[#E8A030] mb-5" />

        {/* Body */}
        <p className="text-white/70 text-sm leading-relaxed mb-6">
          {t.body}
        </p>

        {/* No-show checkbox */}
        <label className="flex items-center gap-2.5 mb-8 cursor-pointer group w-fit">
          <span
            className="relative flex-shrink-0 w-4 h-4 border border-white/30 group-hover:border-[#E8A030] transition-colors"
            style={{ background: noShow ? '#E8A030' : 'transparent' }}
          >
            {noShow && (
              <svg className="absolute inset-0 w-full h-full p-[2px]" viewBox="0 0 12 12" fill="none">
                <polyline points="1.5,6 5,9.5 10.5,2.5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
          <input
            type="checkbox"
            className="sr-only"
            checked={noShow}
            onChange={(e) => setNoShow(e.target.checked)}
          />
          <span className="text-white/50 text-xs group-hover:text-white/80 transition-colors select-none">
            {t.noShow}
          </span>
        </label>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center"
            onClick={dismiss}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            {t.cta}
          </a>
          <button
            onClick={dismiss}
            className="btn-outline justify-center"
          >
            {t.dismiss}
          </button>
        </div>
      </div>
    </div>
  )
}
