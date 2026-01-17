type cards = {
    id: number;
    count: string;
    text: string;
}

export default function Numbers({id, count, text}: cards){
    return(
        <div className="flex flex-col gap-2 items-center justify-center" key={id}>
            <h1 className="text-(--color-purple) text-4xl font-bold">{count}+</h1>
            <p>{text}</p>
        </div>
    );
}