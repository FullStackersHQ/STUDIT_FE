import { useSearchStore } from '../../store/useSearchStore';

export default function WeekStudyTime(): JSX.Element {
  const { filteringInfo, setFilteringInfo } = useSearchStore();
  return (
    <>
      <h2 className="text-[18px] font-bold sm:text-[22px] md:text-[24px]">주당 공부 시간</h2>
      <div className="mt-2 flex items-center gap-2 text-[16px] md:text-[18px]">
        <span>매주</span>
        <div className="flex gap-2">
          <input
            type="number"
            className="input w-12 border-b border-black text-center"
            value={filteringInfo.studyTimeRange[0]}
            onChange={(e) => {
              setFilteringInfo({
                ...filteringInfo,
                studyTimeRange: [Number(e.target.value), filteringInfo.studyTimeRange[1]],
              });
            }}
          />
          ~
          <input
            type="number"
            className="input w-12 border-b border-black text-center"
            value={filteringInfo.studyTimeRange[1]}
            onChange={(e) => {
              setFilteringInfo({
                ...filteringInfo,
                studyTimeRange: [filteringInfo.studyTimeRange[0], Number(e.target.value)],
              });
            }}
          />
          <span>시간</span>
        </div>
      </div>
    </>
  );
}
