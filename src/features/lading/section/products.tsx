// Imports das imagens
import Mensage from "@/assets/icons/mensage-icon.png";
import Calendar from "@/assets/icons/calendar-icon.png";
import Security from "@/assets/icons/security-icon.png";
import PhoneCalling from "@/assets/icons/phone-calling-icon.png";
// Import de componete
import Card from "@/ui/card";
import Reveal from "@/ui/reveal";
// Tipo de dados dos meus cards
import { card } from "@/types/types";

export default function Products() {
  // Informações dos meus cards
  const cards: card[] = [
    {
      id: 1,
      imageUrl: Mensage,
      alt: "Icone de foguete",
      title: "NoHere",
      text: "Comunicação segura e inteligente para empresas.",
    },
    {
      id: 2,
      imageUrl: Calendar,
      alt: "Icone de Escudo",
      title: "PRESEU",
      text: "Revoluciona as operações das empresas, transformando dados em decisões inteligentes e instantâneas.",
    },
    {
      id: 3,
      imageUrl: Security,
      alt: "Icone de robo",
      title: "EXPRENTE",
      text: "Firewalls e proteção digital para setores críticos.",
    },
    {
      id: 4,
      imageUrl: PhoneCalling,
      alt: "Imagem de circulo carregando",
      title: "Tualinha",
      text: "Conectividade avançada para instituições.",
    },
  ];

  return (
    <section id="products">
      <div className="container h-full lg:max-h-(--max-height) mx-auto flex items-center justify-center lg:pt-10 flex-col gap-6 py-20">
        <Reveal>
          <div className="w-80 lg:w-138 flex flex-col items-center space-y-3">
            <h1 className="text-(--color-title) text-2xl lg:text-4xl font-semibold">
              Produtso Inovadors
            </h1>
            <p className="text-center  lg:text-[20px]">
              Plataformas que impulsionam negócios com segurança e automação.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-[90%] h-full lg:h-[60%] mx-auto py-10 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-around gap-6">
            {cards.map((card) => (
              <Card
                imageUrl={card.imageUrl}
                alt={card.alt}
                key={card.id}
                title={card.title}
                text={card.text}
                button={"Siba Mais"}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// // Imports das imagens
// import Mensage from "@/assets/icons/mensage-icon.png";
// import Calendar from "@/assets/icons/calendar-icon.png";
// import Security from "@/assets/icons/security-icon.png";
// import PhoneCalling from "@/assets/icons/phone-calling-icon.png";
// // Import de componete
// import Card from "@/ui/card";
// // Tipo de dados dos meus cards
// import { card } from '@/types/types';

// export default function Products() {

//   // Informações dos meus cards
//   const cards: card[] = [
//     {
//       id: 1,
//       imageUrl: Mensage,
//       alt: "Icone de foguete",
//       title: "NoHere",
//       text: "Comunicação segura e inteligente para empresas.",
//     },
//     {
//       id: 2,
//       imageUrl: Calendar,
//       alt: "Icone de Escudo",
//       title: "PRESEU",
//       text: "Revoluciona as operações das empresas, transformando dados em decisões inteligentes e instantâneas.",
//     },
//     {
//       id: 3,
//       imageUrl: Security,
//       alt: "Icone de robo",
//       title: "EXPRENTE",
//       text: "Firewalls e proteção digital para setores críticos.",
//     },
//     {
//       id: 4,
//       imageUrl: PhoneCalling,
//       alt: "Imagem de circulo carregando",
//       title: "Tualinha",
//       text: "Conectividade avançada para instituições.",
//     },
//   ];

//   return (
//     <section className="w-full h-screen max-h-(--max-height)">
//       <div className="mx-auto flex flex-col gap-8 items-center justify-center  w-[85%] max-w-[1366px] h-full">
//         <div className="w-138 flex flex-col items-center space-y-3">
//           <h1 className="text-(--color-title) text-4xl font-semibold">Produtso Inovadors</h1>
//           <p className="text-center text-[20px]">
//             Plataformas que impulsionam negócios com segurança e automação.
//           </p>
//         </div>

//         <div className=" h-[60%] py-10 flex items-center justify-around gap-6 transition-all duration-500 ease-in-out">
//           {cards.map((card) => (
//             <Card
//               imageUrl={card.imageUrl}
//               alt={card.alt}
//               key={card.id}
//               title={card.title}
//               text={card.text}
//               button={"Siba Mais"}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
