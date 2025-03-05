import { UseFormReturn } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';

type TitleProps = UseFormReturn<StudyFormData>;

export default function GoalTime(form: TitleProps) {
  const { register } = form;

  return (
    <div className="flex">
      <label className="font-medium">주당 목표 시간</label>
      <input type="number" {...register('goalTime')} className="bottom-line-input-sm" />
      시간
    </div>
  );
}
