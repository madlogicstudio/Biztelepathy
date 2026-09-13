'use client'

import { RefObject } from "react"

type HiveCardProps = {
    isActive: string;
    image: any;
    title: string;
    text: string;
    cardId: string;
    onClick: () => void;
    cardRef?: RefObject<HTMLDivElement | null>;
}

export const HiveCard = ({isActive, image, title, text, cardId, onClick, cardRef}: HiveCardProps) => {

    return (
        <div ref={cardRef} className="hexagon flex flex-col items-center justify-center sm:gap-3 gap-1 p-4 cursor-pointer text-center sm:h-[240px] md:[180] h-[180px] z-0"
            onClick={onClick}>
            <div className="flex flex-col items-center justify-center bg-[var(--accent)] p-3 rounded-full">{image}</div>
            <span className="font-sans sm:text-lg text-md font-semibold">{title}</span>
            <span className={`${isActive === cardId ? "flex" : "hidden"}
                font-sans sm:text-md text-sm text-[var(--foreground)]`}>{text}</span>
        </div>
    )
}
