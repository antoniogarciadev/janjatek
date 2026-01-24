"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  duration?: number;
};

export default function Counter({ end, duration = 2000 }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false); // evita rodar 2x

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;
        startAnimation();
      },
      {
        threshold: 0.5, // 50% visível
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  },[]);

  function startAnimation() {
    let startTime: number;

    function animate(time: number) {
      if (!startTime) startTime = time;

      const progress = time - startTime;

      const value = Math.min(
        Math.floor((progress / duration) * end),
        end
      );

      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  return <span ref={ref}>{count}</span>;
}