import { useState } from "react";
import FormInput from "../../Components/FormInput/FormInput";

export default function ModelAdditionPage() {

    const [name, setName] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [maxTokens, setMaxTokens] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [temperature, setTemperature] = useState(0.7);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, apiKey, maxTokens, temperature });
        // TODO: Отправить данные на сервер
    };

    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex min-h-screen w-full">
                <main className="flex-1">
                    <div className="p-4 sm:p-6">
                        <form className="mx-auto max-w-lg space-y-6" onSubmit={handleSubmit}>

                            {/* --- Name Field (Используем FormInput) --- */}
                            <FormInput
                                label="Название (для себя)"
                                placeholder="Например, 'Мой личный ключ'"
                                value={name}
                                onChange={setName}
                                secondaryText="Это название будет отображаться только вам для удобства управления."
                            />

                            {/* --- API Key Field (Используем FormInput) --- */}
                            <FormInput
                                label="API Ключ"
                                placeholder="sk-*****************"
                                value={apiKey}
                                onChange={setApiKey}
                                type={showPassword ? 'text' : 'password'}
                                icon={showPassword ? 'visibility' : 'visibility_off'}
                                onIconClick={() => setShowPassword(!showPassword)}
                            />

                            {/* --- Security Info Box (РЕШЕНИЕ ПРОБЛЕМЫ 2) --- */}
                            {/* Меняем фон на акцентный (из твоего `warning-icon`)
                              Используем bg-yellow-100 и text-yellow-900 (безопасные классы Tailwind)
                            */}
                            <div className="flex items-start gap-4 rounded-lg bg-yellow-100 p-4 dark:bg-yellow-900/50">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                                    <span className="material-symbols-outlined">encrypted</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-base font-medium text-yellow-900 dark:text-yellow-100">Безопасность</p>
                                    <p className="text-sm text-yellow-800 dark:text-yellow-200">Ваш ключ шифруется и хранится локально. Он используется только для прямых запросов к API модели.</p>
                                </div>
                            </div>

                            {/* --- Default Model Toggle (меняем bg-component-light на bg-card-light) --- */}
                            <div className="flex items-center justify-between rounded-lg bg-card-light p-4 dark:bg-card-dark">
                                {/* ... (код toggle без изменений) ... */}
                                <p className="text-base font-medium text-text-primary-light dark:text-text-primary-dark">Сделать моделью по умолчанию</p>
                                <label className="relative flex h-[28px] w-[50px] cursor-pointer items-center rounded-full bg-gray-200 p-0.5 transition-colors has-[:checked]:bg-primary dark:bg-gray-700">
                                    <div className="h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out has-[:checked]:translate-x-[22px]"></div>
                                    <input className="peer invisible absolute" type="checkbox" />
                                </label>
                            </div>

                            {/* --- Accordion (меняем bg-component-light на bg-card-light) --- */}
                            <details className="group overflow-hidden rounded-lg bg-card-light dark:bg-card-dark">
                                {/* ... (summary) ... */}
                                <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-text-primary-light dark:text-text-primary-dark">
                                    Доп. параметры
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </span>
                                </summary>
                                <div className="space-y-6 border-t border-border-light p-4 dark:border-border-dark">

                                    {/* Temperature Slider */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <label className="text-base font-medium text-text-primary-light dark:text-text-primary-dark" htmlFor="temperature">Temperature</label>
                                            <span className="text-text-secondary-light dark:text-text-secondary-dark">{temperature}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">0</span>
                                            <input
                                                className="h-2 w-full cursor-pointer ... " // (классы слайдера)
                                                id="temperature"
                                                type="range"
                                                min="0" max="1" step="0.1"
                                                value={temperature}
                                                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                                            />
                                            <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">1</span>
                                        </div>
                                    </div>

                                    {/* Max Tokens Input (Используем FormInput) */}
                                    <FormInput
                                        label="Max Tokens"
                                        placeholder="4096"
                                        type="number"
                                        value={maxTokens}
                                        onChange={setMaxTokens}
                                    />
                                </div>
                            </details>

                            {/* --- РЕШЕНИЕ ПРОБЛЕМЫ 1: Перемещенная кнопка --- */}
                            {/* Мы удалили <footer> и поместили кнопку
                              в конец <form> (внутри 'space-y-6')
                            */}
                            <button
                                type="submit"
                                className="h-14 w-full rounded-lg bg-primary text-base font-bold text-white transition-colors hover:bg-primary/90 active:bg-primary/80"
                            >
                                Сохранить и активировать
                            </button>

                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};