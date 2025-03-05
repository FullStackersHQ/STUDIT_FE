import { UseFormReturn } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';
import { ErrorMessage } from '@hookform/error-message';

type TitleProps = UseFormReturn<StudyFormData>;

export default function DescriptionInput(form: TitleProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="mt-3">
      <label className="align-center flex text-[16px] font-bold" aria-label="스터디 내용">
        내용
      </label>
      <textarea
        aria-label="스터디 내용 입력"
        {...register('description')}
        className="border-light-gray h-[200px] w-full rounded-md border p-2"
        placeholder="내용을 입력해주세요."
      />
      <ErrorMessage name="description" errors={errors} className="text-sm text-red-500" as="span" />
    </div>
  );
}
