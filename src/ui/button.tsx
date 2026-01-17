'use cliente'

import { button } from "@/types/types"; 

export default function Button({label, style}: button){
    return (
        <button className={`flex gap-2 hover:opacity-90 px-6 py-3 rounded-lg cursor-pointer bg-(--color-purple) ${style}`}>
            {label}
        </button>

    );
}