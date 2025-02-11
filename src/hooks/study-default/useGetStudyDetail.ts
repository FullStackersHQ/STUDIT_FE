import { useQuery } from '@tanstack/react-query';
import studyApi from '../../api/studyApi';

export default function useGetStudyDetail(studyId: number) {
  const { data: studyDetail, isLoading } = useQuery({
    queryKey: ['getStudyDetail'],
    queryFn: () => studyApi.getStudyDetail(studyId),
  });
  return { studyDetail, isLoading };
}
