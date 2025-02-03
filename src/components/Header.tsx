import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Bell from '@/assets/icons/bell.svg';

export default function Header() {
  return (
    <header className="w-[100%] h-[52px] z-[999] fixed top-0 left-0 px-4 flex items-center justify-between">
      <Link to={'/'} aria-label="홈으로">
        <img src={Logo} alt="Logo" className="w-[83px] h-[33px]" />
      </Link>
      <Bell />
    </header>
  );
}
