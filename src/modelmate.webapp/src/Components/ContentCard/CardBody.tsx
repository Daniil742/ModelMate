import type { ReactNode } from "react";

export interface ICardBodyProps {
    children: ReactNode;
};

export default function CardBody(props: ICardBodyProps) {
    return (
        <div className="p-4 sm:p-6">
            {props.children}
        </div>
    );
};