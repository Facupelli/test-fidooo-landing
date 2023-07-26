import Image from "next/image";
import bg from "../../public/teams.png";
import Link from "next/link";
import { FacebookIcon } from "@/icons/Facebook.Icon";
import { InstagramIcon } from "@/icons/Instagram.Icon";
import { WhatsappIcon } from "@/icons/Whatsapp.Icon";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col gap-24 items-center justify-center p-10 sm:p-0 font-roboto">
      <div className="absolute z-10 top-0 left-0 w-full h-full">
        <div className="relative h-full w-full ">
          <Image
            className="w-full h-full"
            src={bg}
            alt="Next.js Logo"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <section className="relative z-20 grid gap-12">
        <div className="flex justify-center">
          <Image
            className=""
            src="/fidooo_logo.svg"
            alt="Next.js Logo"
            width={350}
            height={100}
            priority
          />
        </div>
        <div className="max-w-[70ch] text-center grid gap-2 text-neutral-900 text-lg">
          <div className="flex justify-center items-center gap-2 pb-4">
            <h1 className="font-bold text-3xl sm:text-4xl text-center uppercase ">
              Ready Soon
            </h1>
            <p className="text-5xl">🚀</p>
          </div>
          <p>
            ¡Nuestra página está en proceso de renovación! Estamos emocionados
            de presentarte una nueva y mejorada experiencia. Pronto estaremos de
            vuelta con nuevas características y funcionalidades.
          </p>
          <p>Contacto: support@fidooo.com</p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="https://www.facebook.com/fidooo.eng" target="_blanck">
              <FacebookIcon color="black" />
            </Link>

            <Link
              href="https://www.instagram.com/wearefidooo/"
              target="_blanck"
            >
              <InstagramIcon color="black" />
            </Link>

            <Link href="" target="_blanck">
              <WhatsappIcon color="black" />
            </Link>

            <Link href="" target="_blanck"></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
