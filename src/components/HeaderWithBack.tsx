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
    icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { alt?: string }>;
    onClick: () => void;
    ariaLabel: string;
  };
}) {
  const navigate = useNavigate();

  return (
    <header
      className={`fixed z-[999] top-0 flex items-center w-full h-[52px] pl-2 pr-4 ${isStudyPage ? 'bg-main text-white' : 'text-main border-b border-b-main'}`}
    >
      <button onClick={() => navigate(-1)} aria-label="뒤로 가기">
        <ChevronLeftIcon alt="뒤로 가기" className="cursor-pointer transition-colors hover:text-white-gray" />
      </button>
      <h1 className="absolute left-1/2 -translate-x-1/2 font-bold">{title}</h1>
      {action && (
        <button
          onClick={action.onClick}
          aria-label={action.ariaLabel}
          className="ml-auto hover:text-white-gray transition-colors"
        >
          <action.icon alt={action.ariaLabel} />
        </button>
      )}
    </header>
  );
}
