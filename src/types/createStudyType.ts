import { z } from 'zod';
import { UseFormRegister, Control } from 'react-hook-form';

export const studySchema = z.object({
  title: z.string().max(14, '최대 14자까지 입력 가능합니다.'),
  content: z.string(),
  points: z.number().min(1000).max(50000),
  weeklyGoal: z.number().min(1, '최소 1시간 이상 설정해주세요.'),
  studyStartDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, '올바른 날짜 형식이 아닙니다.'),
  recruitEndDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, '올바른 날짜 형식이 아닙니다.'),
  duration: z.number().min(1).max(35),
  members: z.number().min(2).max(10),
  category: z.string(),
  tags: z.string(),
});

export type StudyFormData = z.infer<typeof studySchema>;

export interface InputFieldProps {
  label: string;
  name: keyof StudyFormData;
  register: UseFormRegister<StudyFormData>;
  value?: string | number;
  onChange?: (name: keyof StudyFormData, value: string | number) => void;
  isTextarea?: boolean;
  disabled?: boolean;
}

export interface NumberInputFieldProps extends InputFieldProps {}

export interface SelectFieldProps {
  label: string;
  name: keyof StudyFormData;
  register: UseFormRegister<StudyFormData>;
  options: { value: number; label: string }[];
}

export interface CalendarFieldProps {
  label: string;
  name: keyof StudyFormData;
  control: Control<StudyFormData>;
}
