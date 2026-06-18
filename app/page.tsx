"use client";

import { useState } from "react";
import { InformationDialog } from "@/components/information-dialog";

const details = [
  {
    number: "01",
    title: "A gentler entrance",
    description: "The surface scales from 96% while opacity resolves over 250ms.",
  },
  {
    number: "02",
    title: "A quicker exit",
    description: "Dismissal takes 150ms, so the interface never feels held back.",
  },
  {
    number: "03",
    title: "Motion with manners",
    description: "Keyboard focus, reduced-motion preferences, and context are preserved.",
  },
];

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="page-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#" aria-label="Stillform home">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span>Stillform</span>
        </a>
        <span className="nav-label">Interaction study · 01</span>
      </nav>

      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          Dialog motion study
        </div>
        <h1 id="page-title">
          Quiet motion,
          <br />
          <span>clear intent.</span>
        </h1>
        <p className="hero-copy">
          A modal should arrive with enough presence to orient you—and leave
          before it becomes a pause.
        </p>
        <button
          className="primary-button"
          type="button"
          onClick={() => setDialogOpen(true)}
        >
          Experience the dialog
          <span className="button-arrow" aria-hidden="true">
            ↗
          </span>
        </button>
      </section>

      <section className="detail-grid" aria-label="Motion principles">
        {details.map((detail) => (
          <article className="detail-card" key={detail.number}>
            <span className="detail-number">{detail.number}</span>
            <div>
              <h2>{detail.title}</h2>
              <p>{detail.description}</p>
            </div>
          </article>
        ))}
      </section>

      <footer>
        <span>Built for attention, not applause.</span>
        <span>250ms in · 150ms out</span>
      </footer>

      <InformationDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </main>
  );
}
