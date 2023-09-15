import { FacebookIcon } from "@/icons/Facebook.Icon";
import { InstagramIcon } from "@/icons/Instagram.Icon";
import { LinkedinIcon } from "@/icons/Linkedin.Icon";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse place-content-center bg-primary py-[34px] md:flex md:flex-row md:gap-[180px] md:px-[110px]">
      <div className="">
        <p className="hidden md:block">Contacto</p>

        <div className="pt-6 grid gap-4 md:gap-0">
          <p className="text-center md:text-left">support@fidooo.com</p>
          <p className="text-center md:text-left">+591 76766051</p>
        </div>
      </div>

      <div className="">
        <p className="hidden md:block">Síguenos</p>

        <div className="pt-6 flex gap-8 justify-center md:justify-start">
          <FacebookIcon color="white" width={24} height={24} />
          <InstagramIcon color="white" width={24} height={24} />
          <LinkedinIcon color="white" width={24} height={24} />
        </div>
      </div>

      <div className="ml-auto hidden md:block">
        <Image
          src="./logo.svg"
          alt="Fidooo logo"
          width={200}
          height={90}
          style={{ width: 200, height: 90 }}
        />
      </div>
    </footer>
  );
}
