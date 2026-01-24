'use cliente'
import { RocketIcon } from "lucide-react";

type Label = {
    text: string;
    link: string;
}

export default function ButtonPurple({text, link}: Label){
    return (
        <a href={link} className={`w-full h-13 min-[580px]:w-60 flex items-center justify-center gap-1 bg-violet-600 hover:bg-violet-700 px-3 py-3 rounded-lg text-sm text-white font-medium cursor-pointer ani-move-around `}>
            <RocketIcon className="border-none fill-white"/>
            {text}
        </a>
    );
}