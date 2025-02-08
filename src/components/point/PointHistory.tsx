import { PointFilterType, PointRecord } from '../../types/interface';
import useGetPointHistory from '../../hooks/point/useGetPointHistory';
import { toMonthDay } from '../../utils/commonUtils';
import PointRecordItem from './PointRecordItem';

export default function PointHistory({ selectedFilter }: { selectedFilter: PointFilterType }) {
  const { pointHistory, isLoading } = useGetPointHistory(selectedFilter);
  if (!pointHistory || isLoading) return;

  return (
    <ul>
      {Object.entries(pointHistory).map(([date, records]) => {
        return (
          <div key={date} className="mb-2">
            <p className="mb-1.5 text-xs">{toMonthDay(date)}</p>
            <ul>
              {records.map((pointRecord: PointRecord) => {
                return <PointRecordItem record={pointRecord} key={pointRecord.id} />;
              })}
            </ul>
          </div>
        );
      })}
    </ul>
  );
}
