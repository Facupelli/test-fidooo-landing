"use client";
import useIsomorphicLayoutEffect from "@/helpers/isomorphicEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface useTeamAnimationProps {
  isMobile: boolean;
  teamRef: RefObject<HTMLDivElement>;
}

const useTeamAnimation = ({ isMobile, teamRef }: useTeamAnimationProps) => {
  const teamDescription = useRef<HTMLDivElement | null>(null);
  const firstHalfTeam = useRef<HTMLDivElement | null>(null);
  const secondHalfTeam = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (isMobile) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: teamRef.current,
          start: "30% center",
          // markers: true,
          // pin: true,
          // end: "+=2500",
          // scrub: 1,
        },
      });

      tl.fromTo(
        teamDescription.current,
        {
          opacity: 0,
          scale: 0,
          top: "342px",
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        }
      );

      tl.to(teamDescription.current, {
        top: "90px",
        duration: 0.5,
      });

      tl.to(
        firstHalfTeam.current,
        {
          right: "0",
          duration: 1,
        },
        "-=0.4"
      );

      tl.to(
        secondHalfTeam.current,
        {
          left: "0",
          duration: 1,
        },
        "<"
      );
    }, teamRef);

    return () => ctx.revert();
  }, [isMobile, teamRef]);

  return {
    teamDescription,
    firstHalfTeam,
    secondHalfTeam,
  };
};

export default useTeamAnimation;
