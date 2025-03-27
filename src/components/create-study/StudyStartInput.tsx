import { Controller, Control } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';
import Calendar from './Calendar';

export default function StudyStartInput({ control }: { control: Control<StudyFormData> }) {
  return (
    <div>
      <label className="font-medium">스터디 시작 날짜(모집 마감 날짜)</label>
      <div className="flex items-center">
        <Controller
          aria-label="스터디 시작 날짜 선택창"
          control={control}
          name="studyStartDate"
          render={({ field }) => <Calendar date={field.value} setDate={field.onChange} />}
        />
        일
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
            />
          )}
        />
        시
      </div>
    </div>
  );
}
