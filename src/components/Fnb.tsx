import Home from '../assets/icons/home.svg';
import Group from '../assets/icons/group.svg';
import User from '../assets/icons/user.svg';
import { useNavigate } from 'react-router-dom';

export default function Fnb({ nav }: { nav: string; }) {
  const navList = [
    { icon: Home, text: '홈', ariaLabel: '메인 페이지로 이동', path:"/"},
    { icon: Group, text: '그룹', ariaLabel: '그룹 페이지로 이동', path:"/group"},
    { icon: User, text: '마이', ariaLabel: '마이 페이지로 이동', path:"/my-page"},
  ];
	const navigate = useNavigate();
  return (
    <footer className="fixed bottom-0 w-full max-w-3xl h-[60px] text-gray text-sm bg-white">
      <ol className="flex items-center justify-around border-t border-t-main w-full h-full">
        {navList.map((navItem) => (
          <li
            key={navItem.text}
            className={`w-[38px] flex justify-center transition-colors hover:text-main ${nav === navItem.text && 'text-main'}`}
          >
            <button
              onClick={() => {
								navigate(navItem.path)
							}}
              aria-label={navItem.ariaLabel}
              className="cursor-pointer flex flex-col items-center"
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
