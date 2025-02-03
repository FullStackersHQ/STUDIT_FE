import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <main
      className="w-full min-h-screen pt-[52px] max-w-3xl mx-auto flex flex-col justify-between relative
    after:content-[''] after:h-[calc(100%-52px)] after:bg-white-gray after:w-[1px] after:absolute after:left-0 after:bottom-0 before:content-[''] before:h-[calc(100%-52px)] before:bg-white-gray before:w-[1px] before:absolute before:right-0 before:bottom-0"
    >
      <Outlet />
    </main>
  );
}
