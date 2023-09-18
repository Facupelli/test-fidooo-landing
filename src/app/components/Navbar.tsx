"use client";
import Image from "next/image";
import { HamburguerIcon } from "@/icons/Hamburguer.Icon";
import { RefObject } from "react";
import useLenisSmoothScroll from "../hooks/useLenisSmoothScroll";

interface NavbarProps {
  servicesRef?: RefObject<HTMLDivElement>;
  customersRef?: RefObject<HTMLDivElement>;
  teamRef?: RefObject<HTMLDivElement>;
  contactRef?: RefObject<HTMLDivElement>;
}

export default function Navbar({
  servicesRef,
  customersRef,
  teamRef,
  contactRef,
}: NavbarProps) {
  const lenis = useLenisSmoothScroll();

  const scrollTo = (section: RefObject<HTMLDivElement>) => {
    if (!section.current || !lenis) {
      return;
    }

    lenis?.scrollTo(section.current, {
      offset: 10,
      duration: 3,
      lock: false,
    });

    const inputElement = document.querySelector<HTMLInputElement>("#menu");
    if (inputElement) {
      inputElement.checked = false;
    }
  };

  return (
    <nav className="flex justify-between items-center py-5 px-4 md:px-16 2xl:px-52 fixed bg-[rgba(0,0,0,0.4)] top-0 z-50 w-full">
      <input id="menu" type="checkbox" className="hidden peer" />
      <label htmlFor="menu" className="w-[80px] text-left md:hidden">
        <HamburguerIcon color="white" />
      </label>
      <div className="relative h-[35px] md:h-[50px] w-[100px] md:w-[140px]">
        <Image
          src="./logo.svg"
          priority
          alt="Fidooo Logo"
          fill
          sizes="(max-width: 768px) 100px, 100%"
        />
      </div>
      <ul className="peer-checked:left-0 absolute grid gap-[38px] top-[70px] left-[-100%] bg-primary p-6 md:left-0 md:top-0 md:p-0 md:w-auto md:bg-transparent md:relative md:flex md:justify-around md:gap-[52px] transition-all duration-250 ease-in-out">
        <li onClick={() => servicesRef && scrollTo(servicesRef)}>Servicios</li>
        <li onClick={() => customersRef && scrollTo(customersRef)}>Clientes</li>
        <li onClick={() => teamRef && scrollTo(teamRef)}>Nosotros</li>
        <li onClick={() => contactRef && scrollTo(contactRef)}>Contacto</li>
      </ul>
      {/* <div className="w-[80px]" /> */}
    </nav>
  );
}
