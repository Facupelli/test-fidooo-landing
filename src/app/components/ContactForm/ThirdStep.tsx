import Image from "next/image";
import { UseFormRegister } from "react-hook-form";
import { ContactFormData } from "./ContactForm";

interface ThirdStepProps {
  register: UseFormRegister<ContactFormData>;
}

export default function ThirdStep({ register }: ThirdStepProps) {
  return (
    <>
      <div>
        <div className="relative h-[60px] w-[60px] md:h-[100px] md:w-[100px]">
          <Image
            src="./orbit.png"
            alt="orbit"
            fill
            className="relative z-10"
            sizes="(max-width: 768px) 60px, 100px"
          />
        </div>
        <div className="border border-[#FFF] w-fit md:max-w-[350px] md:min-h-[80px] max-w-[210px] p-4 absolute md:top-[-30px] top-[-50px] left-[30px] md:left-[70px] rounded-[10px]">
          Genial! por último, cuál es tu nombre?
        </div>
      </div>

      <div>
        <div className="relative">
          <div className="border border-[#FFF] w-[calc(100%-60px)] md:w-[350px] md:min-h-[120px] p-4 absolute right-[30px] top-[-40px] md:top-[-60px] md:right-[70px] rounded-[10px]">
            <textarea
              placeholder="Tu respuesta aquí"
              className="bg-transparent w-full h-full focus:outline-none"
              {...register("thirdStep")}
              required
            />
          </div>
        </div>
        <div className="relative ml-auto h-[60px] w-[60px] md:h-[100px] md:w-[100px]">
          <Image
            src="./user.png"
            alt="user"
            fill
            className="relative z-10"
            sizes="(max-width: 768px) 60px, 100px"
          />
        </div>
      </div>
    </>
  );
}
