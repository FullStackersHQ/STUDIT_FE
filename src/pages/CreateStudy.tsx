import { useState } from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import { CATEGORY } from '../constants/CATEGORY';
import CreatableSelect from 'react-select/creatable';
import Button from '../components/Button';
import { MultiValue } from 'react-select';
import Calendar from '../components/create-study/Calendar';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const studySchema = z.object({
  title: z.string().max(14, '최대 14자까지 입력 가능합니다.'),
  content: z.string(),
  points: z.number().min(1000).max(50000),
  weeklyGoal: z.number().min(1, '최소 1시간 이상 설정해주세요.'),
  studyStartDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, '올바른 날짜 형식이 아닙니다. (yyyy-mm-dd)')
    .refine((date) => !isNaN(new Date(date).getTime()), '유효한 날짜가 아닙니다.'),
  recruitEndDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, '올바른 날짜 형식이 아닙니다. (yyyy-mm-dd)')
    .refine((date) => !isNaN(new Date(date).getTime()), '유효한 날짜가 아닙니다.'),
  duration: z.number().min(1).max(35),
  members: z.number().min(2).max(10),
  category: z.string(),
  tags: z.string(),
});

type StudyFormData = z.infer<typeof studySchema>;

export default function CreateStudy(): JSX.Element {
  const action = { icon: undefined, ariaLabel: '', onClick: () => {} };
  const { register, control, watch, setValue } = useForm<StudyFormData>({
    resolver: zodResolver(studySchema),
    defaultValues: {
      title: '',
      content: '',
      points: 1000,
      weeklyGoal: 1,
      studyStartDate: new Date().toISOString().split('T')[0],
      recruitEndDate: '',
      duration: 1,
      members: 2,
      category: '',
      tags: '',
    },
  });
  const [tags, setTags] = useState<string>('');
  const startDate = watch('studyStartDate');
  const duration = watch('duration');
  const formValues = watch();

  const handleOnItemAdded = (newValue: MultiValue<{ label: string; value: string }>) => {
    const newTags = newValue
      .map((item) => item.value)
      .join(' ')
      .trim();
    setTags(newTags);
    setValue('tags', newTags);
  };

  const endDate = startDate && duration ? new Date(startDate) : null;
  if (endDate) {
    endDate.setDate(endDate.getDate() + duration * 7);
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 14) {
      setValue('title', event.target.value);
    }
  };

  const handlePointsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.target.value);
    if (value < 1000) value = 1000;
    if (value > 50000) value = 50000;
    setValue('points', value);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.target.value);
    if (value < 1) value = 1;
    if (value > 35) value = 35;
    setValue('points', value);
  };

  return (
    <>
      <HeaderWithBack title={'스터디 생성하기'} action={action} isStudyPage={false} />
      <div className="overflow-y-auto px-4" style={{ height: `calc(100vh - 52px - 48px - 50px)` }}>
        <div className="mt-5">
          <label className="align-center flex text-[16px] font-bold" aria-label="스터디 제목">
            <p className="text-deduct">*</p>제목
          </label>
          <input
            aria-label="스터디 제목 입력창"
            {...register('title')}
            value={watch('title')}
            onChange={handleTitleChange}
            className="border-light-gray mt-1 w-full rounded-[10px] border px-2 py-1 text-sm"
          />
        </div>
        <div className="mt-5">
          <label className="align-center flex text-[16px] font-bold" aria-label="스터디 내용">
            <p className="text-deduct">*</p>내용
          </label>
          <textarea
            aria-label="스터디 내용 입력"
            {...register('content')}
            className="border-light-gray mt-1 h-50 w-full rounded-[10px] border px-2 py-1 text-sm"
          />
        </div>
        <div className="mt-5 flex">
          <label className="mr-2 flex text-[16px] font-bold" aria-label="스터디 참여 포인트">
            <p className="text-deduct">*</p>참여 포인트
          </label>
          <input
            type="number"
            aria-label="스터디 참여 포인트 입력창"
            {...register('points', { valueAsNumber: true })}
            onChange={handlePointsChange}
            className="border-light-gray mt-1 w-12 border-b text-center text-sm"
          />
          점
        </div>
        <div className="mt-5 flex">
          <label className="mr-2 flex text-[16px] font-bold" aria-label="스터디 주당 목표 시간">
            <p className="text-deduct">*</p>주당 목표 시간
          </label>
          <input
            type="number"
            aria-label="스터디 주당 목표 시간 입력창"
            {...register('weeklyGoal', { valueAsNumber: true })}
            onChange={handleDurationChange}
            className="border-light-gray mt-1 w-12 border-b text-center text-sm"
          />
          시간
        </div>
        <div className="mt-5">
          <label className="mr-2 flex text-[16px] font-bold" aria-label="스터디 시작 날짜">
            <p className="text-deduct">*</p>스터디 시작 날짜
          </label>
          <Controller
            aria-label="스터디 시작 날짜 선택창"
            control={control}
            name="studyStartDate"
            render={({ field }) => <Calendar date={field.value} setDate={field.onChange} />}
          />
        </div>
        <div className="mt-5 flex">
          <label className="mr-2 flex text-[16px] font-bold" aria-label="스터디 진행 기간">
            <p className="text-deduct">*</p>스터디 진행 기간(주)
          </label>
          <input
            type="number"
            aria-label="스터디 진행 기간 입력 창 - 주단위"
            {...register('duration', { valueAsNumber: true })}
            className="border-light-gray mt-1 w-12 border-b text-center text-sm"
          />
          주
        </div>
        <div className="mt-5 flex">
          <label className="mr-2 flex text-[16px] font-bold">
            <p className="text-deduct">*</p>스터디 종료 날짜
          </label>
          <input
            type="text"
            value={endDate ? endDate.toISOString().split('T')[0] : ''}
            className="border-light-gray mt-1 w-32 border-b text-center text-sm"
            disabled
          />
        </div>
        <div className="mt-5">
          <label className="mr-2 flex text-[16px] font-bold" aria-label="스터디 모집 기간">
            <p className="text-deduct">*</p>스터디 모집 기간
          </label>
          <Controller
            aria-label="스터디 모집 기간 선택 창"
            control={control}
            name="recruitEndDate"
            render={({ field }) => <Calendar date={field.value} setDate={field.onChange} />}
          />
        </div>
        <div className="mt-5 flex">
          <h2 className="mr-2 flex text-[16px] font-bold">
            <p className="text-deduct">*</p>모집 인원
          </h2>
          <select {...register('members')} className="border-light-gray mt-1 w-12 border text-center text-sm">
            {[...Array(9)].map((_, i) => (
              <option key={i} value={i + 2}>
                {i + 2}명
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5">
          <h2 className="mr-2 flex text-[16px] font-bold" aria-label="스터디 카테고리">
            <p className="text-deduct">*</p>카테고리
          </h2>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {CATEGORY.map((category) => (
              <label key={category} className="flex items-center gap-1">
                <input type="radio" value={category} {...register('category')} />
                <span className="text-[12px] sm:text-[16px] md:text-[18px]">{category}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <label className="mr-2 flex text-[16px] font-bold" aria-label="스터디 태그">
            태그
          </label>
          <CreatableSelect
            aria-label="스터디 태그 입력 창"
            isMulti
            value={tags.split(' ').map((city) => ({
              label: city,
              value: city,
            }))}
            onChange={handleOnItemAdded}
            placeholder="enter키를 통해 연속입력이 가능합니다."
            className="border-light-gray mt-1 w-full border-b text-center text-sm"
          />
        </div>
      </div>
      <div className="fixed bottom-8 left-0 w-full px-4">
        <Button
          text={'생성하기'}
          onClick={() => {
            console.log(formValues);
          }}
          ariaLabel={'생성하기 버튼'}
        />
      </div>
    </>
  );
}
