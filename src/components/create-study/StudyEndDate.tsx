import { UseFormReturn } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';
import { useEffect, useMemo } from 'react';

type TitleProps = UseFormReturn<StudyFormData>;

export default function StudyEndData(form: TitleProps) {
  const { watch, setValue } = form;
  const startDate = watch('studyStartDate');
  const duration = watch('duration');

  const endDate = useMemo(() => {
    if (!startDate || !duration) return null;
    const date = new Date(startDate);
    date.setDate(date.getDate() + duration * 7);
    return date;
  }, [startDate, duration]);

  useEffect(() => {
    if (endDate) {
      setValue('studyEndDate', endDate.toISOString().split('T')[0]);
    }
  }, [endDate, setValue]);

  return (
    <div>
      <label className="font-medium">스터디 종료 날짜</label>
      <div className="flex items-center">
        <input
          type="text"
          value={endDate ? endDate.toISOString().split('T')[0] : ''}
          readOnly
          className="border-light-gray mr-2 w-24 cursor-pointer border-b text-center text-sm"
        />
        일
        <input
          type="number"
          aria-label="스터디 시작 시간 입력창"
          value={watch('hour')}
          className="bottom-line-input-sm"
          readOnly
        />
        시
      </div>
    </div>
  );
}
