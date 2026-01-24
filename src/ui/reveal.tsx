"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({
  children,
  delay = 0,
  className
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string | "";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // quando entra na tela
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
