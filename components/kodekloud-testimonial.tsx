import { playfair_display } from "@/fonts";

export function KodeKloudTestimonial() {
  return (
    <>
      <h1 className="mb-4">Testimonial</h1>
      <figure className="rounded-lg bg-secondary p-8">
        <blockquote className={playfair_display.className}>
          <svg
            className="mb-4 size-6 text-slate-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" 
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p className="mb-8 italic leading-7 dark:text-slate-300">
            &quot;In the last 6 months, I have had the pleasure of editing many
            articles created by Hemanta, and I can confidently say that he is
            one of the most dedicated and hardworking writers I have ever had
            the pleasure of working with.
          </p>
          <p className="mb-8 italic leading-7 dark:text-slate-300">
            He is very gifted at creating engaging articles that are logically
            organized, accurate, and capturing the main point. One of his most
            outstanding qualities is the ability to create perfect examples to
            explain DevOps concepts or implementations.
          </p>
          <p className="mb-8 italic leading-7 dark:text-slate-300">
            His attention to detail and commitment to excellence is truly
            inspiring. I&apos;m always looking forward to reading his
            articles.&quot;
          </p>
        </blockquote>
        <figcaption className="flex flex-col text-sm text-slate-700 dark:text-slate-300">
          <cite>Benson Kuria Macharia</cite>
          <cite>Editor @ KodeKloud</cite>
        </figcaption>
      </figure>
    </>
  );
}
