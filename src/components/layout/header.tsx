"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/image/favicon.png";
import { Menu, X } from "lucide-react";
import HeaderProgress from "../animations/headerProgress";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const OpenMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-(--header-footer) fixed top-0 w-full h-15 lg:h-20   left-0  z-50 shadow-md">
      <nav className="container mx-auto flex h-full items-center justify-between py-4 px-4 lg:px-20 relative z-50">

        <Link href="#hero">
          <Image
            src={Logo}
            alt="logo"
            width={70}
            height={70}
            quality={100}
            priority
            className="drop-shadow-lg drop-shadow-white/10 hover:drop-shadow-blue-500 transition-all duration-500"
          />
        </Link>

        <ul
          className={`flex items-center justify-between h-full gap-3 max-[1024px]:hidden `}>
          <Link href="#hero" className="navbar-links">
            Inicío
          </Link>
          <Link href="#services" className="navbar-links">
            Services
          </Link>
          <Link href="#products" className="navbar-links">
            Produtos
          </Link>
          <Link href="#clients" className="navbar-links">
            Clientes
          </Link>
          <Link href="#partners" className="navbar-links">
            Parceiros
          </Link>
          <Link href="#about" className="navbar-links">
            Sobre
          </Link>
          <Link href="#vision" className="navbar-links">
            Visão
          </Link>
          <Link href="#contacts" className="navbar-links">
            Contato
          </Link>
        </ul>

        {/* Menu hamburguer */}
        {isOpen ? (
          <div className="lg:hidden">
            <X className="cursor-pointer text-blue-500" size={30}onClick={OpenMenu} />
          </div>
        ) : (
          <div className="lg:hidden text-blue-500">
            <Menu className="cursor-pointer" size={30} onClick={OpenMenu} />
          </div>
        )}
      </nav>

      <HeaderProgress />

      <ul
        className={`flex lg:hidden flex-col items-center justify-evenly w-full h-90 mx-auto bg-(--header-footer) absolute top-15 transition-all duration-500 ease ${isOpen ? "opacity-100 translate-x-0 pointer-events-auto" : " -translate-x-full pointer-events-none"}`}>
        <Link
          href="#hero"
          className="navbar-links"
          onClick={closeMenu}>
          Inicío
        </Link>
        <Link
          href="#services"
          className="navbar-links"
          onClick={closeMenu}>
          Services
        </Link>
        <Link
          href="#products"
          className="navbar-links"
          onClick={closeMenu}>
          Produtos
        </Link>
        <Link
          href="#clients"
          className="navbar-links"
          onClick={closeMenu}>
          Clientes
        </Link>
        <Link
          href="#partners"
          className="navbar-links"
          onClick={closeMenu}>
          Parceiros
        </Link>
        <Link
          href="#about"
          className="navbar-links"
          onClick={closeMenu}>
          Sobre
        </Link>
        <Link
          href="#vision"
          className="navbar-links"
          onClick={closeMenu}>
          Visão
        </Link>
        <Link
          href="#contacts"
          className="navbar-links"
          onClick={closeMenu}>
          Contato
        </Link>
      </ul>
    </header>
  );
}