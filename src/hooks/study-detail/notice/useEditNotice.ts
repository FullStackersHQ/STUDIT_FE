import { useMutation } from '@tanstack/react-query';
import studyMainApi from '../../../api/studyMainApi';

export default function useEditNotice({
  studyId,
  content,
  close,
  refetchNotice,
}: {
  studyId: number;
  content: string;
  close: () => void;
  refetchNotice: () => void;
}) {
  const mutation = useMutation({
    mutationFn: () => studyMainApi.editNotice(studyId, content),
    onSuccess: () => {
      refetchNotice();
      close();
    },
  });
  return { editNotice: mutation.mutate };
}
