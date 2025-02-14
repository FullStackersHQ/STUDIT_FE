import { useQuery } from '@tanstack/react-query';
import studyApi from '../../api/studyMainApi';
import { StudyOngoingType } from '../../types/interface';

export default function useGetStudyDetail(studyId: number) {
  const {
    data: studyDetail,
    isLoading: isDetailLoading,
    refetch: refetchDetail,
  } = useQuery<StudyOngoingType>({
    queryKey: ['getStudyDetail'],
    queryFn: () => studyApi.getStudyDetail(studyId),
  });
  return { studyDetail, isDetailLoading, refetchDetail };
}
