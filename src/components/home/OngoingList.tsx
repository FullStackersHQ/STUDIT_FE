import { Link } from 'react-router-dom';
import { StudyDetailType } from '../../types/interface';
import React, { forwardRef } from 'react';

const OngoingList = forwardRef<HTMLAnchorElement, { info: StudyDetailType }>(({ info }, ref) => {
  const { roomId, title, category, goalTime, studyStartAt, studyEndAt, tags } = info;

  return (
    <Link ref={ref} key={roomId} to={`/study/${roomId}`} className="card">
      <div className="mb-2 flex items-center justify-between pb-1">
        <h2 className="font-bold">{title + ' (' + category + ')'}</h2>
      </div>
      <div className="text-sm/5">
        <p>
          스터디 진행 기간: {studyStartAt.split('T')[0]} ~ {studyEndAt.split('T')[0]}
        </p>
        <p>주 {goalTime} 시간</p>
      </div>
      <div className="scrollbar-hide mt-2 flex gap-2 overflow-x-scroll">
        {tags.map((tag: string) => (
          <div key={tag} className="study-tag">
            # {tag}
          </div>
        ))}
      </div>
    </Link>
  );
});

export default React.memo(OngoingList);
