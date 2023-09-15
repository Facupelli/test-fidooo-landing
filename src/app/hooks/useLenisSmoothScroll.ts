"use client";
import Lenis from "@studio-freight/lenis";
import { useRef, useEffect } from "react";

let lenisInstance: Lenis | null = null;

const useLenisSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!lenisInstance) {
      lenisInstance = new Lenis();
      lenisRef.current = lenisInstance;

      lenisInstance.on("scroll", (e: any) => {
        // console.log(e);
      });

      const raf = (time: number) => {
        if (lenisInstance) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }
      };

      requestAnimationFrame(raf);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        lenisInstance = null;
      }
    };
  }, []);

  return lenisRef.current;
};

export default useLenisSmoothScroll;
