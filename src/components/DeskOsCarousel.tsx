'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import styles from './DeskOsCarousel.module.css'

const slides = [
  {
    src: '/images/deskos1.jpg',
    alt: 'Desk OS landing page with the message “That’s the edge” and an entry point to the operator terminal.',
    title: 'The operator terminal',
    description: 'A quiet entry point into a process-first workspace: prepare, act, and journal the decisions behind the work.',
  },
  {
    src: '/images/deskos2.jpg',
    alt: 'Desk OS setups screen showing an active pipeline organized into ideas, watched setups, and running trades.',
    title: 'Setups and active pipeline',
    description: 'Move ideas through watched, armed, and active states with the thesis, levels, invalidation, and risk visible together.',
  },
  {
    src: '/images/deskos3.jpg',
    alt: 'Desk OS journal screen for recording trade details alongside past showdowns and rule adherence.',
    title: 'Journal the decision',
    description: 'Record the setup, execution, and whether the plan was followed—not just the final outcome.',
  },
  {
    src: '/images/deskos4.jpg',
    alt: 'Desk OS Book dashboard summarizing journal entries with outcome and risk distribution charts.',
    title: 'The Book',
    description: 'Review journal-derived summaries and outcome distributions in one place. Displayed metrics are self-reported.',
  },
  {
    src: '/images/deskos5.jpg',
    alt: 'Desk OS profile dashboard separating self-reported account performance from process XP.',
    title: 'Account and process ledgers',
    description: 'Keep self-reported account activity distinct from process XP, so behavioral progress is not presented as financial return.',
  },
  {
    src: '/images/deskos6.jpg',
    alt: 'Desk OS account calendar with daily entries beside an equity curve and drawdown chart.',
    title: 'Calendar and equity view',
    description: 'Inspect logged daily activity alongside an account curve. Account figures are self-reported, not independently verified.',
  },
  {
    src: '/images/deskos7.jpg',
    alt: 'Desk OS process XP screen with process log and a schedule of actions that earn process XP.',
    title: 'Process XP',
    description: 'Track reviews, journaling, and rule-following as process activity—separate from a financial return.',
  },
  {
    src: '/images/deskos8.jpg',
    alt: 'Desk OS watchlist screen grouping active symbols by category with controls to add symbols and create ideas.',
    title: 'Watchlist',
    description: 'Organize symbols by desk category and promote observation into a defined idea when a process calls for it.',
  },
]

export default function DeskOsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const slide = slides[activeIndex]

  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length)
  }, [])

  const showNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, showNext, showPrevious])

  return (
    <>
      <div
        className={styles.carousel}
        role="region"
        aria-roledescription="carousel"
        aria-label="Desk OS interface previews"
        onTouchStart={(event) => {
          const touch = event.touches[0]
          event.currentTarget.dataset.touchX = String(touch.clientX)
        }}
        onTouchEnd={(event) => {
          const startX = Number(event.currentTarget.dataset.touchX)
          const endX = event.changedTouches[0]?.clientX
          if (!Number.isFinite(startX) || endX === undefined) return
          const delta = endX - startX
          if (Math.abs(delta) < 45) return
          if (delta < 0) showNext()
          else showPrevious()
        }}
      >
        <div className={styles.frame}>
          <button
            type="button"
            className={styles.imageButton}
            onClick={() => setIsOpen(true)}
            aria-label={`Open image: ${slide.title}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1280}
              height={640}
              priority
              sizes="(max-width: 900px) 100vw, 78rem"
            />
            <span className={styles.expand}>Open image ↗</span>
          </button>
          <button type="button" className={`${styles.arrow} ${styles.previous}`} onClick={showPrevious} aria-label="Previous Desk OS image">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={showNext} aria-label="Next Desk OS image">
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className={styles.caption} aria-live="polite">
          <div>
            <p className="investor-eyebrow">DESK OS / {String(activeIndex + 1).padStart(2, '0')} OF {String(slides.length).padStart(2, '0')}</p>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
          <div className={styles.dots} aria-label="Choose a Desk OS image">
            {slides.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}: ${item.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                className={index === activeIndex ? styles.active : ''}
              />
            ))}
          </div>
        </div>
      </div>
      <p className={styles.note}>Interface previews. Account figures shown are self-reported, not independently verified, and are not indicative of future results.</p>

      {isOpen && (
        <div
          className={styles.lightbox}
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false)
          }}
        >
          <div className={styles.dialog} role="dialog" aria-modal="true" aria-label={`Desk OS image: ${slide.title}`}>
            <button type="button" className={styles.close} onClick={() => setIsOpen(false)} aria-label="Close image">
              <span aria-hidden="true">×</span>
            </button>
            <button type="button" className={`${styles.arrow} ${styles.previous}`} onClick={showPrevious} aria-label="Previous Desk OS image">
              <span aria-hidden="true">←</span>
            </button>
            <div className={styles.lightboxImage}>
              <Image src={slide.src} alt={slide.alt} fill sizes="96vw" priority />
            </div>
            <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={showNext} aria-label="Next Desk OS image">
              <span aria-hidden="true">→</span>
            </button>
            <div className={styles.lightboxCaption}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
