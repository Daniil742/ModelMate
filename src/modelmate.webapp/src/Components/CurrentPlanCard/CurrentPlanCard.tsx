import Card from "../ContentCard/Card";
import CardBody from "../ContentCard/CardBody";

export interface ICurrentPlanCardProps {
    planName: string;
}

export default function CurrentPlanCard(props: ICurrentPlanCardProps) {
    return (
        <Card>
            <CardBody>
                <div className="flex w-full flex-col items-stretch justify-center gap-1">
                    <p className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em]">Текущий план</p>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">
                        Ваш план: {props.planName}
                    </p>
                    {/* Можно добавить 'Активен до:' и т.д. */}
                </div>
            </CardBody>
        </Card>
    );
};