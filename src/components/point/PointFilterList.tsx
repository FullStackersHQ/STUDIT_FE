import { POINTFILTERS } from '../../constants/constants';
import { PointFilterType } from '../../types/interface';

export default function PointFilterList({
  selectedFilter,
  setSelectedFilter,
}: {
  selectedFilter: PointFilterType;
  setSelectedFilter: (filter: PointFilterType) => void;
}) {
  return (
    <div className="mb-2 flex gap-x-1.5 text-sm">
      {POINTFILTERS.map((pointFilter) => {
        return (
          <button
            key={pointFilter}
            onClick={() => setSelectedFilter(pointFilter)}
            className={`rounded-full border px-2 py-[2px] transition-colors ${selectedFilter === pointFilter ? 'bg-main border-main text-white' : 'border-white-gray hover:bg-white-gray'}`}
          >
            {pointFilter}
          </button>
        );
      })}
    </div>
  );
}
