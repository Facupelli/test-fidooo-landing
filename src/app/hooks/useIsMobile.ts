"use client";
import { useEffect, useLayoutEffect, useState } from "react";

const useIsLgScreen = (): boolean => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
    }
  }, []);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  if (!width) {
    return true;
  }

  return width <= 1024;
};

export default useIsLgScreen;
