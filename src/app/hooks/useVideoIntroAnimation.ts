"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsomorphicLayoutEffect from "@/helpers/isomorphicEffect";
import { RefObject, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface useVideoIntroAnimationProps {
  isMobile: boolean;
  videoSectionRef: RefObject<HTMLDivElement>;
}

const useVideoIntroAnimation = ({
  isMobile,
  videoSectionRef,
}: useVideoIntroAnimationProps) => {
  const videoIntro = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (isMobile) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoSectionRef.current,
          scrub: 1,
          pin: true,
          start: "top 70px",
          end: "+=2000",
          // markers: true,
          toggleActions: "restart none reverse pause",
        },
      });

      tl.fromTo(
        videoIntro.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
        }
      );

      tl.to(
        {},
        {
          onComplete: () => {
            gsap.to(videoSectionRef.current, {
              scrollTrigger: {
                trigger: videoSectionRef.current,
                start: "top 70px",
                end: "+=300",
              },
            });
          },
        }
      );
    }, videoSectionRef);

    return () => ctx.revert();
  }, [isMobile, videoSectionRef]);

  return {
    videoIntro,
  };
};

export default useVideoIntroAnimation;
