import { StudyItemType, StudyStatusType, CompletedStudyItem } from '../../types/interface';
import PointIcon from '../../assets/icons/point.svg';
import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

const StudyItem = forwardRef<HTMLButtonElement, { study: StudyItemType; studyType: StudyStatusType }>(
  ({ study, studyType }, ref) => {
    const navigate = useNavigate();
    const { gatherDate, title, enterPoint, tag, weeklyStudyTime, category } = study;
    const isCompletedStudy = (study: StudyItemType): study is CompletedStudyItem => {
      return 'studyId' in study;
    };

    const getStudyItemId = (studyItem: StudyItemType): number | undefined => {
      if ('recruit_id' in studyItem) {
        return studyItem.recruit_id;
      } else if ('registerId' in studyItem) {
        return studyItem.registerId;
      } else if ('studyId' in studyItem) {
        return studyItem.studyId;
      }
      return undefined;
    };

    const studyItemContent = (
      <div
        className={`border-main flex w-full flex-col gap-y-1 rounded-sm border px-2.5 py-2 text-sm ${
          isCompletedStudy(study) ? 'h-[110px]' : 'h-[87px]'
        }`}
      >
        <div className="flex justify-between text-xs font-medium">
          <div className="flex gap-x-1">
            <div className="border-light-gray flex items-center gap-x-[2px] rounded-full border px-1 py-[2px]">
              <PointIcon alt="포인트" className="h-3.5 w-3.5" />
              <span>{enterPoint.toLocaleString()}</span>
            </div>
            <span className="border-light-gray rounded-full border px-1 py-[2px]">{category}</span>
            <span className="border-light-gray rounded-full border px-1 py-[2px]">{tag}</span>
          </div>
          <span className="text-main-text text-sm font-bold">주 {weeklyStudyTime}시간</span>
        </div>
        <p className="text-left font-medium">{title}</p>
        <p className="text-dark-gray text-left">스터디 기간: {gatherDate}</p>
        {isCompletedStudy(study) ? (
          <div className="flex gap-x-2.5">
            <span>
              획득한 포인트: <span className="text-topup font-bold">{study.obtainedPoint.toLocaleString()} P</span>
            </span>
            <span>
              차감된 포인트: <span className="text-deduct font-bold">{study.deductedPoint.toLocaleString()} P</span>
            </span>
          </div>
        ) : (
          ''
        )}
      </div>
    );

    if (isCompletedStudy(study)) {
      return <>{studyItemContent}</>;
    }

    return (
      <button
        ref={ref}
        onClick={() => {
          if (studyType === 'upcoming') navigate(`../recruit/${getStudyItemId(study)}`);
          else if (studyType === 'ongoing') navigate(`../study/${getStudyItemId(study)}`);
        }}
        className="cursor-pointer"
      >
        {studyItemContent}
      </button>
    );
  },
);

export default React.memo(StudyItem);
