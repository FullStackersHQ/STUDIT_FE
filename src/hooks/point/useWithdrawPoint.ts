import { useMutation } from '@tanstack/react-query';
import pointApi from '../../api/pointApi';
import useGetUserPoints from './useGetUserPoints';
import useGetPointHistory from './useGetPointHistory';

export default function useWithdrawPoint(amount: number) {
  const { refetchUserPoints } = useGetUserPoints();
  const { refetch: refetchAll } = useGetPointHistory('전체');
  const { refetch: refetchWithdraw } = useGetPointHistory('출금');
  const mutation = useMutation({
    mutationFn: async () => {
      await pointApi.withdrawPoint(amount);
    },
    onSuccess: () => {
      refetchUserPoints();
      refetchAll();
      refetchWithdraw();
    },
  });
  return { withdrawPoint: mutation.mutate };
}
