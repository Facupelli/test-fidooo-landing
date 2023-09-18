"use client";
import useIsomorphicLayoutEffect from "@/helpers/isomorphicEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface useCustomersAnimationProps {
  isMobile: boolean;
  customersRef: RefObject<HTMLDivElement>;
}

const useCustomersAnimation = ({
  isMobile,
  customersRef,
}: useCustomersAnimationProps) => {
  const altruGiving = useRef<HTMLDivElement | null>(null);
  const impuestosNacionales = useRef<HTMLDivElement | null>(null);
  const cajaPetrolera = useRef<HTMLDivElement | null>(null);
  const bestSat = useRef<HTMLDivElement | null>(null);
  const colegioMedico = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (isMobile) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: customersRef.current,
          start: "30% center",
          // markers: true,
          // scrub: 1,
          // pin: true,
          // end: "+=2000",
          // toggleActions: "restart none reverse pause",
        },
      });

      tl.fromTo(
        altruGiving.current,
        {
          opacity: 0,
          rotateX: -180,
          scale: 0.5,
        },
        {
          rotateX: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
        }
      );

      tl.fromTo(
        cajaPetrolera.current,
        {
          opacity: 0,
          rotateX: -180,
          scale: 0.5,
        },
        {
          rotateX: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
        }
      );

      tl.fromTo(
        impuestosNacionales.current,
        {
          opacity: 0,
          rotateX: -180,
          scale: 0.5,
        },
        {
          rotateX: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
        }
      );

      tl.fromTo(
        colegioMedico.current,
        {
          opacity: 0,
          rotateX: -180,
          scale: 0.5,
        },
        {
          rotateX: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
        }
      );

      tl.fromTo(
        bestSat.current,
        {
          opacity: 0,
          rotateX: -180,
          scale: 0.5,
        },
        {
          rotateX: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
        }
      );

      tl.to(
        {},
        {
          onComplete: () => {
            gsap.to(customersRef.current, {
              scrollTrigger: {
                trigger: customersRef.current,
                start: "top 70px",
                end: "+=500",
              },
            });
          },
        }
      );
    }, customersRef);

    return () => ctx.revert();
  }, [isMobile, customersRef]);

  return {
    altruGiving,
    impuestosNacionales,
    bestSat,
    colegioMedico,
    cajaPetrolera,
  };
};

export default useCustomersAnimation;
