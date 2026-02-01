import TypingLoop from "@/components/animations/typingLoop";

const words = [
    "DA IMAGINAÇÃO AO PRODUTO",
    "COM SOLUÇÕES EMERGENTES",
    "TECNOLOGIA, INOVAÇÃO & AUTOMAÇÃO"
]

export default function TypingTitle(){
    return(
        <h1 className="text-white text-[14pt] sm:text-2xl text-center md:text-left font-bold tracking-widest">
            <TypingLoop words={words}/>
        </h1>
    );
}