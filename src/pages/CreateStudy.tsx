import { useState } from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import { CATEGORY } from '../constants/constants';
import CreatableSelect from 'react-select/creatable';
import Button from '../components/Button';
import { MultiValue } from 'react-select';
import Calendar from '../components/create-study/Calendar';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import client from '../utils/client';
import { useNavigate } from 'react-router-dom';

const studySchema = z.object({
  title: z.string().max(10, '최대 10자까지 입력 가능합니다.'),
  description: z.string(),
  deposit: z.string().min(1000, '1000보다 작은 값은 불가능합니다.').max(50000, '50000보다 큰 값은 불가능합니다.'),
  goal_time: z.string().min(1, '최소 1시간 이상 설정해주세요.'),
  studyStartDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, '올바른 날짜 형식이 아닙니다. (yyyy-mm-dd)')
    .refine((date) => !isNaN(new Date(date).getTime()), '유효한 날짜가 아닙니다.'),
  recruitEndDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, '올바른 날짜 형식이 아닙니다. (yyyy-mm-dd)')
    .refine((date) => !isNaN(new Date(date).getTime()), '유효한 날짜가 아닙니다.'),
  duration: z.number().min(1).max(35),
  max_members: z.number().min(2).max(10),
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
      description: '',
      deposit: '1000',
      goal_time: '1',
      studyStartDate: new Date().toISOString().split('T')[0],
      recruitEndDate: '',
      duration: 1,
      max_members: 2,
      category: '',
      tags: '',
    },
  });
  const [tags, setTags] = useState<string>('');
  const startDate = watch('studyStartDate');
  const duration = watch('duration');
  const formValues = watch();
  const navigate = useNavigate();

  const handleOnClickBtn = async () => {
    const { data: response } = await client.post('/api/recruits', {
      title: formValues.title,
      description: formValues.description,
      deposit: formValues.deposit,
      goal_time: formValues.goal_time,
      study_start_at: formValues.studyStartDate,
      recruit_end_at: formValues.recruitEndDate,
      study_end_at: endDate?.toISOString().split('T')[0],
      max_members: formValues.max_members,
      category: formValues.category,
      tags: formValues.tags.split(' '),
    });
    if (response.status === 200) navigate('/', { replace: true });
  };

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

  const handleDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.target.value);
    if (value < 1000) value = 1000;
    if (value > 50000) value = 50000;
    setValue('deposit', String(value));
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.target.value);
    if (value < 1) value = 1;
    if (value > 35) value = 35;
    setValue('deposit', String(value));
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
            {...register('description')}
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
            {...register('deposit', { valueAsNumber: true })}
            onChange={handleDepositChange}
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
            {...register('goal_time', { valueAsNumber: true })}
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
          <select {...register('max_members')} className="border-light-gray mt-1 w-12 border text-center text-sm">
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
      <div className="fixed bottom-8 left-1/2 w-full max-w-[768px] -translate-x-[50%] px-4">
        <Button text={'생성하기'} onClick={handleOnClickBtn} ariaLabel={'생성하기 버튼'} />
      </div>
    </>
  );
}
