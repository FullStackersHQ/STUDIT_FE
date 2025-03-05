import HeaderWithBack from '../components/HeaderWithBack';
import Button from '../components/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import useToastStore from '../store/useToastStore';
import TitleInput from '../components/create-study/TitleInput';
import DescriptionInput from '../components/create-study/DescriptionInput';
import PointInput from '../components/create-study/PointInput';
import StudyStartInput from '../components/create-study/StudyStartInput';
import DurationInput from '../components/create-study/DurationInput';
import GoalTime from '../components/create-study/GoalTime';
import MemberSelect from '../components/create-study/MemberSelect';
import CategoryRadio from '../components/create-study/CategoryRadio';
import TagInput from '../components/create-study/TagInput';

const studySchema = z.object({
  title: z.string().min(1, { message: '제목은 필수입니다.' }).max(14, { message: '최대 14자까지 입력 가능합니다.' }),
  description: z.string().min(1, { message: '내용은 필수입니다.' }),
  deposit: z
    .number()
    .min(1000, { message: '1,000보다 작은 값은 불가능합니다.' })
    .max(50000, { message: '50,000보다 큰 값은 불가능합니다.' }),
  goalTime: z.number().min(1, { message: '최소 1시간 이상 설정해주세요.' }),
  studyStartDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}T\d{2}$/, { message: '올바른 날짜 형식이 아닙니다. (YYYY-MM-DDTHH)' }),
  hour: z.number().min(0, { message: '0시 이상 입력해주세요.' }).max(23, { message: '23시 이하로 입력해주세요.' }),
  duration: z.number().min(1, { message: '기간은 필수입니다.' }).max(35, { message: '35보다 큰 값은 불가능합니다.' }),
  maxMembers: z.number().min(2).max(10),
  category: z.string(),
  tags: z.array(z.string()).max(5, { message: '최대 5개의 태그만 입력 가능합니다.' }),
});

export type StudyFormData = z.infer<typeof studySchema>;

export default function CreateStudyForm(): JSX.Element {
  const methods = useForm<StudyFormData>({
    resolver: zodResolver(studySchema),
    mode: 'all',
    defaultValues: {
      title: '',
      description: '',
      deposit: 1000,
      goalTime: 1,
      studyStartDate: new Date().toISOString().split('T')[0],
      hour: 9,
      duration: 1,
      maxMembers: 2,
      category: '공무원',
      tags: [],
    },
  });

  const { watch, handleSubmit } = methods;
  const { showToast } = useToastStore();

  const handleOnClickBtn = async () => {
    console.log('handleOnClickBtn', watch());
    showToast('스터디가 성공적으로 생성됐어요 !', true);
  };

  return (
    <>
      <HeaderWithBack title={'스터디 생성하기'} isStudyPage={false} />
      <form
        onSubmit={handleSubmit(handleOnClickBtn)}
        className="overflow-y-auto px-4"
        style={{ height: `calc(100vh - 52px - 48px - 50px)` }}
      >
        <TitleInput {...methods} />
        <DescriptionInput {...methods} />
        <PointInput {...methods} />
        <StudyStartInput {...methods} />
        <DurationInput {...methods} />
        <GoalTime {...methods} />
        <MemberSelect {...methods} />
        <CategoryRadio {...methods} />
        <TagInput {...methods} />
      </form>
      <div className="fixed bottom-8 left-1/2 w-full max-w-[768px] -translate-x-[50%] px-4">
        <Button
          text={'생성하기'}
          onClick={handleOnClickBtn}
          ariaLabel={'생성하기 버튼'}
          disabled={!methods.formState.isValid}
        />
      </div>
    </>
  );
}
