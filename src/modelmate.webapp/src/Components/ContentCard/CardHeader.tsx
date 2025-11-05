export interface ICardHeaderProps {
    title: string;
};

export default function CardHeader(props: ICardHeaderProps) {
    return (
        <div className="p-4 sm:p-6 border-b border-border-light dark:border-border-dark">
            <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                {props.title}
            </h2>
        </div>
    );
};