import StatisticsCard from "../../Components/StatisticsCard/StatisticsCard";

export default function AdminPanelPage() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex min-h-screen w-full">
                <main className="flex-1 flex-col">
                    <div className="p-4 sm:p-6">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                            {/*Stat Card 1: Total Users*/}
                            <StatisticsCard
                                title="Всего пользователей"
                                titleIcon="group"
                                totalValue={1450}
                                changeIcon="arrow_upward"
                                changeValue="+5.2%"
                            />

                            {/*Stat Card 2: Active Subscriptions*/}
                            <StatisticsCard
                                title="Активных подписок (Pro)"
                                titleIcon="workspace_premium"
                                totalValue={120}
                                changeIcon="arrow_upward"
                                changeValue="+1.7%"
                            />

                            {/*Stat Card 3: New Users (24h)*/}
                            <StatisticsCard
                                title="Новых за 24ч"
                                titleIcon="person_add"
                                totalValue={30}
                                changeIcon="arrow_downward"
                                changeValue="-3.1%"
                            />

                            {/*Stat Card 4: LLM Requests (24h)*/}
                            <StatisticsCard
                                title="Запросов к LLM (24ч)"
                                titleIcon="psychology"
                                totalValue={50000}
                                changeIcon="arrow_upward"
                                changeValue="+8.0%"
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};