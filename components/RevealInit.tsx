'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Next.js keeps the root layout mounted during client-side navigation.
    // Re-run reveal setup on every route so new page content can never remain hidden.
    let observer: IntersectionObserver | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;
    let raf1 = 0;
    let raf2 = 0;

    const revealEverything = () => {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        el.classList.add('show');
        delete el.dataset.revealReady;
      });
    };

    const setup = () => {
      const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
      if (!items.length) return;

      // Never hide anything already visible in the viewport.
      // This keeps the page usable even on slow hydration/network conditions.
      const viewportCutoff = window.innerHeight * 0.98;

      if (!('IntersectionObserver' in window)) {
        revealEverything();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add('show');
              delete el.dataset.revealReady;
              observer?.unobserve(el);
            }
          });
        },
        { threshold: 0.06, rootMargin: '0px 0px -4% 0px' },
      );

      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCutoff && rect.bottom >= 0) {
          el.classList.add('show');
          delete el.dataset.revealReady;
        } else {
          el.dataset.revealReady = 'true';
          observer?.observe(el);
        }
      });

      // Safety net: content must never stay invisible because of an observer/routing edge case.
      fallbackTimer = setTimeout(revealEverything, 1400);
    };

    // Reset scroll position for normal page navigation. Preserve intentional hash navigation.
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    } else {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ block: 'start' });
      });
    }

    // Wait two frames so the new App Router page has committed and laid out.
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(setup);
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      observer?.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [pathname]);

  return null;
}
