import Image from "next/image";
import { UseFormRegister } from "react-hook-form";
import { ContactFormData } from "./ContactForm";

interface SecondStepProps {
  register: UseFormRegister<ContactFormData>;
}

export default function SecondStep({ register }: SecondStepProps) {
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
        <div className="border border-[#FFF] w-fit md:max-w-[350px] max-w-[266px] min-h-[80px] p-4 absolute md:top-[-60px] top-[-65px] left-[30px] md:left-[70px] rounded-[10px]">
          Gracias, para que uno de nuestros expretos pueda responder tu consulta
          dime un email y teléfono de contacto
        </div>
      </div>

      <div>
        <div className="relative">
          <div className="border border-[#FFF] w-[calc(100%-60px)] md:w-[350px] md:min-h-[120px] p-4 absolute right-[30px] top-[-40px] md:top-[-60px] md:right-[70px] rounded-[10px]">
            <textarea
              placeholder="Tu respuesta aquí"
              className="bg-transparent w-full h-full focus:outline-none"
              {...register("secondStep")}
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
