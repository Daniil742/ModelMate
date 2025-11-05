import type { ReactNode } from "react";

export interface IModelCategoryCardProps {
    title: string;
    children: ReactNode;
}

export default function ModelCategoryCard(props: IModelCategoryCardProps) {
    return (
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">

            <div className="p-4 sm:p-6 border-b border-border-light dark:border-border-dark">
                <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                    {props.title}
                </h2>
            </div>

            <div className="p-4 sm:p-6 flex flex-col gap-2">
                {props.children}
            </div>
        </div>
    );
};