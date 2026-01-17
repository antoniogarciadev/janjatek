// Import de componete
import Button from "@/ui/button";

export default function Vision() {
  return (
    <section className="w-full h-screen max-h-(--max-height) bg-(--color-purple)" id="vision">
      <div className="w-[85%] h-full mx-auto flex items-center justify-center">
        <div className="w-145 flex flex-col items-center space-y-8">
          <h1 className="text-white text-4xl font-semibold">
            Visão do Futuro
          </h1>
          <p className=" text-white text-center text-[18px] tracking-wider">
            Na Janjatek, imaginamos um futuro onde a tecnologia transcende
            limites, integrando inteligência artificial, automação avançada e
            segurança digital em uma experiência imersiva e interativa. Explore
            nossa visão em 360° e descubra como estamos moldando o amanhã
          </p>

          <div className="flex gap-3 items-center justify-center">
            <Button label="Fale conosco" style="bg-white" />

            <Button
              label="Portfolio"
              style="bg-transparent border-2 border-white py-[10px] text-white hover:bg-white hover:text-(--color-text) hover:opacity-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
