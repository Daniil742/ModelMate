import Card from "../../Components/ContentCard/Card";
import CardBody from "../../Components/ContentCard/CardBody";
import CardHeader from "../../Components/ContentCard/CardHeader";
import InfoRow from "../../Components/ContentCard/InfoRow";

export default function UserProfilePage() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex min-h-screen w-full">
                <main className="w-full flex-1">
                    {/*<TopAppBar*/}
                    {/*    title="Профиль: @alexey_smirnov"*/}
                    {/*    showBackButton={true}*/}
                    {/*/>*/}

                    <div className="p-4 sm:p-6 space-y-6">
                        <Card>
                            <CardHeader title="Основная информация" />
                            <CardBody>
                                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-6 gap-y-5">
                                    <InfoRow label="Telegram ID">123456789</InfoRow>
                                    <InfoRow label="Username">@alexey_smirnov</InfoRow>
                                    <InfoRow label="Имя">Alexey Smirnov</InfoRow>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader title="Подписка" />
                            <CardBody>
                                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-6 gap-y-5 mb-6">
                                    <InfoRow label="Текущий план">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold">Pro</span>
                                            <div className="w-2 h-2 rounded-full bg-success"></div>
                                            <span className="text-sm text-success font-medium">Active</span>
                                        </div>
                                    </InfoRow>
                                    <InfoRow label="Активен до">21.12.2025</InfoRow>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Продлить подписку (вручную)</button>
                                    <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-danger/10 text-danger hover:bg-danger/20 transition-colors">Сбросить до Free</button>
                                    <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed" disabled={true}>Выдать Pro</button>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader title="Добавленные ключи (Метаданные)" />
                            <CardBody>
                                <div className="flex items-start gap-3 bg-primary/5 dark:bg-primary/10 text-primary dark:text-blue-300 p-4 rounded-lg mb-6">
                                    <span className="material-symbols-outlined mt-0.5 text-xl">security</span>
                                    <p className="text-sm font-medium">В целях безопасности ключи API никогда не отображаются в интерфейсе после их добавления.</p>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 dark:bg-white/10">
                                                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">key</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-text-primary-light dark:text-text-primary-dark">Мой рабочий</p>
                                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">OpenAI, GPT-4</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Добавлен: 20.10.2025</p>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 dark:bg-white/10">
                                                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">key</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-text-primary-light dark:text-text-primary-dark">Personal Project Key</p>
                                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Anthropic, Claude 3</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Добавлен: 15.09.2025</p>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader title="Лог действий" />
                            <CardBody>
                                <ul className="space-y-5">
                                    <li className="flex gap-4">
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark whitespace-nowrap">21.10.2025 14:30</p>
                                        <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">Сгенерирован ответ с использованием модели GPT-4.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark whitespace-nowrap">21.10.2025 14:28</p>
                                        <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">Добавлен ключ API "Мой рабочий".</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark whitespace-nowrap">20.10.2025 10:15</p>
                                        <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">Администратор выдал подписку "Pro".</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark whitespace-nowrap">20.10.2025 10:14</p>
                                        <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">Пользователь зарегистрирован.</p>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
};