"use client";

import { useEffect } from "react";

const revealSelector = [
  ".topbar",
  "main > section",
  "main article",
  "main .section-heading",
  "main .room-card",
  "main .amenity",
  "main .signature-item",
  "main .moment-card",
  "main .detail-copy",
  "main .experience-copy",
  "main .page-intro > *",
  "main .booking-copy > *",
  "main .contact-intro > *",
  "main .contact-services > article",
  "main .treatment-list > article",
  "footer",
].join(",");

export default function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("reveal-ready");
    const revealed = new WeakSet<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
          revealed.add(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    const scan = (root: ParentNode) => {
      root.querySelectorAll(revealSelector).forEach((element) => {
        if (!revealed.has(element)) {
          element.classList.add("reveal-item");
          observer.observe(element);
        }
      });
    };

    scan(document);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          if (node.matches(revealSelector)) {
            node.classList.add("reveal-item");
            observer.observe(node);
          }
          scan(node);
        }
      }));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
