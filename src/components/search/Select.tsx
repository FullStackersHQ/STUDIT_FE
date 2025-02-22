import { Dispatch, SetStateAction } from 'react';

export default function Select<T extends string | number>({
  categories,
  value,
  setValue,
}: {
  categories: T[];
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
}): JSX.Element {
  return (
    <div className="mt-1">
      <select
        className="border-gray text-dark-gray rounded-[10px] border py-1 pr-2"
        onChange={(e) => setValue(e.target.value as T)}
        value={value}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
