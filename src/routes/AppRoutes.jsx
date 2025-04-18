// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import AuthLayout from "../layouts/AuthLayout";
import ManagerLayout from "../layouts/ManagerLayout";
import ProtectedRoute from "../components/ProtectedRoute";

// Páginas
import Landing from "../pages/Landing";
import AuthPage from "../pages/Auth/AuthPage";
import Dashboard from "../pages/Manager/Dashboard";
import Profile from "../pages/Manager/Profile";
import Main from "../pages/Manager/Main";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<AuthPage />} />
      </Route>

      {/* Rotas protegidas */}
      <Route
        path="/manager"
        element={
          <ProtectedRoute>
            <ManagerLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Main />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
