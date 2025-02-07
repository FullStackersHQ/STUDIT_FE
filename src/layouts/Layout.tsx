import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Fnb from '../components/Fnb';

export default function Layout() {
  const location = useLocation();
  const url = location.pathname;

  return (
    <>
      {(url === '/' || url === '/my-page') && <Header />}
      <main className="after:bg-white-gray before:bg-white-gray relative mx-auto flex h-screen w-full max-w-3xl flex-col justify-between pt-[52px] before:absolute before:right-0 before:bottom-0 before:h-[calc(100%-52px)] before:w-[1px] before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[calc(100%-52px)] after:w-[1px] after:content-['']">
        <Outlet key={url} />
      </main>
      {url === '/' && <Fnb nav={'홈'} />}
      {url === '/group' && <Fnb nav={'그룹'} />}
      {url === '/my-page' && <Fnb nav={'마이'} />}
    </>
  );
}
