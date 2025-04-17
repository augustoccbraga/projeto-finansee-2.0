// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import AuthPage from '../pages/Auth/AuthPage';
import ManagerLayout from '../layouts/ManagerLayout';
import Dashboard from '../pages/Manager/Dashboard';
import Profile from '../pages/Manager/Profile';
import Main from '../pages/Manager/Main';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/manager" element={<ManagerLayout />}>
        <Route index element={<Main />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}