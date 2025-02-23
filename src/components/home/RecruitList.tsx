import { Link } from 'react-router-dom';
import { StudyDetailType } from '../../types/interface';
import React, { forwardRef } from 'react';

const RecruitList = forwardRef<HTMLAnchorElement, { info: StudyDetailType }>(({ info }, ref) => {
  const { recruitId, title, category, currentMembers, maxMembers, studyStartAt, studyEndAt, recruitEndAt, tags } = info;
  return (
    <Link ref={ref} key={recruitId} to={`/recruit/${recruitId}`} className="card">
      <div className="mb-2 flex items-center justify-between pb-1">
        <h2 className="font-bold">{title}</h2>
        <span className={`text-sm font-bold ${currentMembers === maxMembers ? 'text-deduct' : 'text-main-text'}`}>
          {currentMembers === maxMembers ? '모집 종료' : '모집중'}
        </span>
      </div>

      <div className="text-sm/5">
        <p>
          카테고리: <span className="font-semibold">{category}</span>
        </p>
        <p>
          스터디 기간:{' '}
          <span className="font-semibold">
            {studyStartAt.split('T')[0]} ~ {studyEndAt.split('T')[0]}
          </span>
        </p>
        <p>
          모집 기간: ~ <span className="font-semibold">{recruitEndAt.split('T')[0]}</span>
        </p>
        <p>
          스터디원: {currentMembers} / {maxMembers}명
        </p>
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

export default React.memo(RecruitList);
