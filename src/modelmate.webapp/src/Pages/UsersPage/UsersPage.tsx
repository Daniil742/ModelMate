import SearchBar from "../../Components/SearchBar/SearchBar";
import UserTableRow from "../../Components/Table/UserTable/UserTableRow";
import UserMobileCard from "../../Components/UserMobileCard/UserMobileCard";
import type { IUser } from "../../Models/IUser";

const mockUsers: IUser[] = [
    { id: '4815162342', name: 'John Doe', username: '@johndoe', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNveZsqpxveU2_Slxz72RW2vI9-bV4ioe--zogQtleS8J71wQwNuPhVEsTT5-quH0huSQqIlCwV1mt2l9qnMe9ORDTzViEmt0ZrL0jt2fy3eOhokikzs8wK9wE617dD8Fx8bP9-jgHO3jmdGIdee9H337xuDBagY0mBC8ggXGVrgDJSZ5rTsCffgzWM2mY3T_dA3SdabiUXaWAVfAfrxG-8pxPLZMOX8PWEQXKsWVDCZVey9xj7qkhyCq-XJeEVb8qW8w47-2BuJQ', plan: 'Pro', joinedDate: '2023-10-26' },
    { id: '9876543210', name: 'Jane Doe', username: '@janedoe', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqKTxtWxWaMx6LanbO2AtzHgumxp--dkM35gZpryt9fQP6ieEhCX3t5jz0LBZCS4alc59aX4JYzDAgP7uoZatVcmdkcqd9OAjXyPR92ZH7XJzc2oPOYVbEY_dTfg2zBVlTUywhdQpssedqnYpUAzI1D8NvoaVjeIb2oUSGt7rHtyx9B7J7gyY9KJjvWwmhlVenW6XH-TOvS3vQJwmRKzE8lgJ2Nm5R49om0qIml0pnR1Ze1ITpfBvpeiJRe-kSdWDVC5dvSP8qck0', plan: 'Free', joinedDate: '2023-09-15' },
    { id: '1123581321', name: 'Alex Ray', username: '@alexray', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwVxaoB6XAq6UievA3vljN8bdE78Yn60IquPRG1xTdHfF5bfNHG-ytfHou1hwGodBL9yHuRcdZcDwddbdGbja-Bca7mlvUmh64hoMDDv25N8tCeahd1xdjSex6hhaBq3zXFr4fUXdLanLuzssqvDalwVkBsvJVawRI7PFQB7sZhMAqVMV50LjIJOPRUCDOz_kWEbX8uVhd4KWSLzvLEgGBRZeYTWkCEJdbjMzu9I2JZc5Q2pK9a_8TsUhfox3D8_VLbnYv7g4IY2Q', plan: 'Pro', joinedDate: '2023-08-01' },
];

export default function UsersPage() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex min-h-screen w-full">
                <main className="w-full flex-1">
                    <div className="p-4 sm:p-6 space-y-6">
                        <SearchBar
                            placeholder="Найти по ID или Username..."
                        />

                        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm overflow-hidden border border-border-light dark:border-border-dark">
                            <div className="hidden md:block">
                                <table className="w-full text-left">
                                    <thead className="bg-background-light dark:bg-background-dark">
                                        <tr>
                                            <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark tracking-wider cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                                                <div className="flex items-center gap-1">User ID (внутренний) <span className="material-symbols-outlined text-base">unfold_more</span></div>
                                            </th>
                                            <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark tracking-wider cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                                                <div className="flex items-center gap-1">Telegram <span className="material-symbols-outlined text-base">unfold_more</span></div>
                                            </th>
                                            <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark tracking-wider cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                                                <div className="flex items-center gap-1">План <span className="material-symbols-outlined text-base">unfold_more</span></div>
                                            </th>
                                            <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark tracking-wider cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                                                <div className="flex items-center gap-1">Дата регистрации <span className="material-symbols-outlined text-base">unfold_more</span></div>
                                            </th>
                                            <th className="p-4 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark tracking-wider text-right">Действия</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                        {mockUsers.map(user => (
                                            <UserTableRow key={user.id} user={user} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="md:hidden divide-y divide-border-light dark:divide-border-dark">
                                {mockUsers.map(user => (
                                    <UserMobileCard key={user.id} user={user} />
                                ))}
                            </div>

                            <div className="flex items-center justify-between p-4 border-t border-border-light dark:border-border-dark">
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Showing 1 to 3 of 150 results</p>
                                <div className="flex items-center gap-2">
                                    <button className="px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed" disabled="">Previous</button>
                                    <button className="px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};