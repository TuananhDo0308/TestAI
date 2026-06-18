"use client";

import {
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type InformationDialogProps = {
  open: boolean;
  onClose: () => void;
};

const CLOSE_DURATION_MS = 150;
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function InformationDialog({
  open,
  onClose,
}: InformationDialogProps) {
  const [entered, setEntered] = useState(false);
  const [closing, setClosing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    returnFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = window.requestAnimationFrame(() => {
        setEntered(true);
        initialFocusRef.current?.focus();
      });
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function requestClose() {
    if (closing) {
      return;
    }

    setClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setEntered(false);
      setClosing(false);
      onClose();
      returnFocusRef.current?.focus();
    }, CLOSE_DURATION_MS);
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      requestClose();
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) {
      return;
    }

    const focusableElements = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    ).filter((element) => !element.hasAttribute("disabled"));

    if (focusableElements.length === 0) {
      event.preventDefault();
      dialogRef.current.focus();
      return;
    }

    const activeIndex = focusableElements.indexOf(
      document.activeElement as HTMLElement,
    );

    event.preventDefault();

    if (event.shiftKey) {
      const previousIndex =
        activeIndex <= 0 ? focusableElements.length - 1 : activeIndex - 1;
      focusableElements[previousIndex]?.focus();
      return;
    }

    const nextIndex =
      activeIndex === -1 || activeIndex === focusableElements.length - 1
        ? 0
        : activeIndex + 1;
    focusableElements[nextIndex]?.focus();
  }

  if (!open) {
    return null;
  }

  const panelClassName = [
    "t-modal",
    entered && !closing ? "is-open" : "",
    closing ? "is-closing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={[
        "dialog-layer",
        entered && !closing ? "is-open" : "",
        closing ? "is-closing" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="dialog-backdrop"
        aria-hidden="true"
        onMouseDown={requestClose}
      />
      <div
        ref={dialogRef}
        className={panelClassName}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <button
          ref={initialFocusRef}
          className="icon-button"
          type="button"
          onClick={requestClose}
          aria-label="Close dialog"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="dialog-kicker">
          <span aria-hidden="true">✦</span>
          A small note
        </div>
        <h2 id="dialog-title">Good motion knows when to leave.</h2>
        <p id="dialog-description">
          This dialog enters softly to establish context, then exits more
          quickly to return control. The difference is subtle. The feeling
          isn&apos;t.
        </p>

        <div className="dialog-rule" />

        <div className="dialog-meta">
          <div>
            <span>Entrance</span>
            <strong>250ms</strong>
          </div>
          <div>
            <span>Exit</span>
            <strong>150ms</strong>
          </div>
          <div>
            <span>Scale</span>
            <strong>0.96 → 1</strong>
          </div>
        </div>

        <button className="dialog-button" type="button" onClick={requestClose}>
          Got it
        </button>
      </div>
    </div>
  );
}
