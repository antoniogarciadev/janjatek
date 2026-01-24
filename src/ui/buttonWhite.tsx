'use cliente'

type Label = {
    text: string;
    link: string;
    classes?: string;
}

import { PlayIcon} from "lucide-react";

export default function ButtonWhite({text, link}: Label){
    return (
        <a href={link} className={`group gap-2 bg-transparent px-4 py-3 rounded-lg text-white hover:text-(--color-purple) cursor-pointer hover:scale-102 border-2 hover:border-(--color-purple) h-13 flex items-center justify-center w-full min-[580px]:w-50`}>
            <PlayIcon className="border-none fill-white group-hover:fill-(--color-purple)"/>
            {text}
        </a>
    );
}