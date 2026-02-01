import { Facebook, Instagram, Linkedin, Phone } from "@deemlol/next-icons";
import { Clock, MapPin, X, Mail } from "lucide-react";
import Image from "next/image";
import Logotipo from "@/assets/image/logo-janjatek.png";

export default function Footer() {
  return (
    <footer className="w-full h-[94vh] xl:h-screen flex flex-col  bg-(--header-footer) items-center text-sm lg:text-[16px] justify-center">
      <div className="group w-19/20 md:w-[85%] max-w-[1366px] h-full flex flex-col items-center justify-around gap-2">
        <div className="w-full h-[80%] flex flex-col lg:flex-row items-start lg:items-center justify-evenly lg:justify-between gap-2">
          <div className="space-y-3 mb-2">
            <div className="space-y-3">
              <div className="flex items-center justify-start gap-1">
                <div className="w-8 h-8 relative inline">
                  <Image
                    src={Logotipo}
                    alt="logo"
                    fill
                    quality={100}
                    className="object-contain"
                    priority
                  />
                </div>
                <h1 className="text-2xl text-blue-700 font-bold">Janjatek</h1>
              </div>
              <p>
                Soluções emergentes personalizadas em software, segurança
                digital e automação.
              </p>
            </div>

            <div className="grid grid-cols-2 place-content-start w-full lg:mt-10">
              <ul>
                <h1 className="font-medium text-2xl text-white mb-2">Links</h1>

                <li>
                  <a href="#hero" className="footer-links">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer-links">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#products" className="footer-links">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#clients" className="footer-links">
                    Clientes
                  </a>
                </li>
                <li>
                  <a href="#partners" className="footer-links">
                    Parceiros
                  </a>
                </li>
              </ul>

              <ul>
                <h1 className="font-medium text-2xl text-white mb-2">Mais</h1>

                <li>
                  <a href="#" target="_blank" className="footer-links">
                    NoHere
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="footer-links">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 place-content-start w-full md:w-105 space-y-4">
            <ul>
              <h1 className="font-medium text-2xl text-white">Siga-nos</h1>

              <div className="flex justify-between items-center full min-[305px]:w-70">
                <a
                  href="https://facebook.com"
                  target="_blanck"
                  className="footer-icons">
                  <Facebook />
                </a>
                <a
                  href="https://Instagram.com"
                  target="_blanck"
                  className="footer-icons">
                  <Instagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blanck"
                  className="footer-icons">
                  <Linkedin />
                </a>
                <a
                  href="https://x.com"
                  target="_blanck"
                  className="footer-icons">
                  <X />
                </a>
              </div>
            </ul>

            <ul id="contacts" className="w-full bg-blck">
              <h1 className="font-medium text-2xl text-white mb-2">Contacto</h1>

              <div className="flex flex-col justify-between items-start gap-2 text-white/90">
                <p className="flex gap-2 items-center justify-center">
                  <Mail /> geral@janjatek.com
                </p>
                <p className="flex gap-2 items-center justify-center tracking-tight">
                  <Phone /> +351 962 379 068 | +244 939 103 540
                </p>
                <p className="flex gap-2 items-center justify-center">
                  <MapPin /> Lisboa, Portugal | Luanda, Angola
                </p>
                <p className="flex gap-2 items-center justify-center">
                  <Clock />
                  24/7
                </p>
              </div>
            </ul>
          </div>
        </div>

        <div className="w-full h-10 pt-4 border-t border-[#aaaaaabe] flex flex-col gap-2 items-center justify-center">
          <span className="text-[#c5d5d0] text-center">
            © 2026 Janjatek. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
