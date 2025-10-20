import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface MaskedRevealProps {
  children: React.ReactNode;
  className?: string;
  start?: string;
  end?: string;
  duration?: number;
  clipTo?: string; 
}

export default function MaskedReveal({
  children,
  className = "",
  start = "top 50%",
  end = "bottom 20%",
  duration = 1,
  clipTo = "inset(0% 0% 100% 0%)", 
}: MaskedRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !maskRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start,
        end,
        once: true,
      },
    });

    tl.fromTo(
      maskRef.current,
      { clipPath: "inset(0% 0% 0% 0%)" },
      { clipPath: clipTo, duration }
    );

    tl.fromTo(
      wrapperRef.current.firstElementChild,
      { scale: 1.25 },
      { scale: 1, duration },
      "<"
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [start, end, duration, clipTo]);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden w-full h-full ${className}`}>
      <div className="relative z-10 h-full">{children}</div>

      <div
        ref={maskRef}
        className="absolute top-0 left-0 w-full h-full bg-[var(--Secondary)] z-20 pointer-events-none"
      ></div>
    </div>
  );
}
