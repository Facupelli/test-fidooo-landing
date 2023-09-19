import Navbar from "@/app/components/Navbar";
import { problemsBotResolves, questions } from "@/db/botData";
import TryFidoBot from "../components/Bot/TryFidoBot";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function BotLanding() {
  return (
    <main className="">
      <Navbar />

      <div className="flex justify-center">
        <div className="max-w-screen-2xl overflow-hidden lg:overflow-visible">
          <BotSection className="grid place-content-center h-screen py-0">
            <div className="w-[344px] h-[228px] rounded-[344px] blur-[139px] lg:w-[700px] lg:h-[466px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#29C2FF] lg:rounded-[700px] z-10 lg:blur-[250px]" />
            <BotSectionTitle>
              <div>
                <strong>EXPLORA</strong> el poder
              </div>
              <div>
                de la IA con <strong>FIDOBOT</strong>
              </div>
            </BotSectionTitle>
          </BotSection>

          <BotSection className="lg:flex lg:items-center lg:gap-14">
            <div className="lg:basis-[40%]">
              <div className="w-[400px] lg:w-[700px] h-[178px] lg:h-[285px] rounded-[40%] lg:rounded-[70%] blur-[43px] lg:blur-[54px] absolute top-[65px] lg:top-[43%] lg:-translate-y-1/2 left-1/2 lg:left-[300px] -translate-x-1/2 bg-[#231F48]" />
              <BotSectionTitle className="lg:text-left">
                ¿Qué es
                <div>
                  <strong>FIDOBOT?</strong>
                </div>
              </BotSectionTitle>

              <p className="pt-4 relative z-20">
                Es un asistente virtual capaz de atender a tus clientes gracias
                a su Inteligencia Artificial integrada. Además integra los
                canales de comunicación más populares para que estés a un click
                de distancia de todas tus conversaciones.
              </p>
            </div>

            <div className="lg:relative lg:z-20 lg:basis-[60%] text-[23px] lg:text-[48px] font-bold text-[#BAECFF] flex flex-col justify-center gap-6 lg:gap-9 pt-12 lg:pt-0">
              <div className="text-center py-3 lg:py-7 border-2 border-[#29C2FF] rounded-[9px]">
                Atención al cliente
              </div>
              <div className="text-center py-3 lg:py-7 border-2 border-[#29C2FF] rounded-[9px]">
                Ventas
              </div>
              <div className="text-center py-3 lg:py-7 border-2 border-[#29C2FF] rounded-[9px]">
                Agendar turnos
              </div>
            </div>
          </BotSection>

          <BotSection className="lg:flex lg:items-center">
            <div>
              <div className="w-[400px] lg:w-[700px] h-[178px] lg:h-[389px] rounded-[40%] lg:rounded-[70%] blur-[43px] lg:blur-[54px] absolute top-[65px] lg:top-1/2 lg:-translate-y-1/2 left-1/2 lg:left-[340px] -translate-x-1/2 bg-[#231F48]" />
              <BotSectionTitle className="text-left">
                ¿Qué problemas resuelve?
              </BotSectionTitle>
            </div>

            <div className="grid gap-6 relative z-20 pt-11">
              {problemsBotResolves.map((card) => (
                <div
                  className="px-5 py-7 rounded-[10px] grid gap-[22px] bg-[#E8ECF7] text-[#000] min-h-h1"
                  key={card.title}
                >
                  <h4 className="text-body font-semibold leading-7">
                    {card.title}
                  </h4>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </BotSection>

          <BotSection className="grid place-content-center">
            <div>
              <div className="w-[344px] lg:w-[700px] h-[228px] lg:h-[466px] rounded-[344px] lg:rounded-[700px] blur-[139px] lg:blur-[250px] absolute top-[25%] lg:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#29C2FF]" />
              <BotSectionTitle>
                ¿Quieres <strong>TRANSFORMAR</strong> la experiencia de tus{" "}
                <strong>CLIENTES</strong>?
              </BotSectionTitle>

              <p className="relative z-20 text-center pt-[90px] lg:pt-[48px] w-2/3 mx-auto">
                Agenda una reunión con un especialista ahora!
              </p>

              <div className="relative z-20 flex justify-center pt-[67px]">
                <button className="rounded-[15px] bg-[#29C2FF] px-14 py-3 text-[#231F48] text-body4 font-semibold">
                  Agendar
                </button>
              </div>
            </div>
          </BotSection>

          <BotSection>
            <div>
              <div className="w-[400px] h-[178px] rounded-[40%] blur-[43px] absolute top-[130px] -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#231F48] lg:hidden" />
              <BotSectionTitle className="lg:text-left">
                Resolvemos todas tus dudas
              </BotSectionTitle>

              <div className="pt-[56px] relative z-20 flex flex-col items-center lg:items-start gap-[22px] lg:gap-[34px]">
                {questions.map((question) => (
                  <details className="w-full" key={question.question}>
                    <summary className="lg:cursor-pointer list-none text-[#BAECFF] bg-dudas lg:bg-transparente rounded-[5px] lg:rounded-[20px] p-3 text-body4 lg:border-4 lg:border-[#29C2FF] lg:text-[30px] lg:text-[#BAECFF] lg:py-5 lg:px-7">
                      {question.question}
                    </summary>
                    {question.answer}
                  </details>
                ))}
              </div>
            </div>
          </BotSection>

          <BotSection>
            <div>
              <div className="w-[400px] h-[178px] rounded-[40%] blur-[43px] absolute top-[130px] -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#231F48] lg:hidden" />
              <BotSectionTitle className="text-left">
                <strong>3 RAZONES</strong>
                <div className="text-base lg:text-h4 lg:pt-2">
                  Para añadir Fidobot a tu negocio
                </div>
              </BotSectionTitle>
            </div>

            <div className="grid gap-[30px] pt-[84px] relative z-20">
              <div className="rounded-[38px] lg:rounded-[145px] flex items-center justify-center lg:justify-start px-[30px] lg:px-16 py-[18px] lg:py-16 gap-6 lg:gap-[45px] border border-[#29C2FF]">
                <p className="text-h1mobile lg:text-h1 font-black">1</p>
                <p className="text-body4 lg:text-h4 font-medium lg:font-semibold lg:leading-10">
                  Mejora la experiencia de tus clientes
                </p>
                <p className="hidden lg:block w-[40%]">
                  Brindando respuestas instantáneas a tus clientes todos los
                  días y a toda hora, FidoBot siempre estará disponible para
                  ellos
                </p>
              </div>

              <div className="rounded-[38px] lg:rounded-[145px] flex items-center justify-center lg:justify-start px-[30px] lg:px-24 py-[18px] lg:py-24 gap-6 lg:gap-[45px] border border-[#29C2FF]">
                <p className="text-h1mobile lg:text-h1 font-black">2</p>
                <p className="text-body4 lg:text-h4 font-medium lg:font-semibold lg:leading-10">
                  Ahorra tiempo a tu equipo
                </p>
                <p className="hidden lg:block w-[40%]">
                  Encuentra tus chats más fácil y rápido gracias a la
                  clasificación automática que hará FidoBot
                </p>
              </div>

              <div className="rounded-[38px] lg:rounded-[145px] flex items-center justify-center lg:justify-start px-[30px] lg:px-24 py-[18px] lg:py-24 gap-6 lg:gap-[45px] border border-[#29C2FF]">
                <p className="text-h1mobile lg:text-h1 font-black">3</p>
                <p className="text-body4 lg:text-h4 font-medium lg:font-semibold lg:leading-10">
                  Aumenta tus ganancias
                </p>
                <p className="hidden lg:block w-[40%]">
                  Vendiendo a toda hora. Tus clientes ya no tendrán que esperar
                  los horarios de atención de tu negocio para comprar
                </p>
              </div>
            </div>
          </BotSection>

          <BotSection className="py-0">
            <div className="px-8 lg:px-12">
              <BotSectionTitle>Planes</BotSectionTitle>
            </div>

            <div>
              <div className="pt-8 px-8 lg:px-12 flex gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-hidden">
                <div className="bg-[#E8ECF7] grid gap-5 lg:gap-8 px-[18px] py-[32px] rounded-[20px] text-[#000] min-w-full lg:min-w-[calc(33%_-_24px)]">
                  <h3 className="text-h1mobile font-semibold">Básico</h3>
                  <p className="text-[#4D4D4D] text-[20px]">
                    Lorem ipsum dolor sit tmet
                  </p>
                  <p className="text-center text-h1mobile font-semibold">
                    $000 USD
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-[#29C2FF] px-12 py-3 rounded-[15px] font-semmibold text-body4">
                      Comprar
                    </button>
                  </div>
                  <p className="text-[#4D4D4D]">Incluye</p>
                  <p className="text-[#4D4D4D]">
                    Lorem ipsum dolor sit amet con Lorem ipsum dolor sit amet
                    con Lorem ipsum dolor sit amet con Lorem ipsum dolor sit
                    amet con
                  </p>
                </div>

                <div className="bg-[#E8ECF7] grid gap-5 lg:gap-8 px-[18px] py-[32px] rounded-[20px] text-[#000] min-w-full lg:min-w-[calc(33%_-_24px)]">
                  <h3 className="text-h1mobile font-semibold">Estándar</h3>
                  <p className="text-[#4D4D4D] text-[20px]">
                    Lorem ipsum dolor sit tmet
                  </p>
                  <p className="text-center text-h1mobile font-semibold">
                    $000 USD
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-[#29C2FF] px-12 py-3 rounded-[15px] font-semmibold text-body4">
                      Comprar
                    </button>
                  </div>
                  <p className="text-[#4D4D4D]">Incluye</p>
                  <p className="text-[#4D4D4D]">
                    Lorem ipsum dolor sit amet con Lorem ipsum dolor sit amet
                    con Lorem ipsum dolor sit amet con Lorem ipsum dolor sit
                    amet con
                  </p>
                </div>

                <div className="bg-[#E8ECF7] grid gap-5 lg:gap-8 px-[18px] py-[32px] rounded-[20px] text-[#000] min-w-full lg:min-w-[calc(33%_-_24px)]">
                  <h3 className="text-h1mobile font-semibold">Premium</h3>
                  <p className="text-[#4D4D4D] text-[20px]">
                    Lorem ipsum dolor sit tmet
                  </p>
                  <p className="text-center text-h1mobile font-semibold">
                    $000 USD
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-[#29C2FF] px-12 py-3 rounded-[15px] font-semmibold text-body4">
                      Comprar
                    </button>
                  </div>
                  <p className="text-[#4D4D4D]">Incluye</p>
                  <p className="text-[#4D4D4D]">
                    Lorem ipsum dolor sit amet con Lorem ipsum dolor sit amet
                    con Lorem ipsum dolor sit amet con Lorem ipsum dolor sit
                    amet con
                  </p>
                </div>
              </div>
            </div>
          </BotSection>

          <BotSection className="grid place-content-center">
            <TryFidoBot />
          </BotSection>

          <BotSection className="grid place-content-center">
            <div>
              <div className="w-[344px] lg:w-[700px] h-[228px] lg:h-[466px] rounded-[344px] lg:rounded-[700px] blur-[139px] lg:blur-[250px] absolute top-[25%] lg:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#29C2FF]" />
              <BotSectionTitle className="w-[80%] mx-auto lg:w-full">
                ¿Te quedaron dudas por resolver?
              </BotSectionTitle>

              <p className="relative z-20 text-center pt-[90px] lg:pt-[48px] mx-auto lg:w-[55%]">
                Conversa con un especialista y descubre si FidoBot es la
                solución que estas buscando para tu negocio
              </p>

              <div className="relative z-20 flex justify-center pt-[67px]">
                <button className="rounded-[15px] bg-[#29C2FF] px-14 py-3 text-[#231F48] text-body4 font-semibold">
                  Contactar
                </button>
              </div>
            </div>
          </BotSection>
        </div>
      </div>
    </main>
  );
}

function BotSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={twMerge(
        "relative px-8 lg:px-24 min-h-screen py-28",
        className
      )}
    >
      {children}
    </section>
  );
}

function BotSectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={twMerge(
        "relative z-20 text-center leading-10 md:leading-[60px] lg:leading-[90px] text-h1mobile md:text-[63px] lg:text-h1",
        className
      )}
    >
      {children}
    </h1>
  );
}
