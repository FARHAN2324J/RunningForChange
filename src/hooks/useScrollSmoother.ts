import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useScrollSmoother = () => {
  const smoother = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    smoother.current = ScrollSmoother.create({
      smooth: 3,
      // smoothTouch: 3,
      effects: true,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      ignoreMobileResize: true,
    });

    // Cleanup
    return () => {
      if (smoother.current) {
        smoother.current.kill();
      }
    };
  }, []);

  return smoother;
};

