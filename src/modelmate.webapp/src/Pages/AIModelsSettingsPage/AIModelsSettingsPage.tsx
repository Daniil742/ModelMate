import Card from "../../Components/ContentCard/Card";
import CardBody from "../../Components/ContentCard/CardBody";
import CardFooter from "../../Components/ContentCard/CardFooter";
import ModelCardBody from "../../Components/ContentCard/ModelCardBody";

export default function AIModelsSettingsPage() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex min-h-screen w-full">
                <main className="flex-1">
                    <div className="p-4 sm:p-6">
                        {/*Default Model Section Header*/}
                        <h2 className="px-1 pb-3 pt-2 text-base font-semibold text-text-secondary-light dark:text-text-secondary-dark">По умолчанию</h2>
                        <Card>
                            <CardBody>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <p className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">GPT-4o (OpenAI)</p>
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Основная модель для ответов</p>
                                    </div>
                                    <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary-light transition-colors hover:bg-gray-100 dark:text-text-secondary-dark dark:hover:bg-gray-700">
                                        <span className="material-symbols-outlined">settings</span>
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                        {/*All Models Section Header*/}
                        <h2 className="px-1 pb-3 text-base font-semibold text-text-secondary-light dark:text-text-secondary-dark">Все добавленные модели</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardBody>
                                    <ModelCardBody
                                        iconUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAOQvnxzan2YvIihkBlcRpH1IYPX2mdp1572DYBAnH0U6tnkSw_3Jvb1Xnonu9rLhx7_ig0rpJ7yPN_-f7WelRsReHAbHpNiRBqsiyk1EIaDJ7XuOLEtHtjJ3Q1T8Kv14AmpvcyDX4WYqiiWR0Euypf8Ryx5y7eW0lZGK8PjMVc2SaBbI0FXhObxxBNYYPPMUk1Bu4hUuDzFe7jy_HL9ydG8e8dInHJz5Fu-6P1ulHx5IbBUPUovDZ7yRz7uVTeYBSRrijzcXnAQEQ"
                                        iconAlt="OpenAI Logo"
                                        title="Мой рабочий GPT-4o"
                                        subtitle="GPT-4o (OpenAI)"
                                    />
                                </CardBody>
                                <CardFooter>
                                    <div className="flex items-center gap-1.5 text-sm font-medium text-success">
                                        <span className="material-symbols-outlined text-base">check_circle</span>
                                        <span>По умолчанию</span>
                                    </div>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg text-danger transition-colors hover:bg-danger/10">
                                        <span className="material-symbols-outlined text-xl">delete</span>
                                    </button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardBody>
                                    <ModelCardBody
                                        iconUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAzcVT2WazndJfw-mz0PMPpEG4Go42psEhs-zxmyqBaw5c8-s_PsULTJ8QJyYkvGOnLLaortXKilk6_GcLpzO1dXGv6BMujH1nVnWQzy0F7TVrgfTSvMX-Uz35GhocBT9B_ZHf2_p3GbDM4LYhdSZaBQkBqvEi6AKRX_0Xl30aNCGFYDuWHZEyg5tW6B5lm97T5yiGM7m5NI5yYZvO85vfDbyntlpzF7B3d0IJO0wK31NqYDv7zY7u-X1bghYq6nNmlmTDhxmJz_rA"
                                        iconAlt="Anthropic Logo"
                                        title="Быстрый Клод"
                                        subtitle="Claude 3 Haiku (Anthropic)"
                                    />
                                </CardBody>
                                <CardFooter>
                                    <button className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">Сделать по умолчанию</button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg text-danger transition-colors hover:bg-danger/10">
                                        <span className="material-symbols-outlined text-xl">delete</span>
                                    </button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardBody>
                                    <ModelCardBody
                                        iconUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAZAZ1K7CB3roE_LTa4djSCMas2pTqbNABwiAppb1_ktCP-EtCm-YuaZadHcdBQR96T1ICnVaGEO_LJmhcT4c2YcqDETmto97tf3HSOlxkqcxFpwCVYh5qUKt_Rtt0Gx0vald_PthrCTnGZpK_dAWuTj30pd0Wy2_oDtyNMS-peFve_j68-QflpnnmqvIujtwJ5OjGZRdVUMu0U9jHVxccAvEWINxH57ZOFfoU8seXkPpNVm5OGiXGlmd7q_R74SfiWGafcQf_Q-CE"
                                        iconAlt="OpenAI Logo"
                                        title="Старый надежный GPT"
                                        subtitle="GPT-3.5-Turbo (OpenAI)"
                                    />
                                </CardBody>
                                <CardFooter>
                                    <button className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">Сделать по умолчанию</button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg text-danger transition-colors hover:bg-danger/10">
                                        <span className="material-symbols-outlined text-xl">delete</span>
                                    </button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardBody>
                                    <div className="rounded-xl border-2 border-dashed border-border-light p-8 text-center dark:border-border-dark">
                                        <div className="flex justify-center">
                                            <span className="material-symbols-outlined text-5xl text-text-secondary-light dark:text-text-secondary-dark">add_circle</span>
                                        </div>
                                        <p className="mt-4 font-bold text-text-primary-light dark:text-text-primary-dark">Нет добавленных моделей</p>
                                        <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">Начните с добавления вашей первой AI модели.</p>
                                        <button className="mt-6 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90">Добавить модель</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};