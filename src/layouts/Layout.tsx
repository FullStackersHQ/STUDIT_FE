import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Fnb from '../components/Fnb';

export default function Layout() {
  const location = useLocation();
  const url = location.pathname;

  return (
    <>
      {url === '/recruit-list' && <Header />}
      {url === '/my-page' && <Header />}
      {url === '/study-list' && <Header />}
      <main className="md:before:bg-white-gray md:after:bg-white-gray relative mx-auto flex h-screen w-full max-w-3xl flex-col justify-between pt-[52px] md:before:absolute md:before:right-0 md:before:bottom-0 md:before:h-[calc(100%-52px)] md:before:w-[1px] md:before:content-[''] md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-[calc(100%-52px)] md:after:w-[1px] md:after:content-['']">
        <Outlet key={url} />
      </main>
      {url === '/recruit-list' && <Fnb nav={'모집'} />}
      {url === '/study-list' && <Fnb nav={'진행'} />}
      {url === '/my-page' && <Fnb nav={'마이'} />}
    </>
  );
}
