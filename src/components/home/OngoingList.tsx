import { Link } from 'react-router-dom';
import { StudyDetailType } from '../../types/interface';
import React, { forwardRef } from 'react';

const OngoingList = forwardRef<HTMLAnchorElement, { info: StudyDetailType }>(({ info }, ref) => {
  const { recruitId, title, category, currentMembers, maxMembers, studyStartAt, studyEndAt, tags } = info;

  return (
    <Link
      ref={ref}
      key={recruitId}
      to={`/recruit/${recruitId}`}
      className="border-white-gray w-full rounded-[10px] border bg-white p-3"
    >
      <div className="mb-2">
        <p className="font-bold">{title + ' (' + category + ')'}</p>
        <p className="text-gray text-sm">
          스터디원 ( {currentMembers} / {maxMembers} ) 명
        </p>
      </div>
      <div className="text-gray text-sm">
        <p>
          스터디 기간: {studyStartAt.split('T')[0]} ~ {studyEndAt.split('T')[0]}
        </p>
        <p>진행중</p>
      </div>
      <div className="mt-2 flex gap-2">
        {tags.map((tag: string) => (
          <p key={tag} className="bg-white-gray rounded-md px-2 py-1 text-xs">
            #{tag}
          </p>
        ))}
      </div>
    </Link>
  );
});

export default React.memo(OngoingList);
