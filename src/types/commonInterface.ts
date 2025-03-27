export interface ButtonProps {
  text: string;
  onClick: () => void;
  ariaLabel?: string;
  extraClass?: string;
  isSmall?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
}
