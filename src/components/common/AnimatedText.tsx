import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface AnimatedTextProps {
  children: React.ReactNode;
  animate?: "chars" | "lines";
}

export function AnimatedText({
  children,
  animate = "chars",
}: AnimatedTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;
      const split = new SplitText(textRef.current, {
        type: animate === "lines" ? "lines" : "chars",
      });
      if (animate === "chars") {
        gsap.from(split.chars, {
          x: 5,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "circ",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
      if (animate === "lines") {
        gsap.from(split.lines, {
          duration: 0.8,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === textRef.current) st.kill();
        });
      };
    },
    { scope: textRef, dependencies: [animate] }
  );

  return (
    <span className="relative">
      <span className="sr-only">{children}</span>
      <span ref={textRef} aria-hidden="true" className="overflow-hidden span-animate">
        {children}
      </span>
    </span>
  );
}
