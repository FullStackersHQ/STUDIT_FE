import { useMutation } from '@tanstack/react-query';
import studyMainApi from '../../../api/studyMainApi';

export default function useDeleteNotice({
  studyId,
  close,
  refetchDetail,
}: {
  studyId: number;
  close: () => void;
  refetchDetail: () => void;
}) {
  const mutation = useMutation({
    mutationFn: () => studyMainApi.deleteNotice(studyId),
    onSuccess: () => {
      refetchDetail();
      close();
    },
  });
  return { deleteNotice: mutation.mutate };
}
