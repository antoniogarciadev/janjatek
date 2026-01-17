import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/image/favicon.png";

export default function Header() {
  return (
    <header className="bg-white w-full h-20 fixed top-0 z-50 shadow-md">
      <nav className="flex h-full items-center justify-between w-[85%] max-w-[1366px] py-4 mx-auto">
        <Link href="#hero">
          <Image
            src={Logo}
            alt="logo"
            width={80}
            height={80}
            quality={100}
            priority
          />
        </Link>

        <ul className="flex gap-8">
          <Link
            href="#"
            className="navbar-links">
            Inicío
          </Link>
          <Link
            href="#services"
            className="navbar-links">
            Services
          </Link>
          <Link
            href="#products"
            className="navbar-links">
            Produtos
          </Link>
          <Link
            href="#clients"
            className="navbar-links">
            Clientes
          </Link>
          <Link
            href="#parthers"
            className="navbar-links">
            Parceiros
          </Link>
          <Link
            href="#vision"
            className="navbar-links">
            Visão
          </Link>
          <Link
            href="#contacts"
            className="navbar-links">
            Contato
          </Link>
        </ul>
      </nav>
    </header>
  );
}
