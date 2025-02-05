import { CATEGORY } from "../../constants/CATEGORY";
import { useSearchStore } from "../../store/searchStore";

export default function Category (): JSX.Element {
	const { filteringInfo, setFilteringInfo } = useSearchStore();
	return(
		<>
			<h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold">카테고리</h2>
			<div className="grid grid-cols-4 gap-2 mt-2">
				{CATEGORY.map((category) => (
					<label key={category} className="flex items-center gap-1">
						<input
							type="radio"
							name="category"
							value={category}
							onChange={(e) =>
								setFilteringInfo({
									...filteringInfo,
									category: e.target.value,
								})
							}
						/>
						<span className="text-[12px] sm:text-[16px] md:text-[18px]">{category}</span>
					</label>
				))}
			</div>
		</>
	)
}