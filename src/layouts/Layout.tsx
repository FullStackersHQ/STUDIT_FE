import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
  const location = useLocation();
  const url = location.pathname;

  return (
    <main
      className="w-full min-h-screen pt-[52px] max-w-3xl mx-auto flex flex-col justify-between relative
    after:content-[''] after:h-[calc(100%-52px)] after:bg-white-gray after:w-[1px] after:absolute after:left-0 after:bottom-0 before:content-[''] before:h-[calc(100%-52px)] before:bg-white-gray before:w-[1px] before:absolute before:right-0 before:bottom-0"
    >
      {url === '/' && <Header />}
      {url === 'my-page' && <Header />}
      <Outlet key={url} />
    </main>
  );
}
