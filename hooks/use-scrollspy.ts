import type { PostHeading } from "@/types";
import { useEffect, useRef, useState } from "react";

export function useScrollSpy() {
  const [headings, setHeadings] = useState<PostHeading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll(
        "article.prose h2, article.prose h3, article.prose h4, article.prose h5, article.prose h6",
      ),
    );

    const headingData = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent,
      level: Number(heading.tagName.substring(1)),
    }));

    setHeadings(headingData);
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [headings]);

  return { headings, activeId };
}
