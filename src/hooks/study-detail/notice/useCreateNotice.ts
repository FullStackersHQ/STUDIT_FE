import { useMutation } from '@tanstack/react-query';
import studyMainApi from '../../../api/studyMainApi';
import useGetStudyDetail from '../useGetStudyDetail';

export default function useCreateNotice({
  studyId,
  content,
  close,
}: {
  studyId: number;
  content: string;
  close: () => void;
}) {
  const { refetchDetail } = useGetStudyDetail(studyId);
  const mutation = useMutation({
    mutationFn: () => studyMainApi.createNotice(studyId, content),
    onSuccess: () => {
      refetchDetail();
      close();
    },
  });
  return { createNotice: mutation.mutate };
}
