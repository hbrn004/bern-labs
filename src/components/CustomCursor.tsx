"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    posRef.current = { x: e.clientX, y: e.clientY };
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
        }
        rafRef.current = 0;
      });
    }
  }, []);

  const onMouseOver = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest(
      'a, button, input, textarea, select, [role="button"], label, [data-hover]'
    );
    if (cursorRef.current) {
      cursorRef.current.classList.toggle("hovering", !!target);
    }
  }, []);

  const onMouseDown = useCallback(() => {
    cursorRef.current?.classList.add("clicking");
  }, []);

  const onMouseUp = useCallback(() => {
    cursorRef.current?.classList.remove("clicking");
  }, []);

  useEffect(() => {
    // Only enable on pointer-fine devices (desktop)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onMouseMove, onMouseOver, onMouseDown, onMouseUp]);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <div className="custom-cursor-dot" />
      <div className="custom-cursor-ring" />
    </div>
  );
}
