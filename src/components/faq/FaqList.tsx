"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content";

export function FaqList({ items }: { items: Faq[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const buttons = event.currentTarget
      .closest("[data-faq-list]")
      ?.querySelectorAll<HTMLButtonElement>("[data-faq-button]");
    if (!buttons || buttons.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      buttons[(index + 1) % buttons.length]?.focus();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      buttons[(index - 1 + buttons.length) % buttons.length]?.focus();
    }
    if (event.key === "Home") {
      event.preventDefault();
      buttons[0]?.focus();
    }
    if (event.key === "End") {
      event.preventDefault();
      buttons[buttons.length - 1]?.focus();
    }
  }

  return (
    <div data-faq-list className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const open = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                data-faq-button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-sans text-base font-semibold text-ink"
                onClick={() => setOpenId(open ? null : item.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                {item.question}
                <span aria-hidden className="text-plum">
                  {open ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className="pb-5 pr-8 text-sm leading-7 text-ink-soft">
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
