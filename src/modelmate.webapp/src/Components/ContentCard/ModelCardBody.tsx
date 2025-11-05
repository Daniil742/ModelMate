export interface IModelCardBodyProps {
    iconUrl: string;
    iconAlt: string;
    title: string;
    subtitle: string;
}

export default function ModelCardBody(props: IModelCardBodyProps) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 p-2 dark:bg-gray-700">
                <img alt={props.iconAlt} className="h-full w-full object-contain" src={props.iconUrl} />
            </div>
            <div className="flex-1">
                <p className="font-bold text-text-primary-light dark:text-text-primary-dark">{props.title}</p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{props.subtitle}</p>
            </div>
        </div>
    );
};