import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function RangeSlider({
  min,
  max,
  priceGap,
  value,
  setValue,
}: {
  min: number;
  max: number;
  priceGap: number;
  value: [number, number];
  setValue: Dispatch<SetStateAction<[number, number]>>;
}): JSX.Element {
  const [minValue, setMinValue] = useState<number>(value[0]);
  const [maxValue, setMaxValue] = useState<number>(value[1]);
  const [rangeMinPercent, setRangeMinPercent] = useState<number>(0);
  const [rangeMaxPercent, setRangeMaxPercent] = useState<number>(100);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinValue(parseInt(e.target.value));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(parseInt(e.target.value));
  };

  const updateRangePercent = () => {
    if (maxValue - minValue < priceGap) {
      setMaxValue(minValue + priceGap);
      setMinValue(maxValue - priceGap);
    } else {
      const diff = max - min;
      setRangeMinPercent(((minValue - 1000) / diff) * 100);
      setRangeMaxPercent((maxValue / max) * 100);
    }
  };

  useEffect(() => {
    updateRangePercent();
  }, []);

  return (
    <>
      <div className="bg-light-gray relative h-[8px] rounded-[10px]">
        {/* 슬라이더 */}
        <div
          className="bg-main absolute h-[8px] rounded-[10px]"
          style={{
            left: `${rangeMinPercent}%`,
            right: `${100 - rangeMaxPercent}%`,
            width: `${rangeMaxPercent - rangeMinPercent}%`,
          }}
        ></div>
        <input
          className="range"
          type="range"
          min={min}
          max={max - priceGap}
          step={priceGap}
          value={minValue}
          onChange={(e) => {
            handleMinChange(e);
            setValue([Number(e.target.value), value[1]]);
            updateRangePercent();
          }}
        />
        <input
          className="range"
          type="range"
          min={min + priceGap}
          max={max}
          step={priceGap}
          value={maxValue}
          onChange={(e) => {
            handleMaxChange(e);
            setValue([value[0], Number(e.target.value)]);
            updateRangePercent();
          }}
        />
      </div>
      {/* 값 보여주기 */}
      <div className="text-gray mt-2 flex w-full items-center justify-evenly">
        <div className="w-[40%] rounded-[10px] border p-2">
          <p className="items-start text-[12px]">최저 포인트</p>
          <span className="text-[14px] text-black">{minValue.toLocaleString()}점</span>
        </div>
        <p className="text-[18px]">~</p>
        <div className="w-[40%] rounded-[10px] border p-2">
          <p className="text-[12px]">최대 포인트</p>
          <span className="text-[14px] text-black">{maxValue.toLocaleString()}점</span>
        </div>
      </div>
    </>
  );
}
