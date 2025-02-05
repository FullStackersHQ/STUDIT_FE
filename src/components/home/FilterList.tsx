import { useSearchStore } from "../../store/searchStore";

export default function FilterList (): JSX.Element {
	const { filteringInfo } = useSearchStore();
	console.log("FilterList", filteringInfo);
	return (
		<div className="w-full h-[24px] mb-3 flex items-center gap-[5px] overflow-y-auto scrollbar-hide">
		{
			filteringInfo.category !== "" && 		
			<div className="px-[8px] py-[3px] rounded-[10px] text-sm bg-white-gray shrink-0 whitespace-nowrap min-w-max">
				{filteringInfo.category}
			</div>
		}
		{
			(filteringInfo.studyTimeRange[0] !== 0 || filteringInfo.studyTimeRange[1] !== 0) && 		
			<div className="px-[8px] py-[3px] rounded-[10px] text-sm bg-white-gray shrink-0 whitespace-nowrap min-w-max">
				{filteringInfo.studyTimeRange[0]} ~ {filteringInfo.studyTimeRange[1]} 시간
			</div>
		}
		{
			(filteringInfo.point[0] !== 0 || filteringInfo.point[1] !== 0) && 		
			<div className="px-[8px] py-[3px] rounded-[10px] text-sm bg-white-gray shrink-0 whitespace-nowrap min-w-max">
				{filteringInfo.point[0].toLocaleString()} ~ {filteringInfo.point[1].toLocaleString()} 점
			</div>
		}
		</div>
	)
}