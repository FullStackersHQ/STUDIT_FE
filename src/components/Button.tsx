import { ButtonProps } from '../types/commonInterface';
import { memo } from 'react';

const Button = memo(function Button({
  text,
  onClick,
  ariaLabel,
  extraClass = '',
  isSmall,
  disabled,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={`bg-main hover:bg-main-hover h-12 cursor-pointer rounded-full text-sm font-bold text-white transition-colors ${extraClass} ${isSmall ? 'w-[320px]' : 'w-full'}`}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
});

export default Button;
