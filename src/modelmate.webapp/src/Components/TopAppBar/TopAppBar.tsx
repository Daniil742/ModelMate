import { useTheme } from "../../Contexts/ThemeContext";

export interface ITopAppBarProps {
    title: string,
    showBackButton?: boolean;
    onMenuClick?: () => void;
}

export default function TopAppBar(props: ITopAppBarProps) {

    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header className="flex h-16 items-center border-b border-border-light bg-card-light px-4 md:px-8 dark:border-border-dark dark:bg-card-dark sticky top-0 z-40">
                {props.showBackButton ? (
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5">
                        <span className="material-symbols-outlined text-text-primary-light dark:text-text-primary-dark">arrow_back</span>
                    </button>
                ) : (
                    <button
                        aria-label="Open menu"
                        className="flex size-12 shrink-0 items-center justify-center text-text-primary-light dark:text-text-primary-dark md:hidden"
                        onClick={props.onMenuClick}
                    >
                        <span className="material-symbols-outlined text-2xl">menu</span>
                    </button>
                )}

                <h1 className="flex-1 text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary-light dark:text-text-primary-dark">
                    {props.title}
                </h1>

                <button
                    aria-label="Toggle dark mode"
                    className="flex size-12 shrink-0 items-center justify-center text-text-primary-light dark:text-text-primary-dark"
                    onClick={toggleTheme}
                >
                    <span className="material-symbols-outlined text-2xl">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
                </button>
            </header>
        </>
    );
};