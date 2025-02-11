import { ButtonProps } from '../types/commonInterface';

export default function Button({ text, onClick, ariaLabel, extraClass, isSmall, disabled }: ButtonProps) {
  return (
    <button
      className={`bg-sub text-main hover:bg-sub-hover hover:text-main-hover h-12 rounded-full text-sm font-bold transition-colors ${extraClass} ${isSmall ? 'w-[320px]' : 'w-full'}`}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
