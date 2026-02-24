"use client";

import type { MarkdownHeading } from "astro";
import { useEffect, useState } from "react";

interface Props {
  headings: MarkdownHeading[];
}

const TableOfContents: React.FC<Props> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // --- Intersection Observer for Active Heading ---
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      // Get heading elements using the slugs from the headings prop
      const headingElements = headings
        .map(({ slug }) => document.getElementById(slug))
        .filter((el): el is HTMLElement => el !== null);

      if (headingElements.length === 0) return;

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        // Find the topmost visible heading based on intersection ratio and position
        let currentActiveId: string | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const currentActiveElement = currentActiveId
              ? document.getElementById(currentActiveId)
              : null;
            if (
              currentActiveId === null ||
              (currentActiveElement &&
                entry.boundingClientRect.top <
                  currentActiveElement.getBoundingClientRect().top)
            ) {
              currentActiveId = entry.target.id;
            }
          }
        }

        // If no heading is strictly "active" based on the top,
        // find the first one intersecting from the top as a fallback.
        if (currentActiveId === null) {
          const intersectingEntries = entries.filter((e) => e.isIntersecting);
          if (intersectingEntries.length > 0) {
            intersectingEntries.sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
            );
            currentActiveId = intersectingEntries[0].target.id;
          }
        }

        setActiveId(currentActiveId);
      };

      const observerOptions = {
        rootMargin: "0px 0px -75% 0px", // Trigger when heading is in the top 25% of the viewport
        threshold: 0,
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);

      for (const el of headingElements) {
        observer.observe(el);
      }
    };

    // Setup observer slightly delayed to ensure elements are in the DOM
    const observerTimeoutId = setTimeout(setupObserver, 100);

    return () => {
      clearTimeout(observerTimeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [headings]);

  const handleScrollTo = (slug: string) => (e: React.MouseEvent) => {
   
    e.preventDefault();
    const element = document.getElementById(slug);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) {
    return null; // Don't render TOC if no headings found
  }

  return (
    <nav className="max-h-[calc(100vh-6rem)] overflow-y-auto p-1">
      <ul className="space-y-1.5">
        {headings
          .filter(({ depth }) => depth > 1 && depth < 4) // Only include h2 and h3
          .map((heading) => (
            <li
              key={heading.slug}
              className={`${heading.depth === 3 ? "ml-3" : ""}`}
            >
              <a
                href={`#${heading.slug}`}
                onClick={handleScrollTo(heading.slug)}
                className={`block text-sm transition-colors duration-150 ease-in-out border-l-2 border-transparent hover:border-gray-400 ${
                  activeId === heading.slug
                    ? "font-medium text-sky-600 border-sky-600"
                    : "text-gray-600 hover:text-gray-900"
                } pl-2`}
              >
                {heading.text}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
