interface InputType {
  placeholder: string;

  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  style?: string;
  disabled?: boolean;
}

export default function Input({ id, placeholder, value, onChange, style, onKeyDown, disabled }: InputType) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={style}
      onKeyDown={onKeyDown ? onKeyDown : undefined}
      disabled={disabled}
    />
  );
}
