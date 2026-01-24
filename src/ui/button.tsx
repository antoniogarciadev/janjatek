'use cliente'

import { button } from "@/types/types"; 

export default function Button({label, style}: button){
    return (
        <button className={`text-white flex items-center justify-center gap-2 hover:opacity-90 px-6 py-3 w-full min-[580px]:w-30 rounded-lg cursor-pointer ${style}`}>
            {label}
        </button>

    );
}