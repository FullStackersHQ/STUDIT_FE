import { useMutation } from '@tanstack/react-query';
import myPageApi from '../../api/myPageApi';

export default function useModifyNickName(
  prevNickName: string,
  currentNickName: string,
  setError: (error: string) => void,
) {
  const mutation = useMutation({
    mutationFn: async () => {
      if (!prevNickName || prevNickName === currentNickName) return;
      await myPageApi.modifyNickName(currentNickName);
    },
    onError: () => setError('중복된 닉네임이에요'),
  });
  return { modifyNickName: mutation.mutate };
}
