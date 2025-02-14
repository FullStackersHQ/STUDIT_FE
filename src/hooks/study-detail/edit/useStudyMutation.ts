import { useMutation } from '@tanstack/react-query';
import studyMainApi from '../../../api/studyMainApi';
import { StudyDetail } from '../../../types/interface';
import { useNavigate } from 'react-router-dom';

export default function useStudyMutation(editInfo: StudyDetail, studyId: number, refetchDetail: () => void) {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async () => await studyMainApi.updateStudyDetail(studyId, editInfo),
    onSuccess: () => {
      navigate(-1);
      refetchDetail();
    },
  });
  return { editStudy: mutation.mutate };
}
