import React, { createContext, useState, useEffect, useContext, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        // Приоритет: localStorage, затем системные настройки
        const initialTheme = storedTheme || preferredTheme;
        setTheme(initialTheme);
    }, []);

    useEffect(() => {

        const root = window.document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {

    const context = useContext(ThemeContext);

    if (!context)
        throw new Error('useTheme must be used within a ThemeProvider');

    return context;
};