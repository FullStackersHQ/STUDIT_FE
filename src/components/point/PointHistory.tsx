import { PointFilterType, PointRecord } from '../../types/interface';
import useGetPointHistory from '../../hooks/point/useGetPointHistory';
import { toMonthDay } from '../../utils/commonUtils';
import PointRecordItem from './PointRecordItem';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function PointHistory({ selectedFilter }: { selectedFilter: PointFilterType }) {
  const { pointHistory, isLoading, fetchNextPage, hasNextPage } = useGetPointHistory(selectedFilter);
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });
  if (!pointHistory || isLoading) return null;

  return (
    <ul>
      {pointHistory.map((pointItem, index) => {
        const isLastItem = index === pointHistory.length - 1;
        return (
          <div key={index} className="mb-1.5">
            <p className="mb-1.5 text-xs">{toMonthDay(pointItem.date)}</p>
            <ul className="flex flex-col gap-y-2">
              {pointItem.records.map((pointRecord: PointRecord) => {
                return (
                  <PointRecordItem record={pointRecord} key={pointRecord.id} ref={isLastItem ? setTarget : null} />
                );
              })}
            </ul>
          </div>
        );
      })}
    </ul>
  );
}
