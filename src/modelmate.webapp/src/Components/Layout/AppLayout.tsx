import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import TopAppBar from "../TopAppBar/TopAppBar";

const getTitleFromPath = (path: string) => {
    if (path.includes('/user/profile'))
        return 'Профиль';

    if (path.includes('/admin/panel'))
        return 'Dashboard';

    if (path.includes('/admin/users'))
        return 'Пользователи';

    if (path.includes('/models/catalog'))
        return 'Каталог';

    if (path.includes('/models/new'))
        return 'Новая модель';

    if (path.includes('/models/settings'))
        return 'Настройки';

    if (path.includes('/subscription/settings'))
        return 'Подписка';

    return 'Неизвестная страница';
};

export default function AppLayout() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();
    const title = getTitleFromPath(location.pathname);

    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex min-h-screen w-full">

                <SideMenu
                    isMobileMenuOpen={isMobileMenuOpen}
                    onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
                />

                <main className="flex-1 flex-col">
                    <TopAppBar
                        title={title} // Заголовок теперь динамический!
                        onMenuClick={() => setIsMobileMenuOpen(true)}
                    // showBackButton={...} (можно тоже сделать динамическим)
                    />

                    <Outlet />

                </main>
            </div>
        </div>
    );
};