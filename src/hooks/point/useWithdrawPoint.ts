import { useMutation } from '@tanstack/react-query';
import pointApi from '../../api/pointApi';

export default function useWithdrawPoint(
  amount: number,
  refetchUserPoints: () => void,
  refetchAll: () => void,
  refetchWithdraw: () => void,
) {
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
