// Imports das imagens
import Email from "@/assets/icons/email-icon.png";
import Phone from "@/assets/icons/phone-icon.png";
import Location from "@/assets/icons/location-icon.png";
import Clock from "@/assets/icons/clock-icon.png";

// Tipo de dados dos meus cards
import { card } from "@/types/types";
import ContactLabel from "@/ui/contactLabel";
import { Facebook, Instagram, Linkedin } from "@deemlol/next-icons";
import { XIcon } from "lucide-react";
import Reveal from "@/ui/reveal";

export default function Contact() {
  // Informações dos meus cards
  const labelInfo: card[] = [
    {
      id: 1,
      imageUrl: Email,
      alt: "E-mail",
      title: "E-mail",
      text: "geral@janjatek.com",
    },
    {
      id: 2,
      imageUrl: Phone,
      alt: "Telefone",
      title: "Telefone",
      text: "+351 962 379 068 | +244 939 103 540",
    },
    {
      id: 3,
      imageUrl: Location,
      alt: "Local",
      title: "Local",
      text: "Lisboa, Portugal | Luanda, Angola",
    },
    {
      id: 4,
      imageUrl: Clock,
      alt: "Suporte",
      title: "Suporte",
      text: "24/7",
    },
  ];

  return (
    <section className="w-full h-180 lg:h-screen lg:max-h-(--max-height)" id="contacts">
      <div className="mx-auto flex flex-col gap-8 items-center justify-center w-9/10  lg:w-[85%] lg:max-w-[1366px] h-full">

        <Reveal>
          <div className="w-full lg:w-138 flex flex-col items-center space-y-3">
            <h1 className="text-(--color-title) text-2xl lg:text-4xl font-semibold">
              Contacto Directo
            </h1>
            <p className="text-center text-[20px]">
              Pronto para soluções emergentes?
            </p>
          </div>
        </Reveal>

          <div className="group w-full lg:w-190 h-4/6 md:h-[350px] py-6 px-6 flex flex-col bg-white items-center justify-center gap-2 hover:scale-104 transition-all duration-500 ease-in-out rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="w-0 h-1 absolute top-0 left-1/2 -translate-x-1/2 bg-linear-to-r from-(--color-purple) to-(--color-blue-cyan) group-hover:w-full transition-all origin-center duration-400 ease-in-out rounded-2xl "></div>
            <Reveal className="w-full h-4/5 grid grid-cols-1 md:grid-cols-2 space-y-5 md:gap-2 pb-4 items-center">
              {labelInfo.map((i) => (
                <ContactLabel
                  id={i.id}
                  key={i.id}
                  imageUrl={i.imageUrl}
                  alt={i.alt}
                  title={i.title}
                  text={i.text}
                />
              ))}
            </Reveal>
            <div className="w-full h-1/3 md:h-2/4 pt-4 border-t-2 border-[#ddd] flex flex-col gap-2 items-center">
              <h1 className="text-[16pt]">Redes Sociais</h1>
              <Reveal className="flex space-x-2">
                <div className="group/social social-icon ">
                  <Linkedin className="icon-hover" />
                </div>
                <div className="group/social social-icon">
                  <Instagram className="size-5 text-(--color-blue) group-hover/social:text-white" />
                </div>
                <div className="group/social social-icon">
                  <Facebook className="icon-hover" />
                </div>
                <div className="group/social social-icon">
                  <XIcon className="icon-hover" />
                </div>
              </Reveal>
            </div>
          </div>
      </div>
    </section>
  );
}
