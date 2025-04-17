import { Outlet } from 'react-router-dom';

export default function ManagerLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white hidden md:block">
        {/* ...menu lateral */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
