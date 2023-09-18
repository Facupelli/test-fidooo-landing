"use client";
import { useForm } from "react-hook-form";
import useMultiStepForm from "../../hooks/useMultiStepFrom";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

export interface ContactFormData {
  firstStep: string;
  secondStep: string;
  thirdStep: string;
}

export default function ContactForm() {
  const { register, handleSubmit } = useForm<ContactFormData>();
  const { step, currentStepIndex, handleNextStep } = useMultiStepForm([
    <FirstStep register={register} key={0} />,
    <SecondStep register={register} key={1} />,
    <ThirdStep register={register} key={2} />,
    <FourthStep register={register} key={3} />,
  ]);

  const onSubmit = async (data: ContactFormData) => {
    handleNextStep();

    if (currentStepIndex === 2) {
      const body = JSON.stringify(data);

      try {
        await fetch(
          process.env.NODE_ENV === "production"
            ? "https://fidooo.com/api/sendgrid"
            : "http://localhost:3000/api/sendgrid",
          {
            method: "POST",
            body,
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="font-roboto pt-[150px] lg:px-[200px] lg:justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative grid lg:gap-8 gap-14 lg:min-w-[800px]"
      >
        {step}
        {currentStepIndex !== 3 && (
          <button
            type="submit"
            className="text-body2 md:text-body1 absolute right-[60px] md:right-[100px] bottom-[-10px] md:bottom-[10px]"
          >
            Enviar
          </button>
        )}
      </form>
      {currentStepIndex !== 3 && (
        <div className="flex justify-center gap-8 pt-10">
          <div
            className={`md:w-[23px] md:h-[23px] w-[9px] h-[9px] rounded-full ${
              currentStepIndex === 0 ? "bg-white" : "bg-neutral-500"
            }`}
          />
          <div
            className={`md:w-[23px] md:h-[23px] w-[9px] h-[9px] rounded-full ${
              currentStepIndex === 1 ? "bg-white" : "bg-neutral-500"
            }`}
          />
          <div
            className={`md:w-[23px] md:h-[23px] w-[9px] h-[9px] rounded-full ${
              currentStepIndex === 2 ? "bg-white" : "bg-neutral-500"
            }`}
          />
        </div>
      )}
    </div>
  );
}
