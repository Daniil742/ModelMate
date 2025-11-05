export interface IModelInfoItemProps {
    icon: string;
    title: string;
    subtitle: string;
}

export default function ModelInfoItem(props: IModelInfoItemProps) {
    return (
        <div className="flex items-center gap-4 bg-card-light dark:bg-card-dark p-4 min-h-16 rounded-lg shadow-sm">
            <div className="text-text-primary-light dark:text-text-primary-dark flex items-center justify-center rounded-lg bg-background-light dark:bg-background-dark shrink-0 size-12">
                <span className="material-symbols-outlined text-3xl">{props.icon}</span>
            </div>
            <div className="flex-1">
                <p className="text-text-primary-light dark:text-text-primary-dark text-base font-bold leading-normal">{props.title}</p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-normal">{props.subtitle}</p>
            </div>
            <div className="shrink-0">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Info</span>
            </div>
        </div>
    );
};