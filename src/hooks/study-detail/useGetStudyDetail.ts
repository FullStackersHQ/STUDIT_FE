import { useQuery } from '@tanstack/react-query';
import studyMainApi from '../../api/studyMainApi';
import { StudyOngoingType } from '../../types/interface';

export default function useGetStudyDetail(studyId: number) {
  const {
    data: studyDetail,
    isLoading: isDetailLoading,
    refetch: refetchDetail,
  } = useQuery<StudyOngoingType>({
    queryKey: ['getStudyDetail'],
    queryFn: () => studyMainApi.getStudyDetail(studyId),
  });
  return { studyDetail, isDetailLoading, refetchDetail };
}
