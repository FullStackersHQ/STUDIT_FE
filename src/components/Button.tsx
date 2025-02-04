export default function Button({
  text,
  onClick,
  ariaLabel,
  extraClass,
}: {
  text: string;
  onClick: () => void;
  ariaLabel?: string;
  extraClass?: string;
}) {
  return (
    <button
      className={`bg-sub text-main hover:bg-sub-hover hover:text-main-hover h-12 w-full rounded-full text-sm font-bold transition-colors ${extraClass}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
