import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <main className="w-full h-full pt-[52px]">
        <Outlet />
      </main>
    </div>
  );
}
