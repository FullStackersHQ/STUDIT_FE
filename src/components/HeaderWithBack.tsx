import ChevronLeftIcon from '../assets/icons/chevron-left.svg';
import { useNavigate } from 'react-router-dom';

export default function HeaderWithBack({
  title,
  isStudyPage,
  action,
}: {
  title: string;
  isStudyPage?: boolean;
  action?: {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement> & { alt?: string }>;
    onClick: () => void;
    ariaLabel: string;
  };
}) {
  const navigate = useNavigate();

  return (
    <header
      className={`md:border-x-white-gray fixed top-0 z-[999] flex h-[52px] w-full max-w-3xl items-center pr-4 pl-2 md:border-x ${isStudyPage ? 'bg-main text-white' : 'text-main border-b-main border-b bg-white'}`}
    >
      <button onClick={() => navigate(-1)} aria-label="뒤로 가기">
        <ChevronLeftIcon alt="뒤로 가기" className="hover:text-white-gray cursor-pointer transition-colors" />
      </button>
      <h1 className="absolute left-1/2 -translate-x-1/2 font-bold">{title}</h1>
      {action && (
        <button
          onClick={action.onClick}
          aria-label={action.ariaLabel}
          className="hover:text-white-gray ml-auto cursor-pointer transition-colors"
        >
          {action?.icon && <action.icon alt="icon description" />}
        </button>
      )}
    </header>
  );
}
