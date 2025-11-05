export interface IPlanBadgeProps {
    plan: 'Pro' | 'Free';
}

export default function PlanBadge(props: IPlanBadgeProps) {

    const isPro = props.plan === 'Pro';

    const baseClasses = "px-2.5 py-1 text-xs font-semibold rounded-full";

    const proClasses = "bg-plan-pro-bg-light text-plan-pro-text-light dark:bg-plan-pro-bg-dark dark:text-plan-pro-text-dark";
    const freeClasses = "bg-plan-free-bg-light text-plan-free-text-light dark:bg-plan-free-bg-dark dark:text-plan-free-text-dark";

    return (
        <span className={`${baseClasses} ${isPro ? proClasses : freeClasses}`}>
            {props.plan}
        </span>
    );
};