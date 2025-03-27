import { Control, Controller, useFormState } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';
import { ErrorMessage } from '@hookform/error-message';

export default function GoalTime({ control }: { control: Control<StudyFormData> }) {
  const { errors } = useFormState({ control });

  return (
    <>
      <div className="flex">
        <label className="font-medium">주당 목표 시간</label>
        <Controller
          control={control}
          name="goalTime"
          render={({ field }) => <input type="number" className="bottom-line-input-sm" {...field} />}
        />
        시간
      </div>
      {errors.deposit && errors.deposit.message && (
        <ErrorMessage name="goalTime" errors={errors} className="text-sm text-red-500" as="span" />
      )}
    </>
  );
}
