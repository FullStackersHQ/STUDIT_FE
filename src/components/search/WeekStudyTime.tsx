import { Dispatch, SetStateAction } from 'react';

export default function WeekStudyTime({
  value,
  setValue,
}: {
  value: [number, number];
  setValue: Dispatch<SetStateAction<[number, number]>>;
}): JSX.Element {
  return (
    <div className="text-dark-gray mt-1 flex items-center gap-2 text-[16px] md:text-[18px]">
      <span>매주</span>
      <div className="flex gap-2">
        <input
          type="number"
          className="input border-gray w-12 border-b text-center"
          value={value[0]}
          onFocus={() => setValue([0, value[1]])}
          onChange={(e) => setValue([Number(e.target.value), value[1]])}
        />
        ~
        <input
          type="number"
          className="input border-gray w-12 border-b text-center"
          value={value[1]}
          onFocus={() => setValue([value[0], 0])}
          onChange={(e) => setValue([value[0], Number(e.target.value)])}
        />
        <span>시간</span>
      </div>
    </div>
  );
}
