import Image from "next/image";
import { UseFormRegister } from "react-hook-form";
import { ContactFormData } from "./ContactForm";

interface FourthStepProps {
  register: UseFormRegister<ContactFormData>;
}

export default function FourthStep({ register }: FourthStepProps) {
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
        <div className="border border-[#FFF] w-fit md:max-w-[350px] md:min-h-[80px] max-w-[210px] p-4 pl-8 absolute md:top-[-30px] top-[-80px] left-[30px] md:left-[70px] rounded-[10px]">
          Listo! tu consulta fue enviada con éxito, a la brevedad nos
          comunicaremos contigo
        </div>
      </div>
    </>
  );
}
