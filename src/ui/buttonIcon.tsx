'use cliente'
import { LucideIcon } from "lucide-react";

type Label = {
    icon: LucideIcon;
    text: string;
    link: string;
    className?: string;
}

export default function ButtonIcon({text, link, className, icon}: Label){
    const Icon = icon;
    return (
        <a href={link} className={`relative w-full h-13 min-[580px]:w-full bg-(--primary) hover:bg-(--primary-hover) rounded-lg text-sm text-white font-semibold cursor-pointer ${className}`}>
            <div className="w-full h-full px-3 py-3  flex items-center justify-center gap-2 relative z-10">
                <Icon className="border-none fill-white w-5"/>
                {text}
            </div>
        </a>
    );
}