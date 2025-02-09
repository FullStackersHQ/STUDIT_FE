import { useQuery } from '@tanstack/react-query';
import pointApi from '../../api/pointApi';

export default function useGetUserPoints() {
  const { data: userPoints, isLoading } = useQuery({
    queryKey: ['getUserPoints'],
    queryFn: () => pointApi.getUserPoints(),
  });
  return { userPoints, isLoading };
}
