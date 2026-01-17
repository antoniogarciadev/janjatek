'use cliente'

type Label = {
    text: string;
    link: string;
    classes: string;
}

import { RocketIcon,  } from "lucide-react";

export default function ButtonPurple({text, link, classes}: Label){
    return (
        <a href={link} className={`flex gap-2 hover:bg-[#4547df] px-6 py-3 rounded-lg font-bold cursor-pointer ${classes}`}>
            <RocketIcon className="border-none fill-(--color-text)"/>
            {text}
        </a>
    );
}