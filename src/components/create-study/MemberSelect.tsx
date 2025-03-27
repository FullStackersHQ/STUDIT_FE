import { Control, Controller } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';

export default function MemberSelect({ control }: { control: Control<StudyFormData> }) {
  return (
    <div className="flex">
      <label className="mr-2 font-medium">모집 인원</label>
      <Controller
        control={control}
        name="maxMembers"
        render={({ field }) => (
          <select {...field} className="border-light-gray border text-center text-sm">
            {[...Array(9)].map((_, i) => (
              <option key={i} value={i + 2}>
                {i + 2}명
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
}
