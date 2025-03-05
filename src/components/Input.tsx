interface InputType {
  placeholder: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  tag?: boolean;
  disabled?: boolean;
}

export default function Input({ id, placeholder, value, onChange, tag, onKeyDown, disabled }: InputType) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={tag ? 'w-full border-b border-black py-1 pl-4 text-sm' : 'text-input'}
      onKeyDown={onKeyDown ? onKeyDown : undefined}
      disabled={disabled}
    />
  );
}
