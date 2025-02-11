export interface ButtonProps {
  text: string;
  onClick: () => void;
  ariaLabel?: string;
  extraClass?: string;
  isSmall?: boolean;
  disabled?: boolean;
}
