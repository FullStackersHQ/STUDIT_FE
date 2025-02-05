import { useSearchStore } from "../../store/searchStore";

export default function WeekStudyTime ():JSX.Element {
	const { filteringInfo, setFilteringInfo } = useSearchStore();
	return (
		<>
		<h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold">주당 공부 시간</h2>
          <div className="flex items-center gap-2 mt-2 text-[16px] md:text-[18px]">
            <span>매주</span>
            <div className="flex gap-2">
              <input
                type="number"
                className="input w-12 text-center border-b border-black"
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
                className="input w-12 text-center border-b border-black"
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
	)
}