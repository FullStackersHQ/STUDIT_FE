import useProfile from './useProfile';
import useAverageStats from './useAverageStats';

export default function useMyPage() {
  const userId = 1;
  const { userData, isUserDataLoading } = useProfile(userId);
  const { averageStats, isAvgLoading } = useAverageStats(userId);

  return { userData, isUserDataLoading, averageStats, isAvgLoading, userId };
}
