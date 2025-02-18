import { useMutation } from '@tanstack/react-query';
import pointApi from '../../api/pointApi';
import useGetPointHistory from '../point/useGetPointHistory';
import useGetUserPoints from '../point/useGetUserPoints';
import useProfile from './useProfile';

export default function useChargePoint(amount: number, userId: number) {
  const { reloadProfile } = useProfile(userId);
  const { refetchUserPoints } = useGetUserPoints();
  const { refetch: refetchAll } = useGetPointHistory('전체');
  const { refetch: refetchCharge } = useGetPointHistory('충전');

  const mutation = useMutation({
    mutationFn: async () => {
      await pointApi.chargePoint(amount);
    },
    onSuccess: () => {
      reloadProfile();
      refetchUserPoints();
      refetchAll();
      refetchCharge();
    },
  });
  return { chargePoint: mutation.mutate };
}
