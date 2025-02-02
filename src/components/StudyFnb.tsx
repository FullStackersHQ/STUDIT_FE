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
    <footer className="fixed bottom-0 w-full h-[60px] text-gray text-sm">
      <ol className="flex items-center justify-around border-t border-t-main w-full h-full">
        {navList.map((navItem) => (
          <li
            key={navItem.text}
            className={`flex flex-col justify-center gap-y-1 w-12 items-center transition-colors cursor-pointer hover:text-main ${nav === navItem.text && 'text-main'}`}
          >
            <button onClick={() => setNav(navItem.text)} aria-label={navItem.ariaLabel}>
              <navItem.icon alt={navItem.text} />
            </button>
            <span>{navItem.text}</span>
          </li>
        ))}
      </ol>
    </footer>
  );
}
