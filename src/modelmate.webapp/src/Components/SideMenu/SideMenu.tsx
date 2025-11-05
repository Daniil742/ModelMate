import { NavLink } from "react-router-dom";

export interface ISideMenuProps {
    isMobileMenuOpen: boolean;
    onCloseMobileMenu: () => void;
};

const navItems = [
    { path: "/user/profile", label: "Профиль", icon: "account_circle" },

    { path: "/admin/panel", label: "Dashboard", icon: "dashboard" },
    { path: "/admin/users", label: "Пользователи", icon: "group" },

    { path: "/models/catalog", label: "Каталог", icon: "model_training" },
    { path: "/models/new", label: "Новая модель", icon: "add_circle" },
    { path: "/models/settings", label: "Настройки", icon: "manage_accounts" },

    { path: "/subscription/settings", label: "Подписка", icon: "paid" },
];

export default function SideMenu(props: ISideMenuProps) {

    const linkClassName = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors font-semibold ${isActive
            ? "bg-primary/10 text-primary"
            : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-primary"
        }`;

    return (
        <>
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${props.isMobileMenuOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
                onClick={props.onCloseMobileMenu}
            ></div>

            <aside
                className={`w-64 absolute inset-y-0 z-50 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark flex-col flex transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${props.isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="h-16 flex items-center gap-2 px-8 border-b border-border-light dark:border-border-dark">
                    <span className="material-symbols-outlined text-primary text-3xl">donut_large</span>
                    <h1 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">AI Bot Admin</h1>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                    {navItems.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={linkClassName}
                            onClick={props.onCloseMobileMenu}
                            end={item.path === "/admin"}
                        >
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span className="font-semibold">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="mt-auto px-4 py-6 space-y-2">
                    <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined">logout</span>
                        <span className="font-semibold">Выход</span>
                    </a>
                </div>
            </aside>
        </>
        //<aside className="w-64 -translate-x-full absolute inset-y-0 z-50 md:relative md:translate-x-0 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark flex-col md:flex hidden">
        //        <div className="h-16 flex items-center gap-2 px-8 border-b border-border-light dark:border-border-dark">
        //            <span className="material-symbols-outlined text-primary text-3xl">donut_large</span>
        //            <h1 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">AI Bot Admin</h1>
        //        </div>
        //        <nav className="flex-1 px-4 py-6 space-y-2">
        //            <NavLink className="flex items-center gap-3 px-4 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
        //                <span className="material-symbols-outlined">dashboard</span>
        //                <span className="font-semibold">Dashboard</span>
        //            </NavLink>
        //            <NavLink className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold" href="#">
        //                <span className="material-symbols-outlined">group</span>
        //                <span className="font-semibold">Пользователи</span>
        //            </NavLink>
        //            <NavLink className="flex items-center gap-3 px-4 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
        //                <span className="material-symbols-outlined">model_training</span>
        //                <span className="font-semibold">AI Models</span>
        //            </NavLink>
        //            <NavLink className="flex items-center gap-3 px-4 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
        //                <span className="material-symbols-outlined">analytics</span>
        //                <span className="font-semibold">Analytics</span>
        //            </NavLink>
        //            <NavLink className="flex items-center gap-3 px-4 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
        //                <span className="material-symbols-outlined">settings</span>
        //                <span className="font-semibold">Settings</span>
        //            </NavLink>
        //        </nav>
        //        <div className="mt-auto px-4 py-6 space-y-2">
        //            <NavLink className="flex items-center gap-3 px-4 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-primary transition-colors" href="#">
        //                <span className="material-symbols-outlined">logout</span>
        //                <span className="font-semibold">Выход</span>
        //            </NavLink>
        //        </div>
        //    </aside>
    );
};