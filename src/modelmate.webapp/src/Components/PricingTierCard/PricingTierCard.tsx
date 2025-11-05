import type { ReactNode } from "react";

export interface IFeature {
    icon: string;
    text: string;
    iconColorClass?: string;
};

export interface IPricingTierCardProps {
    planName: string;
    price: string;
    pricePer: string;
    features: IFeature[];
    isRecommended?: boolean;
    ctaSlot: ReactNode;
};

export default function PricingTierCard(props: IPricingTierCardProps) {

    const borderColor = props.isRecommended
        ? 'border-2 border-primary'
        : 'border border-border-light dark:border-border-dark';

    return (
        <div className={`flex flex-1 flex-col gap-4 rounded-lg bg-card-light dark:bg-card-dark p-6 relative overflow-hidden ${borderColor}`}>

            {/* Плашка "Рекомендуемый" */}
            {props.isRecommended && (
                <div className="absolute top-0 right-0 text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-bl-lg bg-primary px-3 py-1.5 text-center">
                    Рекомендуемый
                </div>
            )}

            {/* Цена */}
            <div className="flex flex-col gap-1">
                <h1 className="text-text-primary-light dark:text-text-primary-dark text-base font-bold leading-tight">{props.planName}</h1>
                <p className="flex items-baseline gap-1 text-text-primary-light dark:text-text-primary-dark">
                    <span className="text-4xl font-black leading-tight tracking-[-0.033em]">{props.price}</span>
                    <span className="text-base font-bold leading-tight">{props.pricePer}</span>
                </p>
            </div>

            {/* Список фич */}
            <div className="flex flex-col gap-3">
                {props.features.map((feature, index) => (
                    <div key={index} className="text-sm font-normal leading-normal flex gap-3 items-center text-text-primary-light dark:text-text-primary-dark">
                        <span className={`material-symbols-outlined ${feature.iconColorClass || 'text-text-secondary-light dark:text-text-secondary-dark'} text-xl`}>
                            {feature.icon}
                        </span>
                        {feature.text}
                    </div>
                ))}
            </div>

            {/* Слот для кнопки (CTA) */}
            <div className="mt-2"> {/* Небольшой отступ сверху */}
                {props.ctaSlot}
            </div>
        </div>
    );
};