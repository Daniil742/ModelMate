export interface IStatisticsCardProps {
    title: string,
    titleIcon: string,
    totalValue: number,
    changeIcon: string,
    changeValue: string
}

export default function StatisticsCard(props: IStatisticsCardProps) {
    return (
        <div className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-5 shadow-sm dark:border-border-dark dark:bg-card-dark">
            <div className="flex items-center justify-between">
                <p className="text-base font-medium text-text-secondary-light dark:text-text-secondary-dark">{props.title}</p>
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/20">
                    <span className="material-symbols-outlined text-primary">{props.titleIcon}</span>
                </div>
            </div>
            <div className="flex items-end gap-2">
                <p className="text-3xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">{props.totalValue}</p>
                <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-success text-sm font-bold">{props.changeIcon}</span>
                    <p className="text-xs font-semibold text-success">{props.changeValue}</p>
                </div>
            </div>
        </div>
    );
};