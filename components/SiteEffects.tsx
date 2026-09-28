"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SiteEffects() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    document.body.classList.add("animations-ready");
    const progress = document.querySelector<HTMLElement>(".progress");
    const update = () => {
      const e = document.documentElement;
      const max = e.scrollHeight - e.clientHeight;
      const pct = max > 0 ? (e.scrollTop / max) * 100 : 0;
      if (progress) progress.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();

    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("show"); });
    }, { threshold: 0.12 });
    reveals.forEach((el) => observer.observe(el));
    const fallback = window.setTimeout(() => reveals.forEach((el) => el.classList.add("show")), 1400);

    const faqButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".faq-item button"));
    const faqHandlers = faqButtons.map((button) => {
      const handler = () => button.parentElement?.classList.toggle("open");
      button.addEventListener("click", handler);
      return [button, handler] as const;
    });

    const forms = Array.from(document.querySelectorAll<HTMLFormElement>('form[data-api-form="true"]'));
    const formHandlers = forms.map((form) => {
      const handler = async (event: Event) => {
        event.preventDefault();
        const status = form.querySelector<HTMLElement>(".form-status");
        if (status) { status.textContent = "Sending…"; status.className = "form-status visible"; }
        const values = Object.fromEntries(new FormData(form).entries());
        try {
          const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ formType: form.dataset.formType, ...values }) });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) throw new Error(data?.message || "Unable to submit form.");
          if (status) { status.textContent = data?.message || "Thank you. Your request has been submitted."; status.className = "form-status visible"; }
          form.reset();
        } catch (error) {
          if (status) { status.textContent = error instanceof Error ? error.message : "Unable to submit form."; status.className = "form-status visible error"; }
        }
      };
      form.addEventListener("submit", handler);
      return [form, handler] as const;
    });

    const internalLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('main a[href^="/"]'));
    const linkHandlers = internalLinks.map((link) => {
      const handler = (event: MouseEvent) => {
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === "_blank") return;
        event.preventDefault();
        router.push(link.getAttribute("href") || "/");
      };
      link.addEventListener("click", handler);
      return [link, handler] as const;
    });

    if (!location.hash) window.scrollTo({ top:0, behavior:"auto" });

    return () => {
      window.removeEventListener("scroll", update);
      observer.disconnect();
      clearTimeout(fallback);
      faqHandlers.forEach(([button, handler]) => button.removeEventListener("click", handler));
      formHandlers.forEach(([form, handler]) => form.removeEventListener("submit", handler));
      linkHandlers.forEach(([link, handler]) => link.removeEventListener("click", handler));
    };
  }, [pathname, router]);
  return <div className="progress" aria-hidden="true" />;
}
