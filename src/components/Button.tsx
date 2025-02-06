export default function Button({
  text,
  onClick,
  ariaLabel,
  extraClass,
  isSmall,
}: {
  text: string;
  onClick: () => void;
  ariaLabel?: string;
  extraClass?: string;
  isSmall?: boolean;
}) {
  return (
    <button
      className={`bg-sub text-main hover:bg-sub-hover hover:text-main-hover h-12 rounded-full text-sm font-bold transition-colors ${extraClass} ${isSmall ? 'w-[320px]' : 'w-full'}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
