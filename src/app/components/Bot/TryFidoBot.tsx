"use client";

import { useState } from "react";

export default function TryFidoBot() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <h1 className="text-center relative z-20 leading-10 md:leading-[60px] lg:leading-[90px] text-h1mobile md:text-[63px] lg:text-h1 w-[80%] mx-auto lg:w-full">
        Prueba Fido
      </h1>
      <p className="text-body4 lg:text-body1 font-roboto text-center pt-2 lg:pt-6">
        Elige un tipo de negocio y haz una pregunta
      </p>
      <div className="flex flex-col-reverse lg:flex-col">
        <div className="flex justify-center gap-6 lg:gap-12 font-roboto pt-4">
          <button
            onClick={() => setActiveTab(1)}
            className={`p-2 rounded-[10px] border  ${
              activeTab === 1
                ? "border-[#29C2FF] text-[#29C2FF]"
                : "border-[#919191]"
            } lg:w-[280px]`}
          >
            Tienda de calzado
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`p-2 rounded-[10px] border  ${
              activeTab === 2
                ? "border-[#29C2FF] text-[#29C2FF]"
                : "border-[#919191]"
            } lg:w-[280px]`}
          >
            Heladería
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={`p-2 rounded-[10px] border  ${
              activeTab === 3
                ? "border-[#29C2FF] text-[#29C2FF]"
                : "border-[#919191]"
            } lg:w-[280px]`}
          >
            Consultorio Médico
          </button>
        </div>

        <div className="lg:min-h-[350px] lg:text-body3 pt-10 lg:pt-24 grid gap-4 lg:gap-2 pb-6 lg:pb-0">
          <div className="max-w-[400px] w-fit border border-[#FFFFF] p-2 rounded-[10px] place-self-end">
            {activeTab === 1 && "Hola! que tipo de calzados venden?"}
            {activeTab === 2 && "Hola! Quiero un kilo de helado "}
            {activeTab === 3 && "Hola! Quiero pedir un turno"}
          </div>
          <div className="max-w-[400px] w-fit h-fit border border-[#29C2FF] text-[#29C2FF] p-2 rounded-[10px]">
            {activeTab === 1 && (
              <p>
                Hola! Tenemos una extensa colección que abarca desde zapatillas
                deportivas hasta sandalias cómodas, botas de moda y una
                selección de calzado casual perfecto para el día a día. Estamos
                aquí para ayudarte a encontrar el par perfecto. ¿Hay algún tipo
                de calzado en particular que estés buscando? ¡No dudes en
                preguntar!
              </p>
            )}
            {activeTab === 2 && (
              <p>
                ¡Hola! ¡Claro que sí, estás en el lugar indicado para satisfacer
                tu antojo de helado! Tenemos una amplia gama de sabores, ¿Hay
                algún sabor en particular que te llame la atención? ¡Estoy aquí
                para ayudarte a crear la combinación perfecta para tu kilo de
                helado!
              </p>
            )}
            {activeTab === 3 && (
              <p>
                ¡Hola! ¡Por supuesto! Por favor, indícame tu nombre completo,
                fecha de nacimiento y el motivo de tu visita, y te proporcionaré
                opciones de horarios disponibles para tu turno en nuestro centro
                médico.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="pt-6 font-roboto">
        <div className="w-full rounded-[10px] p-3 border border-[#FFFFFF] text-body4 lg:text-body3">
          Escribe aquí
        </div>
        <div className="flex justify-end pt-2">
          <button className="text-body4 lg:text-body1 text-[[#FFF]]">
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}
