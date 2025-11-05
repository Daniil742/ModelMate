import ModelCategoryCard from "../../Components/ModelCategoryCard/ModelCategoryCard";
import ModelInfoItem from "../../Components/ModelInfoItem/ModelInfoItem";
import ModelSelectItem from "../../Components/ModelSelectItem/ModelSelectItem";
import SearchBar from "../../Components/SearchBar/SearchBar";

export default function ModelsCatalogPage() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex min-h-screen w-full">
                <main className="w-full flex-1">
                    <div className="p-4 sm:p-6 space-y-6">
                        <SearchBar
                            placeholder="Найти модель..."
                        />

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <ModelCategoryCard
                                title="Серверные модели (Бесплатные)">
                                <ModelInfoItem
                                    icon="hub"
                                    title="Default Model"
                                    subtitle="Llama 3"
                                />
                            </ModelCategoryCard>

                            <ModelCategoryCard title="OpenAI">
                                <ModelSelectItem
                                    href="/admin/models/add/gpt-4o"
                                    iconUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDj56VjBeAa8iyxrvEgaQ_ZzXKaPJ4wQWP1Bpj3iWOoZvPn93ALU6cVgmKklltQueY-A0oW61Hf24Vn3uNZxSAeTmNvEjpP54hkQWnQ-rzOgRTQdl9365tVObouX-Y7spyB5fuUybA4iZiqTd9qZrWxogylfI9uRck-dVXFIS1a0eqSS7nOipTYLa4af70TEFMAnm4xtxi1Bh61qFBLehw-YnENe9LTQJFrlP0xdldZomSGHn3gQwTJXYbYFzBjeMk4wVx-MuiP6GA" // (замени на свои)
                                    iconAlt="OpenAI Logo"
                                    title="GPT-4o"
                                    subtitle="Настройка ключа"
                                    isImageBgWhite={true}
                                />
                                <ModelSelectItem
                                    href="/admin/models/add/gpt-4-turbo"
                                    iconUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCBcJBTTJel5JEJICR9Xqfn2d9ST8-ZTXNiMhAq0FR6n3SGjfCw6tJIe3OAzli_b-h2CsF8z_Xr-FX83sYQh1A5qwujdcorqLOt-7WtYliCngE1w_LcuFhj1YfRt_1XLpdCxqFKn5ub9lgxpyIkBX0_XJX9-F_9gvSw9wrAixxO3sCwe3-VQh9AlH65J8vFy_b7Ppz4rmAIgvYYB5AUKk166gyG1OesK7FBzRBjyN4XUIpka2pK89Q29Lx6gHUP_TgupF11eiKieJo"
                                    iconAlt="OpenAI Logo"
                                    title="GPT-4 Turbo"
                                    subtitle="Настройка ключа"
                                    isImageBgWhite={true}
                                />
                            </ModelCategoryCard>

                            <ModelCategoryCard title="Anthropic">
                                <ModelSelectItem
                                    href="/admin/models/add/claude-3-opus"
                                    iconUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAtjSDiDA-mjP5QUJx_tQG2Oft8TCGLEtkdMSL5Y3M7LN-AVOcEQx6hciY0ltgH4ld5ZA6cp0VWLzFjHZNmbIPuVoh7f7wvUdcLF_DS9U9CeSRvL3q4P1qveLHkKofKBXEUyPTzq8-o91l8BrUMOy27SKApk-PmIQQQ4Ya606G2guveGWfo4t76VBjwMnbbUFd1TCRoxgDktVNn9Oy85QrRttx8OHpRhX6TWIlUKBYSwp9e2bzCzbR5TWBCgOsB7TfJvJi21UQ-ZoM"
                                    iconAlt="Anthropic Logo"
                                    title="Claude 3 Opus"
                                    subtitle="Настройка ключа"
                                />
                                <ModelSelectItem
                                    href="/admin/models/add/claude-3-sonnet"
                                    iconUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA3iVmKxGULUnAiKqc6YLcdbWEkm4Mu8udCj_lOgS-051TNIZ8vXoqvQwYxZjfmWi9o_BorAl97I3BAdnRnornBSoN6y8hkEW9CZuJG0LIhidUhDalA4XesaRJXKeMX5Tq5yzpluL_dS1nQTrQ1CjDxxkt5iSqqM5ysT6FXvQxYo28_y4_Cv32eH5KIRGwdU6F5Hf-nKI0jufy3OygyD_QYKo6GRTwK2xYoehSHfpMw5F0XS81Du4mmMmxCf6LlEcnT8lC-WAfTHzo"
                                    iconAlt="Anthropic Logo"
                                    title="Claude 3 Sonnet"
                                    subtitle="Настройка ключа"
                                />
                            </ModelCategoryCard>

                            <ModelCategoryCard title="Google (Gemini)">
                                <ModelSelectItem
                                    href="/admin/models/add/gemini-1.5-pro"
                                    iconUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBoxD4_ExfkEJSWWu2ntTUZHhu2-F0JCyOa8C_CBfv3DxjyDOFkmtfaXwtYR4V83ngNjkEmv_Vb1GISt0DBcIUZmdC_dSkYVEAsrGCxtMGY4MuP0RjO03RM9kruvZLwTqVGjdr-RTVXIPaMbacd6VJAka2EekocXZ3P-viv_4nDqluxcGe2UXmxv37cGTR8jPJ3xKQEXIwO5oJsIxwLQodpWeN1nreWj-XvSmhTV9sf23fgUAZRyV55BDGSUh-GtH17EFSS_nBpP_o"
                                    iconAlt="Google Gemini Logo"
                                    title="Gemini 1.5 Pro"
                                    subtitle="Настройка ключа"
                                    isImageBgWhite={true}
                                />
                            </ModelCategoryCard>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};