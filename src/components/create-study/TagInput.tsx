import { Control, Controller } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';
import { useCallback, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

export default function TagInput({ control }: { control: Control<StudyFormData> }) {
  const [tags, setTags] = useState<string[]>([]); // 상태 관리

  // 태그 생성 시 호출되는 함수
  const handleCreate = useCallback(
    (inputValue: string) => {
      if (!tags.includes(inputValue)) {
        const updatedTags = [...tags, inputValue];
        setTags(updatedTags); // 상태 업데이트
      }
    },
    [tags],
  );

  // 태그 삭제 시 호출되는 함수
  const handleDelete = useCallback(
    (tagToDelete: string) => {
      const updatedTags = tags.filter((tag) => tag !== tagToDelete);
      setTags(updatedTags); // 상태 업데이트
    },
    [tags],
  );

  return (
    <div>
      <label className="font-medium" aria-label="스터디 태그">
        태그
      </label>
      <Controller
        name="tags"
        control={control} // react-hook-form의 control을 사용
        render={({ field }) => (
          <CreatableSelect
            aria-label="스터디 태그 입력 창"
            options={[]} // 선택할 수 있는 옵션이 없으므로 빈 배열
            isClearable
            onCreateOption={handleCreate}
            placeholder="enter키를 통해 연속입력이 가능합니다."
            className="w-full border-b border-black py-1 pl-2 text-sm"
            onChange={(selected) => {
              // onChange 시 react-hook-form의 값을 업데이트
              console.log(selected);
              const newTags = selected ? selected.map((option: { label: string; value: string }) => option.value) : [];
              field.onChange(newTags);
              setTags(newTags); // 상태 업데이트
            }}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                minHeight: 'auto',
              }),
              valueContainer: (base) => ({
                ...base,
                padding: 0,
              }),
              indicatorsContainer: () => ({
                display: 'none',
              }),
              menu: () => ({
                display: 'none',
              }),
            }}
          />
        )}
      />
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="group text-main bg-sub hover:text-main-hover hover:bg-sub-hover flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium transition-colors"
          >
            #{tag}
            <button
              type="button"
              className="text-dark-gray group-hover:text-gray text-xs transition-colors"
              onClick={() => handleDelete(tag)}
              aria-label="태그 제거"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
