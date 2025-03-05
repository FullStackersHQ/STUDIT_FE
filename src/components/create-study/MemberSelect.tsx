import { UseFormReturn } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';

type TitleProps = UseFormReturn<StudyFormData>;

export default function MemberSelect(form: TitleProps) {
  const { register } = form;

  return (
    <div className="mt-5 flex">
      <label className="mr-2 font-medium">모집 인원</label>
      <select {...register('maxMembers')} className="border-light-gray border text-center text-sm">
        {[...Array(9)].map((_, i) => (
          <option key={i} value={i + 2}>
            {i + 2}명
          </option>
        ))}
      </select>
    </div>
  );
}
