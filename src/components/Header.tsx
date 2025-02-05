import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Bell from '@/assets/icons/bell.svg';

export default function Header() {
  return (
    <header className="md:border-white-gray fixed top-0 left-1/2 z-[999] mx-auto flex h-13 w-full max-w-3xl -translate-x-1/2 items-center justify-between bg-white px-4 md:border-x">
      <Link to={'/'} aria-label="홈으로">
        <img src={Logo} alt="Logo" className="h-[30px] w-20" />
      </Link>
      <Bell alt="알림" />
    </header>
  );
}
