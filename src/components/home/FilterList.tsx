import { useSearchStore } from '../../store/searchStore';

export default function FilterList(): JSX.Element {
  const { filteringInfo } = useSearchStore();
  return (
    <div className="scrollbar-hide tag-container">
      {filteringInfo.category !== '' && <div className="tag">{filteringInfo.category}</div>}
      {(filteringInfo.studyTimeRange[0] !== 0 || filteringInfo.studyTimeRange[1] !== 0) && (
        <div className="tag">
          {filteringInfo.studyTimeRange[0]} ~ {filteringInfo.studyTimeRange[1]} 시간
        </div>
      )}
      {(filteringInfo.point[0] !== 0 || filteringInfo.point[1] !== 0) && (
        <div className="tag">
          {filteringInfo.point[0].toLocaleString()} ~ {filteringInfo.point[1].toLocaleString()} 점
        </div>
      )}
    </div>
  );
}
