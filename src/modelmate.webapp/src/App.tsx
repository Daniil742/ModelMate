import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Contexts/ThemeContext'
import AdminPanelPage from './Pages/AdminPanelPage/AdminPanelPage'
import AIModelsSettingsPage from './Pages/AIModelsSettingsPage/AIModelsSettingsPage'
import ModelAdditionPage from './Pages/ModelAdditionPage/ModelAdditionPage'
import ModelsCatalogPage from './Pages/ModelsCatalogPage/ModelsCatalogPage'
import SubscriptionManagementPage from './Pages/SubscriptionManagementPage/SubscriptionManagementPage'
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage'
import UsersPage from './Pages/UsersPage/UsersPage'
import AppLayout from './Components/Layout/AppLayout'

export default function App() {
    return (
        <React.StrictMode>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<AppLayout />}>
                            <Route path="user/profile" element={<UserProfilePage />} />

                            <Route path="admin/panel" element={<AdminPanelPage />} />
                            <Route path="admin/users" element={<UsersPage />} />

                            <Route path="models/catalog" element={<ModelsCatalogPage />} />
                            <Route path="models/new" element={<ModelAdditionPage />} />
                            <Route path="models/settings" element={<AIModelsSettingsPage />} />

                            <Route path="subscription/settings" element={<SubscriptionManagementPage />} />
                        </Route>

                        {/*<Route path="/" element={<Navigate to="/admin/panel" />} />*/}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
    );
};
