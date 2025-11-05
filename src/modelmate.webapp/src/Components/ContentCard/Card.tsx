import type { ReactNode } from "react";

export interface ICardProps {
    children: ReactNode;
};

export default function Card(props: ICardProps) {
    return (
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
            {props.children}
        </div>
    );
};