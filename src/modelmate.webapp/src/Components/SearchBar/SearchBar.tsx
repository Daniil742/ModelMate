export interface ISearchBarProps {
    placeholder: string,
}

export default function SearchBar(props: ISearchBarProps) {
    return (
        <div className="relative w-full max-w-lg">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">search</span>
            <input className="w-full h-12 pl-10 pr-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-text-secondary-light placeholder:dark:text-text-secondary-dark" placeholder={props.placeholder} type="text" />
        </div>
    );
};