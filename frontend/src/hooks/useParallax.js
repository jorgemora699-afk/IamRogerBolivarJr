import { useEffect, useRef, useState } from "react";

export function useParallax(strength = 0.15) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // qué tan centrado está el elemento respecto al viewport (-1 a 1 aprox)
      const centerOffset = (rect.top + rect.height / 2 - windowH / 2) / windowH;
      setOffset(centerOffset * strength * 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [strength]);

  return [ref, offset];
}