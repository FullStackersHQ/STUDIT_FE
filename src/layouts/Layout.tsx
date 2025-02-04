import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
  const location = useLocation();
  const url = location.pathname;

  return (
    <main className="after:bg-white-gray before:bg-white-gray relative mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-between pt-[52px] before:absolute before:right-0 before:bottom-0 before:h-[calc(100%-52px)] before:w-[1px] before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[calc(100%-52px)] after:w-[1px] after:content-['']">
      {(url === '/' || url === '/my-page') && <Header />}
      {url === 'my-page' && <Header />}
      <Outlet key={url} />
    </main>
  );
}
