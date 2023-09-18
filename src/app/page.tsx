"use client";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { ReactNode, RefObject, useRef } from "react";
import Navbar from "./components/Navbar";
import TitleShadow from "./components/TitleShadow";
import ContactForm from "./components/ContactForm/ContactForm";
import useLenisSmoothScroll from "./hooks/useLenisSmoothScroll";
import useCustomersAnimation from "./hooks/useCustomersAnimation";
import useTeamAnimation from "./hooks/useTeamAnimation";
import useIsLgScreen from "./hooks/useIsMobile";
import { fidoooTeam } from "@/db/data";
import Footer from "./components/Footer";

export default function Landing() {
  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const customersRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useIsLgScreen();
  useLenisSmoothScroll();

  // IMPORTANTE las animaciones deben estar en orden de aparición
  // const { videoIntro } = useVideoIntroAnimation({ isMobile, videoSectionRef });
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
    <>
      <Navbar
        servicesRef={servicesRef}
        customersRef={customersRef}
        teamRef={teamRef}
        contactRef={contactRef}
      />
      <main className="relative">
        <LandingSection
          reference={videoSectionRef}
          className="pt-0 lg:pt-0 px-0 md:px-0 lg:px-0"
        >
          <div className="origin-bottom relative grid place-content-center md:h-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-screen w-full object-cover"
            >
              <source src="./intro/intro2.mp4" type="video/mp4" />
              Tu navegador no es compatible con vídeos HTML5
            </video>
          </div>

          <h1 className="text-h1mobile z-20 leading-10 absolute top-[40%] -translate-y-1/2 left-1/2 -translate-x-1/2 text-center md:text-[64px] lg:text-h1 md:leading-[90px] lg:max-w-[900px]">
            <strong className="font-black">DESARROLLAMOS SOFTWARE</strong> PARA
            TU NEGOCIO
          </h1>
        </LandingSection>

        <LandingSection
          reference={servicesRef}
          className="max-w-screen-2xl mx-auto"
        >
          <div className=" lg:flex lg:flex-row-reverse lg:items-center lg:px-16 lg:gap-16 ">
            <div className="relative lg:col-start-2">
              <div className="w-[354px] h-[143px] rounded-[354px] blur-[30px] lg:w-[700px] lg:h-[285px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#231F48] lg:rounded-[704px] z-10 lg:blur-[54px]" />

              <h1 className="relative z-20 grid text-center lg:text-left text-h1mobile lg:text-h1 lg:leading-[90px] leading-10 md:leading-[60px] md:text-[63px]">
                <span>Nuestros</span>
                <strong className="font-black">SERVICIOS</strong>
              </h1>
            </div>

            <div className="lg:relative lg:z-20 lg:pt-0 pt-24 lg:px-0 grid gap-8 lg:gap-12 lg:w-full">
              <div className="grid gap-2.5">
                <div className="relative h-[125px] md:h-[250px]">
                  <Image
                    src="./ourServices/software-a-medida.webp"
                    alt="our services card picture"
                    fill
                    sizes="(max-width: 768px) 360px, 100%"
                    className="rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-secondary text-[19px]">
                  Software a medida
                </h3>
              </div>
              <div className="grid gap-2.5">
                <div className="relative h-[125px] md:h-[250px]">
                  <Image
                    src="./ourServices/chatbot.webp"
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

        <LandingSection
          reference={customersRef}
          className="max-w-screen-2xl mx-auto"
        >
          <div className="py-16 relative lg:block z-20 ">
            <div className="lg:hidden w-[354px] h-[188px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#231F48] rounded-[354px] z-10 blur-[30px]" />

            <div className="relative lg:grid lg:gap-8 lg:max-w-[1000px] lg:mx-auto">
              <div className="hidden lg:block lg:w-[700px] lg:h-[207px] absolute lg:top-[15%] -translate-y-1/2 lg:left-[25%] -translate-x-1/2 bg-[#231F48] lg:rounded-[704px] z-10 lg:blur-[50px]" />

              <h1 className="lg:w-fit text-center lg:text-left relative z-20 grid text-h1mobile lg:text-h1 lg:leading-[90px] leading-10 md:leading-[60px] md:text-[63px]">
                <strong className="font-black">CLIENTES</strong>
              </h1>

              <div className="hidden lg:block lg:w-[550px] lg:h-[171px] absolute top-1/2 -translate-y-1/2 lg:left-[80%] -translate-x-1/2 bg-[#231F48] lg:rounded-[576px] z-10 lg:blur-[50px]" />

              <h1 className="text-center flex justify-center lg:justify-end gap-2 lg:gap-4 lg:text-left relative z-20 text-h1mobile lg:text-h1 lg:leading-[90px] leading-10 md:leading-[60px] md:text-[63px]">
                que{" "}
                <strong className="text-secondary-light font-black">
                  confían
                </strong>
              </h1>

              <div className="hidden lg:block lg:w-[630px] lg:h-[165px] absolute lg:top-[90%] -translate-y-1/2 lg:left-[40%] -translate-x-1/2 bg-[#231F48] lg:rounded-[630px] z-10 lg:blur-[50px]" />

              <h1 className="text-center lg:text-left relative z-20 grid text-h1mobile lg:text-h1 lg:leading-[90px] leading-10 md:leading-[60px] md:text-[63px] lg:pl-24">
                {" "}
                en nosotros
              </h1>
            </div>
          </div>

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
              <div className="rounded-[10px] my-16 px-4 py-5 text-body4 border border-[#FFD671] max-w-[450px] ">
                <p className="">
                  <strong className="font-bold">
                    Juan Perez | CEO Best SAT
                  </strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet. Sit accusantium delectus aut
                  voluptatum consequatur ea doloribus ratione. Et ratione
                  dolores At perspiciatis natus est ipsam modi.
                </p>
              </div>
            </div>
          </div>
        </LandingSection>

        <LandingSection
          reference={teamRef}
          className="max-w-screen-2xl mx-auto lg:overflow-hidden"
        >
          <div className="relative">
            <div className="w-[534px] h-[245px] rounded-[534px] blur-[60px] lg:w-[1007px] lg:h-[207px] absolute top-[16%] lg:top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#231F48] lg:rounded-[50%] z-10 lg:blur-[50px]" />

            <h1 className="relative z-20 lg:text-center text-h1mobile lg:text-h1 lg:leading-[90px] leading-10 md:leading-[60px] md:text-[63px]">
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

          <div className="hidden lg:block lg:relative">
            <div
              ref={firstHalfTeam}
              className="absolute right-[-100vw] min-w-full pt-40 grid grid-cols-2 gap-y-10 lg:flex lg:gap-10 lg:justify-center"
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
              className="absolute top-[280px] left-[-100vw] min-w-full pt-24 grid grid-cols-2 gap-y-10 lg:flex lg:gap-10 lg:justify-center"
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

        <LandingSection
          reference={contactRef}
          className="pb-24 max-w-screen-2xl mx-auto"
        >
          <div className="relative">
            <div className="w-[354px] h-[97px] rounded-[354px] blur-[30px] lg:w-[1007px] lg:h-[207px] absolute top-1/2 lg:top-1/2 -translate-y-1/2 left-1/2 lg:left-1/2 -translate-x-1/2 bg-[#231F48] lg:rounded-[50%] z-10 lg:blur-[50px]" />

            <h1 className="relative z-20 text-center text-h1mobile lg:text-h1 lg:leading-[90px] leading-10 md:leading-[60px] md:text-[63px]">
              Contáctanos
            </h1>
          </div>

          <ContactForm />
        </LandingSection>
      </main>
      <Footer />
    </>
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
        "relative overflow-hidden lg:overflow-visible min-h-[calc(100vh_-_70px)] pt-[200px] lg:py-32 px-8 md:px-14 lg:px-16",
        className
      )}
    >
      {children}
    </section>
  );
}
