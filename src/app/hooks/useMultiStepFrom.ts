"use client";
import { ReactElement, useState } from "react";

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleNextStep = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  };

  const handleBackStep = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
  };

  const gotTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    gotTo,
    handleBackStep,
    handleNextStep,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepForm;
