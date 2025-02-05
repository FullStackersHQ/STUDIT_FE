import { Link } from "react-router-dom";
import { StudyRoomType } from "../../types/interface";

interface StudyRoomProps {
  study: StudyRoomType;
}

export default function StudyRoomList({ study }: StudyRoomProps): JSX.Element {
	return (
		<Link to={`/study-info/${study.recruitId}`} className="w-full bg-white p-3 rounded-[10px] border border-white-gray">
			<div className="mb-2">
				<p className="font-bold">{study.title}</p>
				<p className="text-sm text-gray">
					스터디원 ({study.current_members} / {study.max_members})명
				</p>
			</div>
			<div className="text-sm text-gray">
				<p>
					스터디 기간: {study.study_start_at.split('T')[0]} ~ {study.study_end_at.split('T')[0]}
				</p>
				<p>모집 기간 ~{study.recruit_end_date.split('T')[0]}</p>
				<p>카테고리: {study.category}</p>
				<p>{study.status}</p>
			</div>
			<div className="flex gap-2 mt-2">
				{study.tags.map((tag: string) => (
					<p key={tag} className="text-xs bg-white-gray px-2 py-1 rounded-md">
						#{tag}
					</p>
				))}
			</div>
		</Link>
	)
}