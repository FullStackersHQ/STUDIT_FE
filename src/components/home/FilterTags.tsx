import { FilterType, pageType } from '../../types/interface';
import Tag from './Tag';

export default function FilterTags({
  filteringInfo,
  type,
}: {
  filteringInfo: FilterType;
  type: pageType;
}): JSX.Element {
  return (
    <div className="scrollbar-hide tag-container">
      <Tag text={type === 'recruits' ? '모집중' : '진행중'} />
      {filteringInfo.category !== '' && <Tag text={filteringInfo.category} />}
      {(filteringInfo.studyTimeRange[0] !== 0 || filteringInfo.studyTimeRange[1] !== 0) && (
        <Tag text={`${filteringInfo.studyTimeRange[0]} ~ ${filteringInfo.studyTimeRange[1]}`} />
      )}
      {(filteringInfo.point[0] !== 0 || filteringInfo.point[1] !== 0) && (
        <Tag text={`${filteringInfo.point[0].toLocaleString()} ~ ${filteringInfo.point[1].toLocaleString()}`} />
      )}
    </div>
  );
}
