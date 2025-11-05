import { Link } from "react-router-dom";

export interface IModelSelectItemProps {
    href: string;
    iconUrl: string;
    iconAlt: string;
    title: string;
    subtitle: string;
    isImageBgWhite ?: boolean;
};

export default function ModelSelectItem(props: IModelSelectItemProps) {
    return (
        <Link
            to={props.href}
            className="flex items-center gap-4 bg-card-light dark:bg-card-dark p-4 min-h-16 rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] hover:bg-gray-50 dark:hover:bg-background-dark"
        >
            {/* Логотип */}
            <img
                className={`shrink-0 size-12 object-contain rounded-lg ${
                    // Добавляем белый фон, если логотип "прозрачный"
                    props.isImageBgWhite ? 'p-1.5 bg-white' : ''
                    }`}
                alt={props.iconAlt}
                src={props.iconUrl}
            />
            {/* Текст */}
            <div className="flex-1">
                <p className="text-text-primary-light dark:text-text-primary-dark text-base font-bold leading-normal">{props.title}</p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-normal">{props.subtitle}</p>
            </div>
            {/* Иконка "вправо" */}
            <div className="shrink-0 text-text-secondary-light dark:text-text-secondary-dark">
                <span className="material-symbols-outlined">chevron_right</span>
            </div>
        </Link>
    );
};