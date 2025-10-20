import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealBoxProps {
  children: React.ReactNode;
  color?: string;
  direction?: "left" | "right" | "top" | "bottom";
  duration?: number;
  delay?: number;
}

export default function RevealBox({
  children,
  color = "black",
  direction = "right",
  duration = 1.2,
  delay = 0.3,
}: RevealBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const originMap: Record<string, string> = {
      left: "left center",
      right: "right center",
      top: "center top",
      bottom: "center bottom",
    };

    const axis =
      direction === "top" || direction === "bottom" ? "scaleY" : "scaleX";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // overlay animation
      tl.fromTo(
        overlayRef.current,
        { [axis]: 1, transformOrigin: originMap[direction] },
        { [axis]: 0, duration, ease: "ease" }
      );

      // content animation
      tl.fromTo(
        contentRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 0.8, ease: "ease" },
        `-=${delay}`
      );
    });

    return () => ctx.revert();
  }, [direction, duration, delay]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div ref={contentRef} className="relative z-10 transform scale-110">
        {children}
      </div>
      <div
        ref={overlayRef}
        className="absolute inset-0 z-20"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
