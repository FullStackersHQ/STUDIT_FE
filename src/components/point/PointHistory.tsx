import { PointFilterType, PointRecord } from '../../types/interface';
import useGetPointHistory from '../../hooks/point/useGetPointHistory';
import { toMonthDay } from '../../utils/commonUtils';
import PointRecordItem from './PointRecordItem';

export default function PointHistory({ selectedFilter }: { selectedFilter: PointFilterType }) {
  const { pointHistory, isLoading } = useGetPointHistory(selectedFilter);
  if (!pointHistory || isLoading) return null;

  return (
    <ul>
      {pointHistory.map((pointItem) => {
        return (
          <div key={pointItem.date} className="mb-2">
            <p className="mb-1.5 text-xs">{toMonthDay(pointItem.date)}</p>
            <ul>
              {pointItem.records.map((pointRecord: PointRecord) => {
                return <PointRecordItem record={pointRecord} key={pointRecord.id} />;
              })}
            </ul>
          </div>
        );
      })}
    </ul>
  );
}
