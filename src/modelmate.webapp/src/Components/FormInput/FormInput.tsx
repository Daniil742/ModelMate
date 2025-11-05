export interface IFormInputProps {
    label: string;
    placeholder ?: string;
    value: string;
    onChange: (value: string) => void;
    type ?: 'text' | 'password' | 'number';
    secondaryText ?: string;
    icon ?: string;
    onIconClick ?: () => void;
};

export default function FormInput(props: IFormInputProps) {
    return (
        <div className="space-y-2">
            <label className="flex flex-col">
                <p className="pb-2 text-base font-medium text-text-primary-light dark:text-text-primary-dark">
                    {props.label}
                </p>

                <div className="relative flex w-full flex-1 items-stretch">
                    <input
                        className="form-input h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-card-light p-4 text-base font-normal leading-normal text-text-primary-light placeholder:text-text-secondary-light focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-card-dark dark:text-text-primary-dark dark:placeholder:text-text-secondary-dark dark:focus:border-primary"
                        style={{ paddingRight: props.icon ? '3.5rem' : '1rem' }} // Отступ, если есть иконка
                        placeholder={props.placeholder}
                        type={props.type}
                        value={props.value}
                        onChange={(e) => props.onChange(e.target.value)}
                    />

                    {props.icon && (
                        <button
                            type="button" // Важно, чтобы не отправлять форму
                            className="absolute inset-y-0 right-0 flex items-center justify-center px-4 text-text-secondary-light dark:text-text-secondary-dark"
                            onClick={props.onIconClick}
                        >
                            <span className="material-symbols-outlined">{props.icon}</span>
                        </button>
                    )}
                </div>
            </label>

            {props.secondaryText && (
                <p className="px-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {props.secondaryText}
                </p>
            )}
        </div>
    );
};