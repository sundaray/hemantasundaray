import { useEffect, useState } from 'react';
import type { PostHeading } from '@/types';

export function useScrollSpy() {
  const [headings, setHeadings] = useState<PostHeading[]>([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("article h2, article h3, article h4, article h5, article h6")
    );
    const headingData = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent,
      level: Number(heading.tagName.substring(1)),
    }));

    setHeadings(headingData);
  }, []);


  return { headings };
}
