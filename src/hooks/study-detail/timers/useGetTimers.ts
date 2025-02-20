import { useQuery } from '@tanstack/react-query';
import studyMainApi from '../../../api/studyMainApi';

export default function useGetTimers(studyId: number) {
  const {
    data: timers,
    isLoading: isTimerLoading,
    refetch: refetchTimers,
  } = useQuery({
    queryKey: ['getTimers'],
    queryFn: () => studyMainApi.getTimers(studyId),
  });
  return { timers, isTimerLoading, refetchTimers };
}
