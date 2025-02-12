import { useMutation } from '@tanstack/react-query';
import studyApi from '../../../api/studyDefaultApi';
import { StudyDetail } from '../../../types/interface';
import { useNavigate } from 'react-router-dom';

export default function useStudyMutation(editInfo: StudyDetail, studyId: number) {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async () => await studyApi.updateStudyDetail(studyId, editInfo),
    onSuccess: () => navigate(-1),
  });
  return { editStudy: mutation.mutate };
}
