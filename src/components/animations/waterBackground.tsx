"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WaterBackground() {
  const wave1 = useRef<SVGSVGElement>(null);
  const wave2 = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // onda mais lenta (fundo)
    gsap.to(wave1.current, {
      xPercent: -50,
      repeat: -1,
      duration: 12,
      ease: "linear",
    });

    // onda mais rápida (frente)
    gsap.to(wave2.current, {
      xPercent: -50,
      repeat: -1,
      duration: 7,
      ease: "linear",
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* WAVE 1 (fundo) */}
      <svg
        ref={wave1}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200vw] h-40 opacity-30 fill-white"
      >
        <path d="M0,160L60,144C120,128,240,96,360,112C480,128,600,192,720,208C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160V320H0Z" />
      </svg>

      {/* WAVE 2 (frente) */}
      <svg
        ref={wave2}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200vw] h-52 opacity-60 fill-white"
      >
        <path d="M0,180L80,160C160,140,320,100,480,120C640,140,800,220,960,220C1120,220,1280,140,1360,120L1440,100V320H0Z" />
      </svg>

    </div>
  );
}
