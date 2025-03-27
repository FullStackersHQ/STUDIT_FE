import { Control, UseFormRegister, useFormState } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';
import { ErrorMessage } from '@hookform/error-message';

export default function DurationInput({
  control,
  register,
}: {
  control: Control<StudyFormData>;
  register: UseFormRegister<StudyFormData>;
}) {
  const { errors } = useFormState({ control });

  return (
    <>
      <div className="flex">
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
      {errors.deposit && errors.deposit.message && (
        <ErrorMessage name="duration" errors={errors} className="text-sm text-red-500" as="span" />
      )}
    </>
  );
}
