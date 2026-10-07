'use client';

import { useState } from 'react';

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
        FAQ
      </h2>
      <ul className="mt-8 border-t border-white/[.06]">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q} className="border-b border-white/[.06]">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start gap-4 py-6 text-left"
              >
                <span
                  aria-hidden
                  className={`mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-200 ${
                    isOpen ? 'bg-[var(--accent)]' : 'bg-white/25'
                  }`}
                />
                <span className="text-lg font-semibold leading-snug text-white sm:text-xl">
                  {item.q}
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className={`pb-6 pl-[1.625rem] pr-4 text-base leading-7 text-zinc-400 transition-opacity duration-300 sm:text-lg sm:leading-8 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
