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
          scrub: 1,
          // markers: true,
          pin: true,
          end: "+=2500",
          start: "50% center",
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
        }
      );

      tl.to(teamDescription.current, {
        top: "90px",
      });

      tl.from(
        firstHalfTeam.current,
        {
          right: "110%",
        },
        "-=0.3"
      );

      tl.from(
        secondHalfTeam.current,
        {
          left: "110%",
        },
        "<"
      );

      tl.to(
        {},
        {
          onComplete: () => {
            gsap.to(teamRef.current, {
              scrollTrigger: {
                trigger: teamRef.current,
                start: "top 70px",
                end: "+=500",
              },
            });
          },
        }
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
