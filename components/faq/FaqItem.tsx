"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  return (
    <article className="border-b border-accent-light/40 last:border-b-0">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-text transition-colors hover:text-primary"
        >
          <span>{question}</span>
          <ChevronDown
            size={20}
            aria-hidden="true"
            className={`shrink-0 text-primary transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="pb-5"
      >
        <p className="text-sm leading-relaxed text-muted">{answer}</p>
      </div>
    </article>
  );
}
