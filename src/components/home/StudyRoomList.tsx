import { Link } from 'react-router-dom';
import { StudyRoomType } from '../../types/interface';

interface StudyRoomProps {
  study: StudyRoomType;
}

export default function StudyRoomList({ study }: StudyRoomProps): JSX.Element {
  return (
    <Link to={`/study-info/${study.recruitId}`} className="border-white-gray w-full rounded-[10px] border bg-white p-3">
      <div className="mb-2">
        <p className="font-bold">{study.title}</p>
        <p className="text-gray text-sm">
          스터디원 ({study.current_members} / {study.max_members})명
        </p>
      </div>
      <div className="text-gray text-sm">
        <p>
          스터디 기간: {study.study_start_at.split('T')[0]} ~ {study.study_end_at.split('T')[0]}
        </p>
        <p>모집 기간 ~{study.recruit_end_at.split('T')[0]}</p>
        <p>카테고리: {study.category}</p>
        <p>{study.status}</p>
      </div>
      <div className="mt-2 flex gap-2">
        {study.tags.map((tag: string) => (
          <p key={tag} className="bg-white-gray rounded-md px-2 py-1 text-xs">
            #{tag}
          </p>
        ))}
      </div>
    </Link>
  );
}
