import { PointFilterType, PointRecord } from '../../types/interface';
import useGetPointHistory from '../../hooks/point/useGetPointHistory';
import { toMonthDay } from '../../utils/commonUtils';
import PointRecordItem from './PointRecordItem';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import emptyPointIcon from '../../assets/imgs/empty-point.png';

export default function PointHistory({ selectedFilter }: { selectedFilter: PointFilterType }) {
  const { pointHistory, isLoading, fetchNextPage, hasNextPage } = useGetPointHistory(selectedFilter);
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });
  if (!pointHistory || isLoading) return null;

  return (
    <>
      {pointHistory.length > 0 ? (
        <div>
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
        </div>
      ) : (
        <div className="mt-12 flex h-full items-start justify-center gap-x-2.5">
          <p className="bg-white-gray mt-2 rounded-full px-2 py-1">{selectedFilter} 포인트 내역이 없어요.</p>
          <img src={emptyPointIcon} alt="스터딧 캐릭터" className="w-20" />
        </div>
      )}
    </>
  );
}
