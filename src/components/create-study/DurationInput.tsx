import { UseFormReturn } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';

type TitleProps = UseFormReturn<StudyFormData>;

export default function DurationInput(form: TitleProps) {
  const { register } = form;

  return (
    <div className="mt-5 flex items-center">
      <label className="font-medium">스터디 진행 기간(주)</label>
      <input
        type="number"
        {...register('duration', { valueAsNumber: true })}
        className="bottom-line-input-sm"
        min={1}
        max={35}
      />
      주
    </div>
  );
}
