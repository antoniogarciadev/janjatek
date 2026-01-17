import Image from "next/image";
import { card } from "@/types/types";

export default function ContactLabel({id, imageUrl, alt, title, text}: card){
    return(
        <div className="flex items-center gap-2 w-85 h-1"  key={id}> 
            <Image src={imageUrl} alt={alt} className="w-12 h-12 group-hover:rotate-360 transition-all duration-400"/>

            <div className="flex flex-col items-start ">
                <h1 className="text-semibold text-[14pt]">{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}