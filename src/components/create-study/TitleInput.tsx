import { Controller, UseFormReturn } from 'react-hook-form';
import Input from '../Input';
import { ErrorMessage } from '@hookform/error-message';
import { StudyFormData } from '../../pages/CreateStudyForm';

type TitleProps = UseFormReturn<StudyFormData>;

export default function TitleInput(form: TitleProps) {
  const {
    control,
    formState: { errors },
    watch,
  } = form;

  return (
    <div className="mt-5 flex flex-col gap-y-1">
      <label htmlFor="studyTitle" className="font-medium" aria-label="스터디 제목">
        스터디 제목
      </label>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input {...field} id="studyTitle" aria-label="스터디 제목 입력" placeholder="텍스트를 입력하세요" />
        )}
      />
      <div className="flex justify-between">
        {errors.title && errors.title.message ? (
          <ErrorMessage name="title" errors={errors} className="text-sm text-red-500" as="span" />
        ) : (
          <div></div>
        )}
        <span className="self-end text-xs">{watch('title')?.length}/14</span>
      </div>
    </div>
  );
}
