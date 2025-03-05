import { UseFormReturn } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';
import { CATEGORY } from '../../constants/constants';

type TitleProps = UseFormReturn<StudyFormData>;

export default function CategoryRadio(form: TitleProps) {
  const { register } = form;

  return (
    <div className="mt-5">
      <label className="font-medium" aria-label="스터디 카테고리">
        카테고리
      </label>
      <div className="mt-2 grid grid-cols-4 gap-2">
        {CATEGORY.map((category) => (
          <label key={category} className="flex items-center gap-1">
            <input type="radio" value={category} {...register('category')} />
            <span className="text-[12px] sm:text-[16px] md:text-[18px]">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
