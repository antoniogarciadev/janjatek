"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeaderProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      progressRef.current,
      {
        scaleX: 0,
        transformOrigin: "left",
      },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden bg-white/10">
      {/* bg-white/10 */}

      <div ref={progressRef} className="absolute left-0 top-0 h-full w-full bg-blue-500 origin-left" />

      {/* absolute right-0 top-0 h-full w-full bg-blue-500 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.8)] */}
    </div>
  );
}
