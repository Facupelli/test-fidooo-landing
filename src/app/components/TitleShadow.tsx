import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TitleShadowProps {
  children: ReactNode;
  className?: string;
}

export default function TitleShadow({ children, className }: TitleShadowProps) {
  return (
    <div className="flex justify-center lg:block ">
      <div className="relative leading-10 md:leading-[60px] lg:leading-[90px] text-[32px] md:text-[63px] lg:text-[96px]">
        <div
          className={twMerge(
            "before:absolute before:w-full before:h-full before:bg-primary before:rounded-[80%] before:top-0 before:left-0 before:blur-[30px] before:scale-[1.8] lg:before:scale-[1.2]",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
