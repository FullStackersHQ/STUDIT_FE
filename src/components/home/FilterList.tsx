import { useSearchStore } from '../../store/searchStore';

export default function FilterList(): JSX.Element {
  const { filteringInfo } = useSearchStore();
  return (
    <div className="scrollbar-hide mb-3 flex h-[24px] w-full items-center gap-[5px] overflow-y-auto">
      {filteringInfo.category !== '' && (
        <div className="bg-white-gray min-w-max shrink-0 rounded-[10px] px-[8px] py-[3px] text-sm whitespace-nowrap">
          {filteringInfo.category}
        </div>
      )}
      {(filteringInfo.studyTimeRange[0] !== 0 || filteringInfo.studyTimeRange[1] !== 0) && (
        <div className="bg-white-gray min-w-max shrink-0 rounded-[10px] px-[8px] py-[3px] text-sm whitespace-nowrap">
          {filteringInfo.studyTimeRange[0]} ~ {filteringInfo.studyTimeRange[1]} 시간
        </div>
      )}
      {(filteringInfo.point[0] !== 0 || filteringInfo.point[1] !== 0) && (
        <div className="bg-white-gray min-w-max shrink-0 rounded-[10px] px-[8px] py-[3px] text-sm whitespace-nowrap">
          {filteringInfo.point[0].toLocaleString()} ~ {filteringInfo.point[1].toLocaleString()} 점
        </div>
      )}
    </div>
  );
}
