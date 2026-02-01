"use client";
import { useEffect, useState } from "react";

type textArray = {
    words: string[];
}

export default function TypingLoop({words}: textArray) {

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];

    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseAfterWord = 3000;

    // ✅ agora usa deletingSpeed também
    let delay = isDeleting ? deletingSpeed : typingSpeed;

    // pausa após terminar de digitar
    if (!isDeleting && text === current) {
      delay = pauseAfterWord;
    }

    // terminou de apagar → próxima palavra
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && text === current) {
        setIsDeleting(true);
        return;
      }

      setText(
        isDeleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1),
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="">
      {text}<span className="animate-pulse bg-white w-[0.4px] p-0 h-full text-transparent">|</span>
    </span>
  );
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      