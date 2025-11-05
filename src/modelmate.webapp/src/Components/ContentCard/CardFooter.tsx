import type { ReactNode } from "react";

export interface ICardFooterProps {
    children: ReactNode;
}

export default function CardFooter(props: ICardFooterProps) {
    return (
        <div className="flex items-center justify-between gap-3 border-t border-border-light dark:border-border-dark p-4 sm:p-6">
            {props.children}
        </div>
    );
};