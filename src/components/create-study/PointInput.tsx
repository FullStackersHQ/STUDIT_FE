import { ErrorMessage } from '@hookform/error-message';
import { Controller, useFormState, Control } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';

export default function PointInput({ control }: { control: Control<StudyFormData> }) {
  const { errors } = useFormState({ control });

  return (
    <>
      <div className="gap-y-1">
        <div className="flex items-center">
          <label htmlFor="point" className="font-medium">
            참여 포인트
          </label>
          <Controller
            name="deposit"
            control={control}
            render={({ field }) => (
              <input
                id="point"
                type="text"
                inputMode="numeric"
                className="border-light-gray mx-2 w-15 border-b text-center text-sm"
                value={field.value.toLocaleString()}
                onChange={(e) => {
                  const onlyNumber = e.target.value.replace(/,/g, '');
                  const numberValue = Number(onlyNumber);
                  field.onChange(isNaN(numberValue) ? 0 : numberValue);
                }}
              />
            )}
          />
          점
        </div>
        {errors.deposit && errors.deposit.message && (
          <ErrorMessage name="deposit" errors={errors} className="text-sm text-red-500" as="span" />
        )}
      </div>
    </>
  );
}
