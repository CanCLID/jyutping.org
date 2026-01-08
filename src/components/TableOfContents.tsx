"use client"; // This component needs client-side interactivity

import type { MarkdownHeading } from "astro";
import type React from "react";
import { useEffect, useState } from "react";

// Define props interface to accept headings from Astro
interface Props {
  headings: MarkdownHeading[];
}

const TableOfContents: React.FC<Props> = ({ headings }) => {
  // Accept headings as props
  // const [headings, setHeadings] = useState<Heading[]>([]); // Remove state for headings
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // --- Intersection Observer for Active Heading ---
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      // Get heading elements using the slugs from the headings prop
      const headingElements = headings
        .map(({ slug }) => document.getElementById(slug))
        .filter((el): el is HTMLElement => el !== null); // Type guard to filter out nulls

      if (headingElements.length === 0) return; // No headings to observe

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        // Find the topmost visible heading based on intersection ratio and position
        let currentActiveId: string | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Prioritize the heading closest to the top of the viewport
            const currentActiveElement = currentActiveId
              ? document.getElementById(currentActiveId)
              : null; // Check if currentActiveId is not null
            if (
              currentActiveId === null ||
              (currentActiveElement && // Check if element was found
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
            // Sort by position on screen
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

    // Cleanup function
    return () => {
      clearTimeout(observerTimeoutId);
      if (observer) {
        observer.disconnect(); // Disconnect observer on cleanup
      }
    };
  }, [headings]); // Re-run effect if headings change

  const handleScrollTo = (slug: string) => (e: React.MouseEvent) => {
   
    e.preventDefault();
    const element = document.getElementById(slug);
    if (element) {
      // Calculate offset based on sticky header height if necessary
      const headerOffset = 80; // Adjust based on your actual header height (make this configurable if needed)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Update URL hash without triggering full navigation (optional)
      // history.pushState(null, '', `#${id}`);
    }
  };

  if (headings.length === 0) {
    return null; // Don't render TOC if no headings found
  }

  return (
    // Remove container styling, handled by Astro parent
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
