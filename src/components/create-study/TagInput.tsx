import { UseFormReturn } from 'react-hook-form';
import { StudyFormData } from '../../pages/CreateStudyForm';
import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

type TitleProps = UseFormReturn<StudyFormData>;

export default function TagInput(form: TitleProps) {
  const { setValue } = form;
  const [tags, setTags] = useState<string[]>([]);

  const handleCreate = (inputValue: string) => {
    if (!tags.includes(inputValue)) {
      setTags((prev) => [...prev, inputValue]);
      setValue('tags', [...tags, inputValue]);
    }
  };

  const handleDelete = (tagToDelete: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div className="mt-5">
      <label className="font-medium" aria-label="스터디 태그">
        태그
      </label>
      <CreatableSelect
        aria-label="스터디 태그 입력 창"
        options={[]}
        isClearable
        onCreateOption={handleCreate}
        placeholder="enter키를 통해 연속입력이 가능합니다."
        className="w-full border-b border-black py-1 pl-2 text-sm"
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
