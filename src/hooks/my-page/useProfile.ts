import { useQuery } from '@tanstack/react-query';
import myPageApi from '../../api/myPageApi';

export default function useProfile(userId: number) {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    refetch: reloadProfile,
  } = useQuery({
    queryKey: ['getProfile', userId],
    queryFn: () => myPageApi.getProfile(userId),
  });

  return { userData, isUserDataLoading, reloadProfile };
}
