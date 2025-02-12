import { useMutation } from '@tanstack/react-query';
import { StudyRoomPutType } from '../../types/interface';
import { useNavigate } from 'react-router-dom';
import { recruitApi } from '../../api/recruitApi';

export default function useRecruitMutation(recruitId: number, editInfo: StudyRoomPutType) {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async () => await recruitApi.updateRecruitInfo(recruitId, editInfo),
    onSuccess: () => navigate(-1),
  });
  return { editRecruit: mutation.mutate };
}
