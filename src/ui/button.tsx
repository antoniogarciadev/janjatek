'use cliente'

import { button } from "@/types/types"; 

export default function Button({label, style}: button){
    return (
        <button className={`text-white flex items-center justify-center gap-2 px-6 py-3 w-full rounded-lg cursor-pointer ${style}`}>
            <div className="relative z-10">{label}</div>
        </button>
    );
}