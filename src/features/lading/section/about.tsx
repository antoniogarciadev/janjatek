import Reveal from "@/components/animations/reveal";

export default function About() {
  return (
    <section
      className="relative h-140 md:h-180 lg:h-screen lg:max-h-(--max-height) lg:pt-10"
      id="about">
      <div className="container w-[95%] h-full mx-auto flex flex-col items-center justify-center space-y-3">
        <Reveal>
          <div className="w-full flex flex-col items-center space-y-4">
            <h1 className="text-white text-2xl lg:text-4xl font-semibold">
              Sobre a Janjatek
            </h1>
            <p className=" text-white text-center sm:text-justify text-sm lg:text-[18px] tracking-wider lg:w-2/4 text-pretty">
              A Janjatek é uma empresa de tecnologia especializada em criar
              soluções digitais inteligentes que impulsionam o crescimento dos
              negócios. Desenvolvemos softwares personalizados, fortalecemos a
              segurança digital, implementamos automação avançada e
              transformamos dados em decisões estratégicas.
            </p>
            <p className=" text-white text-center sm:text-justify text-sm lg:text-[18px] tracking-wider lg:w-2/4 text-pretty">
              Acreditamos que a tecnologia deve simplificar operações, aumentar
              a eficiência e gerar resultados reais.
              <br />
              <br />
              <p className="text-center font-bold">
                Não criamos apenas sistemas.
              </p>
              <p className="text-center font-bold">
                Criamos vantagem competitiva.
              </p>
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-full flex flex-col items-center space-y-4">
            <h1 className="text-white  lg:text-3xl font-semibold">
              Nossa missão
            </h1>
            <p className=" text-white text-center text-sm lg:text-[18px] tracking-wider md:w-full text-pretty">
              Ser referência em inovação tecnológica e transformação digital em
              África.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-full flex flex-col items-center space-y-4">
            <h1 className="text-white lg:text-3xl font-semibold">
              Nossos valores
            </h1>
            <div className=" text-white text-sm lg:text-[18px] md:w-full mx-auto flex flex-col sm:flex-row gap-1 lg:gap-3 font-bold">
              <li className="w-content list-none">• Inovação</li>
              <li className="w-content list-none">• Confiança</li>
              <li className="w-content list-none">• Qualidade</li>
              <li className="w-content list-none">• Simplicidade</li>
              <li className="w-content list-none">• Resultados</li>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
