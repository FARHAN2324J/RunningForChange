// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export const useScrollSmoother = () => {
//   const smoother = useRef<ScrollSmoother | null>(null);

//   useEffect(() => {
//     if (typeof window === "undefined") return; // SSR safe

//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//     // اگر قبلاً smoother وجود داشت، ابتدا آن را kill می‌کنیم
//     if (smoother.current) {
//       smoother.current.kill();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     }

//     smoother.current = ScrollSmoother.create({
//       smooth: 1.5, // سرعت اسموتر رو می تونید تغییر بدید
//       effects: true,
//       wrapper: "#smooth-wrapper",
//       content: "#smooth-content",
//       ignoreMobileResize: true,
//     });

//     // وقتی کامپوننت unmount شد
//     return () => {
//       if (smoother.current) {
//         smoother.current.kill();
//         ScrollTrigger.getAll().forEach((st) => st.kill());
//       }
//     };
//   }, []);

//   // هر بار که smoother آماده شد، layout رو refresh میکنیم
//   useEffect(() => {
//     if (smoother.current) {
//       ScrollTrigger.refresh();
//       smoother.current?.refresh();
//     }
//   });

//   return smoother;
// };
