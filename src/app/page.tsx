"use client";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { ReactNode, RefObject, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import TitleShadow from "./components/TitleShadow";
import useIsMobile from "./hooks/useIsMobile";
import useLenisSmoothScroll from "./hooks/useLenisSmoothScroll";
import useCustomersAnimation from "./hooks/useCustomersAnimation";
import useTeamAnimation from "./hooks/useTeamAnimation";
import useVideoIntroAnimation from "./hooks/useVideoIntroAnimation";
import ContactForm from "./components/ContactForm/ContactForm";

const fidoooTeam = [
  {
    name: "Ramiro Valdez",
    position: "Lead Fidooo",
    image: "./team/ramiro.png",
  },
  {
    name: "Amilkar Massy",
    position: "Lead of Operations",
    image: "./team/amilkar.png",
  },
  {
    name: "Bryan Choque",
    position: "Lead of Tech",
    image: "./team/bryan.png",
  },
  {
    name: "Francisco Lagorio",
    position: "Lead of Product",
    image: "./team/francisco.png",
  },
  {
    name: "Marco Bianchini",
    position: "Lead of Marketing",
    image: "./team/marco.png",
  },
  {
    name: "Maria Balboa",
    position: "Lead of Human Talent",
    image: "./team/maria.png",
  },
  {
    name: "Facundo Pellicer",
    position: "Backend Dev",
    image: "./team/facundo.png",
  },
  {
    name: "Alain Ramos",
    position: "Frontend Dev",
    image: "./team/alain.png",
  },
  {
    name: "Rodrigo Saravia",
    position: "Operations resource",
    image: "./team/rodrigo.png",
  },
  {
    name: "Carlos Mendieta",
    position: "Graphic Designer",
    image: "./team/carlos.png",
  },
  {
    name: "Agustina Perez",
    position: "Graphic Designer",
    image: "./team/agustina.png",
  },
];

export default function Landing() {
  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const customersRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useIsMobile();
  useLenisSmoothScroll();

  // IMPORTANTE las animaciones deben estar en orden de aparición
  const { videoIntro } = useVideoIntroAnimation({ isMobile, videoSectionRef });
  const {
    altruGiving,
    impuestosNacionales,
    bestSat,
    colegioMedico,
    cajaPetrolera,
  } = useCustomersAnimation({ isMobile, customersRef });
  const { teamDescription, firstHalfTeam, secondHalfTeam } = useTeamAnimation({
    isMobile,
    teamRef,
  });

  const firstHalfteam = fidoooTeam.slice(0, fidoooTeam.length / 2 + 1);
  const secondHalfteam = fidoooTeam.slice(fidoooTeam.length / 2 + 1);

  return (
    <main className="realtive max-w-screen-xl mx-auto">
      <Navbar
        servicesRef={servicesRef}
        customersRef={customersRef}
        teamRef={teamRef}
        contactRef={contactRef}
      />

      <LandingSection
        reference={videoSectionRef}
        className="pt-0 lg:pt-0 px-0 md:px-0 lg:px-0"
      >
        <div className="absolute top-[-2px] left-0 h-full w-full bg-prueba content-[''] z-30" />
        <div
          ref={videoIntro}
          className="origin-bottom relative grid place-content-center md:h-auto lg:opacity-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[calc(100vh_-_70px)] w-full object-cover"
          >
            <source src="./intro/intro.mp4" type="video/mp4" />
            Tu navegador no es compatible con vídeos HTML5
          </video>
        </div>

        <h1 className="text-[32px] z-20 leading-10 absolute top-[40%] -translate-y-1/2 left-0 text-center md:text-[64px] lg:text-[96px] md:leading-[90px]">
          <strong className="font-black">DESARROLLAMOS SOFTWARE</strong> PARA TU
          NEGOCIO
        </h1>
      </LandingSection>

      <LandingSection reference={servicesRef}>
        <div className=" lg:flex lg:flex-row-reverse lg:items-center lg:px-16 lg:gap-16 ">
          <div className="lg:col-start-2">
            <TitleShadow className="before:blur-[20px]">
              <h1 className="relative z-20 grid text-lef">
                <span>Nuestros</span>
                <strong className="font-black">SERVICIOS</strong>
              </h1>
            </TitleShadow>
          </div>

          <div className="lg:pt-0 pt-24 lg:px-0 grid gap-8 lg:gap-12 lg:w-full">
            <div className="grid gap-2.5">
              <div className="relative h-[125px] md:h-[250px]">
                <Image
                  src="./ourServices/software-a-medida.png"
                  alt="our services card picture"
                  fill
                  sizes="(max-width: 768px) 360px, 100%"
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="text-secondary text-[19px]">Software a medida</h3>
            </div>
            <div className="grid gap-2.5">
              <div className="relative h-[125px] md:h-[250px]">
                <Image
                  src="./ourServices/chatbot-con-ai.png"
                  alt="our services card picture"
                  fill
                  sizes="(max-width: 768px) 360px, 100%"
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="text-secondary text-[19px]">
                Chatbot con AI integrada
              </h3>
            </div>
          </div>
        </div>
      </LandingSection>

      <LandingSection reference={customersRef}>
        <div className="py-16 relative hidden lg:block z-20 ">
          <div className="lg:grid lg:gap-8 lg:max-w-[1000px] lg:mx-auto">
            <TitleShadow className=" before:w-[550px] lg:before:scale-y-[1.8] before:blur-[20px]">
              <h1 className="relative w-fit z-50 text-center lg:text-left">
                <strong className="font-black">CLIENTES</strong>
              </h1>
            </TitleShadow>
            <TitleShadow className="before:left-[55%] before:w-[500px]  before:blur-[20px] lg:flex lg:justify-end">
              <h1 className="relative z-50 text-center lg:text-left ">
                que{" "}
                <strong className="text-secondary-light font-black">
                  confían
                </strong>
              </h1>
            </TitleShadow>
            <TitleShadow className="before:left-[200px] before:w-[500px] before:blur-[20px]">
              <h1 className="relative z-50  text-center lg:text-left lg:pl-24">
                {" "}
                en nosotros
              </h1>
            </TitleShadow>
          </div>
        </div>

        {/* MOBILE TITLE */}
        <TitleShadow className="lg:hidden">
          <h1 className="relative z-10 text-center">
            <strong className="font-black">CLIENTES</strong>
          </h1>
          <h1 className="relative z-10 text-center">
            que{" "}
            <strong className="font-black text-secondary-light">confían</strong>
          </h1>
          <h1 className="relative z-10 text-center">en nosotros</h1>
        </TitleShadow>
        {/* ------------ */}

        <div className="font-roboto pt-12 md:pt-24 lg:pt-0 ">
          <div className="flex flex-wrap gap-2 lg:gap-3">
            <div
              ref={altruGiving}
              className="lg:z-30 lg:absolute lg:top-[12%] lg:left-[7%] rounded-[10px] border border-secondary-light flex text-secondary-light p-1.5 md:p-2.5 gap-2 items-center w-fit"
            >
              <Image
                src="./customers/altrugiving.png"
                alt="AltruGiving logo"
                width={25}
                height={25}
                className="rounded-full"
              />
              <p>AltruGiving</p>
            </div>

            <div
              ref={cajaPetrolera}
              className="lg:z-30  lg:absolute lg:top-[45%] lg:right-[14%] rounded-[10px] border border-secondary-light flex text-secondary-light p-1.5 md:p-2.5 gap-2 items-center w-fit"
            >
              <Image
                src="./customers/cajaPetrolera.png"
                alt="AltruGiving logo"
                width={25}
                height={25}
                className="rounded-full"
              />
              <p>Caja Petrolera de Salud</p>
            </div>

            <div
              ref={impuestosNacionales}
              className="lg:z-30 lg:absolute lg:top-[35%] lg:-translate-y-1/2 lg:left-[10%] rounded-[10px] border border-secondary-light flex text-secondary-light p-1.5 md:p-2.5 gap-2 items-center w-fit"
            >
              <Image
                src="./customers/impuestosNacionales.png"
                alt="AltruGiving logo"
                width={25}
                height={25}
                className="rounded-full"
              />
              <p>Impuestos Nacionales</p>
            </div>

            <div
              ref={bestSat}
              className="lg:z-30 lg:absolute lg:top-[10%] lg:left-[50%] lg:-translate-x-1/2 rounded-[10px] border border-secondary-light flex text-secondary-light p-1.5 md:p-2.5 gap-2 items-center w-fit"
            >
              <Image
                src="./customers/bestSat.png"
                alt="AltruGiving logo"
                width={25}
                height={25}
                className="rounded-full"
              />
              <p>Best Sat</p>
            </div>

            <div
              ref={colegioMedico}
              className="lg:z-30 lg:absolute lg:top-[24%] lg:right-[12%] rounded-[10px] border border-secondary-light flex text-secondary-light p-1.5 md:p-2.5 gap-2 items-center w-fit"
            >
              <Image
                src="./customers/colegioMedico.png"
                alt="AltruGiving logo"
                width={25}
                height={25}
                className="rounded-full"
              />
              <p>Colegio Médico Departamental de La Paz</p>
            </div>
          </div>

          <div className="lg:flex lg:justify-center">
            <div className="rounded-[10px] my-16 px-4 py-5 text-[16px] border border-[#FFD671] max-w-[450px] ">
              <p className="">
                <strong className="font-bold">Juan Perez | CEO Best SAT</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet. Sit accusantium delectus aut
                voluptatum consequatur ea doloribus ratione. Et ratione dolores
                At perspiciatis natus est ipsam modi.
              </p>
            </div>
          </div>
        </div>
      </LandingSection>

      <LandingSection reference={teamRef}>
        <TitleShadow className="relative w-[80%] before:blur-[40px] before:w-[80%] before:left-[10%] mx-auto text-left lg:text-center">
          <div>
            <h1 className="relative z-20">
              <strong className="font-black">EQUIPO</strong> FIDOOO
            </h1>
            <div
              className="relative z-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[100px] pt-4 text-base lg:w-[50%] lg:mx-auto"
              ref={teamDescription}
            >
              Lorem ipsum dolor sit amet. Sit accusantium delectus aut
              voluptatum consequatur ea doloribus ratione. Et ratione dolores At
              perspiciatis natus est ipsam modi.
            </div>
          </div>
        </TitleShadow>

        <div className="hidden lg:block lg:relative">
          <div
            ref={firstHalfTeam}
            className="absolute right-0 min-w-full pt-40 grid grid-cols-2 gap-y-10 lg:flex lg:gap-10 lg:justify-center"
          >
            {firstHalfteam.map((member, i) => (
              <div
                key={member.name}
                className={`grid justify-items-center ${
                  i === 0 && "col-span-2 lg:col-span-1"
                }`}
              >
                <Image
                  src={member.image}
                  alt="fidooo member picture"
                  width={120}
                  height={120}
                  style={{ height: 120, width: 120, borderRadius: "10px" }}
                />
                <p className="pt-2">{member.name}</p>
                <p>{member.position}</p>
              </div>
            ))}
          </div>

          <div
            ref={secondHalfTeam}
            className="absolute top-[280px] left-0 min-w-full pt-24 grid grid-cols-2 gap-y-10 lg:flex lg:gap-10 lg:justify-center"
          >
            {secondHalfteam.map((member, i) => (
              <div
                key={member.name}
                className={`grid justify-items-center ${
                  i === 0 && "col-span-2 md:col-span-1"
                }`}
              >
                <Image
                  src={member.image}
                  alt="fidooo member picture"
                  width={120}
                  height={120}
                  style={{ height: 120, width: 120, borderRadius: "10px" }}
                />
                <p className="pt-2">{member.name}</p>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE team */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-y-10 pt-24">
            {fidoooTeam.map((member, i) => (
              <div
                key={member.name}
                className={`grid justify-items-center ${
                  i === 0 && "col-span-2"
                }`}
              >
                <Image
                  src={member.image}
                  alt="fidooo member picture"
                  width={120}
                  height={120}
                  style={{ height: 120, width: 120, borderRadius: "10px" }}
                />
                <p className="pt-2">{member.name}</p>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </LandingSection>

      <LandingSection reference={contactRef} className="pb-24">
        <TitleShadow className="relative lg:text-left text-center lg:before:w-[750px] before:h-[80px] before:lg:h-[150px] before:top-[-20px] before:lg:top-[-30px] lg:px-[100px] before:lg:left-[40px]">
          <div>
            <h1 className="relative z-20 ">Contáctanos</h1>
          </div>
        </TitleShadow>

        <ContactForm />
      </LandingSection>

      <Footer />
    </main>
  );
}

function LandingSection({
  children,
  reference,
  className,
}: {
  children: ReactNode;
  reference?: RefObject<HTMLDivElement>;
  className?: string;
}) {
  return (
    <section
      ref={reference}
      className={twMerge(
        "relative overflow-hidden min-h-[calc(100vh_-_70px)] pt-[200px] lg:py-32 px-8 md:px-14 lg:px-16",
        className
      )}
    >
      {children}
    </section>
  );
}
