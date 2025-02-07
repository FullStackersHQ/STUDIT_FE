import { StudyItemType, StudyStatusType } from '../../types/interface';
import PointIcon from '../../assets/icons/point.svg';

export default function StudyItem({ study, studyType }: { study: StudyItemType; studyType: StudyStatusType }) {
  const { gatherDate, title, enterPoint, tag, weeklyStudyTime } = study;
  const isCompletedStudy = 'studyId' in study;

  return (
    <div
      className={`border-light-gray flex w-full flex-col gap-y-1 rounded-sm border px-2.5 py-2 text-sm ${studyType === 'completed' ? 'h-[110px]' : 'h-[87px]'}`}
    >
      <div className="flex gap-x-1 text-xs font-medium">
        <div className="border-light-gray flex items-center gap-x-[2px] rounded-full border px-1 py-[2px]">
          <PointIcon alt="포인트" className="h-3.5 w-3.5" />
          <span>{enterPoint.toLocaleString()}</span>
        </div>
        <span className="border-light-gray rounded-full border px-1 py-[2px]">{tag}</span>
        <span className="border-light-gray rounded-full border px-1 py-[2px]">{weeklyStudyTime}시간</span>
      </div>
      <p className="font-medium">{title}</p>
      <p className="text-dark-gray">스터디 기간: {gatherDate}</p>
      {isCompletedStudy && (
        <div className="flex gap-x-2.5">
          <span>
            획득한 포인트: <span className="text-topup font-bold">{study.obtainedPoint.toLocaleString()} P</span>
          </span>
          <span>
            차감된 포인트: <span className="text-deduct font-bold">{study.deductedPoint.toLocaleString()} P</span>
          </span>
        </div>
      )}
    </div>
  );
}
