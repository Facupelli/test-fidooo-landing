"use client";
import Image from "next/image";
import { HamburguerIcon } from "@/icons/Hamburguer.Icon";
import { RefObject } from "react";
import useLenisSmoothScroll from "../hooks/useLenisSmoothScroll";

interface NavbarProps {
  servicesRef: RefObject<HTMLDivElement>;
  customersRef: RefObject<HTMLDivElement>;
  teamRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
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
      lock: true,
    });
  };

  return (
    <nav className="flex w-full justify-between items-start py-5 px-4 md:px-16 sticky bg-transparent h-[70px] top-0 z-50">
      <input id="menu" type="checkbox" className="hidden peer" />
      <label htmlFor="menu" className="w-[80px] text-left md:hidden">
        <HamburguerIcon color="white" />
      </label>
      <Image
        src="./logo.svg"
        priority
        alt="Fidooo Logo"
        width={101}
        height={35}
      />
      <ul className="peer-checked:left-0 absolute grid gap-[38px] top-[70px] left-[-100%] bg-primary p-6 md:left-0 md:top-0 md:p-0 md:w-auto md:bg-transparent md:relative md:flex md:justify-around md:gap-[52px] transition-all duration-250 ease-in-out">
        <li onClick={() => scrollTo(servicesRef)}>Servicios</li>
        <li onClick={() => scrollTo(customersRef)}>Clientes</li>
        <li onClick={() => scrollTo(teamRef)}>Nosotros</li>
        <li onClick={() => scrollTo(contactRef)}>Contacto</li>
      </ul>
      <button className="w-[80px] text-right ">ENGLISH</button>
    </nav>
  );
}
