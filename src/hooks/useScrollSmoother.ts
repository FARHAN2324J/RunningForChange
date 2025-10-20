import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

export const useScrollSmoother = () => {
  const smoother = useRef<ScrollSmoother | null>(null);
  const location = useLocation(); // مسیر فعلی برای refresh بعد از route change

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // ایجاد ScrollSmoother
    smoother.current = ScrollSmoother.create({
      smooth: 3,
      effects: true,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      ignoreMobileResize: true,
    });

    // Cleanup کامل هنگام unmount
    return () => {
      if (smoother.current) smoother.current.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Refresh ScrollTrigger و Smoother بعد از هر تغییر route
  useEffect(() => {
    if (smoother.current) {
      ScrollTrigger.refresh();
    }
  }, [location.pathname]);

  return smoother;
};
