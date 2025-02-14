import { useQuery } from '@tanstack/react-query';
import studyMainApi from '../../api/studyMainApi';

export default function useGetNotice(studyId: number, hasNotice: boolean) {
  const { data: notice, isLoading } = useQuery({
    queryKey: ['getNotice'],
    queryFn: () => studyMainApi.getNotice(studyId),
    enabled: hasNotice,
  });
  return { notice, isLoading };
}
