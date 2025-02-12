import Home from '../assets/icons/home.svg';
import Group from '../assets/icons/group.svg';
import User from '../assets/icons/user.svg';
import { useNavigate } from 'react-router-dom';

export default function Fnb({ nav }: { nav: string }) {
  const navList = [
    { icon: Home, text: '모집', ariaLabel: '메인 페이지로 이동', path: '/' },
    { icon: Group, text: '진행', ariaLabel: '진행 페이지로 이동', path: '/study' },
    { icon: User, text: '마이', ariaLabel: '마이 페이지로 이동', path: '/my-page' },
  ];
  const navigate = useNavigate();
  return (
    <footer className="text-gray md:border-white-gray fixed bottom-0 left-1/2 h-[60px] w-full max-w-3xl -translate-x-1/2 bg-white text-sm md:border-x">
      <ol className="border-t-main flex h-full w-full items-center justify-around border-t">
        {navList.map((navItem) => (
          <li
            key={navItem.text}
            className={`hover:text-main-hover flex w-[38px] justify-center transition-colors ${nav === navItem.text && 'text-main-text'}`}
          >
            <button
              onClick={() => {
                navigate(navItem.path);
              }}
              aria-label={navItem.ariaLabel}
              className="flex cursor-pointer flex-col items-center"
            >
              <navItem.icon alt={navItem.text} />
              <span className="mt-1">{navItem.text}</span>
            </button>
          </li>
        ))}
      </ol>
    </footer>
  );
}
