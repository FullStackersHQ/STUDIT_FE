import StudyIcon from '../assets/icons/study.svg';
import ChatIcon from '../assets/icons/chatting.svg';
import StatIcon from '../assets/icons/statistics.svg';
import { Dispatch, SetStateAction } from 'react';

export default function StudyFnb({ nav, setNav }: { nav: string; setNav: Dispatch<SetStateAction<string>> }) {
  const navList = [
    { icon: StudyIcon, text: '스터디', ariaLabel: '스터디 페이지로 이동' },
    { icon: ChatIcon, text: '채팅', ariaLabel: '채팅 페이지로 이동' },
    { icon: StatIcon, text: '통계', ariaLabel: '통계 페이지로 이동' },
  ];
  return (
    <footer className="text-gray md:border-white-gray fixed bottom-0 left-1/2 h-[60px] w-full max-w-3xl -translate-x-1/2 bg-white text-sm md:border-x">
      <ol className="border-t-main flex h-full w-full items-center justify-around border-t">
        {navList.map((navItem) => (
          <li
            key={navItem.text}
            className={`hover:text-main-hover flex w-[38px] justify-center transition-colors ${nav === navItem.text && 'text-main-text'}`}
          >
            <button
              onClick={() => setNav(navItem.text)}
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
