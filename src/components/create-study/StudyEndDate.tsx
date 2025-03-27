import { Control, Controller, UseFormWatch } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';

export default function StudyEndDate({
  control,
  watch,
}: {
  control: Control<StudyFormData>;
  watch: UseFormWatch<StudyFormData>;
}) {
  const studyStartDate = watch('studyStartDate');
  const duration = watch('duration');

  const calculatedEndDate = studyStartDate
    ? new Date(new Date(studyStartDate).setDate(new Date(studyStartDate).getDate() + duration * 7))
        .toISOString()
        .split('T')[0]
    : '';

  return (
    <div>
      <label className="font-medium">스터디 종료 날짜</label>
      <Controller
        control={control}
        name="studyEndDate"
        render={() => (
          <input
            type="text"
            className="border-light-gray mr-2 w-24 cursor-pointer border-b text-center text-sm"
            value={calculatedEndDate} // 자동 계산된 날짜 표시
            readOnly
          />
        )}
      />
      <Controller
        control={control}
        name="hour"
        render={({ field }) => (
          <input
            type="number"
            aria-label="스터디 시작 시간 입력창"
            {...field}
            className="bottom-line-input-sm"
            min={0}
            max={23}
            readOnly
          />
        )}
      />
      시
    </div>
  );
}
