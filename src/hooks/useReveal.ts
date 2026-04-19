import { useEffect } from 'react';

/**
 * Attaches a global IntersectionObserver that toggles the `is-inview`
 * class on every element marked with `data-reveal`. Elements can also
 * carry `data-reveal-delay="120"` to stagger their entrance.
 */
export function useReveal() {
  useEffect(() => {
    const prefersReduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduce) {
      document
        .querySelectorAll<HTMLElement>('[data-reveal]')
        .forEach((el) => el.classList.add('is-inview'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add('is-inview');
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-inview)')
        .forEach((el) => io.observe(el));
    };
    scan();

    // Re-scan when the catalog re-renders on filter change
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { subtree: true, childList: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
