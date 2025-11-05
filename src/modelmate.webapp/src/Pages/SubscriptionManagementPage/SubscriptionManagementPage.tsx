import CurrentPlanCard from "../../Components/CurrentPlanCard/CurrentPlanCard";
import PricingTierCard from "../../Components/PricingTierCard/PricingTierCard";

const freeFeatures = [
    { icon: 'dns', text: 'Доступ к серверной LLM' },
    { icon: '10k', text: '10 запросов/день' },
    { icon: 'key', text: '1 свой API-ключ' },
];

const proFeatures = [
    { icon: 'all_inclusive', text: 'Безлимит к серверной LLM', iconColorClass: 'text-primary' },
    { icon: 'key', text: 'до 20 своих API-ключей', iconColorClass: 'text-primary' },
    { icon: 'auto_awesome', text: 'Доступ к GPT-4', iconColorClass: 'text-primary' },
    { icon: 'support_agent', text: 'Приоритетная поддержка', iconColorClass: 'text-primary' },
];

export default function SubscriptionManagementPage() {

    const currentPlan = 'Free';
    const isCurrentPlanFree = currentPlan === 'Free';
    const isCurrentPlanPro = currentPlan === 'Pro';

    // Кнопка для "Free"
    const freeCtaSlot = isCurrentPlanFree ? (
        <button className="flex w-full cursor-not-allowed items-center justify-center rounded-lg h-12 px-5 text-base font-bold bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark" disabled>
            Ваш текущий план
        </button>
    ) : (
        <button className="flex w-full items-center justify-center rounded-lg h-12 px-5 text-base font-bold bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            Перейти на Free
        </button>
    );

    // Кнопка для "Pro"
    const proCtaSlot = isCurrentPlanPro ? (
        <button className="flex w-full cursor-not-allowed items-center justify-center rounded-lg h-12 px-5 text-base font-bold bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark" disabled>
            Ваш текущий план
        </button>
    ) : (
        <button className="flex w-full items-center justify-center rounded-lg h-12 px-5 text-base font-bold bg-primary text-white hover:bg-opacity-90 active:bg-opacity-80 transition-colors">
            Перейти на Pro за $5/мес
        </button>
    );

    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex min-h-screen w-full justify-center">
                <div className="w-full max-w-5xl">
                    <main className="flex-grow p-4">
                        <div className="mb-6"> {/* Отступ снизу */}
                            <CurrentPlanCard planName={currentPlan} />
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <PricingTierCard
                                planName="План 'Free'"
                                price="$0"
                                pricePer="бесплатно"
                                features={freeFeatures}
                                isRecommended={false}
                                ctaSlot={freeCtaSlot}
                            />
                            <PricingTierCard
                                planName="План 'Pro'"
                                price="$5"
                                pricePer="в месяц"
                                features={proFeatures}
                                isRecommended={true}
                                ctaSlot={proCtaSlot}
                            />
                        </div>
                    </main>

                    {!isCurrentPlanPro && (
                        <div className="sticky bottom-0 bg-background-light dark:bg-background-dark pt-2 pb-4 md:hidden">
                            <div className="flex px-4 py-3">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-white text-base font-bold ...">
                                    <span className="truncate">Перейти на Pro за $5/мес</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};