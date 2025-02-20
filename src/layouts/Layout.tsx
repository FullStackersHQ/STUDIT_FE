import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Fnb from '../components/Fnb';
import { FNB_LIST } from '../constants/constants';

export default function Layout() {
  const location = useLocation();
  const url = location.pathname;
  const lastUrl: string | undefined = url.split('/').filter(Boolean).at(-1) ?? '';

  return (
    <>
      {lastUrl in FNB_LIST && <Header />}
      <main className="layout-md relative mx-auto flex h-screen w-full max-w-3xl flex-col pt-[52px]">
        <Outlet key={url} />
      </main>
      {lastUrl in FNB_LIST && <Fnb nav={FNB_LIST[lastUrl]} />}
    </>
  );
}
