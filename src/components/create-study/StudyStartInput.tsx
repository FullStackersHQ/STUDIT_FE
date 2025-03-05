import { Controller, UseFormReturn } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';
import Calendar from './Calendar';

type TitleProps = UseFormReturn<StudyFormData>;

export default function StudyStartInput(form: TitleProps) {
  const { control, register } = form;
  return (
    <div className="mt-5">
      <label className="font-medium">스터디 시작 날짜(모집 마감 날짜)</label>
      <div className="flex items-center">
        <Controller
          aria-label="스터디 시작 날짜 선택창"
          control={control}
          name="studyStartDate"
          render={({ field }) => <Calendar date={field.value} setDate={field.onChange} />}
        />
        일
        <input
          type="number"
          aria-label="스터디 시작 시간 입력창"
          {...register('hour', { valueAsNumber: true })}
          className="bottom-line-input-sm"
          min={0}
          max={23}
        />
        시
      </div>
    </div>
  );
}
