import { useMutation } from '@tanstack/react-query';
import studyMainApi from '../../api/studyMainApi';

export default function useEditNotice({
  studyId,
  content,
  close,
}: {
  studyId: number;
  content: string;
  close: () => void;
}) {
  const mutation = useMutation({
    mutationFn: () => studyMainApi.editNotice(studyId, content),
    onSuccess: () => close(),
  });
  return { editNotice: mutation.mutate };
}
