"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  margin?: string;
  blur?: boolean;
  stagger?: boolean;
  staggerDelay?: number;
  staggerIndex?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 40,
  once = true,
  margin = "-80px",
  blur = false,
  stagger = false,
  staggerDelay = 0.08,
  staggerIndex = 0,
}: Props) {
  const ref = useRef(null);

  const directionMap: Record<Direction, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const hidden = {
    opacity: 0,
    ...directionMap[direction],
    ...(blur ? { filter: "blur(4px)" } : {}),
  };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(blur ? { filter: "blur(0px)" } : {}),
  };

  const d = stagger ? delay + staggerIndex * staggerDelay : delay;

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin }}
      transition={{ duration, delay: d, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
