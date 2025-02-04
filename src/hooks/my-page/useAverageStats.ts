import { useQuery } from '@tanstack/react-query';
import myPageApi from '../../api/myPageApi';

export default function useAverageStats(userId: number) {
  const { data: averageStats, isLoading: isAvgLoading } = useQuery({
    queryKey: ['getAvgStats', userId],
    queryFn: () => myPageApi.getAvgStats(userId),
  });
  return { averageStats, isAvgLoading };
}
